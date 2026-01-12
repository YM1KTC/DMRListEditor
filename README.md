# DMR Contact List Düzenleyici

DMR (Digital Mobile Radio) kullanıcıları için profesyonel CSV düzenleyicisi. Kullanıcılar, CSV dosyalarını yükleyebilir, düzenleyebilir ve farklı formatlarda dışa aktarabilir. Ayrıca, RadioID.net'ten Türkiye kayıtlarını çekebilir ve mevcut listeye ekleyebilirler.

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-UNLICENSE-green)

## Özellikler

### Temel İşlevler
- **CSV Yükleme ve Görüntüleme**: CSV dosyalarını sürükleyip bırakarak veya dosya seçerek yükleyin
- **Tablo Düzenleme**: DataTables ile gelişmiş tablo düzenleme deneyimi
- **Şehir Filtresi**: Şehir bazlı kayıt filtreleme
- **Satır İşlemleri**: Yeni satır ekleme ve seçili satırları silme

### Dışa Aktarma Formatları
- **Anytone CSV**: Anytone telsizleri için uyumlu format
- **TYT CSV**: TYT telsizleri için uyumlu format
- **TYT No GPS**: GPS olmadan TYT formatı

### Araçlar ve Entegrasyonlar
- **Bozuk Karakter Filtresi**: ASCII olmayan karakterleri içeren kayıtları bulur
- **RadioID.net Entegrasyonu**: Türkiye'deki tüm DMR kullanıcılarını çeker ve listeye ekler
- **Çağrı İşareti Sorgulama**: TACALLBOOK ve QRZ.com API'leri ile detaylı operatör bilgileri

## Kullanım

1. Projeyi klonlayın veya indirin.
2. `index.html` dosyasını bir tarayıcıda açın.
3. CSV dosyanızı yükleyin.
4. Gerekli düzenlemeleri yapın.
5. İsterseniz RadioID.net'ten veri çekin.
6. Listeyi uygun formatta dışa aktarın.

## Teknik Detaylar

### Kullanılan Teknolojiler
- **Tailwind CSS**: Modern, utility-first CSS framework (CDN)
- **DataTables**: Gelişmiş tablo işlevselliği (CDN)
- **jQuery**: JavaScript kütüphanesi (CDN)
- **Cloudflare Workers**: CORS proxy için API arayüzleri

### Tarayıcı Desteği
Tüm modern tarayıcılar (Chrome, Firefox, Safari, Edge) desteklenir.

### Deployment
Proje statik bir site olarak GitHub Pages üzerinden dağıtılır.

## Canlı Demo

Proje canlı olarak [dmr.radio.org.tr](https://dmr.radio.org.tr) adresinde mevcuttur.

## İletişim

- [Telegram](https://t.me/amator_radyocular_dernegi)
- [Instagram](https://instagram.com/ym1ktc)
- [YouTube](https://www.youtube.com/@YM1KTC)
- [LinkedIn](https://www.linkedin.com/company/arctr/)
- [Web Sitesi](https://radio.org.tr/)
- [E-posta](mailto:bilgi@radio.org.tr)

## Lisans

Bu proje [UNLICENSE](UNLICENSE) ile lisanslanmıştır. Kamu malıdır, herhangi bir kısıtlama olmadan kullanılabilir.

---

**ARC - Amatör Radyocular Derneği** © 2026
