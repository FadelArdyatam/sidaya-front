import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, HeartPulse, Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function PemeriksaanKesehatanPage() {
  const services = [
    {
      title: "Pemeriksaan Rutin",
      items: [
        "Pemeriksaan tekanan darah",
        "Cek kadar gula darah",
        "Pemeriksaan kolesterol",
        "Pengukuran berat dan tinggi badan"
      ],
      icon: <HeartPulse className="w-8 h-8 text-[#1d71b8]" />
    },
    {
      title: "Konsultasi",
      items: [
        "Konsultasi geriatri",
        "Konsultasi gizi",
        "Konsultasi psikologis",
        "Konsultasi aktivitas fisik"
      ],
      icon: <Stethoscope className="w-8 h-8 text-[#1d71b8]" />
    }
  ];

  const schedule = [
    {
      day: "Senin - Jumat",
      time: "08.00 - 14.00 WIB"
    },
    {
      day: "Sabtu",
      time: "08.00 - 12.00 WIB"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e]">Pemeriksaan Kesehatan Lansia</h1>
              <p className="mb-6 text-xl">
                Layanan pemeriksaan kesehatan komprehensif khusus untuk lansia dengan tenaga medis profesional.
              </p>
              <div className="flex gap-4">
                <Button className="text-white bg-[#ae862e] rounded-none hover:bg-[#d2ac47]">
                  Daftar Online
                </Button>
                <Button variant="outline" className="border-[#1d71b8] rounded-none text-[#1d71b8] hover:bg-[#89cfe8]">
                  Lihat Jadwal
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/lansia-medis.png" 
                alt="Pemeriksaan Kesehatan Lansia" 
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
            <span className="text-gray-600">Pemeriksaan Kesehatan</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1d71b8]">Layanan Kesehatan Kami</h2>
              <p className="mb-6 text-lg text-gray-700">
                Program Lansia Berdaya menyediakan pemeriksaan kesehatan rutin dan komprehensif untuk memantau kondisi kesehatan lansia secara berkala.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Setiap pemeriksaan dilengkapi dengan konsultasi dokter dan rekomendasi tindakan lanjutan jika diperlukan.
              </p>
              
              <div className="p-6 bg-[#f7ef8a] rounded-lg">
                <h3 className="flex items-center mb-3 text-xl font-bold text-[#ae862e]">
                  <HeartPulse className="mr-2" /> Manfaat Pemeriksaan Rutin
                </h3>
                <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                  <li>Deteksi dini masalah kesehatan</li>
                  <li>Pemantauan kondisi kronis</li>
                  <li>Pencegahan komplikasi</li>
                  <li>Peningkatan kualitas hidup</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card key={index} className="border border-[#89cfe8]">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-2 mr-4 rounded-full bg-blue-50">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-[#1d71b8]">{service.title}</h3>
                        <ul className="space-y-2">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 text-[#ae862e]">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Location */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="flex items-center mb-6 text-3xl font-bold text-[#1d71b8]">
                <Calendar className="mr-3" /> Jadwal Pemeriksaan
              </h2>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <ul className="space-y-4">
                  {schedule.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Clock className="mr-3 text-[#ae862e]" />
                      <div>
                        <p className="font-medium text-gray-800">{item.day}</p>
                        <p className="text-gray-600">{item.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-[#f7ef8a] rounded-md">
                  <p className="text-[#ae862e] font-medium">* Untuk pemeriksaan khusus, harap membuat janji terlebih dahulu</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="flex items-center mb-6 text-3xl font-bold text-[#1d71b8]">
                <MapPin className="mr-3" /> Lokasi Layanan
              </h2>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-[#ae862e]">Pusat Layanan Lansia Berdaya</h3>
                <p className="mb-4 text-gray-700">Jl. Sehat Bahagia No. 123, Kota Bahagia</p>
                <p className="mb-4 text-gray-700">Gedung Sejahtera Lt. 2</p>
                
                <div className="mt-6">
                  <Button className="text-white bg-[#1d71b8] hover:bg-[#89cfe8]">
                    Lihat di Peta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#1d71b8]">Persiapan Sebelum Pemeriksaan</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Puasa",
                desc: "Puasa 10-12 jam sebelum pemeriksaan gula darah dan kolesterol"
              },
              {
                title: "Bawa Obat",
                desc: "Bawa semua obat yang sedang dikonsumsi"
              },
              {
                title: "Rekam Medis",
                desc: "Bawa catatan medis atau hasil pemeriksaan sebelumnya"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center border border-[#89cfe8]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-2xl font-bold text-white rounded-full bg-[#1d71b8]">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#ae862e]">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
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