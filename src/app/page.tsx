import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const menuItems = [
    {
      title: "Bina Keluarga Lansia",
      description: "Informasi, Pendaftaran, dan Temukan lokasi BKL terdekat di daerah Anda dengan menggunakan fitur pencarian kami.",
      icon: "👨‍👩‍👧‍👦",
      link: "/bina-keluarga-lansia"
    },
    {
      title: "Kalkulator Kesehatan",
      description: "Alat untuk menghitung indeks massa tubuh, kebutuhan kalori, dan parameter kesehatan lainnya untuk lansia.",
      icon: "🧮",
      link: "/kalkulator-kesehatan"
    },
    {
      title: "Sekolah Lansia",
      description: "Informasi, pendaftaran, temukan lokasi SL BKL dan partisipasi lansia sesuai minat dan potensinya.",
      icon: "🏫",
      link: "/sekolah-lansia"
    },
    {
      title: "Tips Lansia Berdaya",
      description: "Kumpulan tips dan panduan untuk membantu lansia tetap aktif dan produktif.",
      icon: "💡",
      link: "/tips-lansia-berdaya"
    },
    {
      title: "Berita Lansia",
      description: "Informasi terkini tentang kegiatan, program, dan perkembangan terkait lansia.",
      icon: "📰",
      link: "/berita-lansia"
    },
    {
      title: "Dashboard Sidaya",
      description: "Pantau perkembangan dan statistik program SIDAYA secara real-time.",
      icon: "📊",
      link: "/dashboard"
    },
    {
      title: "Lansia Entrepreneur",
      description: "Program kewirausahaan untuk lansia yang ingin memulai atau mengembangkan bisnis.",
      icon: "💼",
      link: "/lansia-entrepreneur"
    },
    {
      title: "Panti Werda",
      description: "Informasi tentang panti werda dan fasilitas perawatan untuk lansia.",
      icon: "🏠",
      link: "/panti-werda"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">SIDAYA</h1>
              <p className="text-xl mb-6">Lansia Berdaya, Indonesia Sejahtera</p>
              <div className="flex items-center">
                <Button className="bg-[#FFB200] text-white rounded-none hover:bg-gray-100 hover:text-white">
                  Dengarkan <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="white" />
                <path d="M50 25L70 75H30L50 25Z" fill="#FFB200" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Main Menu Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Layanan Kami untuk Lansia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-center mb-4 text-4xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                  <p className="mb-4 flex-grow">{item.description}</p>
                  <Link href={item.link} className="text-[#FFB200] hover:underline flex items-center justify-center">
                    Pelajari lebih lanjut
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

      {/* Important topics section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Informasi Penting</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kesehatan Lansia */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4 text-4xl">
                  🏥
                </div>
                <h3 className="text-xl font-bold mb-2">Kesehatan Lansia</h3>
                <p className="mb-4">Panduan lengkap untuk menjaga kesehatan di usia lanjut, termasuk informasi tentang penyakit degeneratif dan pencegahannya.</p>
                <Link href="/kesehatan-lansia" className="text-[#FFB200] hover:underline flex items-center">
                  Pelajari lebih lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Asuransi Kesehatan */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4 text-4xl">
                  🛡️
                </div>
                <h3 className="text-xl font-bold mb-2">Asuransi Kesehatan</h3>
                <p className="mb-4">Informasi tentang BPJS Kesehatan dan asuransi lainnya yang memberikan perlindungan untuk lansia.</p>
                <Link href="/asuransi-kesehatan" className="text-[#FFB200] hover:underline flex items-center">
                  Pelajari lebih lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Hak Lansia */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4 text-4xl">
                  ⚖️
                </div>
                <h3 className="text-xl font-bold mb-2">Hak Lansia</h3>
                <p className="mb-4">Informasi tentang hak-hak lansia yang dijamin oleh undang-undang dan cara memperjuangkannya.</p>
                <Link href="/hak-lansia" className="text-[#FFB200] hover:underline flex items-center">
                  Pelajari lebih lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}