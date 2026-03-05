export interface ResumeItemData {
  title: string;
  subtitle?: string;
  description?: string;
  items?: string[];
}

export interface ResumeYearGroup {
  year: string;
  items: ResumeItemData[];
}

export interface ResumeSectionData {
  id: string;
  title: string;
  groups?: ResumeYearGroup[];
  items?: ResumeItemData[];
}

export const WORK_EXPERIENCE: ResumeSectionData = {
  id: 'work',
  title: 'Work Experience',
  groups: [
    {
      year: 'iFreight.id',
      items: [{ title: 'UI/UX Designer', subtitle: 'Sept 2023 – Now' }]
    },
    {
      year: 'Anteraja',
      items: [{ title: 'Product Designer', subtitle: 'June 2022 – Aug 2023' }]
    },
    {
      year: 'WidaTech',
      items: [{ title: 'UI/UX Developer', subtitle: 'May 2021 – May 2022' }]
    },
    {
      year: 'International Office, Universitas Padjadjaran',
      items: [
        { title: 'Design Intern Supervisor', subtitle: 'Aug 2019 – Mar 2020' },
        { title: 'Junior Designer Intern', subtitle: 'Feb – Aug 2019' }
      ]
    },
    {
      year: 'Kargo Technologies',
      items: [{ title: 'Product Design Intern', subtitle: 'Jan – Nov 2019' }]
    }
  ]
};

export const EDUCATION: ResumeSectionData = {
  id: 'education',
  title: 'Education',
  items: [
    {
      title: 'Master of Information Technology (M.T.I.)',
      subtitle: 'Universitas Indonesia (2024 – 2025)'
    },
    {
      title: 'Bachelor of Computer Science (S.Kom.)',
      subtitle: 'Universitas Padjadjaran (2016 – 2020)'
    }
  ]
};

export const SPEAKER: ResumeSectionData = {
  id: 'speaker',
  title: 'Speaker Experience',
  items: [
    { title: 'Speaker, “Experiences in IT Competitions”', subtitle: 'CBS 2019' }
  ]
};

export const VOLUNTEER: ResumeSectionData = {
  id: 'volunteer',
  title: 'Volunteer Experience',
  items: [
    { title: 'Campus Ambassador', subtitle: 'International MUN (2022)' },
    { title: 'Channel Management Staff', subtitle: 'PT Bank Index Selindo (2021 – 2022)' },
    { title: 'WordPress Developer', subtitle: 'CHIuXiD (Indonesia ACM SIGCHI Chapter) (2019 – 2020)' },
    { title: 'Designer', subtitle: 'TEDxUnpad (2018 – 2020)' }
  ]
};

export const ORGANIZATIONS: ResumeSectionData = {
  id: 'orgs',
  title: 'Organizations',
  groups: [
    {
      year: '2018',
      items: [
        { title: 'Staff, Literature Division', subtitle: 'Christian Students Community of Misiologi, Unpad' },
        { title: 'Staff, Media and Information Bureau', subtitle: 'Kabinet Simfoni, Himatif Executive Board, Unpad' },
        { title: 'Staff, Media and Information Department', subtitle: 'Temporary FMIPA Student Executive Board, Unpad (Until May)' }
      ]
    },
    {
      year: '2017',
      items: [
        { title: 'Staff, Literature Division', subtitle: 'Christian Students Community of Misiologi, Unpad' },
        { title: 'Staff, Media and Information Department', subtitle: 'Kabinet Impresif, Himatif Executive Board, Unpad' },
        { title: 'Staff, Media Department', subtitle: 'Kabinet Transformasi, FMIPA Student Executive Board, Unpad' }
      ]
    },
    {
      year: '2014',
      items: [{ title: 'Staff, Print Media Division', subtitle: 'PIDAS, 81st Senior High School of Jakarta' }]
    },
    {
      year: '2012',
      items: [{ title: 'Treasurer, OSIS', subtitle: '5th Penabur Christian Junior High School' }]
    }
  ]
};

export const COMMITTEES: ResumeSectionData = {
  id: 'committees',
  title: 'Committees',
  groups: [
    {
      year: '2018',
      items: [
        { title: 'Secretary', subtitle: 'Technopreneur 2018' },
        { title: 'Head, Pub & Doc Division', subtitle: 'CBS 2018' },
        { title: 'Staff, Visual Design Division', subtitle: 'PEF 2018' },
        { title: 'Documentation Division', subtitle: 'Imazine 5 Magazine' },
        { title: 'Head, Comm & Info Deputy', subtitle: 'Padjadjaran University Election 2018' }
      ]
    },
    {
      year: '2017',
      items: [
        { title: 'Staff, Medical Division', subtitle: 'Instagram 2017' },
        { title: 'Staff, Pub & Doc', subtitle: 'Technopreneur 2017' },
        { title: 'Staff, Pub & Doc', subtitle: 'MIPA Bersatu 2017' },
        { title: 'Staff, Medical Division', subtitle: 'Character Building Season 2017' },
        { title: 'Staff, Pub & Doc', subtitle: 'Misiologi Mengucap Syukur 2017' },
        { title: 'Secretary', subtitle: 'MIPA FEST 2017' },
        { title: 'Secretary', subtitle: 'MIPA Mandiri 2017' },
        { title: 'Editor-in-Chief', subtitle: 'Imazine 4 Magazine' }
      ]
    },
    {
      year: '2016',
      items: [
        { title: 'Staff, Event Division', subtitle: 'C-TOS' },
        { title: 'Secretary', subtitle: 'WACANA' },
        { title: 'Treasurer', subtitle: 'Great Deliberation III of Himatif' },
        { title: 'Staff, Pub & Doc', subtitle: 'Year-End Assembly of Unpad BEM' }
      ]
    },
    {
      year: '2014',
      items: [{ title: 'Creative Division', subtitle: 'Klakson Magazine' }]
    }
  ]
};

export const COMPETITIONS: ResumeSectionData = {
  id: 'competitions',
  title: 'Competitions',
  groups: [
    {
      year: '2020',
      items: [{ title: 'Monica App', subtitle: 'HIPSMU (Hibah Inovasi Pre-Startup Mahasiswa Unpad) 2020' }]
    },
    {
      year: '2019',
      items: [
        { title: 'Most Outstanding Student of Informatics 2019' },
        { title: 'KECE', subtitle: 'GEMASTIK 12 – Smart City Category' },
        { title: 'KCI', subtitle: 'GEMASTIK 12 – Scientific IT Paper Category' },
        { title: 'Indira', subtitle: 'KataHack' },
        { title: 'Indosat Ooredoo HackData' }
      ]
    },
    {
      year: '2018',
      items: [
        { title: 'Kala App', subtitle: 'Arkavidia ITB Technovation' },
        { title: 'Rubbish Ranger Game', subtitle: 'MAGE ITS Game Dev' },
        { title: 'Runner-up', subtitle: 'Instagram 2018 Women’s Chess' },
        { title: '“Home Smart Home”', subtitle: 'COIN 2018 Infographic Design' },
        { title: 'Favorite Winner, SpotEvent App', subtitle: 'IFEST 2018 – Android Dev' },
        { title: '2nd Winner, Monica App', subtitle: 'GEMASTIK 11 – UX Design' },
        { title: 'FIA (Financial Assistant)', subtitle: 'CIMB 3D Conquest – Fintech' },
        { title: 'Huawei ICT Competition' }
      ]
    },
    {
      year: '2017',
      items: [
        { title: 'Runner-up', subtitle: 'Instagram 2017 Women’s Chess' },
        { title: '“The Infographic of Selfie”', subtitle: 'COIN 2017 Infographic Design' }
      ]
    }
  ]
};

export const SEMINARS: ResumeSectionData = {
  id: 'seminars',
  title: 'Seminars & Training',
  groups: [
    {
      year: '2018',
      items: [
        { title: 'TOEFL Training and Test' },
        { title: 'IFEST National Seminar 2018', subtitle: '“Tech Up Your Knowledge for Better Security”' },
        { title: 'IndonesiaNEXT 2018 Training' },
        { title: 'Wardah Beauty Class' },
        { title: 'Tech in Asia 2018' },
        { title: 'EHEF.ID 2018 Bandung' }
      ]
    },
    {
      year: '2017',
      items: [
        { title: 'Scholarship Seminar & Expo 2017' },
        { title: '“Prepare for the Future”', subtitle: 'Himatif' },
        { title: 'DILo Bandung Road to Campus', subtitle: '“Digitalpreneur Virus and Helping Digitalpreneurs Grow Their Business”' },
        { title: 'HAITI: Making LINE Chatbot' },
        { title: 'Huawei Tech Day 2017' },
        { title: 'National Seminar', subtitle: '“Financial Technology and the Growth of Online-Based Businesses in Indonesia”' },
        { title: 'Google I/O Extended 2017 Depok' },
        { title: 'LINE@ Official Account Socialization' },
        { title: 'IFEST National Seminar 2017', subtitle: '“Empowering Entrepreneurs Everywhere in the Era of IoT”' },
        { title: 'Cyber Security Awareness Seminar' },
        { title: 'IndonesiaNEXT 2017' },
        { title: 'Tech in Asia 2017' },
        { title: 'TAKIS (Talk About Graphics)', subtitle: 'KGF Unpad 2017' },
        { title: 'General Lecture on Financial Literacy Education', subtitle: '“Understanding the Business of Financing Companies”' }
      ]
    },
    {
      year: '2016',
      items: [
        { title: 'CBS 2016', subtitle: 'Informatics Students Association (Himatif)' },
        { title: 'IFEST National Seminar 2016', subtitle: '“Innovation Technology to Build a Smart Society”' },
        { title: 'Indonesia Android Kejar 2 (Google)' },
        { title: 'Himatif Supercamp 2016' }
      ]
    },
    {
      year: '2013',
      items: [{ title: 'Motivational Training, Semarai Daya Psikologi' }]
    }
  ]
};

export const ALL_RESUME_DATA = [
  WORK_EXPERIENCE,
  EDUCATION,
  SPEAKER,
  VOLUNTEER,
  ORGANIZATIONS,
  COMMITTEES,
  COMPETITIONS,
  SEMINARS
];
