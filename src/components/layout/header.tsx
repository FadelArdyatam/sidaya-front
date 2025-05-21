"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";


export default function Header() {
  const [currentTab, setCurrentTab] = useState("individuals");
  const [currentSecondaryTab, setCurrentSecondaryTab] = useState("artikel");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when clicking outside
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

  return (
    <header className={`flex flex-col w-full top-0 z-50 ${isScrolled ? "shadow-md" : ""}`}>
      {/* Top header */}
      <div className="bg-[#FFB200] py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo dan brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-40 md:h-40 shrink-0">
                <img 
                  src="/images/logo-kemendukbangga-dengan-text.png" 
                  alt="Logo Kementerian" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-xl md:text-5xl font-bold text-amber-800">SIDAYA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden  md:flex items-center space-x-4">
            {/* Search dan menu desktop */}
            <div className="relative">
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-64 bg-white rounded-none border-amber-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
            </div>
            <Button className="bg-[FFB200] text-white hover:bg-amber-800 rounded-none">Sign in</Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-none focus:outline-none"
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
        <div className="flex justify-between items-center p-4 border-b border-amber-200">
          <h2 className="text-xl font-bold">Menu Navigasi</h2>
          <Button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 rounded-none focus:outline-none"
          >
            <X size={24} />
          </Button>
        </div>

        {/* Content sidebar */}
        <div className="h-[calc(100%-60px)] overflow-y-auto p-4">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500" />
            <Input
              type="search"
              placeholder="Cari..."
              className="w-full pl-10 rounded-none border-amber-300"
            />
          </div>

          {/* Main menu */}
          <nav className="mb-6">
            <h3 className="font-medium mb-2 text-amber-700">Menu Utama</h3>
            <ul className="space-y-1">
              {["individuals", "health-professionals", "businesses", "community-groups"].map((item) => (
                <li key={item}>
                  <button
                    className={`w-full text-left px-4 py-2 ${currentTab === item ? "bg-amber-100 font-medium" : "hover:bg-amber-50"}`}
                    onClick={() => {
                      setCurrentTab(item);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary menu */}
          <nav>
            <h3 className="font-medium mb-2 text-amber-700">Kategori</h3>
            <ul className="space-y-1">
              {[
                "beranda",
                "artikel",
                "dimensi-lantang",
                "ageing",
                "informasi",
                "pencatatan",
                "kesehatan-dan-disabilitas"
              ].map((item) => (
                <li key={item}>
                  <button
                    className={`w-full text-left px-4 py-2 ${currentSecondaryTab === item ? "bg-amber-100 font-medium" : "hover:bg-amber-50"}`}
                    onClick={() => {
                      setCurrentSecondaryTab(item);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-amber-200 bg-white">
          <Button className="w-full rounded-none bg-[FFB200] hover:bg-amber-800">Sign In</Button>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[FFB200] bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

{/* Secondary navigation */}
      <div className="bg-[#FFB200] shadow">
        <div className="container mx-auto">
          <nav className="flex overflow-x-auto">
            <button
              className={`${
                currentTab === "individuals" ? "bg-amber-100 border-b-2 border-sa-blue" : ""
              } px-4 py-3 whitespace-nowrap text-sm font-medium`}
              onClick={() => setCurrentTab("individuals")}
            >
              Individuals
            </button>
            <button
              className={`${
                currentTab === "health-professionals" ? "bg-amber-100 border-b-2 border-sa-blue" : ""
              } px-4 py-3 whitespace-nowrap text-sm font-medium`}
              onClick={() => setCurrentTab("health-professionals")}
            >
              Health professionals
            </button>
            <button
              className={`${
                currentTab === "businesses" ? "bg-amber-100 border-b-2 border-sa-blue" : ""
              } px-4 py-3 whitespace-nowrap text-sm font-medium`}
              onClick={() => setCurrentTab("businesses")}
            >
              Businesses
            </button>
            <button
              className={`${
                currentTab === "community-groups" ? "bg-amber-100 border-b-2 border-sa-blue" : ""
              } px-4 py-3 whitespace-nowrap text-sm font-medium`}
              onClick={() => setCurrentTab("community-groups")}
            >
              Community groups
            </button>
          </nav>
        </div>
      </div>

      {/* Tertiary navigation */}
      <div className="bg-white">
        <div className="container mx-auto">
          <nav className="flex overflow-x-auto">
            <Link href="/" passHref>
              <button
                className={`${
                  currentSecondaryTab === "beranda" ? "bg-[#FFB200] text-white" : ""
                } px-4 py-3 whitespace-nowrap text-sm font-medium hover:shadow`}
                onClick={() => setCurrentSecondaryTab("beranda")}
              >
                Beranda
              </button>
            </Link>
            <Link href="/artikel" passHref>
              <button
                className={`${
                  currentSecondaryTab === "artikel" ? " bg-[#FFB200] text-white" : ""
                } px-4 py-3 whitespace-nowrap text-sm font-medium hover:shadow`}
                onClick={() => setCurrentSecondaryTab("artikel")}
              >
                Artikel
              </button>
            </Link>
            <Link href="/dimensi-lantang" passHref>
              <button
                className={`${
                  currentSecondaryTab === "dimensi-lantang" ? "bg-[#FFB200] text-white" : ""
                } px-4 py-3 whitespace-nowrap text-sm font-medium hover:shadow`}
                onClick={() => setCurrentSecondaryTab("dimensi-lantang")}
              >
                7 Dimensi Lantang
              </button>
            </Link>
                  {/* 
                  <Link href="/ageing" passHref>
              <button
                className={`${
                  currentSecondaryTab === "ageing" ? "bg-[#FFB200] text-white" : ""
                } px-4 py-3 whitespace-nowrap text-sm font-medium hover:shadow`}
                onClick={() => setCurrentSecondaryTab("ageing")}
              >
                Ageing
              </button>
            </Link>
                  
                  */}
            
            <Link href="/informasi" passHref>
              <button
                className={`${
                  currentSecondaryTab === "informasi" ? "bg-[#FFB200] text-white" : ""
                } px-4 py-3 whitespace-nowrap text-sm font-medium hover:shadow`}
                onClick={() => setCurrentSecondaryTab("informasi")}
              >
                Informasi
              </button>
            </Link>
            <Link href="/pencatatan" passHref>
              <button
                className={`${
                  currentSecondaryTab === "pencatatan" ? "bg-[#FFB200] text-white" : ""
                } px-4 py-3 whitespace-nowrap text-sm font-medium hover:shadow`}
                onClick={() => setCurrentSecondaryTab("pencatatan")}
              >
                Pencatatan dan Pelaporan
              </button>
            </Link>
            <Link href="/kesehatan-dan-disabilitas" passHref>
              <button
                className={`${
                  currentSecondaryTab === "kesehatan-dan-disabilitas" ? "bg-[#FFB200] text-white" : ""
                } px-4 py-3 whitespace-nowrap text-sm font-medium hover:shadow`}
                onClick={() => setCurrentSecondaryTab("kesehatan-dan-disabilitas")}
              >
                Kesehatan dan Disabilitas
              </button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="p-4">
            <Input
              type="search"
              placeholder="Search"
              className="mb-4"
            />
            <div className="space-y-2">
              <Button className="w-full justify-start hover:shadow" variant="ghost">
                Individuals
              </Button>
              <Button className="w-full justify-start hover:shadow" variant="ghost">
                Health professionals
              </Button>
              <Button className="w-full justify-start hover:shadow" variant="ghost">
                Businesses
              </Button>
              <Button className="w-full justify-start hover:shadow" variant="ghost">
                Community groups
              </Button>
              <div className="pt-2 border-t">
                <Button className="w-full" variant="default">
                  Sign in
                </Button>
              </div>
            </div>
          </div>
            
        </div>
      )}
    </header>
  );
}