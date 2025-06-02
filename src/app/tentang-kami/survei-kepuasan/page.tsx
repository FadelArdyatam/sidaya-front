import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ClipboardList, ThumbsUp, MessageSquare, Users, HeartPulse, User } from 'lucide-react';
import Image from 'next/image';

export default function SurveiKepuasanPage() {
  const surveyInfo = [
    {
      title: "Tujuan Survei",
      description: "Mengukur tingkat kepuasan penerima manfaat terhadap seluruh program Lansia Berdaya termasuk BKL.",
      icon: <Star className="w-12 h-12 text-[#1d71b8]" />,
    },
    {
      title: "Metode Pengisian",
      description: "Survei dapat diisi secara online, offline dengan petugas, atau melalui kunjungan rumah.",
      icon: <ClipboardList className="w-12 h-12 text-[#1d71b8]" />,
    },
    {
      title: "Manfaat Survei",
      description: "Hasil survei menjadi bahan evaluasi untuk peningkatan kualitas program BKL dan layanan lainnya.",
      icon: <ThumbsUp className="w-12 h-12 text-[#1d71b8]" />,
    },
    {
      title: "Kerahasiaan Data",
      description: "Jawaban Anda sangat berharga dan akan dijaga kerahasiaannya.",
      icon: <MessageSquare className="w-12 h-12 text-[#1d71b8]" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 text-[#1d71b8]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-[#ae862e]">Survei Kepuasan Lansia Berdaya</h1>
              <p className="mb-6 text-xl">
                Berikan penilaian Anda untuk membantu kami meningkatkan kualitas program BKL dan pelayanan Lansia Berdaya.
              </p>
              <div className="flex items-center">
                <Button className="text-white bg-[#ae862e] rounded-none hover:bg-[#d2ac47]">
                  Dengarkan <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Image 
                src="/images/lansia-survei.png" 
                alt="Lansia Berdaya Survei Kepuasan" 
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
            <span className="text-gray-600">Survei Kepuasan</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {surveyInfo.map((item, index) => (
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

      {/* Survey Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl p-8 mx-auto bg-[#f4f3e4] rounded-lg">
            <h2 className="mb-6 text-2xl font-bold text-center text-[#ae862e]">Formulir Survei Kepuasan</h2>
            
            <div className="space-y-8">
              {/* Bagian Identitas Responden */}
              <div className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-[#1d71b8] flex items-center">
                  <User className="mr-2" /> Informasi Responden
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Nama (opsional)</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Usia</label>
                    <input type="number" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Jenis Kelamin</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Pilih</option>
                      <option value="L">Laki-laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Lokasi BKL</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>

              {/* Bagian Penilaian Umum */}
              <div className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-[#1d71b8] flex items-center">
                  <Star className="mr-2" /> Penilaian Umum Pelayanan
                </h3>
                <div className="space-y-6">
                  {[
                    "1. Bagaimana penilaian Anda terhadap pelayanan petugas Lansia Berdaya secara keseluruhan?",
                    "2. Seberapa mudah Anda mengakses layanan Lansia Berdaya?",
                    "3. Apakah fasilitas yang disediakan memadai?",
                    "4. Seberapa informatif materi yang diberikan dalam program ini?"
                  ].map((question, qIdx) => (
                    <div key={qIdx}>
                      <h4 className="mb-3 font-medium text-gray-800">{question}</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Sangat Buruk", "Buruk", "Cukup", "Baik", "Sangat Baik"].map((option, i) => (
                          <Button 
                            key={i} 
                            variant="outline" 
                            className="text-sm border-[#89cfe8] text-[#1d71b8] hover:bg-[#89cfe8]"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bagian Khusus BKL */}
              <div className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-[#1d71b8] flex items-center">
                  <Users className="mr-2" /> Penilaian Program Bina Keluarga Lansia (BKL)
                </h3>
                <div className="space-y-6">
                  {[
                    "5. Seberapa sering Anda mengikuti kegiatan BKL?",
                    "6. Bagaimana kualitas materi yang disampaikan dalam kegiatan BKL?",
                    "7. Seberapa bermanfaat kegiatan BKL bagi kehidupan sehari-hari Anda?",
                    "8. Bagaimana interaksi dengan fasilitator dan peserta BKL lainnya?",
                    "9. Apakah jadwal kegiatan BKL sesuai dengan waktu luang Anda?",
                    "10. Seberapa baik pendampingan yang diberikan oleh kader BKL?"
                  ].map((question, qIdx) => (
                    <div key={qIdx}>
                      <h4 className="mb-3 font-medium text-gray-800">{question}</h4>
                      <div className="flex flex-wrap gap-2">
                        {qIdx === 0 ? (
                          ["Jarang", "Beberapa Kali", "Sering", "Sangat Sering"].map((option, i) => (
                            <Button 
                              key={i} 
                              variant="outline" 
                              className="text-sm border-[#89cfe8] text-[#1d71b8] hover:bg-[#89cfe8]"
                            >
                              {option}
                            </Button>
                          ))
                        ) : (
                          ["Sangat Buruk", "Buruk", "Cukup", "Baik", "Sangat Baik"].map((option, i) => (
                            <Button 
                              key={i} 
                              variant="outline" 
                              className="text-sm border-[#89cfe8] text-[#1d71b8] hover:bg-[#89cfe8]"
                            >
                              {option}
                            </Button>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bagian Layanan Khusus */}
              <div className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-[#1d71b8] flex items-center">
                  <HeartPulse className="mr-2" /> Layanan Khusus
                </h3>
                <div className="space-y-6">
                  {[
                    "11. Bagaimana pelayanan kesehatan yang diberikan (cek kesehatan, pengobatan, dll)?",
                    "12. Seberapa bermanfaat kegiatan pelatihan keterampilan bagi Anda?",
                    "13. Bagaimana kualitas konseling atau pendampingan psikologis yang diterima?",
                    "14. Apakah kebutuhan transportasi untuk kegiatan terpenuhi dengan baik?"
                  ].map((question, qIdx) => (
                    <div key={qIdx}>
                      <h4 className="mb-3 font-medium text-gray-800">{question}</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Sangat Buruk", "Buruk", "Cukup", "Baik", "Sangat Baik"].map((option, i) => (
                          <Button 
                            key={i} 
                            variant="outline" 
                            className="text-sm border-[#89cfe8] text-[#1d71b8] hover:bg-[#89cfe8]"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bagian Saran */}
              <div className="p-4 bg-white rounded-md shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-[#1d71b8] flex items-center">
                  <MessageSquare className="mr-2" /> Saran dan Masukan
                </h3>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    15. Apa harapan Anda untuk perbaikan program BKL dan layanan Lansia Berdaya ke depan?
                  </label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md focus:border-[#1d71b8] focus:ring-1 focus:ring-[#89cfe8]" 
                    rows={4}
                    placeholder="Tulis saran Anda di sini..."
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    16. Jenis kegiatan apa yang ingin Anda lihat/tambahkan dalam program BKL?
                  </label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md focus:border-[#1d71b8] focus:ring-1 focus:ring-[#89cfe8]" 
                    rows={3}
                    placeholder="Contoh: Senam lansia, pelatihan kerajinan, dll"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button className="px-8 py-4 text-lg text-white bg-[#ae862e] hover:bg-[#d2ac47]">
                  Kirim Survei
                </Button>
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