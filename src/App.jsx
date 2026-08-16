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
        <h1>Bunkr Video Player</h1>
        <p>Hızlı, Kesintisiz ve Güvenli Bulut Tabanlı Video Deneyimi</p>
      </header>

      <main className="main-content">
        {/* Sol Reklam Alanı */}
        <AdSpace adSlot="1234567890" />

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
            <h2>Gelişmiş Video Altyapısı Hakkında</h2>
            <p>
              Yüksek performanslı ve kesintisiz medya tüketimi sağlamak amacıyla modern web teknolojileri ile geliştirilmiş bir video oynatma platformuyuz. Gelişmiş bulut bilişim mimarimiz sayesinde, kullanıcılarımıza her cihazda optimize edilmiş, düşük gecikmeli bir izleme deneyimi sunuyoruz. 
            </p>
            <h3>Özellikler ve Kullanım</h3>
            <p>
              Sistemimiz, dış kaynaklardan sağlanan video bağlantılarını güvenli bir şekilde işleyerek tarayıcı üzerinden doğrudan oynatım sağlar. Güçlü altyapımız, anlık veri akışını kesintisiz bir şekilde sunarken, duyarlı tasarımı sayesinde mobil ve masaüstü platformlarda cihazınıza tam uyum gösterir. Kullanıcı gizliliği ve veri güvenliği en temel önceliğimizdir.
            </p>
          </section>
        </div>

        {/* Sağ Reklam Alanı */}
        <AdSpace adSlot="0987654321" />
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
