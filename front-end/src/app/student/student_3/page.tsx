// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";

// const RecordListPage: React.FC = () => {
//   const { savedRecords, updateRecordStatus } = useDataContext(); // ดึงข้อมูล savedRecords และฟังก์ชัน updateRecordStatus จาก Context
//   const [approvedRecords, setApprovedRecords] = useState<Set<number>>(new Set()); // สถานะการอนุมัติสำหรับแต่ละบันทึก

//   const handleApprove = (recordId: number) => {
//     // อัปเดตสถานะของบันทึกที่เลือก
//     updateRecordStatus(recordId, 'approved');
//     setApprovedRecords((prev) => new Set(prev.add(recordId))); // เพิ่ม recordId ไปยัง Set ของบันทึกที่ได้รับการอนุมัติ
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar /> {/* Navbar Component */}

//       {/* Main Layout */}
//       <div className="flex h-full">
//         <SidenavAdmin /> {/* Sidebar Component */}

//         {/* Main Content */}
//         <main className="flex-1 p-6 flex flex-col items-center">
//           <h2 className="text-2xl font-bold text-[#000000] mb-6">ตรวจสอบสถานะรายการบันทึก</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {savedRecords.map((record, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-lg shadow-xl bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <h3 className="text-lg font-bold mb-4 text-gray-700">
//                   {record.selectedCategory} - {record.selectedSubCategory}
//                 </h3>
//                 <div className="space-y-2 text-gray-600">
//                   <p><strong>สถานที่:</strong> {record.location || "N/A"}</p>
//                   <p><strong>หอผู้ป่วย:</strong> {record.patientRoom || "N/A"}</p>
//                   <p><strong>เตียง:</strong> {record.bed || "N/A"}</p>
//                   <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
//                   <p><strong>วันที่:</strong> {record.date || "N/A"}</p>

//                   {record.additionalInfo && (
//                     <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo}</p>
//                   )}

//                   {/* ปุ่มยืนยัน */}
//                   <button
//                     onClick={() => handleApprove(record.id)}
//                     className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                     disabled={approvedRecords.has(record.id)} // ปิดปุ่มถ้าได้รับการอนุมัติแล้ว
//                   >
//                     {approvedRecords.has(record.id) ? "ได้รับการอนุมัติแล้ว" : "ยืนยันอนุมัติ"}
//                   </button>

//                   {approvedRecords.has(record.id) && (
//                     <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ถ้าไม่มีข้อมูล */}
//           {savedRecords.length === 0 && (
//             <div className="text-center mt-6 text-gray-500">ไม่มีรายการบันทึก</div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RecordListPage;

// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";
// import { categoryLabels, subCategoryLabels } from "@/components/labels"; // Import labels

// const RecordListPage: React.FC = () => {
//   const { savedRecords, updateRecordStatus, updateCourseProgress, courses } = useDataContext();
//   const [approvedRecords, setApprovedRecords] = useState<Set<number>>(new Set());

//   const findCourseAndSubCourse = (recordId: number) => {
//     const courseId = 1; 
//     const subCourseId = 1.1;
//     return { courseId, subCourseId };
//   };

//   const handleApprove = (recordId: number) => {
//     const { courseId, subCourseId } = findCourseAndSubCourse(recordId);
//     updateRecordStatus(recordId, "approved");
//     setApprovedRecords((prev) => new Set(prev.add(recordId)));
//     updateCourseProgress(courseId, subCourseId, "completed");
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />

//       <div className="flex h-full">
//         <SidenavAdmin />

//         <main className="flex-1 p-6 flex flex-col items-center">
//           <h2 className="text-2xl font-bold text-[#000000] mb-6">ตรวจสอบสถานะรายการบันทึก</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {savedRecords.map((record, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-lg shadow-xl bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <h3 className="text-lg font-bold mb-4 text-gray-700">
//                   {categoryLabels[record.selectedCategory] || "N/A"} - 
//                   {subCategoryLabels[record.selectedSubCategory] || "N/A"}
//                 </h3>
//                 <div className="space-y-2 text-gray-600">
//                   <p><strong>สถานที่:</strong> {record.location || "N/A"}</p>
//                   <p><strong>หอผู้ป่วย:</strong> {record.patientRoom || "N/A"}</p>
//                   <p><strong>เตียง:</strong> {record.bed || "N/A"}</p>
//                   <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
//                   <p><strong>วันที่:</strong> {record.date || "N/A"}</p>

//                   {record.additionalInfo && (
//                     <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo}</p>
//                   )}

//                   <button
//                     onClick={() => handleApprove(record.id)} 
//                     className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                     disabled={approvedRecords.has(record.id)}
//                   >
//                     {approvedRecords.has(record.id) ? "ได้รับการอนุมัติแล้ว" : "ยืนยันอนุมัติ"}
//                   </button>

//                   {approvedRecords.has(record.id) && (
//                     <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {savedRecords.length === 0 && (
//             <div className="text-center mt-6 text-gray-500">ไม่มีรายการบันทึก</div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RecordListPage;


// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";
// import { getCourses } from "@/components/coursesData";

// const RecordListPage: React.FC = () => {
//   const { savedRecords, updateRecordStatus, updateCourseProgress } = useDataContext();
//   const [approvedRecords, setApprovedRecords] = useState<Set<number>>(new Set());
//   const [selectedCourse, setSelectedCourse] = useState<string>("");
//   const [selectedSubCourse, setSelectedSubCourse] = useState<string>("");

//   const findCourseAndSubCourse = (recordId: number) => {
//     const courseId = 1; 
//     const subCourseId = 1.1;
//     return { courseId, subCourseId };
//   };

// // RecordListPage.tsx

// const handleApprove = (recordId: number) => {
//   const { courseId, subCourseId } = findCourseAndSubCourse(recordId);
//   updateRecordStatus(recordId, "approved");  // เปลี่ยนสถานะของบันทึกเป็น "approved"
//   setApprovedRecords((prev) => new Set(prev.add(recordId))); // บันทึกรายการที่ได้รับการอนุมัติ
//   updateCourseProgress(courseId, subCourseId, "completed");  // อัปเดตความคืบหน้าของหลักสูตรและ sub-course โดยเพิ่ม progress
// };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-6 flex flex-col items-center">
//           <h2 className="text-2xl font-bold text-[#000000] mb-6">ตรวจสอบสถานะรายการบันทึก</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {savedRecords.map((record, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-lg shadow-xl bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <h3 className="text-lg font-bold mb-4 text-gray-700">
//                   {courseId[record.selectedCategory] || "N/A"} - 
//                   {subCourseId[record.selectedSubCategory] || "N/A"}
//                 </h3>
//                 <div className="space-y-2 text-gray-600">
//                   <p><strong>สถานที่:</strong> {record.location || "N/A"}</p>
//                   <p><strong>หอผู้ป่วย:</strong> {record.patientRoom || "N/A"}</p>
//                   <p><strong>เตียง:</strong> {record.bed || "N/A"}</p>
//                   <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
//                   <p><strong>วันที่:</strong> {record.date || "N/A"}</p>

//                   {record.additionalInfo && (
//                     <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo}</p>
//                   )}

//                   <button
//                     onClick={() => handleApprove(record.id)} 
//                     className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                     disabled={approvedRecords.has(record.id)}
//                   >
//                     {approvedRecords.has(record.id) ? "ได้รับการอนุมัติแล้ว" : "ยืนยันอนุมัติ"}
//                   </button>

//                   {approvedRecords.has(record.id) && (
//                     <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {savedRecords.length === 0 && (
//             <div className="text-center mt-6 text-gray-500">ไม่มีรายการบันทึก</div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RecordListPage;

// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";
// import { getCourses } from "@/components/coursesData"

// const RecordListPage: React.FC = () => {
//   const { savedRecords, updateRecordStatus, updateCourseProgress } = useDataContext();
//   const [approvedRecords, setApprovedRecords] = useState<Set<number>>(new Set());
//   const courses = getCourses();

//   // ฟังก์ชันค้นหาหมวดหมู่หลักและย่อย 
//   const findCourseAndSubCourse = (recordId: number) => {
//     const record = savedRecords.find((rec) => rec.id === recordId);
//     if (!record) return { courseId: null, subCourseId: null };
  
//     // If the course is "other", we can either use a placeholder value or handle it differently
//     const courseId = record.selectedCategory === "other" ? -1 : record.selectedCategory;
//     return {
//       courseId,
//       subCourseId: record.selectedSubCategory || null
//     };
//   };
  
//   const handleApprove = (recordId: number) => {
//     const { courseId, subCourseId } = findCourseAndSubCourse(recordId);
//     if (courseId === null || !subCourseId) return; // Prevent errors if values are invalid
  
//     // Only update the course progress if courseId is a valid number (i.e., not "other" or placeholder -1)
//     if (courseId !== -1) {
//       updateRecordStatus(recordId, "approved");
//       setApprovedRecords((prev) => new Set([...prev, recordId])); 
//       updateCourseProgress(courseId, subCourseId, "completed");
//     }
//   };
  

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-6 flex flex-col items-center">
//           <h2 className="text-2xl font-bold text-[#000000] mb-6">ตรวจสอบสถานะรายการบันทึก</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {savedRecords.map((record, index) => {
//                 const selectedCourse = courses.find(course => course.id === Number(record.selectedCategory));
//                 const selectedSubCourse = selectedCourse?.subCourses.find(sub => sub.id === Number(record.selectedSubCategory));

//                 return (
//                   <div
//                     key={index}
//                     className="p-6 rounded-lg shadow-xl bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300"
//                   >
//                     <h3 className="text-lg font-bold mb-4 text-gray-700">
//                       {selectedCourse?.title || "N/A"} - {selectedSubCourse?.title || "N/A"}
//                     </h3>
//                     <div className="space-y-2 text-gray-600">
//                       <p><strong>สถานที่:</strong> {record.location || "N/A"}</p>
//                       <p><strong>หอผู้ป่วย:</strong> {record.patientRoom || "N/A"}</p>
//                       <p><strong>เตียง:</strong> {record.bed || "N/A"}</p>
//                       <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
//                       <p><strong>วันที่:</strong> {record.date || "N/A"}</p>

//                       {record.additionalInfo && (
//                         <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo || "N/A"}</p>
//                       )}

//                       <button
//                         onClick={() => handleApprove(record.id)} 
//                         className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                         disabled={approvedRecords.has(record.id)}
//                       >
//                         {approvedRecords.has(record.id) ? "ได้รับการอนุมัติแล้ว" : "ยืนยันอนุมัติ"}
//                       </button>

//                       {approvedRecords.has(record.id) && (
//                         <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//           {savedRecords.length === 0 && (
//             <div className="text-center mt-6 text-gray-500">ไม่มีรายการบันทึก</div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RecordListPage;

// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";
// import { getCourses } from "@/components/coursesData";

// const RecordListPage: React.FC = () => {
//   const { savedRecords, updateRecordStatus, updateCourseProgress } = useDataContext();
//   const [approvedRecords, setApprovedRecords] = useState<Set<number>>(new Set());
//   const courses = getCourses();

//   const findCourseAndSubCourse = (recordId: number) => {
//     const record = savedRecords.find((rec) => rec.id === recordId);
//     if (!record) return { courseId: null, subCourseId: null };

//     const courseId = record.selectedCategory === "other" ? -1 : record.selectedCategory;
//     return {
//       courseId,
//       subCourseId: record.selectedSubCategory || null,
//     };
//   };

//   const handleApprove = (recordId: number) => {
//     const { courseId, subCourseId } = findCourseAndSubCourse(recordId);
//     if (courseId === null || !subCourseId) return;

//     if (courseId !== -1) {
//       updateRecordStatus(recordId, "approved");
//       setApprovedRecords((prev) => new Set([...prev, recordId]));
//       updateCourseProgress(courseId, subCourseId, "completed");
//     }
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-6 flex flex-col items-center">
//           <h2 className="text-2xl font-bold text-[#000000] mb-6">ตรวจสอบสถานะรายการบันทึก</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {savedRecords.map((record, index) => {
//               const selectedCourse = courses.find(course => course.id === Number(record.selectedCategory));
//               const selectedSubCourse = selectedCourse?.subCourses.find(sub => sub.id === Number(record.selectedSubCategory));

//               return (
//                 <div key={index} className="p-6 rounded-lg shadow-xl bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300">
//                   <h3 className="text-lg font-bold mb-4 text-gray-700">
//                     {selectedCourse?.title || "N/A"} - {selectedSubCourse?.title || "N/A"}
//                   </h3>
//                   <div className="space-y-2 text-gray-600">
//                     <p><strong>สถานที่:</strong> {record.location || "N/A"}</p>
//                     <p><strong>หอผู้ป่วย:</strong> {record.patientRoom || "N/A"}</p>
//                     <p><strong>เตียง:</strong> {record.bed || "N/A"}</p>
//                     <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
//                     <p><strong>วันที่:</strong> {record.date || "N/A"}</p>

//                     {record.additionalInfo && (
//                       <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo || "N/A"}</p>
//                     )}

//                     <button
//                       onClick={() => handleApprove(record.id)}
//                       className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                       disabled={approvedRecords.has(record.id)}
//                     >
//                       {approvedRecords.has(record.id) ? "ได้รับการอนุมัติแล้ว" : "ยืนยันอนุมัติ"}
//                     </button>

//                     {approvedRecords.has(record.id) && (
//                       <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {savedRecords.length === 0 && (
//             <div className="text-center mt-6 text-gray-500">ไม่มีรายการบันทึก</div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RecordListPage;


// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";

// const RecordListPage: React.FC = () => {
//   const { savedRecords, updateRecordStatus, updateCourseProgress, courses } = useDataContext();
//   const [approvedRecords, setApprovedRecords] = useState<number[]>([]); // เปลี่ยนจาก Set เป็น Array

//   const handleApprove = (recordId: number) => {
//     const record = savedRecords.find((rec) => rec.id === recordId);
//     if (!record) return;

//     const courseId = record.selectedCategory === "other" ? null : Number(record.selectedCategory);
//     const subCourseId = record.selectedSubCategory ? Number(record.selectedSubCategory) : null;

//     if (courseId !== null && subCourseId !== null) {
//       updateRecordStatus(recordId, "approved");
//       setApprovedRecords((prev) => [...prev, recordId]); // ใช้ array เพื่อให้ React ตรวจจับการเปลี่ยนแปลงได้ง่ายขึ้น
//       updateCourseProgress(courseId, subCourseId, "completed");
//     }
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-6 flex flex-col items-center">
//           <h2 className="text-2xl font-bold text-[#000000] mb-6">ตรวจสอบสถานะรายการบันทึก</h2>

//           {savedRecords.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {savedRecords.map((record) => {
//                 const selectedCourse = courses.find((course) => course.id === Number(record.selectedCategory));
//                 const selectedSubCourse = selectedCourse?.subCourses.find((sub) => sub.id === Number(record.selectedSubCategory));

//                 return (
//                   <div
//                     key={record.id}
//                     className="p-6 rounded-lg shadow-xl bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300"
//                   >
//                     <h3 className="text-lg font-bold mb-4 text-gray-700">
//                       {selectedCourse?.title || "N/A"} - {selectedSubCourse?.title || "N/A"}
//                     </h3>
//                     <div className="space-y-2 text-gray-600">
//                       <p><strong>สถานที่:</strong> {record.location || "N/A"}</p>
//                       <p><strong>หอผู้ป่วย:</strong> {record.patientRoom || "N/A"}</p>
//                       <p><strong>เตียง:</strong> {record.bed || "N/A"}</p>
//                       <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
//                       <p><strong>วันที่:</strong> {record.date || "N/A"}</p>
//                       {record.additionalInfo && <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo}</p>}

//                       <button
//                         onClick={() => handleApprove(record.id)}
//                         className={`mt-4 px-4 py-2 rounded ${approvedRecords.includes(record.id) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
//                         disabled={approvedRecords.includes(record.id)}
//                       >
//                         {approvedRecords.includes(record.id) ? "ได้รับการอนุมัติแล้ว" : "ยืนยันอนุมัติ"}
//                       </button>

//                       {approvedRecords.includes(record.id) && (
//                         <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="text-center mt-6 text-gray-500">ไม่มีรายการบันทึก</div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RecordListPage;

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
    const record = savedRecords.find((rec) => rec.id === recordId);
    if (!record) return;

    const courseId = record.selectedCategory === "other" ? null : Number(record.selectedCategory);
    const subCourseId = record.selectedSubCategory ? Number(record.selectedSubCategory) : null;

    if (courseId !== null && subCourseId !== null) {
      updateRecordStatus(recordId, "approved");
      setApprovedRecords((prev) => [...prev, recordId]);

      // Update course progress after approval
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
          {savedRecords.length > 0 ? (
            savedRecords.map((record) => {
              const selectedCourse = courses.find((course) => course.id === Number(record.selectedCategory));
              const selectedSubCourse = selectedCourse?.subCourses.find((sub) => sub.id === Number(record.selectedSubCategory));

              return (
                <div
                  key={record.id}
                  className="p-6 rounded-lg shadow-xl bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300 mb-4"
                >
                  <h3 className="text-lg font-bold mb-4 text-gray-700">
                    {selectedCourse?.title || "N/A"} - {selectedSubCourse?.title || "N/A"}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>หมวดหมู่:</strong> {selectedCourse?.title || "N/A"}</p>
                    <p><strong>หมวดย่อย:</strong> {selectedSubCourse?.title || "N/A"}</p>
                    <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo || "N/A"}</p>
                    <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
                    <div><strong>สถานที่:</strong> {record.location || "N/A"}</div>
                    <div><strong>หอผู้ป่วย:</strong> {record.patientRoom || "N/A"}</div>
                    <div><strong>เตียง:</strong> {record.bed || "N/A"}</div>
                    <p><strong>วันที่:</strong> {record.date || "N/A"}</p>

                    <button
                      onClick={() => handleApprove(record.id)}
                      className={`mt-4 px-4 py-2 rounded ${approvedRecords.includes(record.id) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
                      disabled={approvedRecords.includes(record.id)}
                    >
                      {approvedRecords.includes(record.id) ? "ได้รับการอนุมัติแล้ว" : "ยืนยันอนุมัติ"}
                    </button>

                    {approvedRecords.includes(record.id) && (
                      <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center mt-6 text-gray-500">ไม่มีรายการบันทึก</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RecordListPage;



// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";
// import { getCourses, updateCourseProgress } from "@/components/coursesData";

// const RecordListPage: React.FC = () => {
//   const { savedRecords, updateRecordStatus } = useDataContext();
//   const [approvedRecords, setApprovedRecords] = useState<number[]>([]);

//   const courses = getCourses();

//   const handleApprove = (recordId: number) => {
//     const record = savedRecords.find((rec) => rec.id === recordId);
//     if (!record) return;

//     const courseId = record.selectedCategory === "other" ? null : Number(record.selectedCategory);
//     const subCourseId = record.selectedSubCategory ? Number(record.selectedSubCategory) : null;

//     if (courseId !== null && subCourseId !== null) {
//       updateRecordStatus(recordId, "approved");
//       setApprovedRecords((prev) => [...prev, recordId]);

//       // Update course progress after approval
//       updateCourseProgress(courseId, subCourseId);
//     }
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-6 flex flex-col items-center">
//           <h2 className="text-2xl font-bold text-[#000000] mb-6">ตรวจสอบสถานะรายการบันทึก</h2>
//           {savedRecords.length > 0 ? (
//             savedRecords.slice(-1).map((record, index) => { // แสดงเฉพาะรายการล่าสุด
//               const selectedCourse = courses.find((course) => course.id === Number(record.selectedCategory));
//               const selectedSubCourse = selectedCourse?.subCourses.find((sub) => sub.id === Number(record.selectedSubCategory));

//               return (
//                 <div
//                   key={record.id} // ใช้แค่ record.id ก็พอ
//                   className="p-6 rounded-lg shadow-xl bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:shadow-2xl transition-shadow duration-300"
//                 >
//                   <h3 className="text-lg font-bold mb-4 text-gray-700">
//                     {selectedCourse?.title || "N/A"} - {selectedSubCourse?.title || "N/A"}
//                   </h3>
//                   <div className="space-y-2 text-gray-600">
//                     <p><strong>ข้อมูลเพิ่มเติม:</strong> {record.additionalInfo || "N/A"}</p>
//                     <p><strong>ผู้บันทึก:</strong> {record.gender || "N/A"}</p>
//                     <p><strong>สถานที่:</strong> {record.location || "N/A"}</p>
//                     <p><strong>หอผู้ป่วย:</strong> {record.patientRoom || "N/A"}</p>
//                     <p><strong>เตียง:</strong> {record.bed || "N/A"}</p>
//                     <p><strong>วันที่:</strong> {record.date || "N/A"}</p>

//                     <button
//                       onClick={() => handleApprove(record.id)}
//                       className={`mt-4 px-4 py-2 rounded ${approvedRecords.includes(record.id) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
//                       disabled={approvedRecords.includes(record.id)}
//                     >
//                       {approvedRecords.includes(record.id) ? "ได้รับการอนุมัติแล้ว" : "ยืนยันอนุมัติ"}
//                     </button>

//                     {approvedRecords.includes(record.id) && (
//                       <p className="text-green-500 mt-2">รายการนี้ได้รับการอนุมัติแล้ว</p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <div className="text-center mt-6 text-gray-500">ไม่มีรายการบันทึก</div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RecordListPage;




