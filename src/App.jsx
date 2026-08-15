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
      <AdSpace adSlot="1131353456" />

      {/* Merkezdeki Video Oynatıcı */}
      <VideoPlayer videoUrl={videoUrl} />

      {/* Sağ Reklam Alanı */}
      <AdSpace adSlot="6056377071" />
    </div>
  );
}

export default App;
