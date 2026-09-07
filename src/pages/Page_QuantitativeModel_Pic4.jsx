import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_QuantitativeModel_Pic4() {
  return (
    <SlideLayout fullBleed>
      <img
        src="/images/quantitative_model_pic_4.png"
        alt="Quantitative Model Detail 4"
        className="absolute top-[-72px] left-[-8px] w-[1920px] h-[1080px] object-cover pointer-events-none z-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </SlideLayout>
  );
}

Page_QuantitativeModel_Pic4.hideHeader = true;
