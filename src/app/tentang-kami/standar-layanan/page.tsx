import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Users, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

export default function StandarLayananPage() {
  const serviceStandards = [
    {
      title: "Waktu Respons",
      description: "Kami menjamin respons maksimal 2 hari kerja untuk setiap pengaduan yang masuk.",
      icon: <Clock className="w-12 h-12 text-[#1d71b8]" />,
      details: [
        "Pengaduan diterima melalui formulir online",
        "Konfirmasi penerimaan dalam 1x24 jam",
        "Respon lengkap maksimal 2 hari kerja"
      ]
    },
    {
      title: "Kualitas Pelayanan",
      description: "Standar pelayanan profesional dengan tim yang terlatih khusus untuk lansia.",
      icon: <CheckCircle className="w-12 h-12 text-[#1d71b8]" />,
      details: [
        "Tenaga ahli geriatri dan psikolog lansia",
        "Pelayanan ramah dan penuh empati",
        "Evaluasi berkala oleh komite kualitas"
      ]
    },
    {
      title: "Hak Peserta",
      description: "Setiap lansia berhak mendapatkan pelayanan sesuai ketentuan program.",
      icon: <Users className="w-12 h-12 text-[#1d71b8]" />,
      details: [
        "Hak mendapatkan informasi lengkap",
        "Hak dihormati privasinya",
        "Hak mengajukan keberatan",
        "Hak mendapat pelayanan tanpa diskriminasi"
      ]
    },
    {
      title: "Komitmen Kami",
      description: "Dedikasi penuh untuk kesejahteraan dan pemberdayaan lansia Indonesia.",
      icon: <HeartHandshake className="w-12 h-12 text-[#1d71b8]" />,
      details: [
        "Transparansi dalam pelayanan",
        "Akuntabilitas publik",
        "Improvement berkelanjutan",
        "Kemitraan dengan berbagai stakeholder"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8] bg-gradient-to-b from-[#89cfe8]/10 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e]">Standar Layanan Lansia Berdaya</h1>
              <p className="mb-6 text-xl text-[#1d71b8]/90">
                Komitmen kami dalam memberikan pelayanan terbaik untuk lansia Indonesia dengan standar kualitas tertinggi.
              </p>
              <div className="flex items-center space-x-4">
                <Button className="text-white bg-gradient-to-r rounded-none from-[#ae862e] to-[#d2ac47] hover:from-[#d2ac47] hover:to-[#ae862e]">
                  Unduh PDF
                </Button>
                <Button variant="outline" className="text-[#1d71b8] rounded-none border-[#1d71b8] hover:bg-[#89cfe8]/20">
                  Dengarkan <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/lansia-standar.png" 
                alt="Standar Layanan Lansia Berdaya" 
                width={300} 
                height={300} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 border-b bg-[#89cfe8]/10">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-[#1d71b8] hover:underline">Beranda</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <Link href="/tentang-kami" className="text-[#1d71b8] hover:underline">Tentang Kami</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <span className="text-[#1d71b8]/80">Standar Layanan</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1d71b8]">Komitmen Kualitas Pelayanan</h2>
            <p className="text-lg text-gray-600">
              Lansia Berdaya berkomitmen memberikan pelayanan prima dengan standar yang jelas, terukur, dan transparan bagi seluruh peserta program.
            </p>
          </div>

          {/* Service Standards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceStandards.map((standard, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 border border-[#89cfe8]/30 hover:shadow-lg hover:border-[#1d71b8]/50">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-[#89cfe8]/20">
                        {standard.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1d71b8]">{standard.title}</h3>
                        <p className="mt-1 text-gray-600">{standard.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-[#f7ef8a]/20 border-t border-[#d2ac47]/30">
                    <ul className="space-y-2">
                      {standard.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 mt-0.5 mr-2 text-[#ae862e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 bg-[#89cfe8]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-center text-[#1d71b8]">Tata Cara Pengaduan Jika Standar Tidak Terpenuhi</h2>
              <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-[#1d71b8] rounded-full">1</div>
                  <h3 className="mb-2 font-medium text-[#ae862e]">Formulir Pengaduan</h3>
                  <p className="text-gray-600">Isi formulir pengaduan online atau offline</p>
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-[#1d71b8] rounded-full">2</div>
                  <h3 className="mb-2 font-medium text-[#ae862e]">Verifikasi Data</h3>
                  <p className="text-gray-600">Tim kami akan memverifikasi pengaduan Anda</p>
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-[#1d71b8] rounded-full">3</div>
                  <h3 className="mb-2 font-medium text-[#ae862e]">Tindak Lanjut</h3>
                  <p className="text-gray-600">Anda akan mendapat respon dan solusi</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/pengaduan">
                  <Button className="text-white bg-gradient-to-r from-[#ae862e] to-[#d2ac47] hover:from-[#d2ac47] hover:to-[#ae862e]">
                    Ajukan Pengaduan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-8 bg-white border-t border-[#89cfe8]/30">
        <div className="container mx-auto">
          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div>
              <p className="mb-2 font-medium text-[#1d71b8]">Apakah informasi ini jelas?</p>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-[#1d71b8] border-[#1d71b8]/50 hover:bg-[#89cfe8]/20">
                  Tidak
                </Button>
                <Button variant="outline" className="text-[#1d71b8] border-[#1d71b8]/50 hover:bg-[#89cfe8]/20">
                  Ya
                </Button>
              </div>
            </div>
            <div className="mt-4 text-sm text-[#1d71b8]/80 md:mt-0">
              Standar layanan terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}