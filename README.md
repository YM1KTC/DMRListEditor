# DMR Contact List Düzenleyici

<div align="center">

![Version](https://img.shields.io/badge/version-2.1-blue)
![License](https://img.shields.io/badge/license-UNLICENSE-green)
[![Live Demo](https://img.shields.io/badge/demolive-orange)](https://dmr.radio.org.tr)

**DMR (Digital Mobile Radio) kullanıcıları için profesyonel CSV düzenleyicisi**

[Özellikler](#-zellikler) • [Kullanım](#-kullanım) • [Demo](#-canlı-demo) • [İletişim](#-iletişim)

</div>

---

## ✨ Özellikler

### 📊 Temel İşlevler
- **CSV Yükleme ve Görüntüleme**: Sürükle-bırak veya dosya seçimi ile kolay CSV import
- **Gelişmiş Tablo Düzenleme**: DataTables ile güçlü tablo işlevselliği
  - Sayfalama (25/50/100/200 kayıt)
  - Gerçek zamanlı arama ve filtreleme
  - Şehir bazlı filtreleme
  - Çoklu satır seçimi
- **Inline Düzenleme**: Tüm alanları tablo içinde direkt düzenleyin
- **Satır İşlemleri**: Yeni satır ekleme ve toplu silme

### 📤 Dışa Aktarma Formatları
| Format | Açıklama |
|--------|----------|
| **Anytone CSV** | Anytone telsizleri için tam format (Radio ID, Callsign, Name, City, vb.) |
| **TYT CSV** | TYT telsizleri için sıkıştırılmış format (Callsign + Name + Radio ID) |
| **TYT No GPS** | GPS bilgisi olmadan TYT formatı |

### 🛠️ Araçlar ve Entegrasyonlar

#### Veri Temizleme
- **Bozuk Karakter Filtresi**: ASCII olmayan karakterleri içeren kayıtları bulur
- **Şehir İsim Düzeltme**: Türkçe karakterleri ve yazım hatalarını düzeltir
- **Mükerrer Kayıt Birleştirme**: Aynı çağrı işaretine sahip kayıtları birleştirir

#### API Entegrasyonları
- **RadioID.net**: Türkiye'deki tüm DMR kullanıcılarını çeker (7,500+ kayıt, 38 sayfa)
  - ✅ **Sayfalama desteği**: Tüm kayıtları eksiksiz çeker
  - 📊 **İlerleme göstergesi**: Veri çekme sürecini görselleştirir
- **Çağrı İşareti Sorgulama**: Detaylı operatör bilgileri
  - 🇹🇷 **TACALLBOOK**: Türkiye amatör radio veritabanı
  - 🌍 **QRZ.com**: Uluslararası amatör radio veritabanı
  - 📷 **Operatör fotoğrafları**: Desteklenen kaynaklardan görsel bilgiler

#### Tablo İşlemleri
- **Şehir Filtresi**: 81 Türkiye ili + Kıbrıs + Diğer
- **Çağrı İşareti İnceleme**: RadioID ile karşılaştırma ve güncelleme önerileri
- **Gruplama**: Şehirlere göre kayıt gruplandırma

## 🚀 Kullanım

### Hızlı Başlangıç

1. **Projeyi açın**: `index.html` dosyasını tarayıcınızda açın
2. **CSV yükleyin**: "Dosya Yükleme" bölümünden CSV dosyanızı seçin
3. **Düzenleyin**: Tablo üzerinde direkt değişiklik yapın
4. **Zenginleştirin**: RadioID.net'ten veri çekin veya çağrı işaretleri sorgulayın
5. **Dışa aktarın**: İhtiyacınız olan formatı seçin ve indirin

### Gelişmiş Özellikler

#### RadioID.net Senkronizasyonu
```
1. "RadioID.net" butonuna tıklayın
2. İlerleme çubuğunu izleyin (X/38 sayfa)
3. Yeni kayıtlar otomatik olarak listenin sonuna eklenir
4. Yeşil arkaplan yeni kayıtları gösterir
```

#### Çağrı İşareti Sorgulama
Tablodaki 👀 ikonuna tıklayarak:
- TACALLBOOK bilgilerini (Türkiye)
- QRZ.com bilgilerini (Uluslararası)
- Operatör fotoğraflarını (mevcutsa)

görüntüleyin.

## 🛠️ Teknik Detaylar

### Kullanılan Teknolojiler
| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| **Tailwind CSS** | Modern, utility-first CSS framework (CDN) |
| **DataTables** | Gelişmiş tablo işlevselliği (CDN) |
| **jQuery** | JavaScript kütüphanesi (CDN) |
| **Cloudflare Workers** | CORS proxy için API arayüzleri |

### Tarayıcı Desteği
✅ Chrome 90+ • ✅ Firefox 88+ • ✅ Safari 14+ • ✅ Edge 90+

### Performans
- **CSV Parse**: Client-side, JavaScript ile
- **API Çekme**: Paralel istekler, sayfalama desteği
- **Tablo Render**: DataTables virtual DOM
- **Dosya Boyutu**: ~65KB (tek HTML dosyası)

## 🌐 Canlı Demo

Proje canlı olarak [**dmr.radio.org.tr**](https://dmr.radio.org.tr) adresinde mevcuttur.

## 📋 CSV Formatı

### Beklenen Sütunlar
```csv
No.,Radio ID,Callsign,Name,City,State,Country,Remarks,Call Type,Call Alert
1,1234567,TA1ABC,Ahmet Yılmaz,İstanbul,,Turkey,,Private Call,None
```

### DMR Standartları
- Tüm metin alanları maksimum 16 karakter
- Radio ID sayısal olmalı
- Gerekli alanlar: Radio ID, Callsign, Name, City

## 🔧 Geliştirme

### Yerel Geliştirme
```bash
# Projeyi klonlayın
git clone https://github.com/YM1KTC/DMRListEditor.git

# Dizin değiştirin
cd DMRListEditor

# Yerel sunucu başlatın (isteğe bağlı)
python -m http.server 8000
# veya
npx serve
```

### Yeni Dışa Aktarma Formatı Ekleme
```javascript
// 1. HTML butonu ekleyin
<button id="exportNewFormat" class="btn btn-primary">New Format</button>

// 2. JavaScript fonksiyonu oluşturun
function exportNewFormat() {
  const data = table.rows().data().toArray();
  // ... formatlama mantığı
}

// 3. Event listener bağlayın
$('#exportNewFormat').on('click', exportNewFormat);
```

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen:
1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje [UNLICENSE](UNLICENSE) ile lisanslanmıştır. Kamu malıdır, herhangi bir kısıtlama olmadan kullanılabilir.

## 📞 İletişim

### ARC - Amatör Radyocular Derneği

| Platform | Bağlantı |
|----------|----------|
| 🌐 Web Sitesi | [radio.org.tr](https://radio.org.tr) |
| 📧 E-posta | [bilgi@radio.org.tr](mailto:bilgi@radio.org.tr) |
| 📱 Telegram | [@amator_radyocular_dernegi](https://t.me/amator_radyocular_dernegi) |
| 📸 Instagram | [@ym1ktc](https://instagram.com/ym1ktc) |
| 🎬 YouTube | [@YM1KTC](https://www.youtube.com/@YM1KTC) |
| 💼 LinkedIn | [ARC](https://www.linkedin.com/company/arctr/) |
| 🐙 GitHub | [YM1KTC/DMRListEditor](https://github.com/YM1KTC/DMRListEditor) |

---

<div align="center">

**ARC - Amatör Radyocular Derneği** © 2026

*Türkiye'nin Amatör Radio Platformu*

</div>
