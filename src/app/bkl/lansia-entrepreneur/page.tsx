import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, TrendingUp, Award, Users } from 'lucide-react';
import Image from 'next/image';

export default function LansiaEntrepreneurPage() {
  const successStories = [
    {
      name: "Bu Siti Keripik Pisang",
      description: "Membangun usaha keripik pisang yang sekarang sudah memiliki 5 karyawan.",
      revenue: "Rp 5-8 juta/bulan",
    },
    {
      name: "Pak Joko Kerajinan Kayu",
      description: "Menghasilkan produk kerajinan kayu yang diekspor ke beberapa negara.",
      revenue: "Rp 10-15 juta/bulan",
    },
    {
      name: "Bu Rini Katering Sehat",
      description: "Menyediakan katering makanan sehat khusus lansia dengan pelanggan tetap.",
      revenue: "Rp 7-10 juta/bulan",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e]">Lansia Entrepreneur</h1>
              <p className="mb-6 text-xl">
                Wujudkan mimpi berwirausaha di usia senja dengan dukungan penuh dari Lansia Berdaya.
              </p>
              <div className="flex items-center space-x-4">
                <Button className="text-white bg-[#ae862e] rounded-none hover:bg-[#89cfe8]">
                  Daftar Program <span className="ml-2">🚀</span>
                </Button>
                <Button variant="outline" className="border-[#1d71b8] text-[#1d71b8] rounded-none hover:bg-blue-50">
                  Lihat Galeri
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/lansia-entrepreneur.png" 
                alt="Lansia Entrepreneur" 
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
            <Link href="/program" className="text-[#1d71b8] hover:underline">Program</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <span className="text-gray-600">Lansia Entrepreneur</span>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image 
                src="/images/pelatihan-entrepreneur.jpg" 
                alt="Pelatihan Entrepreneur" 
                width={500} 
                height={300} 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#1d71b8]">Bangun Bisnis di Usia Senja</h2>
              <p className="mb-4 text-lg text-gray-700">
                Program Lansia Entrepreneur dirancang khusus untuk membantu lansia memulai atau mengembangkan usaha dengan pendampingan komprehensif.
              </p>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <ShoppingBag className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-[#ae862e]" />
                  <div>
                    <h4 className="font-bold text-gray-800">Pelatihan Kewirausahaan</h4>
                    <p className="text-gray-600">Materi praktis tentang memulai dan mengelola bisnis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-[#ae862e]" />
                  <div>
                    <h4 className="font-bold text-gray-800">Akses Permodalan</h4>
                    <p className="text-gray-600">Bantuan modal usaha dan pendampingan keuangan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-[#ae862e]" />
                  <div>
                    <h4 className="font-bold text-gray-800">Jaringan Pemasaran</h4>
                    <p className="text-gray-600">Dukungan pemasaran produk melalui berbagai channel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#1d71b8]">Manfaat Mengikuti Program</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-white border border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#f7ef8a]">
                  <Award className="w-8 h-8 text-[#ae862e]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-center text-gray-800">Peningkatan Pendapatan</h3>
                <p className="text-center text-gray-600">
                  Membuka sumber penghasilan tambahan untuk memenuhi kebutuhan sehari-hari
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#f7ef8a]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#ae862e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-center text-gray-800">Kemandirian Finansial</h3>
                <p className="text-center text-gray-600">
                  Tidak bergantung sepenuhnya pada anak atau keluarga untuk kebutuhan finansial
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#f7ef8a]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#ae862e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-center text-gray-800">Kesehatan Mental</h3>
                <p className="text-center text-gray-600">
                  Aktivitas positif mengurangi risiko depresi dan meningkatkan rasa bahagia
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#1d71b8]">Kisah Sukses</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden bg-white border border-[#d2ac47]">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={`/images/success-${index+1}.jpg`} 
                    alt={story.name} 
                    width={400} 
                    height={192} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#ae862e]">{story.name}</h3>
                  <p className="mb-4 text-gray-600">{story.description}</p>
                  <div className="px-4 py-2 font-bold text-center text-white bg-[#1d71b8] rounded">
                    Omset: {story.revenue}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#1d71b8] to-[#89cfe8]">
        <div className="container mx-auto">
          <div className="max-w-4xl px-8 py-12 mx-auto text-center text-white rounded-lg">
            <h2 className="mb-4 text-3xl font-bold">Siap Memulai Bisnis Anda?</h2>
            <p className="mb-8 text-xl">
              Daftarkan diri Anda sekarang dan dapatkan pendampingan dari mentor berpengalaman
            </p>
            <Button className="px-8 py-6 text-lg text-[#1d71b8] bg-[#f7ef8a] rounded-none hover:bg-[#ae862e] hover:text-white">
              Daftar Sekarang
            </Button>
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