import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const dimensions = [
  {
    id: 'spiritual',
    title: 'Spiritual',
    description: 'Pengembangan aspek spiritual dan keagamaan untuk ketenangan batin dan makna hidup di usia senja.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15L60 40H40L50 15Z" fill="#FFB200" />
        <path d="M50 85L40 60H60L50 85Z" fill="#FFB200" />
        <path d="M15 50L40 60L40 40L15 50Z" fill="#FFB200" />
        <path d="M85 50L60 40L60 60L85 50Z" fill="#FFB200" />
        <circle cx="50" cy="50" r="15" fill="#FFB200" />
      </svg>
    )
  },
  {
    id: 'intelektual',
    title: 'Intelektual',
    description: 'Stimulasi kecerdasan dan pembelajaran sepanjang hayat untuk menjaga ketajaman pikiran.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15L85 50L50 85L15 50L50 15Z" fill="#FFB200" />
        <path d="M50 35L65 50L50 65L35 50L50 35Z" fill="white" />
      </svg>
    )
  },
  {
    id: 'fisik',
    title: 'Fisik',
    description: 'Pemeliharaan kesehatan fisik melalui aktivitas, nutrisi, dan pemeriksaan kesehatan rutin.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="30" r="15" fill="#FFB200" />
        <path d="M50 45L50 75" stroke="#FFB200" strokeWidth="8" />
        <path d="M50 55L30 40" stroke="#FFB200" strokeWidth="8" />
        <path d="M50 55L70 40" stroke="#FFB200" strokeWidth="8" />
        <path d="M50 75L35 90" stroke="#FFB200" strokeWidth="8" />
        <path d="M50 75L65 90" stroke="#FFB200" strokeWidth="8" />
      </svg>
    )
  },
  {
    id: 'emosional',
    title: 'Emosional',
    description: 'Pengelolaan emosi dan kesehatan mental untuk kesejahteraan psikologis di usia lanjut.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" fill="#FFB200" />
        <circle cx="40" cy="40" r="5" fill="white" />
        <circle cx="60" cy="40" r="5" fill="white" />
        <path d="M40 65C40 65 45 75 60 65" stroke="white" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'sosial',
    title: 'Sosial Kemasyarakatan',
    description: 'Keterlibatan dalam kehidupan sosial dan kontribusi positif bagi masyarakat sekitar.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="40" r="10" fill="#FFB200" />
        <circle cx="50" cy="30" r="10" fill="#FFB200" />
        <circle cx="70" cy="40" r="10" fill="#FFB200" />
        <path d="M30 50C30 55 25 65 20 70" stroke="#FFB200" strokeWidth="5" />
        <path d="M50 40C50 50 55 70 60 75" stroke="#FFB200" strokeWidth="5" />
        <path d="M70 50C70 55 75 65 80 70" stroke="#FFB200" strokeWidth="5" />
        <path d="M25 60C35 65 45 65 55 65C65 65 75 60 80 55" stroke="#FFB200" strokeWidth="5" />
      </svg>
    )
  },
  {
    id: 'profesional',
    title: 'Profesional Vokasional',
    description: 'Pengembangan keterampilan dan potensi produktif untuk tetap berkarya di usia lanjut.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="40" width="40" height="30" fill="#FFB200" />
        <path d="M30 40L50 20L70 40" fill="#FFB200" />
        <rect x="40" y="50" width="20" height="20" fill="white" />
      </svg>
    )
  },
  {
    id: 'lingkungan',
    title: 'Lingkungan',
    description: 'Penyesuaian dan penciptaan lingkungan yang mendukung untuk kehidupan lansia yang nyaman.',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15L85 50L50 85L15 50L50 15Z" fill="#FFB200" />
        <circle cx="50" cy="50" r="20" fill="white" />
        <path d="M50 30L55 45H65L57.5 55L62.5 70L50 60L37.5 70L42.5 55L35 45H45L50 30Z" fill="#FFB200" />
      </svg>
    )
  }
];

export default function DimensiLantangPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">7 Dimensi Lantang</h1>
              <p className="text-xl mb-6">
                Tujuh dimensi yang membentuk lansia tangguh dan berdaya. Temukan cara mengoptimalkan setiap aspek kehidupan untuk masa tua yang berkualitas dan bermakna.
              </p>
              <div className="flex items-center">
                <Button className="bg-[#FFB200] text-white rounded-none hover:bg-[#e69c00]">
                  Dengarkan <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
                            <Image 
                              src="/images/7.png" 
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
            <Link href="/" className="text-amber-600 hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>7 Dimensi Lantang</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dimensions.map((dimension) => (
              <Card key={dimension.id} className="hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    {dimension.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{dimension.title}</h3>
                  <p className="mb-4">{dimension.description}</p>
                  <Link 
                    href={`/dimensi/${dimension.id}`} 
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

      {/* Was this page useful section */}
      <section className="py-8 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <p className="font-medium mb-2">Apakah halaman ini bermanfaat?</p>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-300">Tidak</Button>
                <Button variant="outline" className="border-gray-300">Ya</Button>
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