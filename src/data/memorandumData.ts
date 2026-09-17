export interface MemorandumClause {
  title: string;
  body: string;
}

export interface Signatory {
  name: string;
  occupation: string;
}

export interface CouncilMember {
  name: string;
  designation: string;
}

export const memorandumMeta = {
  name: 'INDIA ISLAMIC CULTURAL CENTRE',
  registeredOffice:
    'The registered office of the Society shall be situated in the Union Territory of Delhi and at present it is at 87-88, Lodhi Road, New Delhi - 110003.',
  registration:
    'We, the undersigned, are desirous of forming a society namely "India Islamic Cultural Centre" under the Societies Registration Act XXI of 1860 (Punjab Amendment Act of 1957) as extended to the Union Territory of Delhi, in pursuance of this Memorandum of the Society.',
};

export const memorandumObjectives: string[] = [
  'To promote mutual understanding and tolerance among the diverse citizens of India.',
  'To remove misunderstanding about Islam and its teachings.',
  'To promote an awareness of the ethos of Islamic Culture.',
  'To assist in the creation of an ethical society based on tolerance, universal brotherhood, love and charity.',
  "To promote mutual understanding, appreciation and amity between the people of India and those of the Islamic world, through a study of each other's past and present civilization and a mutual exchange of knowledge and information relating thereto, and by providing facilities that would lead to a fruitful interaction between them and an appreciation of each other's contribution to world civilization.",
];

export const memorandumEndeavours: MemorandumClause[] = [
  {
    title: 'Studies & Research',
    body: 'Undertake, organize and facilitate studies, symposia, lectures and research on a comparative basis of the arts, culture and traditional life styles of Islamic peoples in other parts of the world, and spread knowledge and appreciation thereof among the people of India as a whole.',
  },
  {
    title: 'Knowledge & Career Development',
    body: 'Promote the development of knowledge and skills in the contemporary arts and sciences and technology by offering career guidance and instructions to young men and women, and organize cultural and educational exchanges of scholars and students.',
  },
  {
    title: 'Community Advancement',
    body: 'Promote economic, educational, cultural and social advancement of the Muslim community in India, so that they, with their fellow countrymen, contribute effectively in making India a great society.',
  },
  {
    title: 'Publications',
    body: 'Undertake and promote the publication of newsletters, journals, books and research papers for the exposition of cultural patterns and values prevailing in different parts of the world.',
  },
  {
    title: 'Library & Research Centres',
    body: 'Establish and maintain a library and information service and research centres to promote the objectives of the Society.',
  },
  {
    title: 'Regional Centres',
    body: 'Constitute or cause to constitute regional centre(s) in India and abroad to promote the objectives of the Society; no part of the income or corpus of the Society will be applied to any purpose outside India without the prior approval of the Central Board of Direct Taxes, Ministry of Finance.',
  },
  {
    title: 'Cooperation with Institutions',
    body: 'Cooperate with other institutions and interested bodies for the purposes of helping the cause of promoting greater understanding among peoples of different cultures in India and abroad.',
  },
  {
    title: 'Residential Accommodation',
    body: 'Organize and maintain, on the basis of no-profit no-loss as far as possible, limited residential accommodation with cultural and educational amenities for the members of the Society in connection with their participation in its activities.',
  },
  {
    title: 'Board of Trustees',
    body: 'Establish for the management and administration of all properties, money, assets and activities of the Society a Board of Trustees consisting of eleven persons, seven of whom shall be elected for a term of five years by the General Body of Life Members and two nominees of the Government of India.',
  },
  {
    title: 'Funds & Donations',
    body: 'Issue appeals and applications for money and funds for furtherance of its objectives, and accept gifts, donations and subscriptions of cash and securities and of any property, either movable or immovable.',
  },
  {
    title: 'Acquisition of Property',
    body: 'Purchase or otherwise acquire, or take on lease or hire, in the Union Territory of Delhi or outside, temporarily or permanently, any movable or immovable property necessary or convenient for the furtherance of the objects of the Society.',
  },
  {
    title: 'Investment of Funds',
    body: 'Invest and deal with the funds and money of the Society and vary, alter and dispose of such investments from time to time; no investment shall be made in any form or mode other than those specified in Section 13(5) of the Income Tax Act, or any other amendment therein, from time to time.',
  },
  {
    title: 'Transfer of Property',
    body: 'Sell, mortgage, lease, exchange and otherwise transfer or dispose of or deal with all or any property, material, movable or immovable, of the Society for the furtherance of the objectives of the Society on such terms and conditions as may be decided by the Board of Trustees from time to time according to necessity.',
  },
  {
    title: 'Buildings & Works',
    body: 'Construct, maintain, alter, improve or develop such buildings or works as may be necessary or convenient for the purposes of the Society.',
  },
  {
    title: 'Endowments & Trust Funds',
    body: 'Undertake and accept the management of any endowment or trust funds or donations with objects similar to the objectives of the Society.',
  },
  {
    title: 'Benevolent Fund',
    body: 'Establish a benevolent fund for the benefit of the employees of the Society.',
  },
  {
    title: 'Prizes & Scholarships',
    body: 'Offer prizes and grant scholarships and stipends in furtherance of the objectives of the Society.',
  },
  {
    title: 'Incidental Activities',
    body: 'Undertake and execute all such other lawful activities and do things as are conducive or incidental to the attainment of the above objectives.',
  },
];

export const memorandumIncomeClause =
  'All the income, earnings, movable or immovable properties of the Society shall be solely utilized and applied towards the promotion of its aims and objectives only as set forth in the Memorandum of the Society, and no profit thereof shall be paid or transferred directly or indirectly by way of dividends, bonus, profits or in any manner whatsoever to the present or the past members of the Society or to any person claiming through any one or more of the present or the past members. No member of the Society shall have any personal claim on any movable or immovable property of the Society or make any profits whatsoever by virtue of this membership.';

export const memorandumSignatories: Signatory[] = [
  { name: 'Hakeem Abdul Hameed', occupation: 'Chairman, Hamdard Foundation' },
  { name: 'Mufti Atique-ur Rehman', occupation: 'Mufti' },
  { name: 'Badr-ud-Din Tyabji', occupation: 'Retired Civil Servant' },
  { name: 'Begum Abida Ahmed', occupation: 'Social Worker' },
  { name: 'Sayed S. Shafi', occupation: 'Town Planner' },
  { name: 'G. Naqashband', occupation: 'Resident Commissioner, J&K, New Delhi' },
  { name: 'Choudhary Mohd. Arif', occupation: 'Government Servant' },
];

export const memorandumManagement: CouncilMember[] = [
  { name: 'Mr. Sirajuddin Qureshi', designation: 'President' },
  { name: 'Mr. Safdar H. Khan', designation: 'Vice-President' },
  { name: 'Mr. H.R. Khan Suhel', designation: 'Treasurer' },
  { name: 'Mrs. Shahana Begum', designation: 'Secretary' },
  { name: 'Mr. Qamar Ahmed, IPS', designation: 'Member, Board of Trustees' },
  { name: 'Mr. Abrar Ahmad, IRS', designation: 'Member, Board of Trustees' },
  { name: 'Mr. Mohd. Iqrar Hussain', designation: 'Member, Board of Trustees' },
  { name: 'Mr. Ahmad Raza', designation: 'Member, Board of Trustees' },
  { name: 'Mr. Mohd. Nafis Abbasi', designation: 'Member, Board of Trustees' },
  { name: 'Mr. Moosa Raza, IAS (Retd.)', designation: 'Member, Board of Trustees' },
  { name: 'Mr. Muzafar Dev', designation: 'Member, Board of Trustees' },
  { name: 'Mr. Anees Durrani', designation: 'Member, Board of Trustees' },
  { name: 'Mr. W.A. Nomani', designation: 'Member, Executive Committee' },
  { name: 'Mr. Mohd. Esa Shafiq', designation: 'Member, Executive Committee' },
  { name: 'Mr. Arshad Ali Khan', designation: 'Member, Executive Committee' },
  { name: 'Mr. M.A. Hag', designation: 'Member, Executive Committee' },
  { name: 'Mr. Malik Zahin', designation: 'Member, Executive Committee' },
];

export const memorandumQuickLinks: { label: string; path: string }[] = [
  { label: 'History', path: '/about/history' },
  { label: 'The Aims & Objectives', path: '/about/aims' },
  { label: 'Governing Council', path: '/about/governing-council' },
  { label: 'Rules & Regulations', path: '/membership/rules' },
];

export interface RuleSection {
  number: string;
  title: string;
  intro?: string;
  paragraphs: string[];
}

export const membershipFeeTable: { cls: string; admission: string; annual: string }[] = [
  { cls: '(a) Honorary Members', admission: '—', annual: '—' },
  { cls: '(b) Founder Members', admission: '—', annual: '—' },
  { cls: '(c) Life Members', admission: '50,000', annual: '1,000' },
  { cls: '(d) Spouse Members', admission: '10,000', annual: '500' },
  { cls: '(e) Associate Members', admission: '15,000', annual: '2,000' },
  { cls: '(f) NRI Members', admission: '75,000', annual: '5,000' },
  { cls: '(g) Institutional Members (Statutory/Non-Statutory/Regd. Bodies/NGOs)', admission: '4,00,000', annual: '25,000' },
  { cls: '(h) Corporate Members', admission: '6,00,000', annual: '35,000' },
];

export const memorandumRules: RuleSection[] = [
  {
    number: '1',
    title: 'Interpretation',
    intro: 'In these Rules, unless the context otherwise requires:-',
    paragraphs: [
      '(a) "The Centre" means the India Islamic Cultural Centre.',
      '(b) "The General Body" means the General Body of the Centre.',
      '(c) "The Board" means the Board of Trustees of the Centre.',
      '(d) "The Committee" means the Executive Committee of the Centre.',
    ],
  },
  {
    number: '2',
    title: 'Members',
    intro: 'There will be the following classes of Members:-',
    paragraphs: [
      '(a) Honorary Members/Patrons; (b) Founder Members; (c) Life Members; (d) Spouse Members; (e) Associate Members; (f) NRI Members; (g) Institutional Members; (h) Corporate Members.',
    ],
  },
  {
    number: '3',
    title: 'Qualifications for Membership',
    intro:
      'Individual membership will be of the following classes and any citizen of India will be eligible to it subject to the provisions set out below.',
    paragraphs: [
      '(a) Honorary Members/Patrons — Persons of National eminence or those who have achieved National eminence in pursuit of Science, Technology or Literature may be invited by the Board to be Honorary Members of IICC for a specified term or otherwise as may be decided by the Board.',
      '(b) Founder Members — Founder Members are those persons who took an active interest or part in the establishment of the Centre and are enrolled as such by the Board of Trustees. Provided that a Founder Member may at any time be admitted as a Life Member on payment of the fee prescribed for such membership, less the admission fee initially paid.',
      '(c) Life Members — Life Members are those persons of high attainment in the fields of Education, Science, Culture or Art, or those who have an academic or cultural interest, and who are admitted as such by the Board and who have paid a minimum subscription of Rs. 50,000/-. Such members will pay annual subscription of Rs. 1,000/- provided that the application is proposed and seconded by two Life Members.',
      '(d) Spouse Members — On a formal application by the Life Member, his/her spouse shall be admitted as the Spouse Member by the Board on additional fee of Rs. 10,000/-. Such members will pay annual subscription of Rs. 500/-, having status as that of Life Members.',
      '(e) Associate Members — Associate Members are those persons who are enrolled as such by the Board in accordance with the provisions laid down in this behalf. Apart from the membership fee of Rs. 15,000/-, such members will pay annual subscription of Rs. 2,000/- provided that the application is proposed and seconded by two Life Members.',
      '(f) NRI Members — People of Indian Origin settled abroad may be admitted by the Board as NRI Members. Apart from the membership fee of Rs. 75,000/-, such members will pay annual subscription of Rs. 5,000/- (or equivalent foreign currency) provided that the application is proposed and seconded by two Life Members.',
      '(g) Institutional Members — The Board of Trustees may, in accordance with the provisions laid down in this behalf, admit any University, National Laboratory, National Academy, an all-India Institution of Research and Higher Learning, an all-India Cultural Body, or any association or organization of persons interested in academic or cultural work, as Institutional Member on payment of an admission fee which will be not less than Rs. 4,00,000/- (Four lakh) plus Rs. 25,000/- (Twenty Five Thousand) annual subscription in the case of University and other Statutory Bodies, and Rs. 4,00,000/- (Four lakh) plus Rs. 25,000/- (Twenty Five Thousand) annual subscription in the case of non-statutory bodies, provided that the application is proposed and seconded by two Life Members.',
      '(h) Corporate Members — The Board of Trustees may, in accordance with the provisions laid down in this behalf, admit any body corporate or all-India Cultural Body in sympathy with the aims and objectives of the Centre, or any association or organization of persons recognized by the Central Government or any State Government, interested in academic or cultural work, as a Corporate Member of the Centre, on admission fee of not less than Rs. 6,00,000/- (Six lakh). Such member or body shall pay annual subscription of Rs. 35,000/- (Thirty Five Thousand) provided that the application is proposed and seconded by two Life Members.',
    ],
  },
  {
    number: '4',
    title: 'Privileges of Members',
    paragraphs: [
      '(a) All Members shall be entitled to all the facilities offered by the Centre.',
      '(b) A Member admitted under rule 3(a) and (e) shall not be entitled to vote at the meetings of the General Body.',
      "(c) An Institutional Member admitted under rule 3(g) will be entitled to nominate not more than three persons at a time who may make use of the Centre's residential facilities. The nominees shall only be Chancellor, Pro-Chancellor or Registrar. The Executive Head of each such body will also have the right to cast vote at the meetings of the General Body.",
      '(d) A Corporate Body admitted as a member under rule 3(h) will be entitled to nominate not more than three persons at a time who may make use of the residential facilities. The nominees shall be those on the Board of the Company in senior positions above the rank of Manager. The Executive Head of each such body will also have the right to cast one vote at the meetings of the General Body.',
      '(e) The wife or husband of a Member shall also be charged at the rates applicable to the Member. Provided always that Members of all categories and other distinguished persons invited by the Society will be admitted to the residential and other facilities offered by the Centre subject to the availability of accommodation and charges as determined by the Board of Trustees from time to time.',
    ],
  },
  {
    number: '5',
    title: 'The Strength of the Members',
    paragraphs: [
      'The number of Members in each class will be such as may be determined by the Board of Trustees from time to time and shall have such stature and background as laid down in these rules.',
    ],
  },
  {
    number: '6',
    title: 'Fee and Subscriptions',
    intro: 'The fee and subscriptions payable by a Member in the various classes will be as follows:',
    paragraphs: [],
  },
  {
    number: '7',
    title: 'Subscription & Patrons',
    paragraphs: [
      "7. Subscription towards membership are payable in advance for each financial year and shall be due for payment on 1st April of each year. Gap of one pending dues shall debar the members to enjoy the Centre's facilities.",
      '7a. Patrons — The persons who have achieved excellence in areas of their work may be appointed by the President of the Centre with the consent of the Board of Trustees and the Members of the Executive Committee on purely honorary basis for a particular period. The number of the Patrons shall not exceed more than ten at a time.',
    ],
  },
  {
    number: '8',
    title: 'Office Bearers of the Centre',
    paragraphs: [
      '(a) The following shall be the office bearers of the Centre: (i) President; (ii) Vice-President; (iii) Secretary; (iv) Treasurer. The office-bearers of the Centre at S.No. (iii) & (iv) shall be appointed by the Board of Trustees for a period up to five years, which may be renewed from time to time at the discretion of the Board of Trustees. The age limits of all the above office-bearers from S.No. (i) to (iv) shall be between 25 years and 75 years. On the day these new Rules and Regulations are adopted by the authority under the Act, the Board of Trustees and all officers will cease to hold the posts against which they were appointed by the competent authority. The President and Members of the Board of Trustees, however, will only cease to hold office after elections have been held to these positions under the new Rules and Regulations.',
      '(b) The President and Vice-President of the Board of Trustees shall be the President & Vice-President of the Centre (ex-officio).',
      '(c) The President and Vice-President shall be elected by the General Body of Members for a period of 5 years.',
      '(d) The age of all the office bearers shall be between 25 years and 75 years.',
      '(e) The President and the Vice-President shall be the President and Vice-President of the Board of Trustees and Executive Committee.',
      '(f) The Board of Trustees may appoint one or more Directors or one or more Joint Directors from amongst the elected members or from outside with specific duties or otherwise, as it may deem fit, on such terms and conditions as the Board of Trustees may deem fit.',
      '(g) The Secretary and the Treasurer shall be appointed by the Board of Trustees from amongst the elected Members of the Board of Trustees or Executive Committee on such terms as the Board of Trustees may decide from time to time.',
    ],
  },
  {
    number: '9',
    title: 'General Body',
    intro: 'The General Body of the Centre shall be composed of the following:-',
    paragraphs: [
      '(a) The General Body shall be the supreme authority of the Centre.',
      '(b) The General Body of the Centre shall be composed of the Members as per rule 3.',
      '(c) Only Life Members under rule 3(c) & (d), one Executive Head of Institutional Member under rule 3(g) and one Executive Head of Corporate Member under rule 3(h) shall be entitled to vote in the General Body.',
      '(d) The General Body shall elect the following from amongst the Life Members under rule 3(c) & (d) for a term of five years: (i) President; (ii) Vice President; (iii) Seven Members of Board of Trustees; (iv) Four Members of Executive Committee; and the Executive Head of each Corporate Member admitted under rule 3(h).',
    ],
  },
  {
    number: '10',
    title: 'Board of Trustees',
    paragraphs: [
      '(a) The Board of Trustees shall consist of 11 persons, namely the President, Vice President and seven Members elected by the General Body, and two Members to be nominated by the Government of India.',
      '(b) The Secretary shall be the Secretary to the Board of Trustees also.',
    ],
  },
  {
    number: '11',
    title: 'Executive Committee',
    intro: 'The Executive Committee shall consist of:',
    paragraphs: [
      '(a) President;',
      '(b) Vice President;',
      '(c) Four elected Members elected by the General Body;',
      '(d) Two Members to be nominated by the Board of Trustees;',
      '(e) One Member each from the Institutional and Corporate Members;',
      '(f) The Secretary and the Treasurer shall be the ex-officio Members of the Executive Committee, if they are not from amongst the Executive Committee.',
    ],
  },
  {
    number: '12',
    title: 'Rights, Powers and Duties of the Board of Trustees',
    paragraphs: [
      '(a) All properties, movable, immovable or of any other kind, shall stand vested in the Board.',
      '(b) The business and affairs of the Centre shall be carried on and managed by the Board of Trustees, who shall exercise all such powers and authority of the Centre as are not specifically and expressly vested by these Rules and Regulations in the General Body of the Centre or in the Executive Committee, or in respect of such matters which are delegated by the appropriate authority to the Executive Committee.',
      '(c) The Board shall have all such powers and shall perform all such functions as are necessary or proper for the achievement or the furtherance of the objects of the Centre.',
      '(d) Without prejudice to the generality of the foregoing provisions, the Board shall have the following rights and powers:- (i) To acquire by gift, purchase, exchange, lease or otherwise lands, buildings or other immovable property together with all rights appertaining thereto; (ii) To construct and maintain buildings, including the right to alter or improve them, and to equip them suitably; (iii) To manage the properties of the Centre; (iv) To accept the management of any trust fund or endowment in which the Centre is interested; (v) To raise funds for the Centre by gifts, donations or otherwise; (vi) To raise loans on such terms and conditions as the Board may deem fit; (vii) To receive moneys, securities, instruments and any other movable or immovable property for and on behalf of the Centre; (viii) To enter into agreements for and on behalf of the Centre; (ix) To institute, conduct and defend all legal proceedings on behalf of the Centre; (x) To institute a provident fund for the benefit of the employees of the Centre and manage such provident fund; (xi) To grant receipts, to sign and execute instruments, and to endorse or discount cheques or other negotiable instruments through its accredited agents; (xii) To appoint officers and to execute such instruments as may be necessary or proper for carrying on the management of the property or affairs of the Centre; (xiii) To invest the money and funds of the Centre and to vary the instruments as and when it may seem necessary or proper; (xiv) To make suitable grants of money or other assistance to a university, educational institution or other society for the conducting or the execution of any research or investigation or study in a subject in which the Centre is interested; (xv) To grant fellowship, scholarship or other monetary assistance, on such terms and conditions as it may prescribe, to such persons as it may select for the carrying on of any research, investigation or study in a subject in which the Centre is interested; (xvi) To assign, from time to time, such functions and duties and delegate such powers as it may deem fit to the Executive Committee; (xvii) To prescribe the powers, functions and duties of the Treasurer and the Secretary; (xviii) To perform all such acts and do all such things as may be necessary for the proper management of the properties and the affairs of the Centre; (xix) To appoint an auditor or auditors for auditing the accounts of the Centre and to report thereon; (xx) To appoint Directors, Secretary, Treasurer of the Centre as also the General Managers, Managers, other officers and staff on such conditions of employment and remuneration as it considers appropriate, provided, however, the Director, Secretary and Treasurer should (each of them) be Life Members of the Centre and their ages are not less than 25 years and not more than 75 years; (xxi) To approve the annual budget of the Centre; (xxii) To admit Members of all categories as Members of the Centre and also formulate bye-laws for the conduct of the business of the Centre which are not in conflict with these Rules and Regulations.',
      '(e) The Board shall have power to make bye-laws in respect of the following matters:- (i) The management of the properties, funds, affairs and work of the Centre; (ii) The conditions and procedure under, and according to which, the elected Members of the Board & the Committee are to be elected; (iii) The conditions and procedure under, and according to which, several classes of Members of the Centre may be enrolled; (iv) The subscription, if any, to be paid by the different classes of Members; (v) The rights, duties and privileges of the several classes of Members; (vi) The procedure for election of Members to the Board/Committee; (vii) The procedure for the convening and the conduct of meetings of the Board, the Executive Committee and such other bodies as may be set up from time to time, including provision for the transaction of business by circulation of papers, proxy or otherwise, as may be deemed fit; (viii) Such other purposes as may be found necessary; (ix) The conduct of the business of IICC which is not in replacement or modification of, or in conflict with, these Rules and Regulations.',
      '(f) The Board alone shall have the power to repeal, amend and modify the bye-laws.',
      '(g) (i) The Board may, from time to time, delegate all or any of its powers to the Committee; (ii) The President shall exercise general control over the affairs of the Centre and shall give effect to the decisions of the Board of Trustees; (iii) If, in the opinion of the President, any emergency has arisen which requires that immediate action should be taken, the President shall take such action as he deems necessary, inform the Trustees, and shall report the same for confirmation at the next meeting of the Board of Trustees which, in the ordinary course, would have dealt with the matter. Provided that where such action taken by the President affects any person in the service of the Centre, such personnel shall be entitled to prefer, within thirty days from the date on which he received notice of such action, an appeal to the Board of Trustees.',
    ],
  },
  {
    number: '13',
    title: 'Powers, Functions and Duties of the Executive Committee',
    intro:
      'Subject to the overall control of the Board of Trustees, the Executive Committee shall have the following powers and duties and shall perform the following functions:',
    paragraphs: [
      '(i) To appoint, from time to time, such and so many employees, and on such terms and conditions, as it may deem fit, for carrying on the management and the affairs of the Centre;',
      '(ii) To appoint such and so many persons, and on such terms and conditions, as it may deem fit, for the conducting of the studies, investigations or other work undertaken by or for the Centre;',
      '(iii) To exercise control over the employees of the Centre, including the power of dismissal;',
      '(iv) To propose bye-laws for any of the matters for which they may be made, for consideration and adoption by the Board;',
      '(v) To select, from time to time, subjects in which investigations, studies, researches and teaching may be conducted by the Centre;',
      '(vi) To correspond with foreign scholars, institutions and organizations and to co-operate with them in matters relating to the work of the Centre;',
      '(vii) To appoint, if it deems fit, delegates to represent the Centre at conferences in India and abroad;',
      '(viii) To hold lectures, seminars and to arrange for studies, investigations, researches and conferences in such subjects and in such manner as it may deem fit, from time to time;',
      '(ix) To publish and/or to finance the publication of studies, treatises, books, periodicals, reports and/or other literature, and to sell or arrange for the sale of them, as it may deem fit, from time to time;',
      '(x) To provide for the documentation of such materials in educational, scientific, cultural and allied fields, as it may deem fit, from time to time;',
      '(xi) To institute and maintain a library or libraries;',
      '(xii) To purchase all such articles and materials as may be needed for the Centre and its works;',
      '(xiii) To appoint, from time to time, sub-committees, including, if need be, persons other than Members of the Executive Committee, and to assign to them such other powers, duties and functions as it may deem fit;',
      '(xiv) To perform all such acts and duties and exercise all such powers as may be delegated or assigned to it by the Board; and',
      '(xv) To perform all such acts and duties and exercise all such powers as may be necessary for the carrying on of the affairs of the Centre, subject to the general direction of the Board.',
    ],
  },
  {
    number: '14',
    title: 'Powers and Duties of the Office Bearers',
    intro:
      'Ordinarily, the President shall preside over all the meetings of the General Body and the Board of Trustees. In the absence of the President, the Vice-President shall preside. When the President and the Vice-President are absent, one of the Members shall be elected to preside. The President shall have the power to summon the Board of Trustees in an emergency and also to convene a meeting of the General Body, if necessary. He shall guide the activities of the Society.',
    paragraphs: [
      'President — The President shall exercise general control over the affairs of the Centre and give effect to the decisions of the Board of Trustees. In an emergency requiring immediate action, the President may take such action as he deems necessary, inform the Trustees, and report the same for confirmation at the next meeting of the Board of Trustees.',
      'Secretary — The Secretary shall work under the direction of the President and shall convene meetings of the Board, and of any Committee or sub-Committee on the Board, whenever necessary, under the instructions of the President. He shall keep paper records and minutes of the proceedings of the meetings of the General Body, Board of Trustees and other Committees. The Secretary shall convene meetings of the Executive Committee of the Centre under the direction of the President.',
      'Treasurer — The Treasurer shall be responsible for maintenance of proper accounts and other relevant records and he will also be responsible for the Annual Budget Estimates and Annual Accounts duly audited by the Chartered Accountant. The Treasurer shall supervise and maintain the accounts of the Centre in respect of donations, subscriptions and gifts received from the public, Government and other sources. He shall work under the administrative control of the President.',
    ],
  },
  {
    number: '15',
    title: 'Terms of Office',
    paragraphs: [
      '(a) There shall be no Life Trustee or Life President.',
      '(b) The term of office of the Executive Committee shall be five years.',
      '(c) The term of office of the elected and also nominated Members of the Board shall be five years. They are eligible for re-election. The Members will be elected at the time of the annual meeting of the General Body.',
      '(d) The term of office of the elected/nominated Members of the Executive Committee shall be five years.',
    ],
  },
  {
    number: '16',
    title: 'Meetings, Elections and Quorum',
    paragraphs: [
      '(a) Frequency of meetings — (i) The General Body shall meet at least once a year in its annual meeting; (ii) The Board of Trustees shall meet as often as may be necessary to transact its business; and (iii) The Executive Committee shall meet once a month or at shorter intervals, if necessary.',
      '(b) Meetings — how convened — (i) The annual meetings of the General Body shall be convened by the Secretary under the direction of the President, provided that special meetings of the General Body shall be convened on requisition in writing by 50 Members under the direction of the President; (ii) The meetings of the Board of Trustees shall be convened by the Secretary under the direction of the President; (iii) The meetings of the Executive Committee shall be convened by the Secretary under the direction of the President.',
      '(c) Meetings — notice for — (i) There shall be 21 (twenty-one) days clear notice for meetings of the General Body; (ii) There shall be 11 (eleven) days clear notice for meetings of the Board of Trustees; and (iii) There shall be 11 (eleven) days clear notice for the meetings of the Executive Committee. For special meetings the period of notice shall be: General Body — 15 (fifteen) clear days; Board of Trustees — 15 (fifteen) clear days; Executive Committee — 5 (five) clear days. Notice for convening all such meetings shall be sent under certificate of posting/courier and a proper register of postings shall be maintained. Minutes of all meetings of the Centre shall be posted within five days of these meetings. Formal records of the minutes, duly signed by the Secretary and the Chairman of the meeting, shall be kept in the custody of the Secretary.',
      '(d) Meetings — nature of business, including elections — (i) General Body: to consider the annual report, accounts and budget; to elect the President, Vice-President, Members of the Board of Trustees and the Executive Committee; to consider, amend, modify or change the Memorandum of Association and Rules and Regulations of the Centre, provided a minimum of 75% of the Members present vote for such change; and to consider suggestions of Members of all categories (except Honorary Members). (ii) Board of Trustees: to consider the reports about the activities of the Centre submitted by the Executive Committee through the Secretary, to determine the policy for the guidance of the Executive Committee, to consider and pass annual budgets submitted by the Executive Committee, and to consider such other matters as may be brought before the Board with the permission of the President. (iii) Executive Committee: to review and plan the activities of the Centre, to examine the monthly accounts, and to consider such other matters as may be brought before the Committee with the permission of the President. (iv) Elections: the elections shall be held, as far as may be, prior to the expiry of the term in office of the outgoing elected members/bodies/persons. The majority of Members present and voting shall elect from among the contesting candidates; the rules regarding the dates for filing of nominations, scrutiny, withdrawals, etc., shall be as decided by the Board of Trustees. The Board of Trustees shall also be empowered to prescribe the period of declaration of elections and the manner in which notices thereof are to be sent or generally notified for the information of the Members of the General Body. Members having outstanding dues or annual subscriptions shall not be entitled to contest the election or to cast their votes.',
      '(e) Meeting quorum — (i) For the annual meeting of the General Body, the quorum shall be one-third of the number of Members entitled to vote under these Rules on rolls for the time being, or fifty Members, whichever is lower; (ii) For special meetings of the General Body, the quorum shall be one-third of the number of Members on rolls for the time being, or fifty Members, whichever is lower; (iii) For a meeting of the Board, the quorum shall be one-third; and (iv) For a meeting of the Executive Committee, the quorum shall be one-third. Provided that the quorums prescribed above shall not be necessary for an adjourned meeting; an adjourned meeting of any of the bodies listed above should be held within seven days of the date fixed for the original meeting.',
      'Payment of subscriptions, fees, funds and all income from the investments, public donations and other sources of the Centre shall be made by cheque or draft; individual payments above Rs. 10,000/- (ten thousand only) should be made by cheque or draft.',
    ],
  },
  {
    number: '17',
    title: 'Fund of the Centre',
    paragraphs: [
      '(b) The bank account of the Centre shall be in the name of the India Islamic Cultural Centre and will be opened only in a scheduled Indian bank situated within 15 kilometers of the Centre. Any two of the following shall operate the account by jointly signing cheques, drafts or any other instrument: (1) President, (2) Treasurer, (3) Secretary. All receipts of the Centre shall be paid into the account of the Centre and shall not be withdrawn except by a cheque signed by any two of the President, Secretary and Treasurer, or such other office-bearer of the Centre, if any, as may be duly empowered in this behalf by the Board of Trustees, subject to such bye-laws as may be framed for the purpose. Provided that until the Board of Trustees is constituted, the receipts of the Centre shall be deposited in a bank approved by the honorary Chairman of the Executive Committee.',
      '(c) All expenditure paid out of the fund shall be incurred solely for the promotion of the aims and objectives for which the Centre has been established, and in the manner approved by the Board of Trustees.',
    ],
  },
  {
    number: '18',
    title: 'Budget',
    paragraphs: [
      '(a) The Executive Committee shall, in such form and at such time each year as may be prescribed, prepare a budget in respect of the financial year next ensuing, showing the estimated receipts and expenditure, and forward the same to the Board of Trustees for its consideration and approval.',
      '(b) The budget, as approved by the Board, shall be operated upon by the Executive Committee and the President under their respective delegated powers.',
    ],
  },
  {
    number: '19',
    title: 'Accounts and Audit',
    paragraphs: [
      '(a) The Centre shall cause to be maintained such books of accounts and other books in relation to its accounts, in such form and in such manner as may, in consultation with the Auditors of the Centre, be prescribed.',
      '(b) The financial year of the Centre shall be from the 1st of April each year to the 31st of March of the next year.',
      '(c) The Centre shall, as soon as may be after closing its annual accounts, prepare a statement of accounts in such form as the Board of Trustees may, in consultation with the Auditors of the Centre, determine.',
      '(d) The accounts of the Centre shall be audited by such auditors as the General Body may appoint.',
      '(e) The annual account of the Centre, together with the audit report thereon, shall be laid before the General Body, as far as practicable, at its annual meetings. If the statement of the audited accounts is not ready by the date of the annual meeting, it shall be placed before the General Body at a subsequent meeting called for the purpose.',
    ],
  },
  {
    number: '20',
    title: 'General',
    paragraphs: [
      '(a) The headquarters of the Centre shall be at New Delhi.',
      '(b) No person shall exercise his/her vote in any meeting of the General Body unless he or she is a Member continuously for a period of at least 11 months preceding such a meeting, and has paid the subscription due from him/her in full.',
      '(c) Any Member who has committed a breach of any of the rules of the Centre, or who has refused or neglected to abide by any of such rules, or has not cleared the dues of the Centre (other than membership fee) within the stipulated time, or is a habitual defaulter in the clearance of the dues of the Centre, or who has committed any act which, in the opinion of the Executive Committee, is calculated or likely to bring discredit to the Centre, may be removed from the membership of the Centre by a resolution of three-fourths of the Members of the Executive Committee present at a special meeting thereof convened for the purpose after at least 21 (twenty-one) days notice. Provided that no such resolution shall be passed unless the Member concerned is informed by a registered letter (acknowledgment due) at least 21 (twenty-one) days before such meeting, of the date, time and place of the meeting and of the grounds on which it is proposed to remove him from membership of the Centre, and is given an opportunity to explain his conduct to the Executive Committee in writing or in person at such meeting.',
      '(d) The name of any Member who is liable to pay subscription but whose subscription falls in arrears for more than three months in the case of individual Members, and 6 (six) months in the case of an Institutional/Corporate Member, shall be removed from the Roll of Members of the Centre unless the Executive Committee shall otherwise decide, in which case the Members whose subscriptions have fallen in arrears shall have to pay, in addition to the arrears due, a penalty to be fixed in each case by the Executive Committee to be enabled to continue their membership of the Centre.',
      '(e) The name of a Member removed from the Roll of Membership of the Centre may be restored thereto only on payment of such sum as the Executive Committee may determine in each case. (Dissolution as per Sections 13 & 14 of the Act.)',
      '(f) If, upon the dissolution of the Centre, there shall remain, after the satisfaction of all its debts and liabilities, any property whatsoever, the same shall not be paid to or distributed among the Members of the Centre, but shall be given over to organizations with comparable purposes according to the decisions of the Board of Trustees or, in default thereof, that of the competent Court.',
      '(g) The Society shall sue or be sued in the name of the President of the Centre, as per Section 8 of the Societies Registration Act 1860.',
      '(h) The Society shall file a list of its Executive Members every year with the office of the Registrar of Societies, as per Section 4 of the Societies Registration Act 1860.',
    ],
  },
  {
    number: '21',
    title: 'Provisions of the Societies Registration Act',
    paragraphs: [
      'All the necessary provisions of the Indian Societies Registration Act (XXI) of 1860 (Punjab Amendment) as extended to the Union Territory of Delhi shall apply.',
      'Certified to be a correct copy of the Rules and Regulations of the India Islamic Cultural Centre, Delhi.',
    ],
  },
];



