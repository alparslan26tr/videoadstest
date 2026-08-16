import React, { useEffect, useState } from 'react';
import AdSpace from './AdSpace';
import VideoPlayer from './VideoPlayer';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [watchHistory, setWatchHistory] = useState([]);

  useEffect(() => {
    // Sayfa açıldığında eski geçmişi tarayıcı hafızasından (localStorage) çekiyoruz
    const savedHistory = JSON.parse(localStorage.getItem('bunkrHistory')) || [];
    setWatchHistory(savedHistory);

    const currentUrl = window.location.href;
    if (currentUrl.includes('?v=')) {
      const extractedUrl = currentUrl.split('?v=')[1];
      setVideoUrl(extractedUrl);

      // Yeni açılan videoyu geçmişe kaydet
      addToHistory(extractedUrl, savedHistory);
    }
  }, []);

  const addToHistory = (url, currentHistory) => {
    // Eğer bu link zaten geçmişte varsa önce onu listeden çıkarıyoruz (üste almak için)
    let newHistory = currentHistory.filter(item => item !== url);
    // Yeni linki listenin en başına ekliyoruz
    newHistory.unshift(url);
    // Sadece en son izlenen 4 videoyu tutuyoruz (liste uzayıp gitmesin diye)
    newHistory = newHistory.slice(0, 4);
    
    setWatchHistory(newHistory);
    // Güncel listeyi tarayıcı hafızasına yazıyoruz
    localStorage.setItem('bunkrHistory', JSON.stringify(newHistory));
  };

  // Geçmişteki butona tıklanınca o videoya yönlendir
  const handleHistoryClick = (url) => {
    window.location.href = `/?v=${url}`;
  };

  return (
    <div className="layout">
      <header className="site-header">
        <h1>Videobka Video Player</h1>
        <p>Hızlı, Kesintisiz ve Güvenli Bulut Tabanlı Video Deneyimi</p>
      </header>

      <main className="main-content">
        {/* Sol Reklam */}
        <AdSpace adSlot="1131353456" />

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

          {/* İZLEME GEÇMİŞİ BÖLÜMÜ */}
          {watchHistory.length > 0 && (
            <div className="history-section">
              <h3>🕒 Son İzlenenler</h3>
              <div className="history-buttons">
                {watchHistory.map((url, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleHistoryClick(url)} 
                    className="history-btn"
                    title={url} /* Üzerine gelince linkin tamamını gösterir */
                  >
                    ▶ Video {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

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
              <li>Kopyaladığınız video bağlantısını boşluk bırakmadan bu parametrenin hemen ardına yapıştırın.</li>
              <li>Enter tuşuna basıp sayfayı yüklediğinizde, videonuz gelişmiş oynatıcımızda otomatik olarak hazır hale gelecektir.</li>
            </ol>
          </section>
        </div>

        {/* Sağ Reklam */}
        <AdSpace adSlot="6056377071" />
      </main>

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
