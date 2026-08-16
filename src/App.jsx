import React, { useEffect, useState } from 'react';
import AdSpace from './AdSpace';
import VideoPlayer from './VideoPlayer';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState(null);
  // Akordiyon için hangi sekmenin açık olduğunu tutan state (1. sekme varsayılan açık)
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (index) => {
    // Tıklanan sekme zaten açıksa kapat, değilse aç
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('?v=')) {
      const extractedUrl = currentUrl.split('?v=')[1];
      setVideoUrl(extractedUrl);
    }
  }, []);

  return (
    <div className="layout">
      {/* Üst Bilgi (Header) */}
      <header className="site-header">
        <h1>Videobka Video Player</h1>
        <p>Hızlı, Kesintisiz ve Güvenli Bulut Tabanlı Video Deneyimi</p>
      </header>

      <main className="main-content">
        {/* Sol Reklam Alanı */}
        <AdSpace adSlot="1131353456" />

        {/* Orta Sütun (Video ve SEO Metinleri) */}
        <div className="center-column">
          
          {videoUrl ? (
            <div className="video-wrapper">
              <VideoPlayer videoUrl={videoUrl} />
            </div>
          ) : (
            <div className="empty-state">
              <h2>Sistem Hazır</h2>
              <p>Oynatıcıyı başlatmak için lütfen geçerli bir video bağlantısı parametresi sağlayın.</p>
            </div>
          )}

          
        {/* AdSense Botları İçin SEO ve İçerik Metni (AKORDİYON) */}
          <section className="seo-content accordion-section">
            
            {/* 1. Akordiyon Sekmesi */}
            <div className="accordion-item">
              <button 
                className={`accordion-header ${activeAccordion === 1 ? 'active' : ''}`} 
                onClick={() => toggleAccordion(1)}
              >
                Neden Bizim Altyapımızı Tercih Etmelisiniz?
                <span className="accordion-icon">{activeAccordion === 1 ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 1 ? 'open' : ''}`}>
                <p>
                  Sıradan video oynatıcıların donma, yavaş yüklenme ve karmaşık eklenti sorunlarından sıkıldınız mı? Biz, modern web teknolojilerini ve gelişmiş bulut bilişim mimarisini kullanarak size tamamen kesintisiz, reklamsız (video içi) ve anında tepki veren bir izleme deneyimi sunuyoruz. Cihazınız ne olursa olsun, videolarınızı sıfır kalite kaybı ve en düşük gecikme süresiyle izlemenin keyfini çıkarın. Çünkü zamanınızın ve seyir zevkinizin ne kadar değerli olduğunu çok iyi biliyoruz.
                </p>
              </div>
            </div>

            {/* 2. Akordiyon Sekmesi */}
            <div className="accordion-item">
              <button 
                className={`accordion-header ${activeAccordion === 2 ? 'active' : ''}`} 
                onClick={() => toggleAccordion(2)}
              >
                Üst Düzey Güvenlik ve Kusursuz Akış
                <span className="accordion-icon">{activeAccordion === 2 ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 2 ? 'open' : ''}`}>
                <p>
                  İnternetteki izlediğiniz içerikler sadece sizi ilgilendirir. Sistemimiz, dış kaynaklardan gelen video bağlantılarını cihazınıza hiçbir şey indirmeden, tamamen güvenli bir tünel üzerinden işler. Arka planda çalışan güçlü altyapımız anlık veri akışını sürekli optimize ederken, akıllı ekran tasarımımız (responsive) sayesinde ister telefonda ister bilgisayarda olun kusursuz bir görünüme sahip olursunuz. Kullanıcı gizliliği bizim için sadece bir seçenek değil, en temel standarttır. Linki yapıştırın, arkanıza yaslanın ve pürüzsüz izleme deneyiminin tadını çıkarın!
                </p>
              </div>
            </div>

            {/* 3. Akordiyon Sekmesi */}
            <div className="accordion-item">
              <button 
                className={`accordion-header ${activeAccordion === 3 ? 'active' : ''}`} 
                onClick={() => toggleAccordion(3)}
              >
                Sistem Nasıl Kullanılır?
                <span className="accordion-icon">{activeAccordion === 3 ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 3 ? 'open' : ''}`}>
                <p>Platformumuz üzerinden video oynatmak oldukça basit ve eklentisiz bir işlemdir. Lütfen aşağıdaki adımları takip edin:</p>
                <ol>
                  <li>Oynatmak istediğiniz uyumlu kaynak video bağlantısını (URL) kopyalayın.</li>
                  <li>Tarayıcınızın adres çubuğundaki site adresimizin (videobka.vercel.app) sonuna <strong>?v=</strong> parametresini ekleyin.</li>
                  <li>Kopyaladığınız video bağlantısını boşluk bırakmadan bu parametrenin hemen ardına yapıştırın.</li>
                  <li>Enter tuşuna basıp sayfayı yüklediğinizde, videonuz gelişmiş oynatıcımızda otomatik olarak hazır hale gelecektir.</li>
                </ol>
              </div>
            </div>

          </section>

        {/* Sağ Reklam Alanı */}
        <AdSpace adSlot="6056377071" />
      </main>

      {/* Alt Bilgi (Footer) - Yasal Sayfalar */}
      <footer className="site-footer">
        <div className="footer-links">
          <a href="#">Hakkımızda</a>
          <a href="#">Gizlilik Politikası (Privacy Policy)</a>
          <a href="#">Kullanım Koşulları</a>
          <a href="#">İletişim</a>
        </div>
        <p>© 2026 Fixit Codes. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
