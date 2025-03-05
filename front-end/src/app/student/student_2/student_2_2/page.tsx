"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import SidenavAdmin from "@/components/sidenavAdmin";
import { useDataContext } from "context/DataContext";
import type { FormRecord } from "context/DataContext";

const ExperienceEntryPage: React.FC = () => {
  const { formData, setFormData, saveRecord } = useDataContext();
  const router = useRouter();

  const [location, setLocation] = useState(formData?.location || "");
  const [patientRoom, setPatientRoom] = useState(formData?.patientRoom || "");
  const [bed, setBed] = useState(formData?.bed || "");
  const [date, setDate] = useState(formData?.date || "");

  const locationOptions = ["สถานที่ 1", "สถานที่ 2", "สถานที่ 3"];
  const patientRoomOptions = ["ห้อง 1", "ห้อง 2", "ห้อง 3"];

  useEffect(() => {
    if (formData) {
      setLocation(formData.location ?? "");
      setPatientRoom(formData.patientRoom ?? "");
      setBed(formData.bed ?? "");
      setDate(formData.date ?? "");
    }
  }, [formData]);

  const handleSubmit = () => {
    if (!location || !patientRoom || !bed || !date) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // ✅ บันทึกข้อมูลให้ตรงกับ `FormRecord`
    const updatedData: FormRecord = {
      ...formData,
      id: Date.now(),
      date,
      location,
      patientRoom,
      bed,
      status: "pending",
    };

    setFormData(updatedData);
    saveRecord(updatedData);

    router.push("/student/student_2/student_2_3");
  };

  return (
    <div className="h-screen font-mitr">
      <Navbar />
      <div className="flex h-full">
        <SidenavAdmin />
        <main className="flex-1 p-9 bg-gray-100 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#000000] mb-9">เลือกสถานที่ฝึกประสบการณ์</h2>
          <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-md space-y-9">
            <div>
              <label className="block text-gray-700 mb-1.5 text-lg">สถานที่ฝึกประสบการณ์</label>
              <select
                className="w-full p-3 text-lg border border-gray-300 rounded-lg"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">เลือกสถานที่ฝึกประสบการณ์</option>
                {locationOptions.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1.5 text-lg">หอผู้ป่วย</label>
              <select
                className="w-full p-3 text-lg border border-gray-300 rounded-lg"
                value={patientRoom}
                onChange={(e) => setPatientRoom(e.target.value)}
              >
                <option value="">เลือกหอผู้ป่วย</option>
                {patientRoomOptions.map((room, index) => (
                  <option key={index} value={room}>
                    {room}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1.5 text-lg">เตียง</label>
              <input
                type="text"
                className="w-full p-3 text-lg border border-gray-300 rounded-lg"
                value={bed}
                onChange={(e) => setBed(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1.5 text-lg">วันที่</label>
              <input
                type="date"
                className="w-full p-3 text-lg border border-gray-300 rounded-lg"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="mt-9 flex justify-between w-full max-w-lg">
              <button
                className="bg-blue-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-600"
                onClick={() => router.back()}
              >
                ย้อนกลับ
              </button>

              <button
                className="bg-green-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-600"
                onClick={handleSubmit}
              >
                ขั้นตอนต่อไป
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExperienceEntryPage;
