<div align="center">
  <h1>LabNet TKJ</h1>
  <p><strong>Dashboard Implementasi Jaringan LAN Laboratorium Komputer</strong></p>
  <p>
    <a href="https://github.com/Ridhorestiawan/labnet-tkj">GitHub</a> •
    <a href="#fitur">Fitur</a> •
    <a href="#teknologi">Teknologi</a> •
    <a href="#struktur-halaman">Halaman</a> •
    <a href="#cara-menjalankan">Cara Menjalankan</a>
  </p>
</div>

---

## 📌 Tentang

**LabNet TKJ** adalah website dokumentasi dan monitoring implementasi jaringan LAN di laboratorium komputer. Dibangun sebagai proyek akhir untuk Program Studi Pendidikan Teknologi Informasi, Universitas Lampung.

Website ini menyajikan informasi topologi jaringan, daftar perangkat, konfigurasi IP, monitoring status perangkat secara real-time, dan kontak pengelola — semuanya dalam satu dashboard statis yang ringan dan responsif.

---

## ✨ Fitur

| Fitur | Keterangan |
|-------|------------|
| 🏠 **Beranda** | Dashboard dengan ringkasan informasi |
| ℹ️ **Tentang** | Informasi proyek dan teknologi |
| 🌐 **Topologi Interaktif** | 3 jenis topologi (Star, Bus, Ring) dalam tab system + klik node buka modal detail |
| 🖥️ **Perangkat** | Tabel daftar perangkat jaringan |
| ⚙️ **Konfigurasi** | Panduan IP, subnet, gateway, troubleshooting jaringan |
| 📊 **Monitoring** | Status 20 PC real-time + mini chart Canvas |
| 📞 **Kontak** | Informasi kontak pengelola |
| 🌙 **Dark Mode** | Toggle tema gelap/terang, tersimpan di localStorage |
| 📱 **Responsive** | Mendukung desktop, tablet, dan mobile |

---

## 🛠️ Teknologi

| Teknologi | Kegunaan |
|-----------|----------|
| **HTML5** | Struktur dan semantic markup |
| **CSS3** | Styling, CSS Variables, Flexbox, Grid, animasi, responsive design |
| **JavaScript** | Monitoring real-time, dark mode, tab system, modal interaktif, chart Canvas, IntersectionObserver |

> **Tanpa framework berat & tanpa database** — ringan dan bisa dijalankan langsung dari browser.

---

## 📄 Struktur Halaman

```
labnet-tkj/
├── index.html           # Beranda (Dashboard)
├── tentang.html         # Informasi proyek
├── topologi.html        # Topologi Star, Bus, Ring (tab system)
├── perangkat.html       # Daftar perangkat jaringan
├── konfigurasi.html     # Panduan konfigurasi jaringan
├── monitoring.html      # Monitoring perangkat real-time
├── kontak.html          # Kontak pengelola
├── favicon.svg           # Icon website
├── css/
│   └── style.css        # Semua styling
├── js/
│   ├── main.js          # Shared: hamburger, dark mode, back-to-top, fade-in
│   └── monitoring.js    # Monitoring 20 PC + chart Canvas
└── README.md
```

---

## 🚀 Cara Menjalankan

1. **Clone repositori:**
   ```bash
   git clone https://github.com/Ridhorestiawan/labnet-tkj.git
   ```

2. **Buka file HTML:**
   - Klik ganda `index.html` atau buka via browser
   - Atau jalankan dengan live server (VS Code Live Server, dll.)

3. **Navigasi:**
   - Gunakan navbar untuk berpindah halaman
   - Klik node pada diagram topologi Star untuk detail perangkat
   - Klik tab (Star / Bus / Ring) untuk ganti jenis topologi
   - Klik toggle 🌙/☀️ di navbar untuk dark mode

> Tidak perlu installasi server atau database — cukup browser modern.

---

## 📸 Tampilan Website

| Halaman | Deskripsi |
|---------|-----------|
| **Beranda** | Dashboard 4 kartu informasi |
| **Topologi Star** | SVG interaktif — klik node buka modal detail IP & fungsi |
| **Topologi Bus** | Diagram backbone horizontal dengan 5 PC + Server |
| **Topologi Ring** | Diagram sirkular dengan 6 node + token passing |
| **Konfigurasi** | Tabel IP 14 perangkat + panduan troubleshooting |
| **Monitoring** | 20 PC real-time + grafik riwayat online/offline |
| **Dark Mode** | Tampilan gelap di semua halaman |

---

## 🔮 Pengembangan Lanjutan

- [ ] Integrasi backend & database untuk data asli (ping/SNMP)
- [ ] Notifikasi real-time via email/WhatsApp
- [ ] Fitur login untuk pengelola
- [ ] Export laporan PDF
- [ ] Grafik historis uptime perangkat

---

<div align="center">
  <p>Dibuat oleh <strong>Ridho Restiawan</strong></p>
  <p>Program Studi Pendidikan Teknologi Informasi — Universitas Lampung</p>
  <p>© 2026 LabNet TKJ</p>
</div>
