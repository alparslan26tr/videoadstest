import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return (
      <main className="video-container">
        <p className="error-message">Oynatılacak video bulunamadı. Lütfen URL'nin sonuna ?v= ekleyerek geçerli bir mp4 linki girin.</p>
      </main>
    );
  }

  return (
    <main className="video-container">
      <video 
        className="video-player" 
        controls 
        autoPlay 
        name="media"
      >
        {/* App.jsx'ten gelen tam mp4 linkini buraya veriyoruz */}
        <source src={videoUrl} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </main>
  );
};

export default VideoPlayer;