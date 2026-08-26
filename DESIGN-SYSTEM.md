# DESIGN SYSTEM & VISUAL GUIDELINES
**PT CHAND HAJAR ASWAD**  
*Poultry Processing & Cold-Chain Distribution*  
*Version:* 1.0.0 (Static Production)  
*Date:* 2025 / 2026  

---

## 1. Brand Identity & Direction
- **Brand Name:** PT CHAND HAJAR ASWAD
- **Industry:** Pemotongan Ayam Modern (Poultry Processing), Karkas, dan Rantai Dingin (Cold Chain).
- **Brand Personality:**
  - *Professional:* Standar korporasi pangan modern.
  - *Trustworthy:* Kemitraan transparan dan reliabel.
  - *Hygienic:* Menomorsatukan sanitasi dan kebersihan.
  - *Premium:* Kualitas produk karkas dan pengolahan terbaik.
  - *Modern & Reliable:* Pasokan stabil dengan logistik terstandar.
- **Design Concept:** `Modern Corporate + Premium Food Industry`
- **Visual Principles:** Whitespace lega, tipografi tegas, kontras warna korporat yang kokoh (Deep Navy & Gold), tanpa elemen kartun, dan tanpa animasi berlebihan.

---

## 2. Color System & Palette

| Token / Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Deep Navy | `#071A2B` | Brand color utama, hero background overlay, heading korporat |
| **Primary Dark**| Dark Navy | `#04111D` | Footer, dark section backgrounds, navbar scrolled state |
| **Primary Soft**| Navy Soft | `#102A40` | Subtle dark surfaces, deep accents |
| **Accent** | Gold | `#D9A441` | Tombol CTA, icon highlight, active state indicator, decorative bars |
| **Accent Hover**| Warm Gold | `#E7B85C` | Hover state tombol CTA, secondary interactive highlights |
| **Accent Soft** | Gold Soft | `#F3D99B` | Eyebrow badges, decorative subtle borders |
| **Neutral White**| White | `#FFFFFF` | Background halaman utama, card surfaces |
| **Neutral Light**| Off White | `#F7F7F5` | Alternating section backgrounds, form wrappers |
| **Neutral Border**| Soft Gray | `#E8EBEE` | Border card, divider lines, subtle frames |
| **Text Muted** | Gray | `#6B7280` | Body paragraph, secondary captions |
| **Text Main** | Dark Text | `#17212B` | Heading text, primary readable text |

---

## 3. CSS Variables (`:root`)
Semua token warna dan layout didefinisikan di `css/style.css`:
```css
:root {
    --color-primary: #071A2B;
    --color-primary-dark: #04111D;
    --color-primary-soft: #102A40;
    
    --color-accent: #D9A441;
    --color-accent-hover: #E7B85C;
    --color-accent-soft: #F3D99B;
    
    --color-white: #FFFFFF;
    --color-off-white: #F7F7F5;
    --color-gray-soft: #E8EBEE;
    --color-gray: #6B7280;
    --color-text: #17212B;

    --font-main: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
    --space-section: 96px;

    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
}
```

---

## 4. Typography Scale & Font
- **Primary Font Family:** `Plus Jakarta Sans` (Google Fonts: weights 300, 400, 500, 600, 700, 800)
- **H1 (Hero Heading):** `clamp(2.5rem, 5.5vw, 4.25rem)` / Weight: 800 / Line Height: 1.15
- **H2 (Section Titles):** `clamp(2rem, 3.5vw, 2.75rem)` / Weight: 800 / Line Height: 1.25
- **H3 (Card & Sub-headings):** `1.25rem – 1.5rem` / Weight: 700
- **Body Text:** `1rem (16px)` / Weight: 400–500 / Line Height: 1.7
- **Eyebrow / Small Labels:** `0.8125rem (13px)` / Weight: 700 / Uppercase / Letter Spacing: `0.15em`

---

## 5. Spacing System
- **Base Grid Units:** 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px.
- **Section Spacing (Desktop):** `padding: 96px 0;` (`--space-section`)
- **Section Spacing (Mobile):** `padding: 60px 0;`
- **Max Container Width:** 1320px (Bootstrap default container).

---

## 6. Border Radius & Elevation
- **Buttons & Small Badges:** `8px` (`--radius-sm`)
- **Cards & Highlight Boxes:** `16px` (`--radius-lg`)
- **Large Wrappers & Hero Overlays:** `24px` (`--radius-xl`)
- **Shadows:**
  - Standard Subtle: `0 4px 20px rgba(7, 26, 43, 0.05)`
  - Card Hover: `0 12px 32px rgba(7, 26, 43, 0.12)`

---

## 7. Component Systems

### 7.1 Buttons
- **Primary CTA:** Solid Gold (`#D9A441`) dengan teks Dark Navy (`#04111D`), hover bertransisi ke Warm Gold (`#E7B85C`) dengan `translateY(-2px)`.
- **Secondary CTA:** Transparent/Outline dengan border putih 40% dan teks putih, hover ke background putih translusen dengan border gold.

### 7.2 Navbar
- **Height Desktop:** 84px (Top) -> 74px (Saat di-scroll).
- **Background Initial:** Transparan dengan teks putih.
- **Background Scrolled:** `rgba(4, 17, 29, 0.92)` dengan `backdrop-filter: blur(12px)`.
- **Underline Animation:** Underline gold 2px bergerak dari kiri ke kanan dengan transisi 280ms.

### 7.3 Partner Marquee
- **Row 1:** Bergerak dari Kanan ke Kiri (35s infinite linear).
- **Row 2:** Bergerak dari Kiri ke Kanan (35s infinite linear).
- **Interactive:** Animasi berhenti (`paused`) saat kursor berada di atas card mitra.

### 7.4 Gallery
- Layout Asimetris Modern menggunakan CSS Grid 4 kolom dengan item variatif (large, wide, standard).
- Hover memunculkan dark gradient overlay, nama area, dan icon pembesar.
- Klik gambar memicu modal Lightbox Bootstrap tanpa reload halaman.

### 7.5 Contact Form
- Menjalankan arsitektur 100% Static Web.
- Form divalidasi dengan JavaScript dan langsung menyusun teks pesan terstruktur yang diteruskan ke WhatsApp resmi `+62 851-7737-1970`.

---

## 8. Aturan Pengembangan Lanjutan (Do Not Break)
1. **Diperbolehkan sesuai kebutuhan** mengganti warna Navy atau Gold dengan warna lain (seperti hijau/merah terang).
2. **Dilarang keras** menambahkan pustaka JavaScript eksternal yang berat jika tidak mendesak.
3. Seluruh elemen baru **harus** memanfaatkan CSS custom properties yang terdaftar di `:root`.