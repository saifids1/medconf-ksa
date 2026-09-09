"use client";

import { useState } from "react";
import {
  Crown,
  Diamond,
  Medal,
  Briefcase,
  ChevronRight,
  Sparkles,
  Users,
  Calendar,
  Star,
  Shield,
  Globe,
  Award,
  Heart,
  Target,
  Rocket,
  Mail,
  Clock,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";
import Link from "next/link";
import { GrServices } from "react-icons/gr";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../il18/aboutUs/partnershipOpportunities";

export default function partnershipOpportunities() {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === "ar";

  const partners = [
    // {
    //   id: "business",
    //   name: t.businessPackage,
    //   color: "rgb(76 76 76)",
    //   price: "Custom Pricing",
    //   space: t.businessPackageBasedonSpaceandLocation,
    //   features: [
    //     t.businessPackageLocations,
    //     t.businessPackageSupport,
    //     t.businessPackageSpace,
    //     t.businessPackageParking,
    //     t.businessPackageManager,
    //   ],
    //   customPrice: true,
    // },
    {
      id: "gold",
      name: t.goldPartner,
      color: "rgb(106 80 13)",
      price: "1,000,000 SAR",
      space: "120 sqm",
      features: [
        t.goldPartnerSpace,
        t.goldPartnerSupport,
        t.businessPackageSpace,
        t.goldPartnerParking,
        t.goldPartnerReport,
      ],
      customPrice: false,
    },
    {
      id: 'platinum',
      name: t.platinumPartner,
      color: "rgb(85 185 220)",
      price: "1,500,000 SAR",
      space: "160 sqm",
      features: [
        t.platinumPartnerSpace,
        t.platinumPartnerSupport,
        t.platinumPartnerManager,
        t.platinumPartnerParking,
        t.platinumPartnerReport,
      ],
      customPrice: false,
    },
    {
      id: "strategic",
      name: t.strategicPartner,
      color: "rgb(38 65 127)",
      price: "2,000,000 SAR",
      space: "230 sqm",
      features: [
        t.strategicPartnerSpace,
        t.strategicPartnerSupport,
        t.strategicPartnerManager,
        t.strategicPartnerParking,
        t.strategicPartnerParking2,
        t.strategicPartnerReport,
      ],
      customPrice: false,
    },
  ];
  const stats = [
    { value: "5,000+", label: t.corporateLeaders, icon: Users },
    { value: "10M+", label: t.mediaImpressions, icon: Globe },
    { value: "98%", label: t.successRate, icon: TrendingUp },
    { value: "50+", label: t.globalReach, icon: Target },
  ];

  const whyChooseItems = [
    t.provenTrackRecord,
    t.targetedAudience,
    t.innovationFocus,
    t.dataDrivenStrategy,
  ];

  return (
    <>
      <BreadCrumb
        title={t.sponsorship}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.sponsorship }]}
      />

      <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {t.partnershipOpportunities2026}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
             
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                {" "}
{t.sponsorship}
              </span>
            </h2>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
                {t.heroDescription}
              </p>
            </div>
          </div>

  {/* Stats Section */}
<div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-16 sm:mb-20 md:mb-24 px-3 sm:px-0">
  {stats.map((stat, index) => {
    const Icon = stat.icon;
    return (
      <div
        key={index}
        className="group relative rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="text-center">
          <div className="inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-white/10 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-teal-400" />
          </div>
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1">
            {stat.value}
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight">
            {stat.label}
          </div>
        </div>
      </div>
    );
  })}
</div>

          {/* Sponsorship Packages Grid */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  {t.partnershipPackages}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 px-4">
                <span className="text-white">{t.pacExplore}</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent block sm:inline">
                  {" "}
                  {t.chooseYourPartnershipLevel}
                </span>
              </h3>
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 px-4 mt-4">
                  {t.selectPackageDescription}
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 px-4 sm:px-4 md:px-0 max-w-xs sm:max-w-none w-full sm:w-full">
                {partners.map((tier, index) => {
                  return (
                    <div
                      key={tier.id}
                      className="group relative flex justify-center"
                    >
                      <div className="relative w-full sm:w-full max-w-[320px] sm:max-w-none h-[320px] sm:h-auto rounded-lg sm:rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
                        {/* Header with custom color */}
                        <div
                          className="relative p-4 sm:p-4 md:p-5 lg:p-6"
                          style={{ backgroundColor: tier.color }}
                        >
                          <h3 className="text-centyer sm:text-base md:text-lg md:text-center lg:text-xl font-bold text-white text-center  sm:text-left">
                            {tier.name}
                          </h3>
                        </div>

            {/* Content */}
            <div className="relative p-4 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
              {/* Features */}
              <div className="flex-1 mb-3 sm:mb-4 md:mb-5">
                <div className="space-y-2 sm:space-y-1.5 md:space-y-2">
                  {tier.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-1.5 sm:gap-2"
                    >
                      <div
                        className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: tier.color }}
                      ></div>
                      <p className="text-xs sm:text-xs md:text-sm text-gray-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer - Price section styled like header */}
            <div
              className="relative p-4 sm:p-4 md:p-5 lg:p-6 mt-auto"
              style={{ backgroundColor: tier.color }}
            >
              {tier.customPrice ? (
                <div className="text-sm sm:text-sm md:text-base text-center text-white/90 font-medium">
                  {tier.space}
                </div>
              ) : (
                <div className="text-base sm:text-base md:text-xl font-bold text-center text-white">
                  {tier.price}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
          </div>

          {/* Why Choose Us Section */}
          {/* <div className="relative mb-20 sm:mb-24 max-w-5xl mx-auto text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 shadow-lg shadow-cyan-500/5">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium tracking-wide text-gray-300">
                {t.whyIndustryLeadersChooseUs}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              The{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Strategic Advantage
              </span>
            </h3>

            <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
              {t.strategicAdvantageDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {whyChooseItems.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* CTA Section */}
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  {t.getInTouch}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                {t.readyToPartner}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                {t.ctaDescription}
              </p>

              <Link
                href="/pages/ContactUs/"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t.contactPartnershipTeam}
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{t.responseWithin24h}</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{t.partnershipEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
}
