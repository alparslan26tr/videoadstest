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
         {/* AdSense Botları İçin SEO ve İçerik Metni */}
          <section className="seo-content">
            <h2>Gelişmiş Video Altyapısı Hakkında</h2>
            <p>
              Yüksek performanslı ve kesintisiz medya tüketimi sağlamak amacıyla modern web teknolojileri ile geliştirilmiş bir video oynatma platformuyuz. Gelişmiş bulut bilişim mimarimiz sayesinde, kullanıcılarımıza her cihazda optimize edilmiş, düşük gecikmeli bir izleme deneyimi sunuyoruz. 
            </p>
            
            <h3>Özellikler ve Güvenlik</h3>
            <p>
              Sistemimiz, dış kaynaklardan sağlanan video bağlantılarını güvenli bir şekilde işleyerek tarayıcı üzerinden doğrudan oynatım sağlar. Güçlü altyapımız, anlık veri akışını kesintisiz bir şekilde sunarken, duyarlı tasarımı sayesinde mobil ve masaüstü platformlarda cihazınıza tam uyum gösterir. Kullanıcı gizliliği ve veri güvenliği en temel önceliğimizdir.
            </p>

            <h3>Sistem Nasıl Kullanılır?</h3>
            <p>Platformumuz üzerinden video oynatmak oldukça basit ve eklentisiz bir işlemdir. Lütfen aşağıdaki adımları takip edin:</p>
            <ol style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>
              <li>Oynatmak istediğiniz uyumlu kaynak video bağlantısını (URL) kopyalayın.</li>
              <li>Tarayıcınızın adres çubuğundaki site adresimizin (videobka.vercel.app) sonuna <strong>?v=</strong> parametresini ekleyin.</li>
              <li>Kopyaladığınız video bağlantısını boşluk bırakmadan bu parametrenin hemen ardına yapıştırın. <br/><em>(Örnek kullanım: videobka.vercel.app/?v=https://ornekvideo.com/video.mp4)</em></li>
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
