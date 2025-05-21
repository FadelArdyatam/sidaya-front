import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, BookOpen, HeartPulse, Activity, Lightbulb, FileText, Users, FileSearch, Download } from 'lucide-react';

export default function SidayaPage() {
  const menuItems = [
    {
      title: "Artikel",
      description: "Kumpulan artikel informatif seputar dunia lansia, gaya hidup sehat, dan pengembangan diri di usia senja.",
      icon: <BookOpen className="w-12 h-12 text-[#FFB200]" />,
      link: "/artikel"
    },
    {
      title: "Tips Kesehatan Lansia",
      description: "Panduan praktis menjaga kesehatan fisik dan mental di usia lanjut, pola makan sehat, dan aktivitas yang direkomendasikan.",
      icon: <HeartPulse className="w-12 h-12 text-[#FFB200]" />,
      link: "/tips-kesehatan"
    },
    {
      title: "Info Penyakit Lansia",
      description: "Informasi lengkap tentang penyakit yang umum dialami lansia, gejala, pencegahan, dan penanganannya.",
      icon: <Activity className="w-12 h-12 text-[#FFB200]" />,
      link: "/info-penyakit"
    },
    {
      title: "Info Kegiatan Lansia",
      description: "Jadwal kegiatan, event, dan acara khusus lansia di berbagai daerah untuk meningkatkan sosialisasi dan kebahagiaan.",
      icon: <Lightbulb className="w-12 h-12 text-[#FFB200]" />,
      link: "/kegiatan-lansia"
    },
    {
      title: "Lansia Tangguh/Kreatif",
      description: "Inspirasi dan kisah lansia produktif, peluang usaha, dan ide kreatif untuk tetap aktif dan mandiri di usia senja.",
      icon: <Users className="w-12 h-12 text-[#FFB200]" />,
      link: "/lansia-tangguh"
    },
    {
      title: "Regulasi & Program Lansia",
      description: "Kebijakan pemerintah, hak-hak lansia, dan program bantuan sosial khusus untuk lansia di Indonesia.",
      icon: <Apple className="w-12 h-12 text-[#FFB200]" />,
      link: "/regulasi-lansia"
    },
    {
      title: "Program Kelansiaan Lembaga & Mitra",
      description: "Kolaborasi dengan berbagai lembaga dan mitra untuk menyediakan program-program bermanfaat bagi lansia.",
      icon: <FileText className="w-12 h-12 text-[#FFB200]" />,
      link: "/program-mitra"
    },
    {
      title: "Publikasi",
      description: "Laporan, penelitian, dan publikasi terkait isu lansia dan perkembangan terbaru di bidang kelansiaan.",
      icon: <FileSearch className="w-12 h-12 text-[#FFB200]" />,
      link: "/publikasi"
    },
    {
      title: "Materi",
      description: "Download materi edukasi, panduan, dan bahan ajar seputar perawatan dan pemberdayaan lansia.",
      icon: <Download className="w-12 h-12 text-[#FFB200]" />,
      link: "/materi"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
       {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Artikel</h1>
              <p className="text-xl mb-6">
                Informasi dan layanan terpadu untuk meningkatkan kualitas hidup lansia Indonesia. 
                Dapatkan artikel kesehatan, tips hidup sehat, info penyakit, kegiatan, dan program bermanfaat untuk lansia.
              </p>
              <div className="flex items-center">
                <Button className="bg-[#FFB200] text-white rounded-none hover:bg-[#e69c00]">
                  Dengarkan <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img src="https://example.com/lansia-dimensi.svg" alt="7 Dimensi Lantang" className="w-64 h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-[#FFB200] hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-600">Artikel</span>
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