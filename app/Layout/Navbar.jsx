"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../il18/translations";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LogIn,
  ChevronDown,
  Calendar,
  Building,
  UserPlus,
  Eye,
  Stethoscope,
  Trophy,
  Lightbulb,
  Microscope,
  Cpu,
  UsersRound,
  Landmark,
  BookOpen,
  ChevronRight,
  Shield,
} from "lucide-react";
import { Handshake, Building2, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [signInOpen, setSignInOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const signInTimeoutRef = useRef(null);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();

  const navlinks = [
    { label: "home", href: "/" },

    {
      label: "services",
      href: "#",
      submenus: [
        {
          label: "conferenceOrganization",
          href: "/Services/conferenceorganization",
          icon: Calendar,
        },
        {
          label: "exhibitionSpaceBooking",
          href: "/Services/exhibitionspacebooking",
          icon: Building,
        },
        {
          label: "practitionerRegistration",
          href: "/Services/practitionerregistration",
          icon: UserPlus,
        },
        // {
        //   label: t.viewAllServices,
        //   href: "/Services",
        //   isViewAll: true,
        //   icon: Eye,
        // },
      ],
    },

    { label: "events", href: "/pages/Events" },

    {
      label: "portals",
      href: "/",
      submenus: [
        {
          label: "sponsorPortal",
          href: "https://hpql-sponsor.i-diligence.com/login",
          icon: Trophy,
        },
        {
          label: "exhibitorPortal",
          href: "https://hpql-exhibitor.i-diligence.com/login",
          icon: Building,
        },
        {
          label: "visitorPortal",
          href: "https://hpql-visitor.i-diligence.com/login",
          icon: Eye,
        },
        {
          label: "healthCarePortal",
          href: "https://hpql-healthcare-practitioner.i-diligence.com/login",
          icon: Stethoscope,
        },
        // {
        //   label: t.viewAllPortals,
        //   href: "/pages/SignIn",
        //   isViewAll: true,
        //   icon: Eye,
        // },
      ],
    },

    {
      label: "about",
      href: "/pages/AboutUs",
      submenus: [
        {
          label: "whoWeAre",
          href: "/pages/AboutUs",
          icon: Building2,
        },
        {
          label: "ourJourney",
          href: "/pages/AboutUs/ExhibitionJourney",
          icon: TrendingUp,
        },
        {
          label: "partnershipOpportunities",
          href: "/pages/AboutUs/SponsorshipPartnershipOpportunities",
          icon: Handshake,
        },
      ],
    },

    { label: "newsBlogs", href: "/pages/NewsBlogPage" },
    { label: "faq", href: "/pages/FAQ" },

    {
      label: "whatsOn",
      href: "#",
      submenus: [
        {
          label: "medicalInnovationArena",
          href: "/pages/WhatsOn/MedicalInnovationArena",
          icon: Lightbulb,
        },
        {
          label: "healthcareInnovationHub",
          href: "/pages/WhatsOn/HealthcareInnovationHub",
          icon: Microscope,
        },
        {
          label: "medicalTechnologyZone",
          href: "/pages/WhatsOn/MedicalTechnologyZone",
          icon: Cpu,
        },
        {
          label: "clinicalKnowledgeForum",
          href: "/pages/WhatsOn/ClinicalKnowledgeForum",
          icon: BookOpen,
        },
        {
          label: "industryCollaborationExchange",
          href: "/pages/WhatsOn/IndustryCollaborationExchange",
          icon: UsersRound,
        },
        {
          label: "guidedExhibitionTours",
          href: "/pages/WhatsOn/GuidedExhibitionTours",
          icon: Landmark,
        },
      ],
    },

    { label: "contact", href: "/pages/ContactUs" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setSignInOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  if (!mounted) return null;

  const isActive = (href, submenus = null) => {
    if (href === "/") return pathname === "/";

    if (href !== "#" && pathname?.startsWith(href)) return true;

    if (submenus && submenus.length > 0) {
      return submenus.some((submenu) => pathname?.startsWith(submenu.href));
    }

    return false;
  };

  const handleMouseEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleSignInMouseEnter = () => {
    if (signInTimeoutRef.current) {
      clearTimeout(signInTimeoutRef.current);
      signInTimeoutRef.current = null;
    }
    setSignInOpen(true);
  };

  const handleSignInMouseLeave = () => {
    signInTimeoutRef.current = setTimeout(() => {
      setSignInOpen(false);
    }, 150);
  };

  // Portal options for Sign In dropdown
  const portalOptions = [
    {
      label: "sponsorPortal",
      href: "https://hpql-sponsor.i-diligence.com/login",
      icon: Trophy,
    },
    {
      label: "exhibitorPortal",
      href: "https://hpql-exhibitor.i-diligence.com/login",
      icon: Building,
    },
    {
      label: "visitorPortal",
      href: "https://hpql-visitor.i-diligence.com/login",
      icon: Eye,
    },
    {
      label: "healthCarePortal",
      href: "https://hpql-healthcare-practitioner.i-diligence.com/login",
      icon: Stethoscope,
    },
    // { label: "adminPortal", href: "/Admin/Dashboard", icon: Shield },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-gray-900/95 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

        {/* Bottom Gradient Line when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between h-20 p-4 lg:p-0 md:p-0">
            {/* Logo */}
            <Link href="/" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex items-center">
                <Image
                  src="/Images/Logo.png"
                  alt="HPQL Logo"
                  width={40}
                  height={40}
                />
                <span
                  className={`relative text-3xl font-black tracking-tight transition-all duration-500 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent ml-1`}
                >
                  HPQL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navlinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.submenus && handleMouseEnter(link.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center gap-1 ${
                      isActive(link.href, link.submenus)
                        ? "text-blue-400"
                        : scrolled
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {isActive(link.href, link.submenus) && (
                      <span className="absolute inset-0 bg-blue-500/10 rounded-xl border border-blue-500/30"></span>
                    )}
                    <span className="absolute inset-0 rounded-xl transition-opacity duration-300 bg-white/5 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative z-10">{t[link.label]}</span>
                    {link.submenus && (
                      <ChevronDown
                        className={`relative z-10 w-4 h-4 transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    {isActive(link.href, link.submenus) && !link.submenus && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
                    )}
                  </Link>

                  {/* Dropdown Submenu - Matching Footer Style */}
                  {link.submenus && openDropdown === link.label && (
                    <div className="absolute left-0 top-full pt-2 w-80 z-50">
                      <div className="relative overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                        {/* Floating Orbs inside dropdown */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                        {/* Top gradient line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                        <div className="relative p-2">
                          <div className="space-y-1">
                            {link.submenus
                              .filter((s) => !s.isViewAll)
                              .map((submenu) => {
                                const IconComponent = submenu.icon;
                                return (
                                  <Link
                                    key={submenu.label}
                                    href={submenu.href}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group/item ${
                                      pathname === submenu.href
                                        ? "text-blue-400 bg-blue-500/10"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                    }`}
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {IconComponent && (
                                      <div className="flex items-center justify-center w-5 h-5">
                                        <IconComponent className="w-4 h-4 text-gray-400 group-hover/item:text-blue-400 transition-colors duration-300" />
                                      </div>
                                    )}
                                    <span className="flex-1">
                                      {t[submenu.label]}
                                    </span>
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 -translate-x-2 group-hover/item:translate-x-0" />
                                  </Link>
                                );
                              })}
                          </div>

                          {link.submenus.some((s) => s.isViewAll) && (
                            <div className="relative my-2">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                              </div>
                            </div>
                          )}

                          {link.submenus
                            .filter((s) => s.isViewAll)
                            .map((viewAllItem) => {
                              const IconComponent = viewAllItem.icon;
                              return (
                                <Link
                                  key={viewAllItem.label}
                                  href={viewAllItem.href}
                                  className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-300 group"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <span className="flex items-center gap-3">
                                    {IconComponent && (
                                      <IconComponent className="w-4 h-4" />
                                    )}
                                    {t[viewAllItem.label]}
                                  </span>
                                  <ChevronRight className="w-3 h-3 opacity-70 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sign In Button with Dropdown */}
            {/* <div className="hidden lg:flex items-center gap-3">
              <div
                className="relative"
                onMouseEnter={handleSignInMouseEnter}
                onMouseLeave={handleSignInMouseLeave}
              >
                <button
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    {t.signIn}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${signInOpen ? "rotate-180" : ""}`} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </button>

            
                {signInOpen && (
                  <div className="absolute right-0 top-full pt-2 w-64 z-50">
                    <div className="relative overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                 
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                      
                 
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                      <div className="relative p-2">
                        <div className="space-y-1">
                          {portalOptions.map((portal) => {
                            const IconComponent = portal.icon;
                            return (
                              <Link
                                key={portal.label}
                                href={portal.href}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group/item ${
                                  pathname === portal.href
                                    ? "text-blue-400 bg-blue-500/10"
                                    : "text-gray-300 hover:text-white hover:bg-white/5"
                                }`}
                                onClick={() => setSignInOpen(false)}
                              >
                                {IconComponent && (
                                  <div className="flex items-center justify-center w-5 h-5">
                                    <IconComponent className="w-4 h-4 text-gray-400 group-hover/item:text-blue-400 transition-colors duration-300" />
                                  </div>
                                )}
                                <span className="flex-1">{t[portal.label]}</span>
                                <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 -translate-x-2 group-hover/item:translate-x-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 border rounded text-white"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </div> */}

            {/* Sign In Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/pages/Registraction" className="group relative">
                <button className="group cursor-pointer relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">
                    {t.signIn}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </button>
              </Link>

              <button
                onClick={toggleLanguage}
                className="px-3 cursor-pointer py-2 border rounded text-white"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </div>
            {/* Sign In Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="px-3 cursor-pointer py-2 border rounded text-white text-sm"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
              <Link href="/pages/SignIn">
                <button className="group cursor-pointer relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2 text-sm">
                    {t.signIn}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-white bg-white/10 hover:bg-white/20"
                  : "text-white bg-white/10 hover:bg-white/20"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Matching Footer Dark Style */}
      <div
  className={`lg:hidden fixed inset-x-0 top-22 sm:top-20 z-50 transition-all duration-500 ${
    mobileOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-4 pointer-events-none"
  }`}
>
  
  <div className="mx-3 sm:mx-4 md:mx-6 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
    <div className="relative overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl">
      {/* Floating Orbs in Mobile Menu */}
      <div className="absolute -top-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-36 sm:w-48 h-36 sm:h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Header with Language Toggle */}
      <div className="relative flex items-center justify-between p-3 sm:p-4 border-b border-white/10">
        <span className="text-xs sm:text-sm font-medium text-gray-400">
          Menu
        </span>
        <button
          onClick={toggleLanguage}
          className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/20 text-white text-xs sm:text-sm hover:bg-white/10 transition-colors duration-300"
        >
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>

      <div className="relative p-2 sm:p-3 md:p-4 space-y-1 sm:space-y-2">
        {navlinks.map((link) => (
          <div key={link.label} className="space-y-1">
            <button
              onClick={() => {
                if (link.submenus) {
                  setOpenDropdown(
                    openDropdown === link.label ? null : link.label,
                  );
                } else {
                  setMobileOpen(false);
                  window.location.href = link.href;
                }
              }}
              className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive(link.href, link.submenus)
                  ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="truncate">{t[link.label]}</span>
              {link.submenus && (
                <ChevronDown
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ml-2 transition-transform duration-300 ${
                    openDropdown === link.label ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {link.submenus && openDropdown === link.label && (
              <div className="ml-2 sm:ml-4 space-y-1 border-l-2 border-blue-500/30 pl-2 sm:pl-3 mt-1 sm:mt-2">
                {link.submenus.map((submenu) => {
                  const IconComponent = submenu.icon;
                  return (
                    <Link
                      key={submenu.label}
                      href={submenu.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenDropdown(null);
                      }}
                      className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                        pathname === submenu.href
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      )}
                      <span className="truncate">{t[submenu.label]}</span>
                      {submenu.isViewAll && (
                        <ChevronRight className="w-3 h-3 ml-auto flex-shrink-0 opacity-70" />
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        <div className="relative my-3 sm:my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
        </div>

        {/* Sign In Button */}
        <Link
          href="/Forms/Login"
          onClick={() => setMobileOpen(false)}
          className="group relative overflow-hidden block w-full text-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-xl transition-all duration-300 text-xs sm:text-sm"
        >
          <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
            <LogIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {t.signIn}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>
    </div>
  </div>
</div>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
