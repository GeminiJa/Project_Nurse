"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import SidenavAdmin from "@/components/sidenavAdmin";
import { useDataContext } from "context/DataContext";
import { getCourses, updateCourseProgress } from "@/components/coursesData";

const RecordListPage: React.FC = () => {
  const { savedRecords, updateRecordStatus } = useDataContext();
  const [approvedRecords, setApprovedRecords] = useState<number[]>([]);
  const courses = getCourses();

  const handleApprove = (recordId: number) => {
    if (approvedRecords.includes(recordId)) return;

    const record = savedRecords.find((rec) => rec.id === recordId);
    if (!record) return;

    const courseId = record.selectedCategory === "other" ? null : Number(record.selectedCategory);
    const subCourseId = record.selectedSubCategory ? Number(record.selectedSubCategory) : null;

    if (courseId !== null && subCourseId !== null) {
      updateRecordStatus(recordId, "approved");
      setApprovedRecords((prev) => [...prev, recordId]);

      updateCourseProgress(courseId, subCourseId);
    }
  };

  return (
    <div className="h-screen font-mitr">
      <Navbar />
      <div className="flex h-full">
        <SidenavAdmin />
        <main className="flex-1 p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#000000] mb-6">ตรวจสอบสถานะรายการบันทึก</h2>
          <div className="grid grid-cols-3 gap-4 w-full max-w-6xl">
            {savedRecords.length > 0 ? (
              savedRecords
                .filter(
                  (record) =>
                    record.location !== "N/A" &&
                    record.patientRoom !== "N/A" &&
                    record.bed !== "N/A" &&
                    record.location !== "" &&
                    record.patientRoom !== "" &&
                    record.bed !== ""
                ) // ✅ กรองเฉพาะข้อมูลที่ครบถ้วน
                .slice()
                .reverse() // ✅ ทำให้บันทึกล่าสุดขึ้นด้านบนสุด
                .map((record) => {
                  const selectedCourse = courses.find((course) => course.id === Number(record.selectedCategory));
                  const selectedSubCourse = selectedCourse?.subCourses.find((sub) => sub.id === Number(record.selectedSubCategory));

                  return (
                    <div
                      key={record.id}
                      className={`p-6 rounded-lg shadow-xl border border-gray-300 ${
                        savedRecords[savedRecords.length - 1].id === record.id ? "bg-gray-200" : "bg-gray-200"
                      } hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300`}
                    >
                      <h3 className="text-lg font-bold mb-4 text-gray-700">
                        {selectedCourse?.title || "N/A"} - {selectedSubCourse?.title || "N/A"}
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <p><strong>หมวดหมู่:</strong> {selectedCourse?.title || "N/A"}</p>
                        <p><strong>หมวดย่อย:</strong> {selectedSubCourse?.title || "N/A"}</p>
                        <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo || "N/A"}</p>
                        <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
                        <p><strong>สถานที่:</strong> {record.location}</p>
                        <p><strong>หอผู้ป่วย:</strong> {record.patientRoom}</p>
                        <p><strong>เตียง:</strong> {record.bed}</p>
                        <p><strong>วันที่:</strong> {record.date || "N/A"}</p>

                        <button
                          onClick={() => handleApprove(record.id)}
                          className={`mt-4 px-4 py-2 rounded ${
                            approvedRecords.includes(record.id)
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-green-500 hover:bg-green-600 text-white"
                          }`}
                          disabled={approvedRecords.includes(record.id)}
                        >
                          {approvedRecords.includes(record.id)
                            ? "ได้รับการอนุมัติแล้ว"
                            : "ยืนยันอนุมัติ"}
                        </button>

                        {approvedRecords.includes(record.id) && (
                          <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
                        )}
                      </div>
                    </div>
                  );
                })
            ) : (
              <div className="text-center mt-6 text-gray-500 col-span-3">ไม่มีรายการบันทึก</div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RecordListPage;
