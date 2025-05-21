import Link from 'next/link';
import Image from 'next/image'; // Import komponen Image dari next/image
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, FileText, BarChart2, Archive, UserPlus, CalendarCheck } from 'lucide-react';

export default function PencatatanPelaporanPage() {
  const menuItems = [
    {
      title: "Formulir Pendaftaran",
      description: "Formulir pendaftaran anggota lansia dan pengelola program SIDAYA. Daftarkan lansia untuk mengakses berbagai layanan.",
      icon: <UserPlus className="w-12 h-12 text-[#FFB200]" />,
      link: "/formulir-pendaftaran"
    },
    {
      title: "Laporan Kegiatan",
      description: "Pelaporan kegiatan harian, mingguan dan bulanan program SIDAYA. Dokumentasi aktivitas dan pencapaian program.",
      icon: <CalendarCheck className="w-12 h-12 text-[#FFB200]" />,
      link: "/laporan-kegiatan"
    },
    {
      title: "Statistik",
      description: "Data statistik perkembangan program SIDAYA. Visualisasi data peserta, kegiatan, dan capaian program.",
      icon: <BarChart2 className="w-12 h-12 text-[#FFB200]" />,
      link: "/statistik"
    },
    {
      title: "Arsip",
      description: "Arsip dokumen dan laporan historis program SIDAYA. Penyimpanan terorganisir untuk referensi masa lalu.",
      icon: <Archive className="w-12 h-12 text-[#FFB200]" />,
      link: "/arsip"
    },
    {
      title: "Formulir Evaluasi",
      description: "Formulir evaluasi program dan kepuasan peserta. Alat ukur efektivitas program SIDAYA.",
      icon: <ClipboardList className="w-12 h-12 text-[#FFB200]" />,
      link: "/formulir-evaluasi"
    },
    {
      title: "Laporan Tahunan",
      description: "Laporan tahunan perkembangan program SIDAYA. Ringkasan capaian dan pencapaian selama setahun.",
      icon: <FileText className="w-12 h-12 text-[#FFB200]" />,
      link: "/laporan-tahunan"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Pencatatan dan Pelaporan</h1>
              <p className="text-xl mb-6">
                Sistem terintegrasi untuk pencatatan dan pelaporan program Lansia Berdaya. Kelola data lansia, kegiatan, dan capaian program secara efektif.
              </p>
              <div className="flex items-center">
                <Button className="bg-[#FFB200] text-white rounded-none hover:bg-gray-800">
                  Listen <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/document.png" 
                alt="Pencatatan dan Pelaporan" 
                width={256} 
                height={256} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-[#FFB200] hover:underline">Beranda</Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-600">Pencatatan & Pelaporan</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-center mb-4 p-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="mb-4 flex-grow text-gray-600">{item.description}</p>
                  <Link 
                    href={item.link} 
                    className="text-[#FFB200] hover:text-[#e69c00] hover:underline flex items-center mt-auto font-medium"
                  >
                    Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-8 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <p className="font-medium mb-2">Apakah halaman ini bermanfaat?</p>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-300 hover:bg-gray-100">Tidak</Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-100">Ya</Button>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              Halaman terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}