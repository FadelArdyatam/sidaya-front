import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Heart, Users, Calendar } from 'lucide-react';
import Link from "next/link";

export default function KalkulatorKebahagiaanPage() {
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
              Indeks <span className="text-[#1d71b8]">Kebahagiaan Lansia</span>
            </h1>
            <p className="max-w-2xl mb-6 text-lg text-gray-700">
              Ukur tingkat kebahagiaan dan kesejahteraan psikologis Anda sebagai lansia
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
            <span className="font-medium text-gray-600">Indeks Kebahagiaan</span>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl px-4 mx-auto">
          <Card className="border border-[#89cfe8] shadow-lg">
            <CardHeader className="bg-[#e8f4fc] border-b border-[#89cfe8]">
              <CardTitle className="text-2xl text-[#1d71b8] flex items-center">
                <Smile className="w-6 h-6 mr-2" /> Formulir Indeks Kebahagiaan Lansia
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
                      <label className="block mb-2 font-medium text-gray-700">Jenis Kelamin</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#89cfe8] focus:border-[#1d71b8]">
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="male">Laki-laki</option>
                        <option value="female">Perempuan</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-[#1d71b8] mb-4">Aspek Penilaian Kebahagiaan</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-[#ae862e] mb-3 flex items-center">
                        <Heart className="w-4 h-4 mr-2" /> Kesehatan Fisik dan Mental
                      </h4>
                      {[
                        "Seberapa puas Anda dengan kondisi kesehatan fisik Anda saat ini?",
                        "Seberapa sering Anda merasa cemas atau stres dalam seminggu terakhir?",
                        "Seberapa baik kualitas tidur Anda dalam sebulan terakhir?"
                      ].map((question, index) => (
                        <div key={index} className="p-4 mb-4 rounded-lg bg-blue-50">
                          <p className="mb-3 font-medium text-gray-800">{question}</p>
                          <div className="flex justify-between px-2 mb-2 text-xs text-gray-500">
                            <span>Tidak Puas</span>
                            <span>Sangat Puas</span>
                          </div>
                          <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            className="w-full accent-[#1d71b8]"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-[#ae862e] mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2" /> Hubungan Sosial
                      </h4>
                      {[
                        "Seberapa puas Anda dengan hubungan Anda dengan keluarga?",
                        "Seberapa sering Anda berinteraksi dengan teman atau tetangga?",
                        "Seberapa besar dukungan sosial yang Anda rasakan dari lingkungan?"
                      ].map((question, index) => (
                        <div key={index} className="p-4 mb-4 rounded-lg bg-blue-50">
                          <p className="mb-3 font-medium text-gray-800">{question}</p>
                          <div className="flex justify-between px-2 mb-2 text-xs text-gray-500">
                            <span>Tidak Puas</span>
                            <span>Sangat Puas</span>
                          </div>
                          <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            className="w-full accent-[#1d71b8]"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-[#ae862e] mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" /> Aktivitas dan Waktu Luang
                      </h4>
                      {[
                        "Seberapa puas Anda dengan kegiatan yang Anda lakukan sehari-hari?",
                        "Seberapa sering Anda melakukan hobi atau kegiatan yang menyenangkan?",
                        "Seberapa berarti hidup Anda bagi diri sendiri dan orang lain?"
                      ].map((question, index) => (
                        <div key={index} className="p-4 mb-4 rounded-lg bg-blue-50">
                          <p className="mb-3 font-medium text-gray-800">{question}</p>
                          <div className="flex justify-between px-2 mb-2 text-xs text-gray-500">
                            <span>Tidak Puas</span>
                            <span>Sangat Puas</span>
                          </div>
                          <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            className="w-full accent-[#1d71b8]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button type="button" className="text-white bg-[#ae862e] hover:bg-[#d2ac47] px-8 py-6 text-lg">
                    Hitung Indeks Kebahagiaan <span className="ml-2">😊</span>
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
                  Hasil Indeks Kebahagiaan
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full bg-[#e8f4fc] border-8 border-[#1d71b8] flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-5xl font-bold text-[#1d71b8]">78</span>
                        <span className="block text-lg text-[#1d71b8]">/100</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#ae862e] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Skor
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-[#1d71b8] mb-2">Tingkat Kebahagiaan: Baik</h4>
                  <p className="max-w-lg mb-6 text-gray-700">
                    Skor kebahagiaan Anda menunjukkan tingkat kesejahteraan yang baik. Anda menikmati hidup dan memiliki keseimbangan dalam berbagai aspek kehidupan.
                  </p>
                  
                  <div className="w-full max-w-lg">
                    <div className="flex justify-between mb-2 text-sm text-gray-600">
                      <span>Kesehatan</span>
                      <span>75/100</span>
                    </div>
                    <div className="w-full h-3 mb-4 bg-gray-200 rounded-full">
                      <div className="bg-[#1d71b8] h-3 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2 text-sm text-gray-600">
                      <span>Sosial</span>
                      <span>82/100</span>
                    </div>
                    <div className="w-full h-3 mb-4 bg-gray-200 rounded-full">
                      <div className="bg-[#1d71b8] h-3 rounded-full" style={{width: '82%'}}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2 text-sm text-gray-600">
                      <span>Aktivitas</span>
                      <span>68/100</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div className="bg-[#1d71b8] h-3 rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-gray-200">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <h5 className="font-medium text-[#1d71b8] mb-2">Saran Peningkatan:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-[#ae862e] mr-2">•</span>
                          Pertahankan hubungan sosial yang baik dengan keluarga dan teman
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#ae862e] mr-2">•</span>
                          Cari kegiatan baru yang menyenangkan di Sekolah Lansia
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#ae862e] mr-2">•</span>
                          Lakukan pemeriksaan kesehatan rutin
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-[#1d71b8] mb-2">Kelas Rekomendasi:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-[#ae862e] mr-2">•</span>
                          Kelas Senam Lansia untuk kesehatan fisik
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#ae862e] mr-2">•</span>
                          Kelas Keterampilan untuk pengembangan diri
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#ae862e] mr-2">•</span>
                          Kelas Sosial untuk memperluas pertemanan
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#1d71b8] mb-6 flex items-center">
              <Smile className="w-6 h-6 mr-2" /> Tentang Indeks Kebahagiaan Lansia
            </h3>
            <div className="p-6 bg-blue-50 rounded-xl">
              <p className="mb-4 text-gray-700">
                Indeks Kebahagiaan Lansia mengukur tingkat kesejahteraan subjektif berdasarkan tiga aspek utama: kesehatan fisik dan mental, hubungan sosial, serta aktivitas dan waktu luang.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
                {[
                  { range: "80-100", level: "Sangat Bahagia", color: "bg-[#1d71b8] text-white" },
                  { range: "60-79", level: "Bahagia", color: "bg-[#89cfe8] text-[#1d71b8]" },
                  { range: "0-59", level: "Kurang Bahagia", color: "bg-[#f7ef8a] text-[#ae862e]" }
                ].map((item, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${item.color} border-[#1d71b8]`}>
                    <h4 className="font-bold">{item.range}</h4>
                    <p className="font-medium">{item.level}</p>
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