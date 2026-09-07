import React from 'react';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

export default function Page_SkyworthThankYou() {
  const subtitle = "Thank You";
  const bgImage = "/proposal-cover/proposal-cover-new.png";

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-black select-none">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      {/* Background image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Top-left: brand logo */}
      <div className="absolute z-10" style={{ top: '39px', left: '40px' }}>
        <img 
          src="/logo.png" 
          alt="Brand Logo" 
          style={{ height: '28px', width: 'auto', display: 'block' }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Center-left: Thank You */}
      <div className="absolute z-10" style={{ top: '430px', left: '65px' }}>
        <h1
          className="text-white font-black"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '130px',
            lineHeight: '1.2',
            letterSpacing: '-0.03em',
            color: 'white',
          }}
        >
          {subtitle}
        </h1>
      </div>

      {/* Bottom Contact Info */}
      <div className="absolute z-10" style={{ bottom: '30px', left: '40px', right: '40px' }}>
        <div 
          className="w-full" 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.4)',
            paddingTop: '20px'
          }}
        >
          <div 
            className="grid grid-cols-3 text-white" 
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '30px', 
              fontWeight: '500',
              letterSpacing: '0.02em'
            }}
          >
            <div className="text-left">Contact: Neeson</div>
            <div className="text-center">Email: neeson.ren@jimingtech.com.cn</div>
            <div className="text-right">Tel: 139 0231 5880</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Page_SkyworthThankYou.hideHeader = true;
