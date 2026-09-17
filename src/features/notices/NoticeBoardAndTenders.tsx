import React, { useState } from 'react';
import { 
  Bell, 
  FileText, 
  Download, 
  Calendar, 
  Clock, 
  AlertCircle, 
  Search, 
  CheckCircle2, 
  Building,
  Briefcase,
  ArrowDownToLine,
  Filter,
  Mail,
  ExternalLink
} from 'lucide-react';
import { NoticeItem, TenderItem } from '../../shared/types';
import { noticesData, tendersData } from '../../data/mockData';
import { translations } from '../../data/translations';
import { useTranslation } from 'react-i18next';

interface NoticeBoardAndTendersProps {
}

export const NoticeBoardAndTenders: React.FC<NoticeBoardAndTendersProps> = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const [activeTab, setActiveTab] = useState<'notices' | 'tenders'>('notices');
  const [noticeSearch, setNoticeSearch] = useState('');
  const [tenderSearch, setTenderSearch] = useState('');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const t = translations[currentLang];

  const handleDownload = (filename: string) => {
    setDownloadToast(`Downloading document: ${filename}`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3000);
  };

  const filteredNotices = noticesData.filter(n =>
    n.title.toLowerCase().includes(noticeSearch.toLowerCase()) ||
    n.summary.toLowerCase().includes(noticeSearch.toLowerCase()) ||
    n.refNo.toLowerCase().includes(noticeSearch.toLowerCase())
  );

  const filteredTenders = tendersData.filter(t =>
    t.title.toLowerCase().includes(tenderSearch.toLowerCase()) ||
    t.tenderNo.toLowerCase().includes(tenderSearch.toLowerCase()) ||
    t.department.toLowerCase().includes(tenderSearch.toLowerCase())
  );

  return (
    <section className="py-16 bg-white border-b border-stone-200" id="notices">
      <div className="max-w-7xl mx-auto px-4">
        {/* Toast */}
        {downloadToast && (
          <div className="fixed bottom-6 right-6 bg-blue-950 text-amber-200 px-4 py-2.5 rounded-lg shadow-xl border border-amber-500/40 text-xs flex items-center gap-2 z-50 animate-bounce">
            <ArrowDownToLine className="w-4 h-4 text-amber-400" />
            <span>{downloadToast}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
              <Bell className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'ur' ? 'اطلاعات، سرکلرز اور ٹینڈرز' : 'Public Announcements & Procurement'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
              {currentLang === 'ur' ? 'سرکاری نوٹس بورڈ اور ادارہ جاتی ٹینڈرز' : 'Official Notice Board & Vendor Tenders'}
            </h2>
          </div>

          <div className="flex bg-stone-100 p-1 rounded-lg border border-stone-200 self-start md:self-auto" id="tenders">
            <button
              id="tab-notices-btn"
              onClick={() => setActiveTab('notices')}
              className={`px-4 py-2.5 text-xs font-bold rounded-md transition flex items-center gap-1.5 min-h-[44px] ${
                activeTab === 'notices' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Notice Board ({noticesData.length})</span>
            </button>
            <button
              id="tab-tenders-btn"
              onClick={() => setActiveTab('tenders')}
              className={`px-4 py-2.5 text-xs font-bold rounded-md transition flex items-center gap-1.5 min-h-[44px] ${
                activeTab === 'tenders' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Tenders & RFPs ({tendersData.length})</span>
            </button>
          </div>
        </div>

        {/* ANNOUNCEMENTS — Side by Side */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <a
            href="mailto:account@iiccentre.com?subject=Transaction%20ID%20Reconciliation"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-xl border border-amber-300 bg-amber-50/40 hover:bg-amber-50/70 hover:border-amber-400 transition cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Notice to Members
              </span>
              <span className="text-[10px] font-mono text-stone-400">August 11, 2026</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900 mb-2">Transaction ID Verification Required</h3>
            <p className="text-[11px] text-stone-600 leading-relaxed mb-3">
              All members are requested to email their Transaction IDs to help reconcile untracked transactions and issue receipts.
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-blue-800 group-hover:text-blue-900">
              <Mail className="w-3.5 h-3.5" />
              <span>account@iiccentre.com</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>

          <a
            href="https://www.iiccentre.com/admin/images/notice/1756708688Security%20Guard.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-xl border border-red-300 bg-red-50/40 hover:bg-red-50/70 hover:border-red-400 transition cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Tender Notice
              </span>
              <span className="text-[10px] font-mono text-stone-400">September 01, 2026</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900 mb-2">Security Guard Services — IICC/Security/2026-27/2</h3>
            <p className="text-[11px] text-stone-600 leading-relaxed mb-3">
              PSARA-compliant private security agencies invited for 9 male guards and 1 male night-shift supervisor for the IICC campus.
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-red-800 group-hover:text-red-900">
              <Download className="w-3.5 h-3.5" />
              <span>Download Tender Notice PDF</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* 1. NOTICES BOARD */}
        {activeTab === 'notices' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 bg-stone-50 p-3 rounded-xl border border-stone-200">
              <div className="relative flex-1 max-w-md">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={noticeSearch}
                  onChange={(e) => setNoticeSearch(e.target.value)}
                  placeholder="Search notices by keyword or reference number..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-stone-200 bg-white"
                />
              </div>
              <div className="text-xs text-stone-500 hidden sm:block">
                All notices authenticated by Secretary, IICC
              </div>
            </div>

            <div className="space-y-3">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className={`bg-white rounded-xl border p-5 shadow-xs transition hover:border-blue-300 ${
                    notice.isImportant ? 'border-amber-300 bg-amber-50/20' : 'border-stone-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        notice.isImportant ? 'bg-amber-500 text-blue-950 font-bold' : 'bg-stone-100 text-stone-700'
                      }`}>
                        {notice.category}
                      </span>
                      <span className="text-xs font-mono text-stone-500">{notice.refNo}</span>
                    </div>
                    <div className="text-xs text-stone-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{notice.date}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-base font-bold font-serif-title text-stone-900">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {notice.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-stone-400">File size: {notice.fileSize || '750 KB'} · PDF</span>
                    <button
                      onClick={() => handleDownload(`${notice.refNo.replace(/\//g, '_')}.pdf`)}
                      className="px-3 py-1 rounded-md bg-stone-100 hover:bg-[#1e3a8a] hover:text-amber-200 text-stone-700 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Circular PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. TENDERS & RFPs */}
        {activeTab === 'tenders' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 bg-stone-50 p-3 rounded-xl border border-stone-200">
              <div className="relative flex-1 max-w-md">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={tenderSearch}
                  onChange={(e) => setTenderSearch(e.target.value)}
                  placeholder="Filter tenders by department, work description..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-stone-200 bg-white"
                />
              </div>
              <div className="text-xs text-stone-500 hidden sm:block">
                Compliant with General Financial Rules & Institutional Transparency
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold uppercase text-[10px] tracking-wider">
                    <th className="p-3.5">Tender Ref No</th>
                    <th className="p-3.5">Scope of Work & Department</th>
                    <th className="p-3.5">Submission Deadline</th>
                    <th className="p-3.5">Estimated Cost / EMD</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">RFP Document</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 bg-white">
                  {filteredTenders.map((tender) => (
                    <tr key={tender.id} className="hover:bg-stone-50/70 transition">
                      <td className="p-3.5 font-mono font-bold text-[#1e3a8a]">
                        {tender.tenderNo}
                        <div className="text-[10px] text-stone-400 font-sans font-normal">Published: {tender.publishDate}</div>
                      </td>
                      <td className="p-3.5 max-w-xs">
                        <div className="font-bold text-stone-900">{tender.title}</div>
                        <div className="text-[11px] text-stone-500 mt-0.5">{tender.department}</div>
                      </td>
                      <td className="p-3.5 text-stone-700">
                        <div className="font-semibold text-red-700">{tender.closingDate}</div>
                        <div className="text-[10px] text-stone-400">Electronic submission</div>
                      </td>
                      <td className="p-3.5 text-stone-700">
                        <div className="font-semibold">{tender.estimatedCost}</div>
                        <div className="text-[10px] text-stone-500">EMD: {tender.emdAmount}</div>
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          tender.status === 'Active'
                            ? 'bg-blue-100 text-blue-800'
                            : tender.status === 'Under Evaluation'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-stone-100 text-stone-600'
                        }`}>
                          {tender.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => {
                            if (tender.documentUrl) {
                              window.open(tender.documentUrl, '_blank');
                            }
                            handleDownload(`NIT_${tender.tenderNo.replace(/\//g, '_')}.pdf`);
                          }}
                          className="px-2.5 py-1.5 rounded bg-blue-50 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-amber-200 text-xs font-bold transition inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          <span>NIT & RFP</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Vendors may submit sealed bids at Administrative Block, 87-88 Lodhi Road, New Delhi or email to tenders@iiccentre.com</span>
              <span className="font-bold text-blue-900">Procurement Cell: 011-43535353</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
