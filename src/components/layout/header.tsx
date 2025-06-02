"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import router from "next/router";

// Struktur data untuk menu utama dan submenu
const menuStructure = {
  
    // New parent menu
    "tentang-kami": [
        { id: "beranda", label: "Beranda", href: "/" },
    { id: "profil", label: "Profil", href: "/tentang-kami/profil" },
    { id: "standar-layanan", label: "Standar Layanan", href: "/tentang-kami/standar-layanan" },
    { id: "maklumat-pelayanan", label: "Maklumat Pelayanan", href: "/tentang-kami/maklumat-pelayanan" },
    { id: "pengaduan", label: "Pengaduan", href: "/tentang-kami/pengaduan" },
    { id: "survei-kepuasan", label: "Survei Kepuasan", href: "/tentang-kami/survei-kepuasan" },
    { id: "informasi-lain", label: "Informasi Lain", href: "/tentang-kami/informasi-lain" }
  ],
  

  "bkl": [
    { id: "sekolah-lansia", label: "Sekolah Lansia", href: "/bkl/sekolah-lansia" },
    { id: "lansia-entrepreneur", label: "Lansia Entrepreneur", href: "/bkl/lansia-entrepreneur" },
    { id: "kartu-lansia", label: "Kartu Lansia", href: "/bkl/kartu-lansia" },
    { id: "pemeriksaan-kesehatan", label: "Pemeriksaan Kesehatan", href: "/bkl/pemeriksaan-kesehatan" },
    { id: "pendampingan-pjp", label: "Pendampingan PJP", href: "/bkl/pendampingan-pjp" }
  ],
  "kalkulator-kesehatan": [
    { id: "adl", label: "ADL", href: "/kalkulator-kesehatan/adl" },
    { id: "iadl", label: "IADL", href: "/kalkulator-kesehatan/iadl" },
    { id: "gds", label: "GDS", href: "/kalkulator-kesehatan/gds" },
    { id: "demensia", label: "Demensia", href: "/kalkulator-kesehatan/demensia" },
    { id: "indeks-kebahagiaan", label: "Indeks Kebahagiaan", href: "/kalkulator-kesehatan/indeks-kebahagiaan" },
    { id: "resiko-jatuh", label: "Resiko Jatuh", href: "/kalkulator-kesehatan/resiko-jatuh" },
    { id: "difabel", label: "Difabel", href: "/kalkulator-kesehatan/difabel" },
    { id: "bmi", label: "BMI", href: "/kalkulator-kesehatan/bmi" }
  ],
  "artikel": [
    { id: "7-dimensi-lansia-tangguh", label: "7 Dimensi Lansia Tangguh", href: "/7-dimensi-lansia-tangguh" },
    { id: "tips-dan-info", label: "Tips dan Info", href: "/tips-dan-info" },
    { id: "publikasi-dan-materi", label: "Publikasi dan Materi", href: "/publikasi-dan-materi" }
  ],
  "temukan-lokasi": [
    { id: "bina-keluarga-lansia", label: "Bina Keluarga Lansia (BKL)", href: "/bina-keluarga-lansia" },
    { id: "sekolah-lansia", label: "Sekolah Lansia", href: "/sekolah-lansia" },
    { id: "panti-werda", label: "Panti Werda", href: "/panti-werda" }
  ],
  "sidaya": [
    { id: "pencatatan-dan-pelaporan", label: "Pencatatan dan Pelaporan", href: "/pencatatan-dan-pelaporan" },
    { id: "dashboard", label: "Dashboard", href: "/dashboard" }
  ],
    individuals: [

    { id: "artikel", label: "Artikel", href: "/second-navigation/artikel" },
    { id: "dimensi-lantang", label: "7 Dimensi Lantang", href: "/second-navigation/dimensi-lantang" },
    { id: "informasi", label: "Informasi", href: "/second-navigation/informasi" },
    { id: "pencatatan", label: "Pencatatan dan Pelaporan", href: "/second-navigation/pencatatan" },
    { id: "kesehatan-dan-disabilitas", label: "Kesehatan dan Disabilitas", href: "/second-navigation/kesehatan-dan-disabilitas" },
  ],
};

export default function Header() {
  const [currentTab, setCurrentTab] = useState("tentang-kami");
  const [currentSecondaryTab, setCurrentSecondaryTab] = useState("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler untuk menu utama
  const handleMainMenuClick = (tab: string) => {
    setCurrentTab(tab);
    
    // Set submenu pertama sebagai aktif secara default
    if (menuStructure[tab as keyof typeof menuStructure]?.length > 0) {
      setCurrentSecondaryTab(menuStructure[tab as keyof typeof menuStructure][0].id);
    }
  };

  return (
    <header className={`flex flex-col w-full top-0 z-50 ${isScrolled ? "shadow-md" : ""}`}>
      {/* Top header dengan gradient biru */}
      <div 
        className="py-4"
        style={{ 
          background: "linear-gradient(135deg, #1d71b8, #89cfe8)",
          backgroundSize: "cover" 
        }}
      >
        <div className="container flex items-center justify-between px-4 mx-auto">
          {/* Logo dan brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-40 md:h-40 shrink-0">
                <img 
                  src="/images/logo-kemendukbangga-dengan-text.png" 
                  alt="Logo Kementerian" 
                  className="object-contain w-full h-full" 
                />
              </div>
              <span className="text-xl font-bold text-white md:text-5xl">SIDAYA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-4 md:flex">
            {/* Search dan menu desktop */}
            <div className="relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-64 py-2 pl-10 pr-4 bg-white border-blue-300 rounded-none bg-opacity-80"
              />
              <Search className="absolute w-4 h-4 text-blue-500 transform -translate-y-1/2 left-3 top-1/2" />
            </div>
            <Button 
              className="text-white bg-blue-600 rounded-none hover:bg-blue-800"
              onClick={() => router.push("/login")}
            >
              Sign in
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="p-2 text-white rounded-none md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu sidebar manual */}
      <div 
        className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 mobile-menu-container
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header sidebar */}
        <div 
          className="flex items-center justify-between p-4 border-b border-blue-200"
          style={{ background: "linear-gradient(135deg, #1d71b8, #89cfe8)" }}
        >
          <h2 className="text-xl font-bold text-white">Menu Navigasi</h2>
          <Button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 text-white bg-transparent rounded-none hover:bg-blue-800 focus:outline-none"
          >
            <X size={24} />
          </Button>
        </div>

        {/* Content sidebar */}
        <div className="h-[calc(100%-60px)] overflow-y-auto p-4">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute w-4 h-4 text-blue-500 -translate-y-1/2 left-3 top-1/2" />
            <Input
              type="search"
              placeholder="Cari..."
              className="w-full pl-10 border-blue-300 rounded-none"
            />
          </div>

          {/* Main menu */}
          <nav className="mb-6">
            <h3 className="mb-2 font-medium text-blue-700">Menu Utama</h3>
            <ul className="space-y-1">
              {Object.keys(menuStructure).map((tab) => (
                <li key={tab}>
                  <button
                    className={`w-full text-left px-4 py-2 ${
                      currentTab === tab 
                        ? "bg-blue-100 font-medium border-l-4 border-blue-500" 
                        : "hover:bg-blue-50"
                    }`}
                    onClick={() => {
                      handleMainMenuClick(tab);
                    }}
                  >
                    {tab.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                  </button>
                  
                  {/* Submenu untuk mobile */}
                  {currentTab === tab && (
                    <ul className="pl-6 mt-1 space-y-1">
                      {menuStructure[tab as keyof typeof menuStructure].map((item) => (
                        <li key={item.id}>
                          <button
                            className={`w-full text-left px-4 py-2 ${
                              currentSecondaryTab === item.id 
                                ? "bg-blue-100 font-medium" 
                                : "hover:bg-blue-50"
                            }`}
                            onClick={() => {
                              setCurrentSecondaryTab(item.id);
                            }}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-blue-200">
          <Button 
            className="w-full text-blue-700 bg-white rounded-none hover:bg-blue-800"
            style={{ background: "rgba(255, 255, 255, 0.9)" }}
          >
            Sign In
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-blue-900 bg-opacity-50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Secondary navigation - Menu Utama */}
      <div 
        className="bg-blue-900 shadow"
        style={{ background: "linear-gradient(135deg, #1d71b8, #89cfe8)" }}
      >
        <div className="container mx-auto">
          <nav className="flex overflow-x-auto">
            {Object.keys(menuStructure).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${
                  currentTab === tab 
                    ? "bg-blue-900 text-white border-b-4 border-white" 
                    : "text-blue-100 hover:bg-blue-300"
                }`}
                onClick={() => handleMainMenuClick(tab)}
              >
                {tab.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tertiary navigation - Submenu */}
      {menuStructure[currentTab as keyof typeof menuStructure] && (
        <div className="bg-white shadow-inner bg-opacity-90">
          <div className="container mx-auto">
            <nav className="flex overflow-x-auto">
              {menuStructure[currentTab as keyof typeof menuStructure].map((item) => (
                <Link 
                  key={item.id}
                  href={item.href}
                  passHref
                >
                  <button
                    className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${
                      currentSecondaryTab === item.id 
                        ? "bg-blue-900 text-white" 
                        : "text-blue-900 hover:bg-blue-100"
                    }`}
                    onClick={() => setCurrentSecondaryTab(item.id)}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}


    </header>
  );
}