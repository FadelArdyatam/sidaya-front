import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, ClipboardList } from 'lucide-react';
import Link from 'next/link';

export default function IADLCalculator() {
  const questions = [
    "Menggunakan telepon",
    "Berbelanja kebutuhan sendiri",
    "Menyiapkan makanan",
    "Mengurus rumah (membersihkan, mencuci)",
    "Mencuci pakaian",
    "Menggunakan transportasi",
    "Mengelola obat-obatan",
    "Mengelola keuangan"
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-8 text-[#1d71b8] bg-gradient-to-r from-blue-50 to-[#e8f4fc]">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/kalkulator" className="flex items-center text-[#1d71b8] hover:underline">
              <ArrowLeft className="mr-2" /> Kembali
            </Link>
            <div className="flex items-center">
              <ClipboardList className="mr-2" />
              <span className="font-medium">Alat Penilaian</span>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Home className="mx-auto w-12 h-12 text-[#ae862e]" />
            <h1 className="mt-4 text-3xl font-bold">Instrumental Activities of Daily Living (IADL)</h1>
            <p className="max-w-2xl mx-auto mt-2">
              Penilaian kemampuan kompleks dalam mengurus diri dan lingkungan
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl px-4 mx-auto">
          <Card className="border border-[#d2ac47]">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1d71b8] mb-4">Petunjuk Pengisian:</h2>
                <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                  <li>Berikan penilaian untuk setiap aktivitas</li>
                  <li>0 = Tidak bisa sama sekali</li>
                  <li>1 = Butuh bantuan/supervisi</li>
                  <li>2 = Bisa mandiri sepenuhnya</li>
                  <li>Total skor maksimal 16 (semakin tinggi semakin baik)</li>
                </ul>
              </div>

              <form>
                <div className="space-y-6">
                  {questions.map((question, index) => (
                    <div key={index} className="pb-6 border-b">
                      <h3 className="mb-3 font-medium text-gray-800">{question}</h3>
                      <div className="flex space-x-4">
                        {[0, 1, 2].map((score) => (
                          <label key={score} className="flex items-center">
                            <input
                              type="radio"
                              name={`q${index}`}
                              value={score}
                              className="mr-2 h-4 w-4 border-[#1d71b8] text-[#1d71b8] focus:ring-[#ae862e]"
                            />
                            {score}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-10">
                  <Button
                    type="submit"
                    className="bg-[#ae862e] hover:bg-[#d2ac47] px-8 py-4 text-lg rounded-lg"
                  >
                    Hitung Skor IADL
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Info Box */}
          <Card className="mt-8 border border-[#89cfe8] bg-[#e8f4fc]">
            <CardContent className="p-6">
              <h3 className="font-bold text-[#1d71b8] mb-2">Interpretasi Hasil:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">0-5:</span> Ketergantungan berat</li>
                <li><span className="font-medium">6-10:</span> Ketergantungan sedang</li>
                <li><span className="font-medium">11-15:</span> Ketergantungan ringan</li>
                <li><span className="font-medium">16:</span> Mandiri sepenuhnya</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Skor rendah menunjukkan kebutuhan bantuan dalam kehidupan sehari-hari. Pertimbangkan konsultasi dengan pekerja sosial atau tenaga kesehatan.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}