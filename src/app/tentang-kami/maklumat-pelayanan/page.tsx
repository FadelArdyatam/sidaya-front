import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, Clock, ShieldCheck, Users, HeartPulse } from 'lucide-react';
import Image from 'next/image';

export default function MaklumatPelayananPage() {
  const serviceInfo = [
    {
      title: "Jam Pelayanan",
      description: "Senin - Jumat: 08.00 - 16.00 WIB | Sabtu: 08.00 - 12.00 WIB",
      icon: <Clock className="w-12 h-12 text-[#1d71b8]" />,
    },
    {
      title: "Jenis Pelayanan",
      description: "Pendampingan lansia, pemeriksaan kesehatan rutin, kegiatan sosial, dan pelatihan keterampilan.",
      icon: <HeartPulse className="w-12 h-12 text-[#1d71b8]" />,
    },
    {
      title: "Persyaratan",
      description: "Warga negara Indonesia berusia 60+ tahun, membawa KTP, dan mengisi formulir pendaftaran.",
      icon: <Info className="w-12 h-12 text-[#1d71b8]" />,
    },
    {
      title: "Biaya",
      description: "Semua layanan dasar gratis. Beberapa pelatihan khusus mungkin memerlukan kontribusi sukarela.",
      icon: <ShieldCheck className="w-12 h-12 text-[#1d71b8]" />,
    },
    {
      title: "Sasaran Program",
      description: "Lansia dari semua kalangan dengan fokus pada mereka yang membutuhkan dukungan sosial dan kesehatan.",
      icon: <Users className="w-12 h-12 text-[#1d71b8]" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e]">Maklumat Pelayanan Lansia Berdaya</h1>
              <p className="mb-6 text-xl">
                Informasi lengkap tentang layanan, prosedur, dan hak penerima manfaat program Lansia Berdaya.
              </p>
              <div className="flex items-center">
                <Button className="text-white bg-[#ae862e] rounded-none hover:bg-[#d2ac47]">
                  Dengarkan <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/lansia-maklumat.png" 
                alt="Lansia Berdaya Maklumat Pelayanan" 
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
            <span className="text-gray-600">Maklumat Pelayanan</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceInfo.map((item, index) => (
              <Card key={index} className="transition-shadow duration-300 bg-white border border-blue-100 hover:shadow-lg">
                <CardContent className="flex flex-col h-full p-6">
                  <div className="flex items-center justify-center w-20 h-20 p-4 mx-auto mb-4 rounded-full bg-blue-50">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="flex-grow mb-4 text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="p-8 bg-[#f7ef8a] rounded-lg">
            <h2 className="mb-4 text-2xl font-bold text-[#ae862e]">Hak dan Kewajiban Penerima Layanan</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#1d71b8]">Hak Penerima Layanan:</h3>
                <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                  <li>Mendapatkan pelayanan yang ramah dan profesional</li>
                  <li>Memperoleh informasi yang jelas tentang program</li>
                  <li>Memberikan masukan dan pengaduan</li>
                  <li>Mendapatkan perlakuan yang sama tanpa diskriminasi</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#1d71b8]">Kewajiban Penerima Layanan:</h3>
                <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                  <li>Mematuhi aturan dan tata tertib program</li>
                  <li>Memberikan informasi yang benar dan lengkap</li>
                  <li>Menghormati petugas dan peserta lain</li>
                  <li>Menjaga fasilitas yang disediakan</li>
                </ul>
              </div>
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
                <Button variant="outline" className="text-[#1d71b8] border-[#89cfe8] hover:bg-[#89cfe8]">Tidak</Button>
                <Button variant="outline" className="text-[#1d71b8] border-[#89cfe8] hover:bg-[#89cfe8]">Ya</Button>
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