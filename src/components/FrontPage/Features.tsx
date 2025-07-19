"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Feature {
  titleKey: string;
  descriptionKey: string;
  icon: string;
  bgColor: string;
}

const Features: React.FC = () => {
  const { t } = useTranslation('common');

  const featuresData: Feature[] = [
    {
      titleKey: "landing.features.ai.title",
      descriptionKey: "landing.features.ai.description",
      icon: "/images/front-pages/stacks.svg",
      bgColor: "bg-primary-100",
    },
    {
      titleKey: "landing.features.speed.title",
      descriptionKey: "landing.features.speed.description",
      icon: "/images/front-pages/code.svg",
      bgColor: "bg-purple-100",
    },
    {
      titleKey: "landing.features.languages.title",
      descriptionKey: "landing.features.languages.description",
      icon: "/images/front-pages/support_agent.svg",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <>
      <div className="relative z-[1] py-[60px] md:py-[80px] lg:py-[100px] xl:py-[150px]">
        <div className="container 2xl:max-w-[1320px] mx-auto px-[12px]">
          <div className="mx-auto text-center md:max-w-[650px] lg:max-w-[810px] xl:max-w-[785px] mb-[35px] md:mb-[50px] lg:mb-[65px] xl:mb-[90px]">
            <div className="inline-block relative mt-[10px] mb-[20px]">
              <span className="absolute top-[4.5px] w-[5px] h-[5px] ltr:-left-[3.6px] rtl:-right-[3.6px] bg-purple-600 -rotate-[6.536deg]"></span>
              <span className="absolute -top-[9.5px] w-[5px] h-[5px] ltr:right-0 rtl:left-0 bg-purple-600 -rotate-[6.536deg]"></span>
              <span className="inline-block relative text-purple-600 border border-purple-600 py-[5.5px] px-[17.2px] -rotate-[6.536deg]">
                {t('landing.features.title')}
                <span className="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-left-[3.5px] rtl:-right-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                <span className="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-right-[3.5px] rtl:-left-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
              </span>
            </div>
            <h2 className="!mb-0 !text-[24px] md:!text-[28px] lg:!text-[34px] xl:!text-[36px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px] !leading-[1.2]">
              {t('landing.features.subtitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="text-center ltr:lg:text-left rtl:lg:text-right"
              >
                <div
                  className={`flex items-center justify-center w-[80px] h-[80px] md:w-[85px] md:h-[85px] rounded-[10px] md:rounded-[17px] mb-[20px] lg:mb-[22px] mx-auto lg:mx-0 ${feature.bgColor}`}
                >
                  <Image
                    src={feature.icon}
                    width={50}
                    height={50}
                    className="inline-block"
                    alt={t(feature.titleKey)}
                  />
                </div>

                <h3 className="!text-lg md:!text-[20px] lg:!text-[22px] xl:!text-[24px] !mb-[10px] md:!mb-[12px] xl:!mb-[13px] !font-semibold !leading-[1.2]">
                  {t(feature.titleKey)}
                </h3>

                <p className="xl:max-w-[375px] leading-[1.6]">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
