import React from 'react';
import { BEFORE_AFTER_DATA } from '../../constants/data';
import { SectionTitle } from '../ui/SectionTitle';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 md:py-32 bg-[#EFECE6] border-y border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          subtitle={BEFORE_AFTER_DATA.subtitle}
          title={BEFORE_AFTER_DATA.title}
          description={BEFORE_AFTER_DATA.description}
          align="center"
          className="mb-12"
        />

        <div className="max-w-5xl mx-auto rounded-[10px] overflow-hidden border border-[#E8E2D8] shadow-sm">
          <BeforeAfterSlider
            beforeImage={BEFORE_AFTER_DATA.beforeImage}
            afterImage={BEFORE_AFTER_DATA.afterImage}
            beforeLabel={BEFORE_AFTER_DATA.beforeLabel}
            afterLabel={BEFORE_AFTER_DATA.afterLabel}
          />
        </div>
      </div>
    </section>
  );
}
