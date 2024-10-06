"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Input değişikliklerini yönetme fonksiyonu
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form alanları boş mu kontrol edelim
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Lütfen zorunlu alanları doldurun.");
      return;
    }

    try {
      setStatus("Gönderiliyor...");

      // Form verilerini API route'a gönderiyoruz
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const result = await res.json();
      if (result.success) {
        setStatus("Mesaj başarıyla gönderildi!");
      } else {
        setStatus(`Mesaj gönderilirken bir hata oluştu: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Hata: ${error.message}`);
      console.error("Hata: ", error);
    }
  };

  return (
    <>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Your name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#F07F55] focus:border-[#F07F55] sm:text-sm"
              placeholder="Full name"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#F07F55] focus:border-[#F07F55] sm:text-sm"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone number (Optional)
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#F07F55] focus:border-[#F07F55] sm:text-sm"
            placeholder="Phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your message
          </label>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#F07F55] focus:border-[#F07F55] sm:text-sm"
            placeholder="Tell us about your brand and why you're looking for a social agency."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#F07F55] text-white py-3 px-4 rounded-lg hover:bg-[#e07040] transition-all"
        >
          Send Message
        </button>
        {status && <p className="mt-4">{status}</p>}
      </form>
    </>
  );
}
