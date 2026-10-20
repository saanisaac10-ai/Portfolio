export interface JourneyNode {
  id: string;
  year: string;
  period: string;
  company: string;
  role: string;
  domainTag: string;
  themeTitle: string;
  oneLiner: string;
  keyStats: {
    value: string;
    label: string;
  }[];
  shippedItems: string[];
}

export interface CaseStudy {
  id: string;
  index: string;
  quoteHeader: string;
  projectTitle: string;
  company: string;
  industry: string;
  timeframe: string;
  location: string;
  category: 'ai-systems' | 'commercial-ops' | 'org-transformation' | 'people-analytics';
  categoryLabel: string;
  headlineMetric: {
    value: string;
    unit: string;
    delta: string;
  };
  problemStatement: string;
  whatIFound: string;
  myRole: {
    title: string;
    scope: string;
    narrative: string;
  };
  solutionImplemented: {
    summary: string;
    steps: string[];
    architectureFlow: {
      stage: string;
      detail: string;
    }[];
  };
  technologiesUsed: {
    name: string;
    application: string;
  }[];
  keyOutcomes: {
    metric: string;
    description: string;
  }[];
}

export interface SkillNodeItem {
  id: string;
  name: string;
  shortName: string;
  proofMetric: string;
  detail: string;
  whereApplied: string;
  strength: number; // 85-98 for visual bar/radar
}

export interface SkillPillar {
  id: 'tech' | 'people' | 'strategy' | 'org';
  title: 'Tech' | 'People and Culture' | 'Strategy' | 'Org Design';
  subtitle: string;
  accentColor: string;
  badgeBg: string;
  items: SkillNodeItem[];
}

export const PROFILE_INFO = {
  name: 'Saan Isaac George',
  location: 'Bengaluru, India',
  phone: '+91 99866 36752',
  email: 'saanisaac10@gmail.com',
  linkedin: 'https://linkedin.com/in/saan-isaac-926ba0ab',
  linkedinDisplay: 'linkedin.com/in/saan-isaac-926ba0ab',
  github: 'https://github.com/saanisaac10',
  githubDisplay: 'github.com/saanisaac10',
  experienceYears: '11+ Yrs Experience · 8+ Yrs HR, Strategy & AI',
  industries: 'EdTech · QSR · EV · Consulting (PwC) · Retail (Target)',
};

export const INDEX_BUTTONS = [
  { number: '01', label: 'About Me', href: '#about-me', sub: 'Visual Timeline (2012–2026)' },
  {
    number: '02',
    label: 'What I can solve/bring for you',
    href: '#what-i-solve',
    sub: '8 Challenges Solved (2×4 Matrix)',
  },
  { number: '03', label: 'Skillsets', href: '#skillsets', sub: 'Interactive Capability Map' },
  { number: '04', label: 'Resumes & Connect', href: '#resumes', sub: 'Still want a B&W PDF?' },
];

export const JOURNEY_NODES: JourneyNode[] = [
  {
    id: 'target',
    year: '2012 – 2015',
    period: 'May 2012 – Jun 2015',
    company: 'Target Corporation',
    role: 'Senior Merchandise Specialist',
    domainTag: 'Fortune 50 Retail',
    themeTitle: 'Inspired to build',
    oneLiner:
      'Inspired by my dad’s 40 years in HR and a BBM from Christ University, I started in retail operations—where I taught myself VBA to eliminate repetitive forecasting work.',
    keyStats: [
      { value: '2,820 hrs', label: 'Saved every year via VBA' },
      { value: '3 Workflows', label: 'Merchandising & forecasting automated' },
      { value: '40-Yr Legacy', label: 'Inspired by my dad’s career in HR' },
    ],
    shippedItems: ['VBA Forecasting Automation', 'Merchandising Analytics', 'BBM HR (Christ Univ)'],
  },
  {
    id: 'ather',
    year: '2018 – 2020',
    period: 'Apr 2018 – Jul 2020',
    company: 'Ather Energy',
    role: 'Talent Partner',
    domainTag: 'Series C+ EV Tech',
    themeTitle: '0-to-1 scale-up systems',
    oneLiner:
      'After my PGDM at TAPMI, I partnered directly with Ather’s CTO and CHRO to build performance management from scratch and scale core engineering talent.',
    keyStats: [
      { value: '~400 Staff', label: '0-to-1 performance system built' },
      { value: '20 GETs', label: 'Hired across 10 premier IITs' },
      { value: 'Series C+', label: 'CXO restructuring & assimilation' },
    ],
    shippedItems: ['0-to-1 Performance System', '10-IIT Campus Hiring', 'Joiner Assimilation', 'PGDM (TAPMI)'],
  },
  {
    id: 'pwc',
    year: '2020 – 2021',
    period: 'Jul 2020 – Dec 2021',
    company: 'PwC Acceleration Center',
    role: 'Talent Consultant',
    domainTag: 'Global Consulting',
    themeTitle: 'Analytics & global rewards rigor',
    oneLiner:
      'Led the Talent Consulting team through a leadership transition, building Senior Partner talent dashboards and recalibrating tech compensation across three countries.',
    keyStats: [
      { value: '3 Hubs', label: 'India, Shanghai & Colombia covered' },
      { value: 'Power BI', label: 'Partner quarterly review dashboards' },
      { value: 'Korn Ferry', label: 'Tech offer bands recalibrated' },
    ],
    shippedItems: ['Partner Power BI Dashboard', 'Korn Ferry Benchmarking', 'Global Rewards Framework'],
  },
  {
    id: 'emeritus',
    year: '2021 – 2026',
    period: '2021 – Jul 2026',
    company: 'Emeritus',
    role: 'Associate Director, Talent Management & HRBP',
    domainTag: 'Global EdTech (3,000+ Staff)',
    themeTitle: 'Tying people systems to P&L',
    oneLiner:
      'Partnered with leaders for ~1,000 people across India, US, and APAC—redesigning Sales incentives around Contribution Margin, shipping an AI coaching platform, and leading M&A integration.',
    keyStats: [
      { value: '+$200–300K', label: 'Quarterly revenue added via incentives' },
      { value: '-65% Time', label: 'HR turnaround via AI coaching tool' },
      { value: '30% Promoted', label: 'Director+ cohort upward mobility' },
    ],
    shippedItems: [
      'Contribution Margin Incentives',
      'In-House AI Coaching Platform',
      'Sales Career Framework',
      'Cross-Border M&A & OKRs',
    ],
  },
  {
    id: 'calburrito',
    year: 'Jul – Sep 2026',
    period: 'Jul 2026 – Sep 2026',
    company: 'California Burrito',
    role: 'Head of HR',
    domainTag: '150+ Stores · ~3,000 Staff',
    themeTitle: 'Shipping AI tools at frontline scale',
    oneLiner:
      'Owned HR end to end across 150+ stores. Built a custom Claude AI ATS (diagnosing 12,600+ applications for the CEO) and shipped an OCR onboarding app synced to Keka.',
    keyStats: [
      { value: '2–3h → 20m', label: 'Daily screening cut via Claude ATS' },
      { value: '40m → 10m', label: '4x faster store onboarding via OCR' },
      { value: '~470 Hires', label: '~70 corporate + ~400 store staff in 3 mos' },
    ],
    shippedItems: [
      'Claude AI ATS (12,600+ Apps)',
      'Aadhaar/Cheque OCR Onboarding App',
      '150+ Site Labour Compliance',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'claude-ats-ceo-diagnosis',
    index: '01',
    quoteHeader:
      '“Weekly applications grew 5x, but roles are still open and recruiters are spending hours screening resumes every day.”',
    projectTitle: 'Custom AI-Enabled ATS & CEO Hiring Bottleneck Diagnosis',
    company: 'California Burrito',
    industry: 'QSR Chain (150+ Stores, ~3,000 Staff)',
    timeframe: 'Jul – Sep 2026',
    location: 'Bengaluru',
    category: 'ai-systems',
    categoryLabel: 'Scaling up and Sustainable hiring',
    headlineMetric: {
      value: '20 min',
      unit: 'screening / role / day',
      delta: 'Down from 2–3 hours across 12,600+ applications',
    },
    problemStatement:
      'Weekly applications jumped 5x to 12,600+ across 25 roles. Recruiters spent 2–3 hours per role daily screening by hand while leadership thought candidate supply was the issue.',
    whatIFound:
      'Supply wasn’t the constraint—screening speed and conversion were. And in specific roles, outdated pay bands (not sourcing channels) caused late-stage drop-off.',
    myRole: {
      title: 'Head of HR',
      scope: '150+ stores · ~3,000 employees · Direct to CEO',
      narrative:
        'Built the custom ATS with Claude myself, delivered the 12,600-application diagnosis to the CEO, and led hiring across 7 functions.',
    },
    solutionImplemented: {
      summary:
        'Built a custom Claude AI ATS and delivered a role-by-role conversion diagnosis to the CEO.',
      steps: [
        'Built a custom ATS with Claude: source tracking, outcome shortlisting, per-hire audit trails, and AI reasoning/aptitude pre-assessments.',
        'Analyzed 12,600+ applications across 25 roles to pinpoint sourcing vs. conversion gaps.',
        'Recalibrated role-specific pay bands and rewrote job descriptions across functions.',
      ],
      architectureFlow: [
        { stage: '01. Source Tracking', detail: '12,600+ applications tracked across 25 roles' },
        { stage: '02. AI Pre-Assessment', detail: 'Claude reasoning, aptitude & outcome shortlisting' },
        { stage: '03. Audit & Diagnosis', detail: 'Per-hire audit log + CEO pay-band vs channel map' },
      ],
    },
    technologiesUsed: [
      { name: 'Claude AI', application: 'Outcome shortlisting & reasoning/aptitude pre-assessment' },
      { name: 'Custom ATS', application: 'Source tracking & per-hire audit trail' },
      { name: 'Funnel Analytics', application: 'Conversion & pay-band bottleneck analysis' },
    ],
    keyOutcomes: [
      { metric: '2–3 hrs → 20 min', description: 'Cut daily screening time per role by 88%.' },
      { metric: '~70 Corporate Hires', description: 'Closed in 2 months across IT, AI Eng, Supply Chain, Finance, Marketing & Ops.' },
      { metric: '12,600+ Apps Analyzed', description: 'Shifted CEO focus from sourcing volume to conversion & pay bands.' },
    ],
  },
  {
    id: 'frontline-onboarding-ocr-app',
    index: '02',
    quoteHeader:
      '“Onboarding 200 store staff a month takes too long, and payroll errors keep showing up.”',
    projectTitle: 'Frontline Store Onboarding App Synced to Keka HRMS',
    company: 'California Burrito',
    industry: 'QSR Chain (150+ Stores, ~3,000 Staff)',
    timeframe: 'Jul – Sep 2026',
    location: 'Bengaluru',
    category: 'ai-systems',
    categoryLabel: 'Onboarding Automation & Compliance',
    headlineMetric: {
      value: '4x Faster',
      unit: 'frontline onboarding',
      delta: '40 min → 10 min per joiner · ~100 hrs saved/mo',
    },
    problemStatement:
      'Onboarding ~200 store joiners monthly took 40 minutes of manual paperwork per person, causing bank typos, uniform delays, and compliance gaps across 150+ stores.',
    whatIFound:
      'Store managers were manually typing Aadhaar and cheque bank details into forms instead of running stores.',
    myRole: {
      title: 'Head of HR',
      scope: '~200 monthly frontline joiners · 150+ stores',
      narrative:
        'Built and shipped the frontline onboarding app and set up statutory compliance accountability at every site.',
    },
    solutionImplemented: {
      summary:
        'Shipped a mobile app that auto-reads IDs and cheques and syncs verified profiles directly to Keka.',
      steps: [
        'Auto-read Aadhaar and bank details from photos of ID cards and cancelled cheques.',
        'Added OTP verification, live face capture, and uniform sizing in a 10-minute flow.',
        'Synced straight to Keka HRMS with statutory compliance accountability per store.',
      ],
      architectureFlow: [
        { stage: '01. Auto-Read IDs', detail: 'Reads Aadhaar & bank details from cards/cheques' },
        { stage: '02. Verify & Size', detail: 'OTP check, face capture & uniform sizing' },
        { stage: '03. Keka Sync', detail: 'Direct HRMS sync & site compliance tracking' },
      ],
    },
    technologiesUsed: [
      { name: 'AI Document OCR', application: 'Auto-reading Aadhaar cards and bank cheques' },
      { name: 'OTP & Face Capture', application: 'Identity verification and attendance readiness' },
      { name: 'Keka HRMS', application: 'Automated employee record sync' },
    ],
    keyOutcomes: [
      { metric: '40 min → 10 min', description: '4x faster onboarding for ~200 store joiners every month.' },
      { metric: '~100 Hours Saved/Mo', description: 'Eliminated manual store and HR data entry.' },
      { metric: '~400 Store Staff', description: 'Onboarded in 3 months with full site compliance.' },
    ],
  },
  {
    id: 'sales-incentive-contribution-margin',
    index: '03',
    quoteHeader:
      '“Our sales team is hitting activity numbers, but commission costs are climbing faster than net revenue.”',
    projectTitle: 'Contribution Margin Sales Incentive Redesign & Revenue Productivity',
    company: 'Emeritus',
    industry: 'Global EdTech (3,000+ Staff)',
    timeframe: '2021 – Jul 2026',
    location: 'India, US & APAC',
    category: 'commercial-ops',
    categoryLabel: 'Incentive Design & Revenue Productivity',
    headlineMetric: {
      value: '+$200–300K',
      unit: 'added revenue / qtr',
      delta: '+10–15% productivity · ~$100K lower incentive cost',
    },
    problemStatement:
      'A tenure-based Sales commission plan across ~1,000 employees rewarded time in seat rather than commercial margin, inflating payout costs.',
    whatIFound:
      'Commissions were disconnected from unit profitability, and headcount budgets lacked regional productivity baselines.',
    myRole: {
      title: 'Associate Director, Talent Management & HRBP',
      scope: '~1,000 employees (India, US, APAC) · Team of 4',
      narrative:
        'Partnered with Sales, Revenue, Tech, and Delivery leaders to redesign incentives and run productivity studies.',
    },
    solutionImplemented: {
      summary:
        'Tied Sales incentives to Contribution Margin and controllable input metrics.',
      steps: [
        'Replaced tenure commissions with a plan tied to Contribution Margin and input metrics.',
        'Fed payout data directly into quarterly performance decisions.',
        'Ran Revenue productivity studies that set headcount and hiring budgets across India, US, and APAC.',
      ],
      architectureFlow: [
        { stage: '01. Margin Redesign', detail: 'Tied payouts to Contribution Margin & inputs' },
        { stage: '02. Performance Link', detail: 'Payout data feeds performance decisions' },
        { stage: '03. Headcount Budgets', detail: 'Productivity studies govern hiring budgets' },
      ],
    },
    technologiesUsed: [
      { name: 'Commercial Incentive Modelling', application: 'Contribution Margin & input-metric payout design' },
      { name: 'Productivity Analytics', application: 'Headcount allocation & hiring budget models' },
    ],
    keyOutcomes: [
      { metric: '+$200–300K / Qtr', description: 'Added quarterly revenue while cutting incentive costs by ~$100K.' },
      { metric: '+10–15% Productivity', description: 'Lifted sales rep productivity across regions.' },
      { metric: 'Predictable Payouts', description: 'Aligned commercial rewards directly with P&L health.' },
    ],
  },
  {
    id: 'sales-career-framework-emeritus',
    index: '04',
    quoteHeader:
      '“Our sales structure is too base-heavy, and high-performing reps have no clear path into team lead roles.”',
    projectTitle: 'Sales Career Framework, Job Levelling & Succession Pipeline',
    company: 'Emeritus',
    industry: 'Global EdTech (3,000+ Staff)',
    timeframe: '2021 – Jul 2026',
    location: 'India, US & APAC',
    category: 'org-transformation',
    categoryLabel: 'Career Architecture & Job Evaluation',
    headlineMetric: {
      value: '3.0 → 4.6',
      unit: 'Sales engagement (of 5)',
      delta: '2-week Advisor time-to-hire · 5% PwD target met',
    },
    problemStatement:
      'A base-heavy Sales structure lacked clear job levelling and stepping-stone roles, stalling internal team-lead progression.',
    whatIFound:
      'Top reps had no interim track to prove management readiness, and external Sales Advisor hiring was taking too long.',
    myRole: {
      title: 'Associate Director, Talent Management & HRBP',
      scope: 'Sales & Revenue Organisation across India, US & APAC',
      narrative:
        'Built the Sales career framework with job evaluation and levelling while leading high-velocity Sales hiring.',
    },
    solutionImplemented: {
      summary:
        'Built a levelled Sales career framework that opened interim-manager roles and fixed the base-heavy structure.',
      steps: [
        'Re-levelled roles through formal job evaluation to fix the base-heavy structure.',
        'Opened interim-manager roles and built a repeatable succession pipeline of team leads.',
        'Hired 20–30 roles/month, cut Sales Advisor time-to-hire to 2 weeks, and met the 5% PwD hiring target.',
      ],
      architectureFlow: [
        { stage: '01. Job Evaluation', detail: 'Re-levelled roles & fixed base-heavy structure' },
        { stage: '02. Interim-Manager Track', detail: 'Created team-lead succession pipeline' },
        { stage: '03. 2-Week Hiring', detail: '20–30 hires/mo + 5% PwD hiring target met' },
      ],
    },
    technologiesUsed: [
      { name: 'Job Evaluation & Levelling', application: 'Role architecture & base-heavy structure redesign' },
      { name: 'Succession Pipeline Design', application: 'Interim-manager gating & team-lead progression' },
    ],
    keyOutcomes: [
      { metric: '3.0 → 4.6 / 5.0', description: 'Sales engagement rose from 3.0 to 4.6 over 3 years, above company average.' },
      { metric: '2-Week Time-to-Hire', description: 'Hired 20–30 roles a month and met the 5% PwD hiring target.' },
      { metric: 'Internal Bench Built', description: 'Created a steady pipeline of team leads and interim managers.' },
    ],
  },
  {
    id: 'ai-coaching-feedback-platform',
    index: '05',
    quoteHeader:
      '“Managers wait on HR for every tough performance conversation, and only 20% of employees find reviews useful.”',
    projectTitle: 'In-House AI Coaching & Manager Feedback Platform',
    company: 'Emeritus',
    industry: 'Global EdTech (3,000+ Staff)',
    timeframe: '2021 – Jul 2026',
    location: 'India, US & APAC',
    category: 'ai-systems',
    categoryLabel: 'AI Coaching & Performance Culture',
    headlineMetric: {
      value: '-65%',
      unit: 'HR response time',
      delta: 'Effective performance conversations rose 20% → 30%',
    },
    problemStatement:
      'Managers bottlenecked on HR for routine coaching prep, and only 20% of employees rated their performance conversations as effective.',
    whatIFound:
      'Managers needed practical, role-specific guidance right before a review—connected to real goals in the HRMS.',
    myRole: {
      title: 'Associate Director, Talent Management & HRBP',
      scope: 'Company-wide for Managers & Senior Leaders',
      narrative:
        'Built the HRMS-integrated AI coaching platform and rolled out OKR performance management across units.',
    },
    solutionImplemented: {
      summary:
        'Shipped an in-house AI coaching platform integrated with the HRMS alongside global OKRs.',
      steps: [
        'Built an AI coaching and feedback platform for managers and senior leaders.',
        'Integrated it directly with the HRMS so coaching reflected actual employee goals.',
        'Rolled out OKR-based performance management across business units.',
      ],
      architectureFlow: [
        { stage: '01. HRMS Integration', detail: 'Pulls role & OKR context from the HRMS' },
        { stage: '02. Manager Coaching', detail: 'On-demand conversation & feedback guidance' },
        { stage: '03. OKR Alignment', detail: 'Consistent review standards across units' },
      ],
    },
    technologiesUsed: [
      { name: 'In-House AI Coaching Tool', application: 'Real-time manager feedback & review preparation' },
      { name: 'HRMS Integration', application: 'Connected directly to employee performance workflows' },
      { name: 'OKR Framework', application: 'Goal alignment across global business units' },
    ],
    keyOutcomes: [
      { metric: '-65% Response Time', description: 'Cut HR turnaround time by 65%.' },
      { metric: '20% → 30% Effective', description: 'Effective performance conversation ratings rose from 20% to 30%.' },
      { metric: 'Cross-Unit OKRs', description: 'Unified performance cycles across core and acquired teams.' },
    ],
  },
  {
    id: 'director-leadership-ma-integration',
    index: '06',
    quoteHeader:
      '“We’re acquiring teams across borders, and our Director+ bench isn’t ready for the next stage of scale.”',
    projectTitle: 'Director+ Leadership Programme & Cross-Border M&A Integration',
    company: 'Emeritus',
    industry: 'Global EdTech (3,000+ Staff)',
    timeframe: '2021 – Jul 2026',
    location: 'India, US & APAC',
    category: 'org-transformation',
    categoryLabel: 'Leadership Development & M&A',
    headlineMetric: {
      value: '30%',
      unit: 'Director+ leaders moved up',
      delta: '2 cohorts (~20 leaders) across India, US & APAC',
    },
    problemStatement:
      'Cross-border acquisitions created fragmented regional policies and exposed a thin internal succession bench at the Director+ layer.',
    whatIFound:
      'Senior leadership development needed objective diagnostic data, and acquired teams needed aligned operating rhythms.',
    myRole: {
      title: 'Associate Director, Talent Management & HRBP',
      scope: '2 Global Cohorts (~20 Leaders) · Cross-border M&A',
      narrative:
        'Designed and ran the Director+ programme and led people integration for cross-border acquisitions.',
    },
    solutionImplemented: {
      summary:
        'Ran a 2-cohort Director+ programme using 360°/psychometric diagnostics and unified post-merger teams.',
      steps: [
        'Used 360-degree and psychometric assessments to target capability building for ~20 Director+ leaders across India, US, and APAC.',
        'Aligned people policies, grading, and operating rhythms across cross-border acquisitions.',
      ],
      architectureFlow: [
        { stage: '01. 360° & Psychometrics', detail: 'Targeted capability diagnosis for ~20 leaders' },
        { stage: '02. 2-Cohort Programme', detail: 'Leadership development across India, US & APAC' },
        { stage: '03. M&A Integration', detail: 'Aligned policies & operating rhythms across regions' },
      ],
    },
    technologiesUsed: [
      { name: '360° & Psychometrics', application: 'Leadership capability assessment & targeting' },
      { name: 'M&A Integration', application: 'Cross-border policy & operating rhythm alignment' },
    ],
    keyOutcomes: [
      { metric: '30% Moved Up', description: '30% of Director+ leaders advanced after the 2-cohort programme.' },
      { metric: 'India, US & APAC', description: 'Aligned policies and OKR rhythms across cross-border acquisitions.' },
    ],
  },
  {
    id: 'ather-performance-management-scaleup',
    index: '07',
    quoteHeader:
      '“We’re scaling fast past 400 engineers and operators, but we have no performance system or structured way to assimilate new joiners.”',
    projectTitle: '0-to-1 Performance Management, Restructuring & IIT Campus Hiring',
    company: 'Ather Energy',
    industry: 'EV Technology (Series C+ Scale-Up)',
    timeframe: 'Apr 2018 – Jul 2020',
    location: 'Bengaluru',
    category: 'org-transformation',
    categoryLabel: '0-to-1 Performance Systems & EV Scale-Up',
    headlineMetric: {
      value: '~400 Staff',
      unit: '0-to-1 performance system',
      delta: 'Built with CTO & CHRO · Plus 20 GETs hired across 10 IITs',
    },
    problemStatement:
      'Scaling rapidly to ~400 employees during Series C+, Ather had no formal performance system, needed org efficiency alignment, and had to ramp up core engineering hires.',
    whatIFound:
      'Hardware and software engineers rejected heavy appraisal forms—they needed a clean system co-built with technical leadership.',
    myRole: {
      title: 'Talent Partner',
      scope: '~400 employees · Working directly with CTO, CHRO & CXOs',
      narrative:
        'Partnered with the CTO, CHRO, and CXOs to build performance management from scratch, drive restructuring, and hire across 10 IITs.',
    },
    solutionImplemented: {
      summary:
        'Built performance management from scratch for ~400 staff with the CTO/CHRO and hired 20 GETs across 10 IITs.',
      steps: [
        'Built performance management from scratch for ~400 employees with the CTO and CHRO.',
        'Worked with CXOs on restructuring and efficiency initiatives during rapid scale-up.',
        'Co-designed new-joiner assimilation and hired 20 Graduate Engineer Trainees across 10 IITs.',
      ],
      architectureFlow: [
        { stage: '01. 0-to-1 Performance', detail: 'Built from scratch with CTO & CHRO for ~400 staff' },
        { stage: '02. CXO Restructuring', detail: 'Org efficiency & new-joiner assimilation framework' },
        { stage: '03. 10 IIT Campuses', detail: 'Hired 20 Graduate Engineer Trainees' },
      ],
    },
    technologiesUsed: [
      { name: '0-to-1 Performance Architecture', application: 'Goal setting & review system for ~400 EV staff' },
      { name: 'New-Joiner Assimilation', application: 'Onboarding & cultural ramp-up during Series C+ growth' },
      { name: 'Campus Talent Acquisition', application: 'Engineering hiring across 10 premier IITs' },
    ],
    keyOutcomes: [
      { metric: '~400 Employees Covered', description: 'Launched Ather’s foundational performance system with the CTO and CHRO.' },
      { metric: '20 GETs / 10 IITs', description: 'Hired 20 Graduate Engineer Trainees across 10 IITs.' },
      { metric: 'Scale-Up Readiness', description: 'Delivered CXO restructuring and new-joiner assimilation.' },
    ],
  },
  {
    id: 'pwc-analytics-target-vba-automation',
    index: '08',
    quoteHeader:
      '“Partners need live talent data for quarterly reviews, tech offer bands are out of sync, and retail forecasting is eating thousands of manual hours.”',
    projectTitle: 'Partner Power BI Dashboards, Korn Ferry Pay & Retail VBA Automation',
    company: 'PwC Acceleration Center · Target Corporation',
    industry: 'Management Consulting · Fortune 50 Retail',
    timeframe: '2012 – Dec 2021',
    location: 'Bengaluru (India, Shanghai & Colombia)',
    category: 'people-analytics',
    categoryLabel: 'People Analytics, Total Rewards & VBA Automation',
    headlineMetric: {
      value: '2,820 hrs',
      unit: 'saved / yr in VBA',
      delta: 'Plus Partner Power BI dashboards & Korn Ferry comp bands at PwC',
    },
    problemStatement:
      'PwC Senior Partners needed unified talent review data and recalibrated tech pay bands across 3 countries, while Target merchandising teams lost thousands of hours to manual forecasting.',
    whatIFound:
      'Partner decisions slowed down without live dashboards and calibrated offer bands, while repetitive retail forecasting could be fully automated in VBA.',
    myRole: {
      title: 'Talent Consultant (PwC) · Senior Merchandise Specialist (Target)',
      scope: 'PwC (India, Shanghai & Colombia) · Target (Fortune 50 Retail)',
      narrative:
        'Led PwC’s Talent Consulting team through a leadership transition with Senior Partners, and automated core forecasting workflows at Target.',
    },
    solutionImplemented: {
      summary:
        'Built Partner Power BI dashboards and Korn Ferry pay bands at PwC, and automated 3 forecasting workflows in VBA at Target.',
      steps: [
        'PwC: Led the Talent Consulting team through a leadership transition with Senior Partners.',
        'PwC: Built the Partner Power BI talent dashboard, benchmarked Tech Consulting pay with Korn Ferry, and launched global Recognition & Rewards.',
        'Target: Automated 3 merchandising and forecasting processes in VBA, saving 2,820 hours a year.',
      ],
      architectureFlow: [
        { stage: '01. Target VBA Macros', detail: 'Automated 3 forecasting processes (2,820 hrs/yr)' },
        { stage: '02. PwC Power BI', detail: 'Quarterly Partner talent review dashboards' },
        { stage: '03. Korn Ferry & Rewards', detail: 'Recalibrated tech offer bands & global recognition' },
      ],
    },
    technologiesUsed: [
      { name: 'Power BI', application: 'Quarterly Senior Partner talent review dashboards' },
      { name: 'Korn Ferry Benchmarking', application: 'Recalibrated Tech Consulting offer bands' },
      { name: 'Excel VBA', application: 'Automated merchandising & forecasting workflows' },
    ],
    keyOutcomes: [
      { metric: '2,820 Hrs Saved/Yr', description: 'Automated 3 merchandising and forecasting processes at Target.' },
      { metric: 'India, Shanghai & Colombia', description: 'Powered quarterly Partner talent reviews and global rewards at PwC.' },
      { metric: 'Recalibrated Offer Bands', description: 'Aligned Tech Consulting pay with Korn Ferry benchmarks.' },
    ],
  },
];

export const SKILL_PILLARS: SkillPillar[] = [
  {
    id: 'tech',
    title: 'Tech',
    subtitle: 'AI tools, automation & analytics I build hands-on',
    accentColor: '#4338CA',
    badgeBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    items: [
      {
        id: 'claude-ai',
        name: 'Building HR Tools with AI (Claude)',
        shortName: 'Claude AI Tools',
        proofMetric: '12,600+ Apps · -65% Resp.',
        detail: 'Built a custom ATS with AI reasoning/aptitude pre-assessments and an HRMS-integrated AI coaching platform.',
        whereApplied: 'California Burrito & Emeritus',
        strength: 96,
      },
      {
        id: 'ocr-keka',
        name: 'OCR Onboarding App & Keka Sync',
        shortName: 'OCR & Keka Sync',
        proofMetric: '40m → 10m (4x Faster)',
        detail: 'Shipped a frontline app that auto-reads Aadhaar cards and cheques with OTP & face capture synced to Keka.',
        whereApplied: 'California Burrito (150+ Stores)',
        strength: 94,
      },
      {
        id: 'power-bi',
        name: 'People Analytics (Power BI)',
        shortName: 'Power BI Analytics',
        proofMetric: '3 Global Hubs',
        detail: 'Built quarterly talent review dashboards for PwC Senior Partners and CEO hiring funnel diagnostics.',
        whereApplied: 'PwC & California Burrito',
        strength: 92,
      },
      {
        id: 'vba-auto',
        name: 'Process Automation (VBA)',
        shortName: 'VBA Automation',
        proofMetric: '2,820 Hrs Saved/Yr',
        detail: 'Automated 3 retail merchandising and forecasting processes, eliminating thousands of manual hours.',
        whereApplied: 'Target Corporation',
        strength: 90,
      },
    ],
  },
  {
    id: 'people',
    title: 'People and Culture',
    subtitle: 'Growing leaders, capability & site compliance',
    accentColor: '#7E22CE',
    badgeBg: 'bg-purple-50 text-purple-900 border-purple-200',
    items: [
      {
        id: 'hrbp',
        name: 'HR Business Partnering',
        shortName: 'Strategic HRBP',
        proofMetric: '1,000–3,000+ Staff',
        detail: 'Partnered with Sales, Revenue, Tech, Delivery, and Store Ops leaders across India, US, and APAC.',
        whereApplied: 'Emeritus & California Burrito',
        strength: 97,
      },
      {
        id: 'leadership-360',
        name: 'Leadership Dev & 360° / Psychometrics',
        shortName: '360° & Leadership',
        proofMetric: '30% Promoted',
        detail: 'Designed and ran the 2-cohort Director+ programme across India, US, and APAC using psychometric targeting.',
        whereApplied: 'Emeritus (Director+ Cohorts)',
        strength: 93,
      },
      {
        id: 'perf-okr',
        name: 'Performance Management & OKRs',
        shortName: 'Performance & OKRs',
        proofMetric: '~400 to 3,000+ Staff',
        detail: 'Built performance management from scratch at Ather with the CTO/CHRO and rolled out OKRs at Emeritus.',
        whereApplied: 'Ather Energy & Emeritus',
        strength: 95,
      },
      {
        id: 'ta-compliance',
        name: 'High-Velocity TA & Compliance',
        shortName: 'Scale TA & Compliance',
        proofMetric: '~470 Hires in 3 Mos',
        detail: 'Hired ~70 corporate roles in 2 mos, onboarded ~400 store staff, hired across 10 IITs, and owned 150+ site compliance.',
        whereApplied: 'California Burrito & Ather',
        strength: 95,
      },
    ],
  },
  {
    id: 'strategy',
    title: 'Strategy',
    subtitle: 'Commercial problem solving alongside CEOs & CXOs',
    accentColor: '#BE123C',
    badgeBg: 'bg-rose-50 text-rose-900 border-rose-200',
    items: [
      {
        id: 'ceo-partner',
        name: 'CEO & Founder’s Office Partnership',
        shortName: 'CEO Partnership',
        proofMetric: 'Direct to CEO / CXO',
        detail: 'Turning ambiguous operational bottlenecks into clear diagnoses and systems that hold at scale.',
        whereApplied: 'California Burrito, Emeritus & Ather',
        strength: 96,
      },
      {
        id: 'margin-incentives',
        name: 'Contribution Margin Incentive Design',
        shortName: 'Margin Incentives',
        proofMetric: '+$200–300K / Qtr',
        detail: 'Redesigned Sales commissions around Contribution Margin and input metrics, lifting productivity 10–15% & cutting cost ~$100K.',
        whereApplied: 'Emeritus (Global Sales)',
        strength: 96,
      },
      {
        id: 'workforce-budget',
        name: 'Workforce & Headcount Planning',
        shortName: 'Headcount Planning',
        proofMetric: 'India, US & APAC',
        detail: 'Drove Revenue team productivity studies that set empirical headcount allocation and hiring budgets.',
        whereApplied: 'Emeritus (~1,000 Staff)',
        strength: 92,
      },
      {
        id: 'exec-story',
        name: 'Executive Diagnosis & Storytelling',
        shortName: 'Funnel Diagnosis',
        proofMetric: '12,600+ Apps / 25 Roles',
        detail: 'Proved conversion and pay bands—not candidate supply—were the true hiring constraint in 8 weeks.',
        whereApplied: 'California Burrito & PwC',
        strength: 94,
      },
    ],
  },
  {
    id: 'org',
    title: 'Org Design',
    subtitle: 'Structuring levels, rewards & M&A integration',
    accentColor: '#0F766E',
    badgeBg: 'bg-teal-50 text-teal-900 border-teal-200',
    items: [
      {
        id: 'org-transform',
        name: 'Organisation & Workforce Transformation',
        shortName: 'Org Transformation',
        proofMetric: '5 Industries Scaled',
        detail: 'Restructured base-heavy teams and aligned talent priorities with CXOs and Senior Partners during transitions.',
        whereApplied: 'Emeritus, PwC & Ather',
        strength: 95,
      },
      {
        id: 'career-levelling',
        name: 'Career Frameworks & Job Levelling',
        shortName: 'Career Levelling',
        proofMetric: '3.0 → 4.6 Engagement',
        detail: 'Built job evaluation and levelling frameworks that opened interim-manager roles and team-lead pipelines.',
        whereApplied: 'Emeritus Sales Org',
        strength: 94,
      },
      {
        id: 'korn-ferry',
        name: 'Total Rewards & Korn Ferry Comp',
        shortName: 'Korn Ferry Rewards',
        proofMetric: 'Recalibrated Bands',
        detail: 'Benchmarked Tech Consulting pay with Korn Ferry and launched a global Recognition & Rewards framework.',
        whereApplied: 'PwC Acceleration Center',
        strength: 91,
      },
      {
        id: 'ma-integration',
        name: 'Cross-Border M&A Integration',
        shortName: 'M&A Integration',
        proofMetric: 'Multi-Region Alignment',
        detail: 'Led people integration for cross-border acquisitions, harmonizing policies and OKR rhythms across regions.',
        whereApplied: 'Emeritus Global Acquisitions',
        strength: 92,
      },
    ],
  },
];

export const EDUCATION_DATA = {
  degrees: [
    {
      degree: 'PGDM, HRM & Strategy',
      institution: 'TAPMI, Manipal',
      year: '2018',
    },
    {
      degree: 'BBM, Human Resources',
      institution: 'Christ University, Bengaluru',
      year: '2012',
    },
  ],
  executiveEducation: [
    { program: 'Corporate Governance', institution: 'Columbia Business School', year: '2025' },
    { program: 'High-Impact Teams', institution: 'Wharton', year: '2024' },
    { program: 'Talent Management', institution: 'Wharton', year: '2023' },
    { program: 'People Analytics', institution: 'Cambridge', year: '2022' },
  ],
};
