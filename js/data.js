// ============================================================
//  SEMUA KONTEN ADA DI FILE INI — edit sesuka hati lalu refresh
// ============================================================

const SITE = {
  name: "YourName",
  year: new Date().getFullYear(),

  hero: {
    lead: "Saya membantu brand dan kreator menyunting video yang rapi, sinematik, dan engaging — dari short-form hingga film dokumenter.",
    avatar: "assets/placeholder-avatar.svg", // ganti dengan foto Anda, contoh: "assets/foto-saya.jpg"
    stats: [
      { number: "120+", label: "Video selesai" },
      { number: "5+", label: "Tahun pengalaman" },
      { number: "40+", label: "Klien puas" },
      { number: "24h", label: "Rata-rata balas" }
    ]
  },

  about: {
    body: "Berpengalaman menyunting berbagai format video: konten sosial media, iklan brand, wedding highlight, hingga dokumenter. Fokus saya di pacing, color grading, dan audio yang bersih supaya penonton tidak berpindah channel.",
    image: "assets/placeholder-work.svg", // ganti dengan foto workspace Anda
    skills: [
      { name: "Premiere Pro", level: 95 },
      { name: "After Effects", level: 88 },
      { name: "DaVinci Resolve (Color Grading)", level: 85 },
      { name: "Audio Mixing", level: 80 }
    ]
  },

  // ==========================================================
  //  KARYA / VIDEO — tambah/hapus entry sesuka hati
  //  type: "youtube" atau "vimeo"
  //  id: ID video saja (bukan URL panjang)
  //    YouTube: ambil dari link https://www.youtube.com/watch?v=XXXXXXXXXXX → id = "XXXXXXXXXXX"
  //             atau https://youtu.be/XXXXXXXXXXX → id = "XXXXXXXXXXX"
  //    Vimeo:   https://vimeo.com/123456789 → id = "123456789"
  //  thumbnail opsional: kalau kosong, thumbnail YouTube otomatis dipakai
  // ==========================================================
  works: [
    {
      title: "Showreel 2026",
      category: "Showreel",
      type: "youtube",
      id: "dQw4w9WgXcQ", // ← GANTI dengan ID video YouTube Anda
      description: "Kompilasi potongan kerja terbaik tahun ini.",
      thumbnail: ""
    },
    {
      title: "Brand Video — Fashion Label",
      category: "Komersial",
      type: "youtube",
      id: "dQw4w9WgXcQ", // ← GANTI
      description: "Iklan brand fashion, pacing cepat dengan color grading hangat.",
      thumbnail: ""
    },
    {
      title: "Wedding Highlight — Andi & Sinta",
      category: "Wedding",
      type: "youtube",
      id: "dQw4w9WgXcQ", // ← GANTI
      description: "Highlight cinematic 3 menit dengan audio storytelling.",
      thumbnail: ""
    },
    {
      title: "Dokumenter UMKM Lokal",
      category: "Dokumenter",
      type: "youtube",
      id: "dQw4w9WgXcQ", // ← GANTI
      description: "Cerita pemilik usaha dari garage sampai toko.",
      thumbnail: ""
    },
    {
      title: "Short-form — Tips Editing",
      category: "Sosial Media",
      type: "youtube",
      id: "dQw4w9WgXcQ", // ← GANTI
      description: "Konten vertikal untuk TikTok/Reels, retention-optimized.",
      thumbnail: ""
    },
    {
      title: "Music Video — Indie Band",
      category: "Musik",
      type: "youtube",
      id: "dQw4w9WgXcQ", // ← GANTI
      description: "Editing rhythmic dengan beat-sync dan efek transisi kreatif.",
      thumbnail: ""
    }
  ],

  // ==========================================================
  //  KATEGORI FILTER — muncul otomatis dari works, boleh diatur manual:
  //  tulis ["Semua", "Showreel", "Komersial", ...] atau [] untuk auto
  // ==========================================================
  filterCategories: [],

  services: [
    {
      icon: "🎬",
      title: "Video Editing",
      desc: "Editing full-length video: promosi, profil perusahaan, tutorial, hingga konten YouTube."
    },
    {
      icon: "⚡",
      title: "Short-form Content",
      desc: "Reels, TikTok, Shorts dengan hook kuat dan pacing cepat yang bikin retention naik."
    },
    {
      icon: "🎨",
      title: "Color Grading",
      desc: "Grading sinematik di DaVinci Resolve supaya mood visual konsisten dan premium."
    },
    {
      icon: "🔊",
      title: "Audio Cleaning & Mixing",
      desc: "Noise reduction, balancing dialog, music bed, dan sound design yang bersih."
    },
    {
      icon: "✨",
      title: "Motion Graphics",
      desc: "Lower third, title animation, infographic, dan VFX sederhana di After Effects."
    },
    {
      icon: "💍",
      title: "Wedding Highlight",
      desc: "Highlight cinematic dan same-day edit untuk hari pernikahan Anda."
    }
  ],

  contact: {
    email: "emailanda@email.com", // ← GANTI
    whatsapp: "6281234567890",    // ← GANTI (format internasional tanpa +)
    whatsappText: "Chat WhatsApp",
    instagram: "yourusername",    // ← GANTI
    youtube: ""                   // kosongkan kalau tidak dipakai
  }
};
