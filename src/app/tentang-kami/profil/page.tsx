import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, HeartHandshake, Home, CalendarCheck } from 'lucide-react';
import Image from 'next/image';

export default function ProfilPage() {
  const menuItems = [
    {
      title: "Visi & Misi",
      description: "Tujuan dan prinsip dasar yang menjadi panduan program Lansia Berdaya dalam memberikan pelayanan.",
      icon: <HeartHandshake className="w-12 h-12 text-[#1d71b8]" />,
      link: "/profil/visi-misi"
    },
    {
      title: "Struktur Organisasi",
      description: "Susunan tim dan pembagian tanggung jawab dalam pengelolaan program Lansia Berdaya.",
      icon: <Users className="w-12 h-12 text-[#1d71b8]" />,
      link: "/profil/struktur-organisasi"
    },
    {
      title: "Sejarah Berdiri",
      description: "Perjalanan program Lansia Berdaya sejak awal berdiri hingga perkembangan terkini.",
      icon: <Home className="w-12 h-12 text-[#1d71b8]" />,
      link: "/profil/sejarah"
    },
    {
      title: "Prestasi & Penghargaan",
      description: "Pencapaian dan pengakuan yang telah diraih oleh program Lansia Berdaya.",
      icon: <CalendarCheck className="w-12 h-12 text-[#1d71b8]" />,
      link: "/profil/prestasi"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e]">Profil Lansia Berdaya</h1>
              <p className="mb-6 text-xl">
                Mengenal lebih dekat program Lansia Berdaya, visi misi, dan tim yang berdedikasi untuk kesejahteraan lansia.
              </p>
              <div className="flex items-center">
                <Button className="text-white bg-[#ae862e] rounded-none hover:bg-[#89cfe8]">
                  Dengarkan <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/lansia-profil.png" 
                alt="Profil Lansia Berdaya" 
                width={256} 
                height={256} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 border-b bg-blue-50">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-[#1d71b8] hover:underline">Beranda</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <Link href="/tentang-kami" className="text-[#1d71b8] hover:underline">Tentang Kami</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <span className="text-gray-600">Profil</span>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#1d71b8]">Tentang Lansia Berdaya</h2>
              <p className="mb-4 text-lg text-gray-700">
                Lansia Berdaya adalah program inovatif yang berkomitmen untuk meningkatkan kualitas hidup lansia melalui berbagai layanan terpadu dan kegiatan pemberdayaan.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Didirikan pada tahun 2015, kami telah melayani lebih dari 10.000 lansia di seluruh Indonesia dengan pendekatan holistik yang mencakup kesehatan, sosial, dan ekonomi.
              </p>
              <Button className="text-white rounded-none bg-[#1d71b8] hover:bg-[#89cfe8]">
                Unduh Profil Lengkap (PDF)
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <Image 
                src="/images/tim-lansia-berdaya.jpg" 
                alt="Tim Lansia Berdaya" 
                width={500} 
                height={300} 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Profil */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#1d71b8]">Informasi Profil</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {menuItems.map((item, index) => (
              <Card key={index} className="transition-shadow duration-300 bg-white border border-blue-100 hover:shadow-lg">
                <CardContent className="flex flex-col h-full p-6">
                  <div className="flex items-center justify-center w-20 h-20 p-4 mx-auto mb-4 rounded-full bg-blue-50">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="flex-grow mb-4 text-gray-600">{item.description}</p>
                  <Link 
                    href={item.link} 
                    className="flex items-center mt-auto font-medium text-[#ae862e] hover:text-[#ae862e] hover:underline"
                  >
                    Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai-nilai Kami */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#1d71b8]">Nilai-nilai Kami</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg border-[#d2ac47] bg-gradient-to-r from-[#ae862e] to-[#d2ac47] hover:from-[#d2ac47] hover:to-[#ae862e]">
              <h3 className="mb-3 text-xl font-bold text-[#f7ef8a]">Kemanusiaan</h3>
              <p className="text-gray-700">
                Menghargai martabat setiap lansia dengan pendekatan penuh kasih sayang dan empati.
              </p>
            </div>
            <div className="p-6 border rounded-lg border-[#d2ac47] bg-gradient-to-r from-[#ae862e] to-[#d2ac47] hover:from-[#d2ac47] hover:to-[#ae862e]">
              <h3 className="mb-3 text-xl font-bold text-[#f7ef8a]">Profesionalisme</h3>
              <p className="text-gray-700">
                Memberikan layanan terbaik dengan standar tinggi dan komitmen yang kuat.
              </p>
            </div>
            <div className="p-6 border rounded-lg border-[#d2ac47] bg-gradient-to-r from-[#ae862e] to-[#d2ac47] hover:from-[#d2ac47] hover:to-[#ae862e]">
              <h3 className="mb-3 text-xl font-bold text-[#f7ef8a]">Integritas</h3>
              <p className="text-gray-700">
                Bertindak jujur, transparan, dan bertanggung jawab dalam setiap aspek pelayanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto">
          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div>
              <p className="mb-2 font-medium">Apakah halaman ini bermanfaat?</p>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-50">Tidak</Button>
                <Button variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-50">Ya</Button>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500 md:mt-0">
              Halaman terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
