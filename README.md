# TR
# Renault Arıza Talep Formu (Fault Request Form)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-%23199900.svg?style=for-the-badge&logo=Leaflet&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Bu proje, **Renault Dacia MAİS Genel Müdürlüğü** bünyesinde geliştirilmiş, kullanıcıların araç arıza taleplerini dijital ortamda hızlı, güvenli ve lokasyon bazlı olarak iletebilmelerini sağlayan tek sayfalı bir web uygulamasıdır (SPA).

🌍 **Canlı Demo:** [renault-ariza-talep-formu-webs.vercel.app](https://renault-ariza-talep-formu-webs.vercel.app)

## 📌 Proje Özeti (Business Case)

Müşterilerin arıza kayıtlarını manuel sistemlerden dijital bir platforma taşımak amacıyla tasarlanmıştır. Kullanıcı deneyimini (UX) artırmak için süreç "Çok Adımlı Form (Multi-step Wizard)" mimarisiyle bölünmüş, kullanıcının en yakın yetkili servisi harita üzerinden interaktif olarak seçebilmesi sağlanmıştır.

## 🚀 Öne Çıkan Özellikler (Features)

*   **Çok Adımlı Form Mimarisi:** İletişim, Araç Bilgileri ve Bayi Seçimi adımları state üzerinden izole edilerek kullanıcı dostu bir akış kurgulandı.
*   **Gelişmiş İstemci Taraflı Doğrulama (Client-Side Validation):** Kullanıcı hatalarını minimize etmek için Ad, E-posta, Telefon, Şasi Numarası (17 hane) ve Plaka formatları **Regex** ile anlık olarak doğrulanmaktadır.
*   **İnteraktif Harita Entegrasyonu (Leaflet):** API üzerinden çekilen yetkili servis koordinatları, `react-leaflet` kullanılarak harita üzerinde render edilmektedir.
*   **Güvenli API İletişimi:** Bayi lokasyonları dış bir REST API'den çekilirken, token tabanlı yetkilendirme (Bearer Token) ortam değişkenleri (Environment Variables) ile korunmaktadır.
*   **KVKK Uyumlu Süreç:** Kullanıcı verilerinin işlenmesi, Modal tabanlı dinamik aydınlatma metni ve zorunlu onay mekanizması ile yasal standartlara uygun hale getirilmiştir.

## 🛠 Kullanılan Teknolojiler (Tech Stack)

*   **Framework/Kütüphane:** React.js (Create React App)
*   **Yönlendirme (Routing):** React Router DOM v7
*   **Kullanıcı Arayüzü (UI):** Material-UI (MUI v7), Emotion (Styled Components)
*   **Harita/Lokasyon:** Leaflet, React-Leaflet
*   **Deployment:** Vercel

## 📂 Kurulum ve Çalıştırma (Getting Started)

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Ön Koşullar
*   Node.js (v16 veya üzeri önerilir)
*   NPM veya Yarn

### Kurulum Adımları

1. Repoyu bilgisayarınıza klonlayın:
   ```bash
   git clone [https://github.com/yavuzs-cakmak/RenaultArizaTalepFormuWebs.git](https://github.com/yavuzs-cakmak/RenaultArizaTalepFormuWebs.git)
Proje dizinine gidin:

Bash
cd RenaultArizaTalepFormuWebs
Gerekli bağımlılıkları (dependencies) yükleyin:

Bash
npm install
Ortam değişkenlerini ayarlayın:
Proje kök dizininde bir .env dosyası oluşturun ve yetkili API erişimi için gerekli token'ı ekleyin:

Kod snippet'i
REACT_APP_API_TOKEN=sizin_gizli_token_degeriniz
Geliştirme sunucusunu başlatın:

Bash
npm start
Proje varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

🏗 Gelecek Geliştirmeler (Roadmap & Improvements)
State Management: Uygulama ölçeklendiğinde prop-drilling'i engellemek için Context API veya Redux/Zustand entegrasyonu.

Derleme Aracı (Build Tool): Performans optimizasyonu için Create React App'ten Vite mimarisine geçiş.

Unit Testing: Form validasyonları ve çok adımlı bileşenler için Jest ve React Testing Library ile test senaryolarının yazılması.
