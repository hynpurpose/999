import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_QuantitativeModel_Pic6() {
  return (
    <SlideLayout fullBleed>
      <img
        src="/images/quantitative_model_pic_6.png"
        alt="Quantitative Model Detail 6"
        className="absolute top-[-72px] left-[-8px] w-[1920px] h-[1080px] object-cover pointer-events-none z-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </SlideLayout>
  );
}

Page_QuantitativeModel_Pic6.hideHeader = true;
