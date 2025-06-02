import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, ArrowLeft, ClipboardList } from 'lucide-react';
import Link from 'next/link';

export default function GDSCalculator() {
  const questions = [
    "Apakah Anda puas dengan hidup Anda?",
    "Apakah Anda telah melepaskan banyak kegiatan dan minat Anda?",
    "Apakah Anda merasa hidup Anda kosong?",
    "Apakah Anda sering merasa bosan?",
    "Apakah Anda dalam keadaan baik sebagian besar waktu?",
    "Apakah Anda takut akan terjadi sesuatu yang buruk pada Anda?",
    "Apakah Anda merasa bahagia sebagian besar waktu?",
    "Apakah Anda sering merasa tidak berdaya?",
    "Apakah Anda lebih suka tinggal di rumah daripada pergi keluar dan melakukan hal baru?",
    "Apakah Anda merasa memiliki masalah memori lebih dari kebanyakan orang?",
    "Apakah Anda pikir sekarang adalah waktu yang indah untuk hidup?",
    "Apakah Anda merasa tidak berharga seperti sekarang ini?",
    "Apakah Anda merasa penuh energi?",
    "Apakah Anda merasa situasi Anda tidak ada harapan?",
    "Apakah Anda pikir kebanyakan orang lebih baik daripada Anda?"
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
            <HeartPulse className="mx-auto w-12 h-12 text-[#ae862e]" />
            <h1 className="mt-4 text-3xl font-bold">Geriatric Depression Scale (GDS-15)</h1>
            <p className="max-w-2xl mx-auto mt-2">
              Skrining untuk mendeteksi gejala depresi pada lansia
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
                  <li>Jawab setiap pertanyaan dengan "Ya" atau "Tidak"</li>
                  <li>Merujuk pada perasaan Anda selama 1 minggu terakhir</li>
                  <li>Total skor maksimal 15 (semakin tinggi semakin berat gejala depresi)</li>
                </ul>
              </div>

              <form>
                <div className="space-y-6">
                  {questions.map((question, index) => (
                    <div key={index} className="pb-6 border-b">
                      <h3 className="mb-3 font-medium text-gray-800">{question}</h3>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={`q${index}`}
                            value="1"
                            className="mr-2 h-4 w-4 border-[#1d71b8] text-[#1d71b8] focus:ring-[#ae862e]"
                          />
                          Ya
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={`q${index}`}
                            value="0"
                            className="mr-2 h-4 w-4 border-[#1d71b8] text-[#1d71b8] focus:ring-[#ae862e]"
                          />
                          Tidak
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-10">
                  <Button
                    type="submit"
                    className="bg-[#ae862e] hover:bg-[#d2ac47] px-8 py-4 text-lg rounded-lg"
                  >
                    Hitung Skor GDS
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
                <li><span className="font-medium">0-4:</span> Normal</li>
                <li><span className="font-medium">5-8:</span> Depresi ringan</li>
                <li><span className="font-medium">9-11:</span> Depresi sedang</li>
                <li><span className="font-medium">12-15:</span> Depresi berat</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Hasil ≥5 menunjukkan kemungkinan depresi. Disarankan konsultasi dengan dokter atau psikogeriatri untuk evaluasi lebih lanjut.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}