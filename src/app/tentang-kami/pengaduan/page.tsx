
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, FileText, Shield} from 'lucide-react';
import Image from 'next/image';
import FormulirPengaduan from './form';

export default function PengaduanPage() {
  const menuItems = [
    {
      title: "Mekanisme Pengaduan",
      description: "Prosedur langkah demi langkah untuk mengajukan pengaduan terkait ketidakpuasan terhadap pelayanan Lansia Berdaya.",
      icon: <Phone className="w-12 h-12 text-[#1d71b8]" />,
      link: "/mekanisme-pengaduan"
    },
    {
      title: "Bentuk Pengaduan",
      description: "Tipe-tipe pengaduan yang dapat diajukan, seperti pengaduan tentang pelayanan atau kebijakan program.",
      icon: <FileText className="w-12 h-12 text-[#1d71b8]" />,
      link: "/bentuk-pengaduan"
    },
    {
      title: "Proses Penyelesaian",
      description: "Jangka waktu dan proses yang terlibat dalam menangani pengaduan dari awal hingga penyelesaian.",
      icon: <Shield className="w-12 h-12 text-[#1d71b8]" />,
      link: "/proses-penyelesaian"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e] ">Mekanisme Pengaduan Lansia Berdaya</h1>
              <p className="mb-6 text-xl">
                Prosedur pengaduan dan cara mengatasi ketidakpuasan dalam program Lansia Berdaya untuk memastikan kualitas pelayanan.
              </p>
              <div className="flex items-center">
                <Button className="text-white bg-[#ae862e] rounded-none hover:bg-blue-100">
                  Dengarkan <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/lansia-pengaduan.png" 
                alt="Lansia Berdaya Pengaduan" 
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
            <span className="mx-2 text-gray-400">›</span>
            <Link href="/tentang-kami" className="text-[#1d71b8] hover:underline">Tentang Kami</Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-600">Pengaduan</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

    {/** FORM */}
    
    <FormulirPengaduan/>

    
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
