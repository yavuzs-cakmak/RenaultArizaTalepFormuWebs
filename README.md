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

## 📸 Projenin Canlı'da Fotoğrafları

**1. Anasayfa**
![Anasayfa](https://github.com/user-attachments/assets/e1b5c067-7b6b-4f00-a53b-1271878fc794)

---

**2. Arıza Talep Formu için İletişim Bilgileri Formu**
![Arıza Talep Formu için İletişim Bilgileri Formu](https://github.com/user-attachments/assets/58056b49-277f-40a4-9dcb-72c677daa21e)

---

**3. Arıza Talep Formu için Araç ve Arıza Bilgileri Formu**
![Arıza Talep Formu için Araç ve Arıza Bilgileri Formu](https://github.com/user-attachments/assets/6d9384ea-de69-4c15-a649-afacab1a14a2)

---

**4. Servis / Bakım Bayi Listesi Seçim Ekranı**
![Servis / Bakım Bayi Listesi Seçim Ekranı](https://github.com/user-attachments/assets/077e9554-4074-4b0c-9777-47dcedee62a5)

---

**5. Arıza Talebiniz Başarıyla Gönderilmiştir Alert Mesajı**
![Arıza Talebiniz Başarıyla Göncerilmiştir Alert Mesajı](https://github.com/user-attachments/assets/7a8934c6-01cd-49f3-a072-5bd6c2585604)

---

**6. Talebiniz Başarıyla Alınmıştır Bilgi Mesajı Ekranı**
![Talebiniz Başarıyla Alınmıştır Bilgi Mesajı Ekranı](https://github.com/user-attachments/assets/a61ddc0b-920c-4395-89ef-6bdd68744e3c)

---

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

### 1. **Repoyu bilgisayarınıza klonlayın:**
   ```bash
   git clone [https://github.com/yavuzs-cakmak/RenaultArizaTalepFormuWebs.git](https://github.com/yavuzs-cakmak/RenaultArizaTalepFormuWebs.git)

- 2. Proje dizinine gidin:
       cd RenaultArizaTalepFormuWebs
- 3. Gerekli bağımlılıkları (dependencies) yükleyin:
       npm install
- 4. Ortam değişkenlerini ayarlayın:
Proje kök dizininde bir .env dosyası oluşturun ve yetkili API erişimi için gerekli token'ı ekleyin:
       REACT_APP_API_TOKEN=sizin_gizli_token_degeriniz
- 5. Geliştirme sunucusunu başlatın:
       npm start dev
       Proje varsayılan olarak http://localhost:[size özel adresiniz] adresinde çalışacaktır.
```

## 🏗 Gelecek Geliştirmeler (Roadmap & Improvements)
* State Management: Uygulama ölçeklendiğinde prop-drilling'i engellemek için Context API veya Redux/Zustand entegrasyonu.

* Derleme Aracı (Build Tool): Performans optimizasyonu için Create React App'ten Vite mimarisine geçiş.

* Unit Testing: Form validasyonları ve çok adımlı bileşenler için Jest ve React Testing Library ile test senaryolarının yazılması.

  ---

 # EN
# Renault Fault Request Form

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-%23199900.svg?style=for-the-badge&logo=Leaflet&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

This project is a single-page web application (SPA) developed within the **Renault Dacia MAİS Headquarters**, allowing users to submit vehicle fault requests digitally in a fast, secure, and location-based manner.

🌍 **Live Demo**: [renault-ariza-talep-formu-webs.vercel.app](https://renault-ariza-talep-formu-webs.vercel.app)

## 📌 Project Summary (Business Case)
It was designed to migrate customer fault logs from manual systems to a digital platform. To improve the user experience (UX), the process was divided using a "Multi-step Form (Wizard)" architecture, allowing the user to interactively select the nearest authorized dealer on the map.

## 📸 Photos of the Project in Action

**1. Homepage**-
![Homepage](https://github.com/user-attachments/assets/e1b5c067-7b6b-4f00-a53b-1271878fc794)

---

**2. Contact Information Form for Fault Request Form**-
![Contact Information Form for Fault Request Form](https://github.com/user-attachments/assets/58056b49-277f-40a4-9dcb-72c677daa21e)

---

**3. Vehicle and Fault Information Form for the Fault Request Form**-
![Vehicle and Fault Information Form for the Fault Request Form](https://github.com/user-attachments/assets/6d9384ea-de69-4c15-a649-afacab1a14a2)

---

**4. Service / Maintenance Dealer List Selection Screen**-
![Service / Maintenance Dealer List Selection Screen](https://github.com/user-attachments/assets/077e9554-4074-4b0c-9777-47dcedee62a5)

---

**5. "Service Request Successfully Submitted" Alert Message**-
![A"Service Request Successfully Submitted" Alert Message](https://github.com/user-attachments/assets/7a8934c6-01cd-49f3-a072-5bd6c2585604)

---

**6. Request Successfully Received – Information Message Screen**-
![Request Successfully Received – Information Message Screen](https://github.com/user-attachments/assets/a61ddc0b-920c-4395-89ef-6bdd68744e3c)

---

## 🚀 Key Features
**Multi-Step Form Architecture:** The Contact, Vehicle Information, and Dealer Selection steps were isolated via state, creating a user-friendly flow.

**Advanced Client-Side Validation:** To minimize user errors, Name, Email, Phone, VIN (17 digits), and License Plate formats are instantly validated using **Regex.**

**Interactive Map Integration (Leaflet):** Authorized dealer coordinates fetched via API are rendered on the map using react-leaflet.

**Secure API Communication:** While dealer locations are fetched from an external REST API, token-based authorization (Bearer Token) is secured with Environment Variables.

**KVKK (GDPR) Compliant Process:** The processing of user data has been brought into compliance with legal standards via a Modal-based dynamic disclosure text and a mandatory approval mechanism.

## 🛠 Tech Stack
**Framework/Library:** React.js (Create React App)

**Routing:** React Router DOM v7

**User Interface (UI):** Material-UI (MUI v7), Emotion (Styled Components)

**Map/Location:** Leaflet, React-Leaflet

**Deployment:** Vercel

## 📂 Getting Started
You can follow the steps below to run the project in your local environment.

### Prerequisites
Node.js (v16 or higher recommended)

NPM or Yarn

### Installation Steps

### 1. **Clone the repository to your computer:**
```bash
git clone [https://github.com/yavuzs-cakmak/RenaultArizaTalepFormuWebs.git](https://github.com/yavuzs-cakmak/RenaultArizaTalepFormuWebs.git)

- 2. Navigate to the project directory:
    cd RenaultArizaTalepFormuWebs
- 3. Install the required dependencies:
    npm install
- 4. Configure environment variables:
Create a .env file in the project root directory and add the required token for authorized API access:
    REACT_APP_API_TOKEN=your_secret_token_value
- 5. Start the development server:
    npm start dev
    The project will run by default at http://localhost:[your_specific_address].

```
    
## 🏗 Roadmap & Improvements
* State Management: Context API or Redux/Zustand integration to prevent prop-drilling as the application scales.

* Build Tool: Transitioning from Create React App to Vite architecture for performance optimization.

* Unit Testing: Writing test scenarios for form validations and multi-step components using Jest and React Testing Library.
