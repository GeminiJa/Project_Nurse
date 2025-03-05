"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import SidenavAdmin from "@/components/sidenavAdmin";
import { useDataContext } from "context/DataContext";
import { getCourses } from "@/components/coursesData";

function SummaryPage() {
  const { formData, saveRecord } = useDataContext();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState("");
  const [selectedSubCategoryTitle, setSelectedSubCategoryTitle] = useState("");
  const [selectedSubCategoryProgress, setSelectedSubCategoryProgress] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false); // Track save status

  useEffect(() => {
    const courses = getCourses();
    const selectedCategoryId = Number(formData.selectedCategory);
    const selectedCourse = courses.find(course => course.id === selectedCategoryId);
    const selectedSubCourse = selectedCourse?.subCourses.find(subCourse => subCourse.id === formData.selectedSubCategory);

    setSelectedCategoryTitle(selectedCourse?.title || "N/A");
    setSelectedSubCategoryTitle(selectedSubCourse?.title || "N/A");
    setSelectedSubCategoryProgress(selectedSubCourse?.progress || "N/A");
  }, [formData.selectedCategory, formData.selectedSubCategory]);

  if (!formData) {
    return <div>Loading...</div>;
  }

  const handleConfirm = () => {
    if (isSaving) return;

    setIsSaving(true);

    saveRecord(formData); // Save the formData

    setIsSaved(true); // Mark as saved

    // Open the success popup after saving
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Close the popup when "ตกลง" is clicked
    router.push('/student/student_2/student_2_1'); // Redirect after closing popup to /student/student_2/student_2_1
  };

  const handlePopupOpen = () => {
    if (!isSaving && !isSaved) {
      setShowPopup(true);
    }
  };

  return (
    <div className="h-screen font-mitr">
      <Navbar />

      <div className="flex h-full">
        <SidenavAdmin />
        <main className="flex-1 p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#000000] mb-6">สรุปรายการที่จะบันทึก</h2>
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-4">
            <div><strong>หมวดหมู่:</strong> {selectedCategoryTitle || "N/A"}</div>
            <div><strong>หมวดย่อย:</strong> {selectedSubCategoryTitle || "N/A"}</div>
            <div><strong>ข้อมูลเพิ่มเติม:</strong> {formData.additionalInfo || "N/A"}</div>
            <div><strong>ผู้บันทึก:</strong> {formData.gender || "N/A"}</div>
            <div><strong>สถานที่:</strong> {formData.location || "N/A"}</div>
            <div><strong>หอผู้ป่วย:</strong> {formData.patientRoom || "N/A"}</div>
            <div><strong>เตียง:</strong> {formData.bed || "N/A"}</div>
            <div><strong>วันที่:</strong> {formData.date || "N/A"}</div>
          </div>

          <div className="mt-6 flex justify-between w-full max-w-md">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => router.back()}
            >
              ย้อนกลับ
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={handlePopupOpen} // Open popup
              disabled={isSaving || isSaved} // Disable while saving or after save
            >
              ยืนยันการบันทึก
            </button>
          </div>
        </main>
      </div>

      {/* Show the success popup after save */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-80 flex flex-col items-center">
            <img
              src="/success.png" // Use the correct image path
              alt="Success"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-bold mb-4 text-center">บันทึกข้อมูลสำเร็จ</h3>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={handlePopupClose} // Close popup and redirect
            >
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SummaryPage;

