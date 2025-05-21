import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  Pill, Brain, HeartHandshake, Cross, HospitalIcon, HeartMinus } from 'lucide-react';

export default function KesehatanDanDisabilitasPage() {
  const menuItems = [
    {
      title: "BPJS Kesehatan",
      description: "Informasi tentang BPJS Kesehatan dan cara mengakses layanan kesehatan. Cara mengklaim manfaat BPJS dan mengelola akun BPJS secara online.",
      icon: <HospitalIcon className="w-12 h-12 text-[#FFB200]" />,
      link: "/bpjs-kesehatan"
    },
    {
      title: "Program Obat Subsidi",
      description: "Informasi tentang program obat bersubsidi. Bantuan biaya obat resep dan cara mengakses obat bersubsidi.",
      icon: <Pill className="w-12 h-12 text-[#FFB200]" />,
      link: "/program-obat-subsidi"
    },
    {
      title: "Disabilitas",
      description: "Informasi tentang dukungan dan layanan untuk penyandang disabilitas. Bantuan termasuk pembayaran, layanan, dan program inklusi.",
      icon: <HeartMinus className="w-12 h-12 text-[#FFB200]" />,
      link: "/disabilitas"
    },
    {
      title: "Kesehatan Mental",
      description: "Dukungan untuk orang yang mengalami masalah kesehatan mental. Informasi tentang layanan, dukungan krisis, dan tempat mendapatkan bantuan.",
      icon: <Brain className="w-12 h-12 text-[#FFB200]" />,
      link: "/kesehatan-mental"
    },
    {
      title: "Perawat/Pendamping",
      description: "Dukungan untuk orang yang merawat penyandang disabilitas, kondisi medis, atau lansia. Informasi tentang pembayaran dan layanan.",
      icon: <HeartHandshake className="w-12 h-12 text-[#FFB200]" />,
      link: "/perawat-pendamping"
    },
    {
      title: "Ketika Seseorang Meninggal",
      description: "Apa yang harus dilakukan ketika seseorang yang dekat meninggal. Informasi tentang pembayaran dukacita dan layanan dukungan lainnya.",
      icon: <Cross className="w-12 h-12 text-[#FFB200]" />,
      link: "/ketika-seseorang-meninggal"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Kesehatan dan Disabilitas</h1>
              <p className="text-xl mb-6">
                Akses BPJS Kesehatan dan beberapa layanan kesehatan dengan biaya rendah atau gratis. Bantuan untuk penyandang disabilitas atau jika Anda merawat seseorang.
              </p>
              <div className="flex items-center">
                <Button className="bg-[#FFB200] text-white rounded-none hover:bg-gray-800">
                  Listen <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
                            <img 
                src="images/disabled.png" 
                alt="Kesehatan dan Disabilitas" 
                className="w-64 h-64 object-contain"
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
            <span className="text-gray-600">Kesehatan dan Disabilitas</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-gray-100">
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