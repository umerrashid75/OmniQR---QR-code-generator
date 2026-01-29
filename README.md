# OmniQR - Universal QR Code Generator

![OmniQR Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**OmniQR** is a modern, privacy-focused, and fully responsive web application for generating various types of QR codes. Built with performance and user experience in mind, it allows you to create, customize, and download QR codes instantly directly from your browser.

> **Note:** All QR codes are generated client-side. No data is sent to any server, ensuring 100% privacy.

---

## Features

- **Multiple Support Types:**
  - **URL** - Direct links to websites.
  - **Text** - Plain text messages.
  - **Wi-Fi** - Instant connection QR codes (WPA/WEP/No Pass).
  - **vCard** - Share contact details easily.
  - **Communication** - Email, SMS, and WhatsApp templates.
  - **Payments** - UPI, PayPal, and Crypto wallet addresses.
  - **Location** - Geo-coordinates for maps.

- **Customization:**
  - Adjustable foreground and background colors.
  - Error correction levels (L, M, Q, H).
  - Custom margin sizing.

- **Export & Share:**
  - Download high-quality **PNG** images.
  - **Custom Filenames:** Name your files before downloading.
  - Native **Share API** integration for mobile devices.

- **Mobile Optimizations:**
  - Fully responsive design.
  - PWA-ready (Offline support).
  - Prevents auto-zoom on iOS inputs.

---

## Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS, Lucide React (Icons)
- **QR Generation:** `qrcode` library
- **Deployment:** Vercel / Netlify / GitHub Pages ready

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/umerrashid75/OmniQR---QR-code-generator.git
   cd "QR Generator"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the application.

## License

This project is open-source and available under the **MIT License**.
