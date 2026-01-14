// Competition data extracted from original HTML
export const competitions = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Rancang website kreatif dan responsif dengan ide inovatif.',
    category: 'design',
    waves: [
      {
        wave: 1,
        label: 'Gelombang 1',
        startDate: '2025-07-21',
        endDate: '2025-08-13',
        price: 50000,
        priceFormatted: 'Rp50.000'
      },
      {
        wave: 2,
        label: 'Gelombang 2',
        startDate: '2025-08-15',
        endDate: '2025-08-30',
        price: 60000,
        priceFormatted: 'Rp60.000'
      }
    ],
    registrationUrl: '#',
    guideUrl: '#',
    color: '#0066FF'
  },
  {
    id: 2,
    title: 'Cisco Packet Tracer',
    description: 'Uji keahlianmu dalam konfigurasi dan simulasi jaringan komputer.',
    category: 'networking',
    waves: [
      {
        wave: 1,
        label: 'Gelombang 1',
        startDate: '2025-07-21',
        endDate: '2025-08-08',
        price: 75000,
        priceFormatted: 'Rp75.000'
      },
      {
        wave: 2,
        label: 'Gelombang 2',
        startDate: '2025-08-11',
        endDate: '2025-08-30',
        price: 90000,
        priceFormatted: 'Rp90.000'
      }
    ],
    registrationUrl: '#',
    guideUrl: '#',
    color: '#FF006E'
  },
  {
    id: 3,
    title: 'Poster Digital',
    description: 'Ekspresikan pesan dan kreativitasmu lewat desain poster digital.',
    category: 'design',
    waves: [
      {
        wave: 1,
        label: 'Gelombang 1',
        startDate: '2025-07-21',
        endDate: '2025-08-08',
        price: 75000,
        priceFormatted: 'Rp75.000'
      },
      {
        wave: 2,
        label: 'Gelombang 2',
        startDate: '2025-08-11',
        endDate: '2025-08-30',
        price: 90000,
        priceFormatted: 'Rp90.000'
      }
    ],
    registrationUrl: '#',
    guideUrl: '#',
    color: '#9D00FF'
  },
  {
    id: 4,
    title: 'Video Kreatif',
    description: 'Buat video inspiratif dan inovatif untuk menyampaikan ide terbaikmu.',
    category: 'multimedia',
    waves: [
      {
        wave: 1,
        label: 'Gelombang 1',
        startDate: '2025-07-21',
        endDate: '2025-08-08',
        price: 100000,
        priceFormatted: 'Rp100.000'
      },
      {
        wave: 2,
        label: 'Gelombang 2',
        startDate: '2025-08-11',
        endDate: '2025-08-30',
        price: 125000,
        priceFormatted: 'Rp125.000'
      }
    ],
    registrationUrl: '#',
    guideUrl: '#',
    color: '#00FF66'
  }
];

// Timeline stages for the competition
export const timelineStages = [
  {
    id: 1,
    name: 'Registration',
    nameId: 'Pendaftaran',
    startDate: '2025-07-21',
    endDate: '2025-08-30',
    status: 'active', // active | upcoming | completed
    description: 'Pendaftaran peserta gelombang 1 & 2 untuk semua kategori lomba',
    icon: '📝',
    color: '#0066FF'
  },
  {
    id: 2,
    name: 'Submission',
    nameId: 'Pengumpulan Karya',
    startDate: '2025-09-01',
    endDate: '2025-09-15',
    status: 'upcoming',
    description: 'Periode pengumpulan karya untuk semua kategori lomba',
    icon: '📤',
    color: '#FF006E'
  },
  {
    id: 3,
    name: 'Judging',
    nameId: 'Penjurian',
    startDate: '2025-09-16',
    endDate: '2025-09-19',
    status: 'upcoming',
    description: 'Proses penilaian karya oleh juri profesional',
    icon: '⚖️',
    color: '#9D00FF'
  },
  {
    id: 4,
    name: 'Finals',
    nameId: 'Grand Final',
    startDate: '2025-09-20',
    endDate: '2025-09-20',
    status: 'upcoming',
    description: 'Grand Final & Pengumuman Pemenang di Universitas Pendidikan Ganesha, Bali',
    icon: '🏆',
    color: '#FFFF00'
  }
];

// Mock leaderboard data
export const leaderboardData = {
  totalParticipants: 342,
  lastUpdate: new Date().toISOString(),
  categories: {
    webDesign: { count: 89, percentage: 26 },
    ciscoPacketTracer: { count: 127, percentage: 37 },
    posterDigital: { count: 76, percentage: 22 },
    videoKreatif: { count: 50, percentage: 15 }
  },
  topSchools: [
    { rank: 1, name: 'SMA Negeri 1 Jakarta', participants: 15, province: 'DKI Jakarta' },
    { rank: 2, name: 'SMA Negeri 3 Bandung', participants: 12, province: 'Jawa Barat' },
    { rank: 3, name: 'SMA Negeri 5 Surabaya', participants: 11, province: 'Jawa Timur' },
    { rank: 4, name: 'SMA Negeri 1 Denpasar', participants: 10, province: 'Bali' },
    { rank: 5, name: 'SMA Negeri 2 Yogyakarta', participants: 9, province: 'DI Yogyakarta' }
  ],
  topProvinces: [
    { rank: 1, name: 'DKI Jakarta', participants: 45 },
    { rank: 2, name: 'Jawa Barat', participants: 38 },
    { rank: 3, name: 'Jawa Timur', participants: 35 },
    { rank: 4, name: 'Bali', participants: 28 },
    { rank: 5, name: 'DI Yogyakarta', participants: 24 }
  ]
};

// Objectives data
export const objectives = [
  {
    id: 1,
    title: 'Ajang Prestasi',
    description: 'Wadah bagi siswa bersaing di tingkat nasional.',
    icon: '🏆',
    color: '#FFD700'
  },
  {
    id: 2,
    title: 'Pengembangan Keterampilan',
    description: 'Melatih kemampuan dan eksplorasi minat di bidang TIK.',
    icon: '🧠',
    color: '#32CD32'
  },
  {
    id: 3,
    title: 'Pengalaman Kompetitif',
    description: 'Meningkatkan pengalaman siswa dan portofolio skala nasional.',
    icon: '🤝',
    color: '#1E90FF'
  },
  {
    id: 4,
    title: 'Pengenalan Jurusan TI',
    description: 'Mengenalkan Jurusan TI sebagai pilihan studi lanjutan.',
    icon: '💻',
    color: '#9932CC'
  }
];
