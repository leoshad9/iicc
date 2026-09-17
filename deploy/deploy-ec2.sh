#!/usr/bin/env bash
set -euo pipefail

IICC_DIR="/var/www/iicc"
NGINX_CONF="/etc/nginx/conf.d/iicc.conf"

echo "==> Stopping Nginx"
sudo systemctl stop nginx 2>/dev/null || true

echo "==> Installing new site"
sudo mkdir -p "$IICC_DIR"
sudo cp -r /tmp/iicc-dist/* "$IICC_DIR/"
sudo chown -R nginx:nginx "$IICC_DIR"

echo "==> Setting up Nginx config"
if [ ! -f "$NGINX_CONF" ] && [ ! -f "$NGINX_CONF.bak" ]; then
  echo "  No existing Nginx config found, creating one"
  sudo tee "$NGINX_CONF" > /dev/null <<'NGINX'
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name _;

    root /var/www/iicc;
    index index.html;

    ssl_certificate /etc/letsencrypt/live/iiccdelhi.duckdns.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/iiccdelhi.duckdns.org/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;

    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Strict-Transport-Security "max-age=31536000" always;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
NGINX
  echo "  Config created (requires valid SSL certs at /etc/letsencrypt/live/iiccdelhi.duckdns.org/)"
echo "  To obtain certs, run:"
echo "    sudo certbot certonly --authenticator dns-duckdns \\"
echo "      --dns-duckdns-credentials /opt/medops/.duckdns.credentials \\"
echo "      -d iiccdelhi.duckdns.org"
fi

if [ -f "$NGINX_CONF.bak" ] && [ ! -f "$NGINX_CONF" ]; then
  sudo cp "$NGINX_CONF.bak" "$NGINX_CONF"
fi

echo "==> Starting Nginx"
sudo systemctl start nginx
sudo systemctl enable nginx 2>/dev/null || true

echo "==> Cleanup"
rm -rf /tmp/iicc-dist

echo "==> Verifying"
sleep 2
if curl -sf -o /dev/null --max-time 5 http://127.0.0.1/; then
  echo "==> Deployment successful"
else
  echo "[WARN] Local health check failed - check Nginx logs"
fi

echo "==> Done"