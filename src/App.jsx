import React, { useEffect, useState } from 'react';
import AdSpace from './AdSpace';
import VideoPlayer from './VideoPlayer';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    // Tarayıcıdaki tam adresi alıyoruz
    const currentUrl = window.location.href;
    
    // Eğer adresin içinde '?v=' varsa, sonrasındaki her şeyi tek parça olarak alıyoruz
    if (currentUrl.includes('?v=')) {
      const extractedUrl = currentUrl.split('?v=')[1];
      setVideoUrl(extractedUrl);
    }
  }, []);

  return (
    <div className="layout">
      {/* Sol Reklam Alanı */}
      <AdSpace adSlot="1234567890" />

      {/* Merkezdeki Video Oynatıcı */}
      <VideoPlayer videoUrl={videoUrl} />

      {/* Sağ Reklam Alanı */}
      <AdSpace adSlot="0987654321" />
    </div>
  );
}

export default App;