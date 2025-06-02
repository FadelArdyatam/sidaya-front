import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Clock, MapPin, Heart, Smile } from 'lucide-react';
import Image from 'next/image';

export default function SekolahLansiaPage() {
  const programItems = [
    {
      title: "Kelas Kesehatan",
      description: "Pembelajaran tentang manajemen kesehatan lansia, pencegahan penyakit, dan pola hidup sehat.",
      icon: <BookOpen className="w-12 h-12 text-[#1d71b8]" />,
      features: ["Pemeriksaan kesehatan rutin", "Nutrisi untuk lansia", "Manajemen penyakit kronis"]
    },
    {
      title: "Kelas Keterampilan",
      description: "Pelatihan berbagai keterampilan praktis untuk meningkatkan kemandirian dan kreativitas lansia.",
      icon: <GraduationCap className="w-12 h-12 text-[#1d71b8]" />,
      features: ["Kerajinan tangan", "Teknologi dasar", "Kewirausahaan"]
    },
    {
      title: "Kelas Sosial",
      description: "Membangun jejaring sosial dan meningkatkan partisipasi lansia dalam masyarakat.",
      icon: <Users className="w-12 h-12 text-[#1d71b8]" />,
      features: ["Diskusi kelompok", "Kegiatan komunitas", "Pertukaran budaya"]
    },
  ];

  const stats = [
    { value: "500+", label: "Peserta Aktif", icon: <Users className="w-8 h-8" /> },
    { value: "20+", label: "Pengajar Berpengalaman", icon: <GraduationCap className="w-8 h-8" /> },
    { value: "95%", label: "Kepuasan Peserta", icon: <Heart className="w-8 h-8" /> },
    { value: "50+", label: "Lokasi Pembelajaran", icon: <MapPin className="w-8 h-8" /> }
  ];

  return (
    <div className="flex flex-col">
<section className="py-12 text-[#1d71b8]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e]">Sekolah Lansia Berdaya</h1>
              <p className="mb-6 text-xl">
                Wadah pembelajaran sepanjang hayat untuk lansia dengan kurikulum yang disesuaikan kebutuhan usia lanjut.
              </p>
              <div className="flex items-center">
                <Button className="text-white bg-[#ae862e] rounded-none hover:bg-[#89cfe8]">
                  Daftar Sekarang <span className="ml-2">✏️</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/sekolah-lansia.png" 
                alt="Sekolah Lansia" 
                width={256} 
                height={256} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb - Improved spacing */}
      <section className="py-4 border-b bg-blue-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-[#1d71b8] hover:underline">Beranda</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <Link href="/program" className="text-[#1d71b8] hover:underline">Program</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <span className="font-medium text-gray-600">Sekolah Lansia</span>
          </div>
        </div>
      </section>

      {/* Stats Section - New component */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-4 text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-2 rounded-full bg-[#e8f4fc] text-[#1d71b8]">
                  {stat.icon}
                </div>
                <span className="text-2xl font-bold text-[#1d71b8]">{stat.value}</span>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Sekolah Lansia - Enhanced layout */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold text-[#1d71b8]">
                <span className="border-b-4 border-[#ae862e] pb-2">Belajar Tanpa</span> Batas Usia
              </h2>
              <p className="mb-4 text-lg text-gray-700">
                Sekolah Lansia Berdaya menyediakan lingkungan belajar yang ramah dan menyenangkan bagi lansia untuk mengembangkan potensi diri.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Dengan metode pembelajaran partisipatif, kami membantu lansia tetap aktif secara kognitif, sosial, dan emosional.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-3 rounded-lg bg-blue-50">
                  <Clock className="w-6 h-6 mr-3 text-[#ae862e]" />
                  <div>
                    <p className="font-medium">Senin-Jumat</p>
                    <p className="text-sm text-gray-600">09.00-15.00 WIB</p>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-blue-50">
                  <MapPin className="w-6 h-6 mr-3 text-[#ae862e]" />
                  <div>
                    <p className="font-medium">Flexible</p>
                    <p className="text-sm text-gray-600">Online & Offline</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="border-[#1d71b8] text-[#1d71b8] hover:bg-[#1d71b8]/10 px-8 py-6 text-lg rounded-lg">
                Unduh Brosur Program
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <Image 
                  src="/images/kelas-lansia.jpg" 
                  alt="Kelas Lansia" 
                  width={600} 
                  height={400} 
                  className="shadow-xl rounded-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#ae862e] p-4 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center">
                    <Smile className="w-8 h-8 mr-3 text-white" />
                    <p className="font-medium text-white">"Belajar itu menyenangkan di usia berapa pun!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Unggulan - Enhanced cards */}
      <section className="py-16 bg-blue-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1d71b8]">Program Unggulan Kami</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Kurikulum khusus yang dirancang untuk memenuhi kebutuhan pembelajaran lansia di berbagai aspek kehidupan.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {programItems.map((item, index) => (
              <Card key={index} className="transition-all duration-300 bg-white border border-blue-100 hover:shadow-xl hover:border-[#ae862e]/30">
                <CardContent className="flex flex-col h-full p-8">
                  <div className="flex items-center justify-center w-20 h-20 p-4 mx-auto mb-6 rounded-xl bg-blue-50">
                    {item.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-center text-gray-800">{item.title}</h3>
                  <p className="flex-grow mb-6 text-center text-gray-600">{item.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="mb-3 font-medium text-center text-[#1d71b8]">Materi Pembelajaran:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 mr-2 bg-[#ae862e] rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full mt-auto text-white rounded-lg bg-[#1d71b8] hover:bg-[#145a8f] py-6 text-lg">
                    Lihat Detail Kelas
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni - Enhanced layout */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1d71b8]">Apa Kata Peserta?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Testimoni langsung dari lansia yang telah merasakan manfaat program kami.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 border rounded-xl border-[#d2ac47] bg-[#f7ef8a] relative">
              <div className="absolute -top-4 -left-4 bg-[#1d71b8] text-white w-10 h-10 rounded-full flex items-center justify-center">
                ❝
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-300 rounded-full border-2 border-[#ae862e]">
                  <Image src="/images/testi1.jpg" width={64} height={64} alt="Testimoni 1" />
                </div>
                <div>
                  <h4 className="font-bold text-[#ae862e]">Budi Santoso</h4>
                  <p className="text-sm text-gray-600">Peserta Kelas Kesehatan</p>
                  <div className="flex mt-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Saya jadi lebih paham cara mengatur pola makan yang sehat untuk usia saya. Guru-gurunya sabar dan materi mudah dipahami."
              </p>
            </div>
            
            <div className="p-8 border rounded-xl border-[#d2ac47] bg-[#f7ef8a] relative">
              <div className="absolute -top-4 -left-4 bg-[#1d71b8] text-white w-10 h-10 rounded-full flex items-center justify-center">
                ❝
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-300 rounded-full border-2 border-[#ae862e]">
                  <Image src="/images/testi2.jpg" width={64} height={64} alt="Testimoni 2" />
                </div>
                <div>
                  <h4 className="font-bold text-[#ae862e]">Siti Aminah</h4>
                  <p className="text-sm text-gray-600">Peserta Kelas Keterampilan</p>
                  <div className="flex mt-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Senang bisa belajar membuat kerajinan tangan yang ternyata bisa dijual juga. Sekolah Lansia bikin masa tua lebih produktif."
              </p>
            </div>
            
            <div className="p-8 border rounded-xl border-[#d2ac47] bg-[#f7ef8a] relative">
              <div className="absolute -top-4 -left-4 bg-[#1d71b8] text-white w-10 h-10 rounded-full flex items-center justify-center">
                ❝
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-300 rounded-full border-2 border-[#ae862e]">
                  <Image src="/images/testi3.jpg" width={64} height={64} alt="Testimoni 3" />
                </div>
                <div>
                  <h4 className="font-bold text-[#ae862e]">Darmawan</h4>
                  <p className="text-sm text-gray-600">Peserta Kelas Sosial</p>
                  <div className="flex mt-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Tadinya pensiun bikin saya kesepian. Sekarang punya banyak teman baru dan kegiatan positif di Sekolah Lansia."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - New component */}
      <section className="py-16 bg-[#1d71b8] text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Siap Memulai Perjalanan Belajar?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Bergabunglah dengan ratusan lansia lainnya yang telah merasakan manfaat program kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#ae862e] hover:bg-[#d2ac47] px-8 py-6 text-lg rounded-lg shadow-md">
              Daftar Sekarang
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg text-[#d2ac47]  border-[#d2ac47] hover:text-white rounded-lg hover:bg-white/10">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - New component */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#1d71b8]">Pertanyaan yang Sering Diajukan</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Berapa biaya untuk mengikuti program Sekolah Lansia?",
                answer: "Program kami didanai oleh pemerintah dan donatur sehingga GRATIS untuk peserta. Hanya ada biaya administrasi kecil untuk materi pembelajaran."
              },
              {
                question: "Apakah ada persyaratan khusus untuk peserta?",
                answer: "Peserta harus berusia minimal 60 tahun atau 55 tahun jika sudah pensiun. Tidak ada persyaratan pendidikan khusus."
              },
              {
                question: "Bagaimana jika saya tidak bisa mengikuti semua sesi?",
                answer: "Kami fleksibel! Anda bisa mengikuti sesi yang tersedia sesuai jadwal Anda. Materi juga tersedia dalam bentuk rekaman."
              }
            ].map((item, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                      <span className="text-lg text-[#1d71b8]">{item.question}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-600">{item.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section - Enhanced */}
      <section className="py-8 bg-white border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div className="w-full mb-4 md:w-auto md:mb-0">
              <p className="mb-2 font-medium text-gray-700">Apakah halaman ini bermanfaat?</p>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center text-green-600 border-green-500 hover:bg-green-50">
                  <span>Ya</span> <span className="ml-2">👍</span>
                </Button>
                <Button variant="outline" className="flex items-center text-red-600 border-red-500 hover:bg-red-50">
                  <span>Tidak</span> <span className="ml-2">👎</span>
                </Button>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Halaman terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}