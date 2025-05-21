import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SidayaPage() {
  const menuItems = [
    {
      title: "Data Lansia Memiliki JKN",
      description: "Informasi dan layanan untuk lansia yang memiliki Jaminan Kesehatan Nasional. Akses data dan manfaat yang tersedia.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#FFB200" />
          <path d="M30 40H70V60H30V40Z" fill="white" />
          <circle cx="50" cy="35" r="10" fill="white" />
        </svg>
      ),
      link: "/data-lansia-jkn"
    },
    {
      title: "Data Keluarga Lansia",
      description: "Kelola data keluarga yang memiliki anggota lansia. Informasi penting untuk perencanaan kesehatan dan kesejahteraan.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="50" r="20" fill="#FFB200" />
          <circle cx="70" cy="50" r="20" fill="#FFB200" />
          <circle cx="50" cy="30" r="20" fill="#FFB200" />
          <circle cx="30" cy="50" r="15" fill="white" />
          <circle cx="70" cy="50" r="15" fill="white" />
          <circle cx="50" cy="30" r="15" fill="white" />
        </svg>
      ),
      link: "/data-keluarga-lansia"
    },
    {
      title: "Lomba 1000 Artikel",
      description: "Informasi tentang lomba penulisan artikel seputar lansia. Syarat, ketentuan, dan hadiah untuk peserta.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="30" width="50" height="50" rx="5" fill="#FFB200" />
          <path d="M35 40H65V45H35V40Z" fill="white" />
          <path d="M35 50H65V55H35V50Z" fill="white" />
          <path d="M35 60H50V65H35V60Z" fill="white" />
        </svg>
      ),
      link: "/lomba-artikel"
    },
    {
      title: "Infografis",
      description: "Kumpulan infografis informatif seputar kesehatan, aktivitas, dan kesejahteraan lansia. Data visual yang mudah dipahami.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="5" fill="#FFB200" />
          <circle cx="40" cy="40" r="8" fill="white" />
          <rect x="50" cy="35" width="20" height="10" fill="white" />
          <circle cx="40" cy="60" r="8" fill="white" />
          <rect x="50" cy="55" width="20" height="10" fill="white" />
        </svg>
      ),
      link: "/infografis"
    },
    {
      title: "Kontak Kami",
      description: "Hubungi tim SIDAYA untuk pertanyaan, masukan, atau bantuan terkait program dan layanan untuk lansia.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="25" width="60" height="50" rx="5" fill="#FFB200" />
          <path d="M20 35L50 55L80 35" stroke="white" strokeWidth="4" />
          <circle cx="50" cy="45" r="5" fill="white" />
        </svg>
      ),
      link: "/kontak-kami"
    },
    {
      title: "Program Lansia Berdaya",
      description: "Berbagai program unggulan untuk meningkatkan kualitas hidup lansia. Kegiatan, pelatihan, dan dukungan tersedia.",
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20L70 50H30L50 20Z" fill="#FFB200" />
          <rect x="35" y="50" width="30" height="30" fill="#FFB200" />
          <circle cx="50" cy="40" r="5" fill="white" />
          <rect x="45" y="55" width="10" height="20" fill="white" />
        </svg>
      ),
      link: "/program-lansia"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Informasi</h1>
              <p className="text-xl mb-6">
                Payments and services if youre unemployed, looking for Informasi or cant Informasi while youre sick or injured. Help managing your money. Support for businesses.
              </p>
              <div className="flex items-center">
                <Button className="bg-[#FFB200] text-white rounded-none hover:bg-gray-800">
                  Listen <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img src="https://www.flaticon.com/free-icons/information" title="information icons" alt="Informasi" className="w-64 h-64" />
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
            <span className="text-gray-600">informasi</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#FFB200]">{item.title}</h3>
                  <p className="mb-4 flex-grow">{item.description}</p>
                  <Link href={item.link} className="text-[#FFB200] hover:text-[#e69c00] hover:underline flex items-center mt-auto">
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
              <p className="font-medium mb-2">Apakah halaman ini membantu?</p>
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