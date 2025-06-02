"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@radix-ui/react-select';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function FormulirPengaduan() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaintType: '',
    description: '',
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      complaintType: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.complaintType || !formData.description) {
      setFormError('Semua kolom harus diisi.');
      return;
    }

    console.log('Pengaduan dikirim:', formData);
    setFormError('');
    alert('Pengaduan berhasil dikirim!');
  };

  return (
    <div className="container py-12 mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#1d71b8] mb-8">Formulir Pengaduan Lansia Berdaya</h2>

      {formError && (
        <div className="flex items-center justify-between p-4 mb-6 bg-red-100 border border-red-300 rounded-md">
          <div className="flex items-center text-red-700">
            <AlertTriangle className="w-5 h-5 mr-2" />
            <span>{formError}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6 bg-white p-8 rounded-md shadow-lg border-t-4 border-[#1d71b8]">
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">Nama Lengkap</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap Anda"
              className="w-full"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email Anda"
              className="w-full"
            />
          </div>

          {/* Complaint Type Field - Diperbaiki dengan styling yang lebih baik */}
          <div>
            <label htmlFor="complaintType" className="block font-medium text-gray-700">Jenis Pengaduan</label>
            <Select value={formData.complaintType} onValueChange={handleSelectChange}>
              <SelectTrigger className="flex items-center justify-between w-full p-2 text-gray-700 bg-white border rounded-md hover:border-[#1d71b8] focus:outline-none focus:ring-2 focus:ring-[#89cfe8] focus:border-transparent">
                <SelectValue placeholder="Pilih Jenis Pengaduan" />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </SelectTrigger>
              <SelectContent className="w-full p-1 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                <SelectItem 
                  value="pelayanan" 
                  className="p-2 cursor-pointer hover:bg-[#89cfe8] hover:text-white rounded-md"
                >
                  Pengaduan Pelayanan
                </SelectItem>
                <SelectItem 
                  value="kebijakan" 
                  className="p-2 cursor-pointer hover:bg-[#89cfe8] hover:text-white rounded-md"
                >
                  Pengaduan Kebijakan
                </SelectItem>
                <SelectItem 
                  value="lainnya" 
                  className="p-2 cursor-pointer hover:bg-[#89cfe8] hover:text-white rounded-md"
                >
                  Pengaduan Lainnya
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block font-medium text-gray-700">Deskripsi Pengaduan</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Jelaskan pengaduan Anda"
              rows={6}
              className="w-full"
            />
          </div>
        </div>

        {/* Submit Button dengan gradient emas */}
        <div className="flex justify-center mt-6">
          <Button 
            type="submit" 
            className="text-white bg-gradient-to-r from-[#ae862e] via-[#d2ac47] to-[#f7ef8a] hover:from-[#d2ac47] hover:to-[#ae862e]"
          >
            Kirim Pengaduan
          </Button>
        </div>
      </form>

      {/* Back Link */}
      <div className="mt-6 text-center">
        <Link href="/tentang-kami" className="text-[#1d71b8] hover:underline">Kembali ke halaman sebelumnya</Link>
      </div>
    </div>
  );
}