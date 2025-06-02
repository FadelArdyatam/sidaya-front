import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, UserCheck, Shield, Download } from 'lucide-react';
import Image from 'next/image';

export default function KartuLansiaPage() {
  const features = [
    {
      title: "Manfaat Kartu Lansia",
      items: [
        "Akses layanan kesehatan gratis",
        "Diskon transportasi umum",
        "Prioritas antrian di fasilitas publik",
        "Program pelatihan khusus"
      ]
    },
    {
      title: "Persyaratan",
      items: [
        "Usia minimal 60 tahun",
        "Fotokopi KTP",
        "Pas foto 3x4 (2 lembar)",
        "Surat keterangan domisili"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e]">Kartu Lansia Berdaya</h1>
              <p className="mb-6 text-xl">
                Kartu identitas khusus lansia yang memberikan akses ke berbagai layanan dan manfaat eksklusif.
              </p>
              <div className="flex gap-4">
                <Button className="text-white bg-[#ae862e] rounded-none hover:bg-[#d2ac47]">
                  Daftar Sekarang
                </Button>
                <Button variant="outline" className="border-[#1d71b8] rounded-none text-[#1d71b8] hover:bg-[#89cfe8]">
                  Cek Status
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/kartu-lansia-sample.png" 
                alt="Contoh Kartu Lansia" 
                width={300} 
                height={200} 
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
            <Link href="/layanan" className="text-[#1d71b8] hover:underline">Layanan</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <span className="text-gray-600">Kartu Lansia</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1d71b8]">Tentang Kartu Lansia Berdaya</h2>
              <p className="mb-6 text-lg text-gray-700">
                Kartu Lansia Berdaya adalah kartu identitas resmi yang dikeluarkan oleh program Lansia Berdaya untuk memberikan kemudahan akses terhadap berbagai layanan khusus lansia.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Dengan kartu ini, lansia dapat menikmati berbagai fasilitas dan program pemberdayaan yang disediakan oleh pemerintah dan mitra Lansia Berdaya.
              </p>
              
              <div className="p-6 bg-[#f7ef8a] rounded-lg">
                <h3 className="flex items-center mb-3 text-xl font-bold text-[#ae862e]">
                  <Shield className="mr-2" /> Keamanan Kartu
                </h3>
                <p className="text-gray-700">
                  Kartu dilengkapi dengan chip elektronik dan QR Code untuk mencegah pemalsuan. Jika kartu hilang, segera laporkan untuk blokir dan penerbitan baru.
                </p>
              </div>
            </div>
            
            <div>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="border border-[#89cfe8]">
                    <CardContent className="p-6">
                      <h3 className="flex items-center mb-3 text-xl font-bold text-[#1d71b8]">
                        {index === 0 ? <CreditCard className="mr-2" /> : <UserCheck className="mr-2" />}
                        {feature.title}
                      </h3>
                      <ul className="space-y-2">
                        {feature.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-[#ae862e]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#1d71b8]">Cara Mendapatkan Kartu Lansia</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Persiapkan Dokumen",
                desc: "Siapkan persyaratan yang dibutuhkan"
              },
              {
                step: "2",
                title: "Kunjungi Loket",
                desc: "Datang ke kantor Lansia Berdaya terdekat"
              },
              {
                step: "3",
                title: "Isi Formulir",
                desc: "Isi formulir pendaftaran dengan lengkap"
              },
              {
                step: "4",
                title: "Ambil Kartu",
                desc: "Tunggu proses verifikasi dan ambil kartu"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 text-center bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-2xl font-bold text-white rounded-full bg-[#1d71b8]">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#ae862e]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button className="flex items-center px-6 py-3 text-white bg-[#1d71b8] hover:bg-[#89cfe8]">
              <Download className="mr-2" /> Unduh Panduan Lengkap
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#1d71b8]">Pertanyaan Umum</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Berapa lama proses penerbitan kartu?",
                answer: "Proses penerbitan membutuhkan waktu 7-14 hari kerja setelah dokumen diverifikasi."
              },
              {
                question: "Apakah ada biaya untuk pembuatan kartu?",
                answer: "Tidak, pembuatan kartu lansia sepenuhnya gratis tanpa biaya apapun."
              },
              {
                question: "Bagaimana jika kartu rusak/hilang?",
                answer: "Anda dapat mengajukan permohonan penggantian dengan membawa dokumen asli ke kantor kami."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-[#89cfe8]">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-[#1d71b8]">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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