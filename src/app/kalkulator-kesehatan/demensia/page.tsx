import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, HeartPulse } from 'lucide-react';
import Link from "next/link";

export default function KalkulatorDemensiaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8] bg-gradient-to-r from-blue-50 to-[#e8f4fc]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#1d71b8] bg-white rounded-full shadow-sm">
              Kalkulator Kesehatan
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e] leading-tight">
              Kalkulator <span className="text-[#1d71b8]">Demensia</span>
            </h1>
            <p className="max-w-2xl mb-6 text-lg text-gray-700">
              Alat skrining sederhana untuk menilai risiko gangguan kognitif pada lansia
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 border-b bg-blue-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-[#1d71b8] hover:underline">Beranda</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <Link href="/kalkulator" className="text-[#1d71b8] hover:underline">Kalkulator Kesehatan</Link>
            <span className="mx-2 text-[#1d71b8]/50">›</span>
            <span className="font-medium text-gray-600">Demensia</span>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl px-4 mx-auto">
          <Card className="border border-[#89cfe8] shadow-lg">
            <CardHeader className="bg-[#e8f4fc] border-b border-[#89cfe8]">
              <CardTitle className="text-2xl text-[#1d71b8] flex items-center">
                <HeartPulse className="w-6 h-6 mr-2" /> Formulir Penilaian Demensia
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Nama Lengkap</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#89cfe8] focus:border-[#1d71b8]"
                        placeholder="Nama peserta"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Usia</label>
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#89cfe8] focus:border-[#1d71b8]"
                        placeholder="Tahun"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-[#1d71b8] mb-4">Pertanyaan Penilaian</h3>
                    
                    {[
                      "Apakah sering lupa dengan kejadian yang baru saja terjadi?",
                      "Apakah kesulitan mengingat nama anggota keluarga dekat?",
                      "Apakah sering salah menaruh barang (misal: kunci, dompet) dan tidak dapat menemukannya?",
                      "Apakah mengalami disorientasi waktu (tidak tahu hari/tanggal/bulan/tahun)?",
                      "Apakah mengalami kesulitan dalam berhitung sederhana?",
                      "Apakah mengalami kesulitan dalam melakukan aktivitas sehari-hari yang biasa dilakukan?"
                    ].map((question, index) => (
                      <div key={index} className="p-4 mb-4 rounded-lg bg-blue-50">
                        <p className="mb-3 font-medium text-gray-800">{question}</p>
                        <div className="flex space-x-4">
                          {['Tidak Pernah', 'Jarang', 'Kadang', 'Sering', 'Selalu'].map((option, i) => (
                            <label key={i} className="flex items-center space-x-2">
                              <input 
                                type="radio" 
                                name={`question-${index}`}
                                className="text-[#1d71b8] focus:ring-[#1d71b8]"
                              />
                              <span className="text-sm">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button type="button" className="text-white bg-[#ae862e] hover:bg-[#d2ac47] px-8 py-6 text-lg">
                    Hitung Skor <span className="ml-2">🧮</span>
                  </Button>
                  <Button type="reset" variant="outline" className="border-[#1d71b8] text-[#1d71b8] hover:bg-[#1d71b8]/10 px-8 py-6 text-lg">
                    Reset Formulir
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Result Section (initially hidden) */}
          <div className="hidden mt-12" id="result-section">
            <Card className="border border-[#ae862e] bg-[#f7ef8a]/20">
              <CardHeader className="bg-[#f7ef8a] border-b border-[#ae862e]">
                <CardTitle className="text-2xl text-[#ae862e] flex items-center">
                  Hasil Penilaian Demensia
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex justify-center w-full mb-6 md:w-1/3 md:mb-0">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full bg-[#e8f4fc] border-8 border-[#1d71b8] flex items-center justify-center">
                        <span className="text-4xl font-bold text-[#1d71b8]">18</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#ae862e] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Skor
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h4 className="text-xl font-bold text-[#1d71b8] mb-2">Interpretasi Hasil</h4>
                    <p className="mb-4 text-gray-700">
                      Berdasarkan skor Anda, terdapat indikasi <span className="font-bold text-[#ae862e]">risiko sedang</span> terhadap gangguan kognitif. Disarankan untuk:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#1d71b8] mr-2">•</span>
                        Melakukan pemeriksaan lebih lanjut ke dokter spesialis saraf
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1d71b8] mr-2">•</span>
                        Mengikuti kelas stimulasi kognitif di Sekolah Lansia Berdaya
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1d71b8] mr-2">•</span>
                        Menerapkan pola hidup sehat dan aktif secara sosial
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-6 mt-8 border-t border-gray-200">
                  <Button variant="outline" className="border-[#1d71b8] text-[#1d71b8] hover:bg-[#1d71b8]/10 px-8 py-6 text-lg">
                    <BookOpen className="w-5 h-5 mr-2" /> Lihat Materi Pencegahan Demensia
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#1d71b8] mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-2" /> Tentang Skrining Demensia
            </h3>
            <div className="p-6 bg-blue-50 rounded-xl">
              <p className="mb-4 text-gray-700">
                Alat skrining ini didasarkan pada Mini-Mental State Examination (MMSE) yang dimodifikasi untuk kebutuhan lansia Indonesia. Skor maksimal adalah 30 poin.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
                {[
                  { range: "24-30", level: "Normal", desc: "Fungsi kognitif dalam batas normal" },
                  { range: "18-23", level: "Ringan", desc: "Gangguan kognitif ringan, perlu pemantauan" },
                  { range: "0-17", level: "Berat", desc: "Kemungkinan demensia, perlu pemeriksaan medis" }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-[#1d71b8]">{item.range}</h4>
                    <p className="text-[#ae862e] font-medium">{item.level}</p>
                    <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}