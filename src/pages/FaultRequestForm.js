
import React, { useState } from 'react';
import { Box as MuiBox } from '@mui/material';
import { Modal } from '@mui/material';
import DealerMap from './DealerMap';
import Bakim from './bakim';
import Footer from '../components/Footer';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
  const nameRegex = /^([a-zA-ZğüşıöçĞÜŞİÖÇ]{2,20})(\s[a-zA-ZğüşıöçĞÜŞİÖÇ]{2,20}){1,3}$/;
  const emailRegex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,10}$/;
  const sasiNoRegex = /^[A-Z0-9]{17}$/;
  const plateRegex = /^(0[1-9]|[1-7][0-9]|8[01])[A-ZÇŞÜÖİĞ]{1,3}\d{1,4}$/;
  const phoneRegex = /^\+90\d{3}\d{3}\d{2}\d{2}$/;

function FaultRequestForm() {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);

  // Sayfa 1: İletişim Bilgileri
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const isPage1Valid =
  nameRegex.test(name) && name.trim() !== "" &&
  emailRegex.test(email) && email.trim() !== "" &&
  phoneRegex.test(phone) && phone.trim() !== "";

 

  // Sayfa 2: Araç Bilgileri
  const [vehicleidNo, setVehicleidNo] = useState("");
  const [plate, setPlate] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [faultDescription, setFaultDescription] = useState("");
  const [maintenanceRequired, ] = useState(false);
  const [kvkkApproval, setKvkkApproval] = useState(false);
  const isPage2Valid =
  sasiNoRegex.test(vehicleidNo) && vehicleidNo.trim() !== "" &&
  plateRegex.test(plate) && plate.trim() !== "" &&
  kilometer.trim() !== "" &&
  faultDescription.trim() !== "";

  

  // Sayfa 3: Bayi Seçimi
  const [selectedDealer, setSelectedDealer] = useState("");


  const forward = () => setPage((prev) => Math.min(prev + 1, 4));
  const back = () => setPage((prev) => Math.max(prev - 1, 1));

  const handleTalepGonder = () => {
    if (!kvkkApproval) {
      alert("Lütfen KVKK sözleşmesini kabul ediniz.");
      return;
    }

    if (!selectedDealer) {
      alert("Lütfen bir Renault bayisi seçiniz.");
      return;
    }

    alert(`Talep gönderildi:
Ad: ${name}
E-posta: ${email}
Telefon: ${phone}
Şasi No: ${vehicleidNo}
Plaka: ${plate}
KM: ${kilometer}
Arıza Açıklaması: ${faultDescription}
Bakım Talebi: ${maintenanceRequired ? "Evet" : "Hayır"}
KVKK Onayı: Kabul Edildi
Seçilen Bayi: ${selectedDealer}`);

    setPage(4);
  };


    return (
       
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: 500,
            margin: '0 auto',
            padding: 3,
            border: '1px solid #ccc',
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: '#fff',
            opacity: 0.97,
          }}
        >
          {page === 1 && (
            <>
              <h2>İletişim Bilgileri</h2>
              <TextField
                label="Ad Soyad"
                value={name}
                onChange={e => setName(e.target.value)}
                error={name !== "" && !nameRegex.test(name)}
                helperText={name !== "" && !nameRegex.test(name) ? "Geçersiz ad soyad" : ""}
                variant="outlined"
                required
              />
              <TextField
                label="E-posta"
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={email !== "" && !emailRegex.test(email)}
                helperText={email !== "" && !emailRegex.test(email) ? "Geçersiz e-posta" : ""}
                type="email"
                variant="outlined"
                required
              />
              <TextField
                label="Telefon Numarası"
                value={phone}
                onChange={e => {
                  let val = e.target.value;
                  // Eğer başında + yoksa otomatik ekle
                  if (!val.startsWith("+905")) {
                    val = "+905" + val.replace(/^\+?905?/, "");
                  }
                  // Sadece +905 ve 9 rakamdan fazlasına izin verme
                  if (val.length > 13) {
                    val = val.slice(0, 13);
                  }
                  setPhone(val);
                }}
                onFocus={() => { if (phone === "") setPhone("+905"); }}
                error={phone !== "" && !phoneRegex.test(phone)}
                helperText={phone !== "" && !phoneRegex.test(phone) ? "Geçersiz telefon" : ""}
                type="tel"
                placeholder="+90 xxx xxx xx xx"
                variant="outlined"
                required
              />
             <Button variant="contained" color="primary" onClick={forward} disabled={!isPage1Valid}>
      Devam Et
    </Button>
            </>
          )}

          {page === 2 && (
            <>
              <h2>Araç Bilgileri</h2>
              <TextField
                label="Şasi No"
                value={vehicleidNo}
                onChange={e => {
                  let val = e.target.value.toUpperCase();
                  if (val.length > 17) val = val.slice(0, 17);
                  setVehicleidNo(val);
                }}
                error={vehicleidNo !== "" && !sasiNoRegex.test(vehicleidNo)}
                helperText={vehicleidNo !== "" && !sasiNoRegex.test(vehicleidNo) ? "Geçersiz şasi no" : ""}
                variant="outlined"
                required
              />
              <TextField
                label="Plaka"
                value={plate}
                onChange={e => {
                  let val = e.target.value.toUpperCase();
                  if (val.length > 9) val = val.slice(0, 9);
                  setPlate(val);
                }}
                error={plate !== "" && !plateRegex.test(plate)}
                helperText={plate !== "" && !plateRegex.test(plate) ? "Geçersiz plaka" : ""}
                variant="outlined"
                required
              />
              <TextField
                label="Kilometre"
                value={kilometer}
                onChange={e => setKilometer(e.target.value)}
                type="number"
                variant="outlined"
                required
              />
              <TextField
                label="Arıza Açıklaması"
                value={faultDescription}
                onChange={e => {
                  let val = e.target.value;
                  if (val.length > 1000) val = val.slice(0, 1000);
                  setFaultDescription(val);
                }}
                multiline
                rows={3}
                variant="outlined"
                required
              />
              <div style={{ fontSize: '12px', color: '#888', marginTop: '4px', textAlign: 'right' }}>
                {faultDescription.length}/1000
              </div>
              <Bakim />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={kvkkApproval}
                    onChange={(e) => setKvkkApproval(e.target.checked)}
                  />
                }
                label={
                  <span>
                    KVKK kapsamındaki{' '}
                    <span
                      style={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer' }}
                      onClick={() => setOpenModal(true)}
                    >
                      aydınlatma metnini
                    </span>{' '}okudum ve kabul ediyorum
                  </span>
                }
              />

              <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <MuiBox sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'background.paper',
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 2,
                  minWidth: 300,
                  maxWidth: 500,
                  maxHeight: 500,
                  outline: 'none',
                  overflowY: 'auto',
                }}>
                  <h3>KVKK Aydınlatma Metni</h3>
                  <p>
                    Renault Türkiye – KVKK Aydınlatma Metni
Renault Mais A.Ş. (“Renault” veya “Şirket”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında, arıza talep formu üzerinden toplanan kişisel verilerinizin işlenmesine ilişkin sizleri bilgilendirmek isteriz.

1. Veri Sorumlusunun Kimliği
Veri Sorumlusu: Renault Mais A.Ş. Adres: Fatih Sultan Mehmet Mah. Balkan Cad. No: 58 Buyaka E Blok Tepeüstü Ümraniye / İstanbul Telefon: +90 (216) 578 94 00 Web Sitesi: https://www.renault.com.tr E-posta: kvkk@renault.com.tr

2. Kişisel Verilerin İşlenme Amaçları
Arıza talep formu aracılığıyla ilettiğiniz kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

Talep ettiğiniz servis işlemlerinin yürütülmesi

Arıza bildirimlerinin değerlendirilmesi ve çözüm süreçlerinin yönetilmesi

Müşteri memnuniyetinin sağlanması ve hizmet kalitesinin artırılması

Yasal yükümlülüklerin yerine getirilmesi

İlgili bayi ve servis noktalarıyla iletişim kurulması

Gerekli durumlarda hukuki süreçlerin yürütülmesi

3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi
Kişisel verileriniz, arıza talep formu üzerinden elektronik ortamda doğrudan sizlerden alınmakta olup KVKK’nın 5. ve 6. maddelerinde belirtilen:

Açık rıza

Bir sözleşmenin kurulması veya ifası

Hukuki yükümlülüğün yerine getirilmesi

Meşru menfaat

hukuki sebeplerine dayanarak işlenmektedir.

4. Kişisel Verilerin Aktarılması
Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda:

Renault yetkili servisleri ve bayileri

Dijital hizmet sağlayıcıları (form altyapısı, çağrı merkezi vb.)

Hukuken yetkili kamu kurumları ve özel kişiler

ile KVKK’nın 8. ve 9. maddelerine uygun şekilde paylaşılabilir. Yurtdışına aktarım söz konusu olduğunda, KVKK’da belirtilen güvenlik ve izin şartlarına uygun hareket edilir.

5. KVKK Kapsamındaki Haklarınız
KVKK’nın 11. maddesi uyarınca Renault’a başvurarak:

Kişisel verilerinizin işlenip işlenmediğini öğrenme

İşlenmişse buna ilişkin bilgi talep etme

İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme

Yurt içi veya yurt dışı aktarıldığı kişileri öğrenme

Eksik veya yanlış işlenmişse düzeltilmesini isteme

KVKK’ya aykırı işlenmişse silinmesini veya yok edilmesini talep etme

Otomatik sistemlerle analiz edilmesine itiraz etme

Zarara uğramışsanız giderilmesini talep etme

haklarına sahipsiniz. 6. KVKK Kapsamında Başvuru Hakkınız
KVKK kapsamında Renault’a kişisel verilerinizle ilgili taleplerinizi yazılı olarak iletebilirsiniz. Bu kapsamda, “Veri Sahibi Başvuru Formu”nu doldurarak kimliğinizi doğrulayıcı belgelerle birlikte:

Renault Mais A.Ş. merkez adresine elden teslim edebilir,

Kayıtlı Elektronik Posta (KEP) üzerinden kvkk@renault.hs01.kep.tr adresine gönderebilir,

Noter kanalıyla veya posta yoluyla “Fatih Sultan Mehmet Mah. Balkan Cad. No: 58 Buyaka E Blok Tepeüstü Ümraniye / İstanbul” adresine iletebilirsiniz.

Renault, KVKK’nin 13. maddesi uyarınca başvurunuzu, talebin niteliğine göre en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandıracaktır. Ancak işlemin ayrıca bir maliyet gerektirmesi halinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifeye göre ücret talep edilebilir. Talebin reddedilmesi durumunda, gerekçeli ret cevabı yazılı olarak veya elektronik ortamda tarafınıza iletilir.
                  </p>
                  <Button variant="contained" onClick={() => setOpenModal(false)} sx={{ mt: 2 }}>Kapat</Button>
                </MuiBox>
              </Modal>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={back}>
                  Geri
                </Button>
                <Button variant="contained" color="primary" onClick={forward} disabled={!isPage2Valid || !kvkkApproval}>
        Devam Et
      </Button>
              </Box>
            </>
          )}

          {page === 3 && (
            <>
              <h2>Servis/Bakım Bayi Listesi</h2>
              <DealerMap
                selectedDealer={selectedDealer}
                setSelectedDealer={setSelectedDealer}
              />
              
            
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="outlined" onClick={back}>
                  Geri
                </Button>
                <Button variant="contained" color="primary" onClick={handleTalepGonder} disabled={!kvkkApproval}>
                  Talebi Gönder
                </Button>
              </Box>
            </>
          )}

          {page === 4 && (
            <>
              <h2>Talebiniz Başarıyla Alındı!</h2>
              <p>Teşekkür ederiz, <strong>{name}</strong>.</p>
              <p>Renault yetkilileri sizinle en kısa sürede iletişime geçecek.</p>
              <p><strong>Seçilen Servis Bayisi:</strong> {selectedDealer}</p>
            </>
          )}
        </Box>
       
       
      
    );
}



export default FaultRequestForm;
