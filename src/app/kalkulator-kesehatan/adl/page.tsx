import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, ArrowLeft, ClipboardList } from 'lucide-react';
import Link from 'next/link';

export default function ADLCalculator() {
  const questions = [
    "Mandi sendiri (termasuk masuk/keluar kamar mandi)",
    "Berpakaian sendiri (memilih baju, memakai pakaian)",
    "Makan sendiri (tanpa bantuan menyuapi)",
    "Toileting (pergi ke WC, membersihkan diri)",
    "Transfer (berpindah dari tempat tidur ke kursi)",
    "Berjalan di permukaan datar (atau menggunakan kursi roda)"
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-8 text-[#1d71b8] bg-gradient-to-r from-blue-50 to-[#e8f4fc]">
        <div className="container mx-auto px-4">
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
            <Activity className="mx-auto w-12 h-12 text-[#ae862e]" />
            <h1 className="mt-4 text-3xl font-bold">Activities of Daily Living (ADL)</h1>
            <p className="mt-2 max-w-2xl mx-auto">
              Penilaian kemampuan dasar dalam melakukan aktivitas sehari-hari
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border border-[#d2ac47]">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1d71b8] mb-4">Petunjuk Pengisian:</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Berikan penilaian untuk setiap aktivitas</li>
                  <li>0 = Tidak bisa sama sekali</li>
                  <li>1 = Butuh bantuan sebagian</li>
                  <li>2 = Bisa mandiri sepenuhnya</li>
                  <li>Total skor maksimal 12 (semakin tinggi semakin baik)</li>
                </ul>
              </div>

              <form>
                <div className="space-y-6">
                  {questions.map((question, index) => (
                    <div key={index} className="border-b pb-6">
                      <h3 className="font-medium text-gray-800 mb-3">{question}</h3>
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

                <div className="mt-10 flex justify-center">
                  <Button
                    type="submit"
                    className="bg-[#ae862e] hover:bg-[#d2ac47] px-8 py-4 text-lg rounded-lg"
                  >
                    Hitung Skor ADL
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
                <li><span className="font-medium">0-4:</span> Ketergantungan berat</li>
                <li><span className="font-medium">5-8:</span> Ketergantungan sedang</li>
                <li><span className="font-medium">9-11:</span> Ketergantungan ringan</li>
                <li><span className="font-medium">12:</span> Mandiri sepenuhnya</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Hasil ini hanya sebagai panduan awal. Konsultasikan dengan tenaga kesehatan untuk penilaian lebih lengkap.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}