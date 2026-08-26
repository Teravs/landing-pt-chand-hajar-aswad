# PT CHAND HAJAR ASWAD — Static Corporate Landing Page

Landing page premium, modern, dan responsif untuk **PT CHAND HAJAR ASWAD** (Rumah Potong Ayam & Distribusi Rantai Dingin Terstandar).

---

## 📌 Ringkasan Proyek
- **Tipe Proyek:** 100% Pure Static Website (Tanpa Database & Tanpa Backend).
- **Teknologi:** HTML5, CSS3, Vanilla JavaScript, Bootstrap 5 (CDN), Bootstrap Icons (CDN), Google Fonts (Plus Jakarta Sans).
- **Karakter Visual:** Premium, Higienis, Modern Corporate, Terpercaya.

---

## 🚀 Cara Menjalankan Website

Proyek ini sangat ringan dan dapat langsung dijalankan tanpa perlu instalasi Node.js, npm, backend, atau database.

### Opsi 1: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder `pt-chand-hajar-aswad/` di **VS Code**.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey) jika belum terpasang.
3. Klik kanan pada file `index.html` dan pilih **"Open with Live Server"**.
4. Website akan terbuka otomatis di browser pada alamat `http://127.0.0.1:5500/`.

### Opsi 2: Membuka Langsung di Browser
1. Masuk ke folder `pt-chand-hajar-aswad/`.
2. Klik ganda pada file `index.html`.
3. Website akan langsung terbuka di browser default Anda.

---

## 📁 Struktur File Proyek

```
pt-chand-hajar-aswad/
│
├── index.html              # Struktur utama & konten halaman static
│
├── css/
│   └── style.css           # Styling kustom, token warna, CSS grid & animasi
│
├── js/
│   └── script.js           # Vanilla JS: scroll spy, scroll reveal, modal & WhatsApp form
│
├── assets/
│   ├── images/             # Folder penyimpanan foto lokal (hero, produk, galeri, mitra)
│   │   ├── hero.jpg
│   │   ├── about.jpg
│   │   ├── products/
│   │   ├── gallery/
│   │   └── partners/
│   └── logo/
│       └── logo.png        # Logo resmi perusahaan
│
├── DESIGN-SYSTEM.md        # Panduan visual lengkap & Design Tokens
└── README.md               # Dokumentasi panduan teknis proyek
```

---

## 🛠️ Panduan Mengedit Konten & Aset

### 1. Mengubah Informasi Kontak & Lokasi
Buka `index.html` pada bagian `<section id="contact">` dan `<footer>`.
- **Alamat:** Jl Purwodadi-Semarang KM 16, Dsn. Rejosari RT.01 RW.04, Ds. Tinanding, Kec. Godong, Kab. Grobogan, Jawa Tengah 58162.
- **WhatsApp:** `+62 851-7737-1970`
- **Email:** `rpa@chandhajaraswad.com`

*Catatan untuk WhatsApp Form:* Nomor tujuan form dapat diubah pada baris `const waNumber = '6285177371970';` di file `js/script.js`.

### 2. Mengganti Gambar Placeholder dengan Gambar Asli
Cukup ganti link gambar pada `index.html` menjadi jalur lokal, contoh:
- Gambar Hero: ubah `url(...)` di `css/style.css` pada `.hero-section` ke `../assets/images/hero.jpg`.
- Gambar Produk: ubah atribut `src="..."` pada `.product-img` ke `assets/images/products/nama-file.jpg`.

### 3. Mengubah Warna & Tema
Semua warna diatur melalui CSS Custom Properties di bagian `:root` pada file `css/style.css`. Rujuk file `DESIGN-SYSTEM.md` untuk aturan kombinasi warna.

---

## 📄 Lisensi & Hak Cipta
© 2026 PT CHAND HAJAR ASWAD. Seluruh hak cipta dilindungi undang-undang.