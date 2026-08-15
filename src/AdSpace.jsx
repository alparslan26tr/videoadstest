import React, { useEffect } from 'react';

const AdSpace = ({ adSlot }) => {
  useEffect(() => {
    // Bileşen ekrana yüklendiğinde AdSense'e "buraya reklam bas" diyoruz
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense hatası:", e);
    }
  }, []); // Boş array, sadece ilk render'da çalışmasını sağlar

  return (
    <aside className="ad-space" style={{ padding: 0, overflow: 'hidden' }}>
      {/* AdSense ins etiketi */}
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%', height: '100%' }}
           data-ad-client="ca-pub-8829060423265293" 
           data-ad-slot={adSlot}
           data-ad-format="auto"
           data-full-width-responsive="true">
      </ins>
    </aside>
  );
};

export default AdSpace;