import React, { useEffect, useState } from 'react';
import AdSpace from './AdSpace';
import VideoPlayer from './VideoPlayer';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState(null);

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

          
         {/* AdSense Botları İçin SEO ve İçerik Metni */}
          <section className="seo-content">
            <h2>Neden Bizim Altyapımızı Tercih Etmelisiniz?</h2>
            <p>
              Sıradan video oynatıcıların donma, yavaş yüklenme ve karmaşık eklenti sorunlarından sıkıldınız mı? Biz, modern web teknolojilerini ve gelişmiş bulut bilişim mimarisini kullanarak size tamamen kesintisiz, reklamsız (video içi) ve anında tepki veren bir izleme deneyimi sunuyoruz. Cihazınız ne olursa olsun, videolarınızı sıfır kalite kaybı ve en düşük gecikme süresiyle izlemenin keyfini çıkarın. Çünkü zamanınızın ve seyir zevkinizin ne kadar değerli olduğunu çok iyi biliyoruz.
            </p>
            
            <h3>Üst Düzey Güvenlik ve Kusursuz Akış</h3>
            <p>
              İnternetteki izlediğiniz içerikler sadece sizi ilgilendirir. Sistemimiz, dış kaynaklardan gelen video bağlantılarını cihazınıza hiçbir şey indirmeden, tamamen güvenli bir tünel üzerinden işler. Arka planda çalışan güçlü altyapımız anlık veri akışını sürekli optimize ederken, akıllı ekran tasarımımız (responsive) sayesinde ister telefonda ister bilgisayarda olun kusursuz bir görünüme sahip olursunuz. Kullanıcı gizliliği bizim için sadece bir seçenek değil, en temel standarttır. Linki yapıştırın, arkanıza yaslanın ve pürüzsüz izleme deneyiminin tadını çıkarın!
            </p>

            <h3>Sistem Nasıl Kullanılır?</h3>
            <p>Platformumuz üzerinden video oynatmak oldukça basit ve eklentisiz bir işlemdir. Lütfen aşağıdaki adımları takip edin:</p>
            <ol style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
              <li>Oynatmak istediğiniz uyumlu kaynak video bağlantısını (URL) kopyalayın.</li>
              <li>Tarayıcınızın adres çubuğundaki site adresimizin (videobka.vercel.app) sonuna <strong>?v=</strong> parametresini ekleyin.</li>
              <li>Kopyaladığınız video bağlantısını boşluk bırakmadan bu parametrenin hemen ardına yapıştırın.</li>
              <li>Enter tuşuna basıp sayfayı yüklediğinizde, videonuz gelişmiş oynatıcımızda otomatik olarak hazır hale gelecektir.</li>
            </ol>
          </section>
        </div>

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
