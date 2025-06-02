"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white bg-[#0b1a3a]">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-4xl font-bold text-white">SIDAYA</h3>
            <p className="mb-4 text-gray-300">Layanan perawatan dan dukungan untuk lansia di atas 65 tahun.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 transition-colors hover:text-blue-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-blue-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-blue-500">
                <Instagram size={20} />
              </a>
            </div>
            <div className="w-10 h-5 p-3 mt-4 bg-transparents md:w-50 md:h-25 shrink-0">
                            <Image 
                              src="/images/logo-kemendukbangga-dengan-text.png" 
                              alt="Pencatatan dan Pelaporan" 
                              width={256} 
                              height={256} 
                              className="object-contain"
                            />
              </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 transition-colors hover:text-blue-500">
                  BERANDA
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-gray-300 transition-colors hover:text-blue-500">
                  ARTIKEL
                </Link>
              </li>
              <li>
                <Link href="/dimensi-lantang" className="text-gray-300 transition-colors hover:text-blue-500">
                  7DIMENSI LANTANG
                </Link>
              </li>
              <li>
                <Link href="/informasi" className="text-gray-300 transition-colors hover:text-blue-500">
                  INFORMASI
                </Link>
              </li>
              <li>
                <Link href="/pencatatan" className="text-gray-300 transition-colors hover:text-blue-500">
                  PENCATATAN DAN PELAPORAN
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 transition-colors hover:text-blue-500">
                  REGISTRASI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="flex-shrink-0 mt-1 mr-2 text-blue-500" />
                <span className="text-gray-300">Jl. Permata No.1, Halim Perdanakusuma Jakarta Timur, 13650</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-500" />
                <div>
                  <p className="text-gray-300">0218098018 ext: 491</p>
                  <p className="text-gray-300">081299986001</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-500" />
                <div>
                  <p className="text-gray-300">dithanlan@bkkbn.go.id</p>
                  <p className="text-gray-300">sidaya@kemendukbangga.go.id</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Website</h3>
            <ul className="space-y-2">
              <li>
                <Link href="www.sidaya.kemendukbangga.go.id" className="text-gray-300 transition-colors hover:text-blue-500">
                  www.sidaya.kemendukbangga.go.id
                </Link>
              </li>
            </ul>
            <h3 className="mt-6 mb-4 text-lg font-bold">Fax</h3>
            <p className="text-gray-300">021-800855</p>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
          <p>Hak Cipta © Kemendukbangga - Kementerian Kependudukan dan Pembangunan Keluarga/Badan Kependudukan dan Keluarga Berencana Nasional</p>
        </div>
      </div>
    </footer>
  );
}
