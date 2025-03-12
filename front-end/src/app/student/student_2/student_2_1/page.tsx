// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { getCourses } from "@/components/coursesData";
// import { useDataContext } from "context/DataContext";
// import type { FormRecord } from "context/DataContext";

// const DataEntryForm = () => {
//   const router = useRouter();
//   const [courses, setCourses] = useState(getCourses());
//   const [selectedCourse, setSelectedCourse] = useState<number | "other" | null>(null);
//   const [selectedSubCourse, setSelectedSubCourse] = useState<number | null>(null);
//   const [additionalInfo, setAdditionalInfo] = useState<string>("");
//   const [gender, setGender] = useState<string>("ภายใน");
//   const [location, setLocation] = useState<string>("");

//   const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value === "other" ? "other" : Number(e.target.value);
//     setSelectedCourse(value);
//     setSelectedSubCourse(null);
//   };

//   const { formData, setFormData, saveRecord } = useDataContext();

//   const handleSubmit = () => {
//     if (!selectedCourse || (selectedCourse !== "other" && !selectedSubCourse)) {
//       alert("กรุณาเลือกทั้งหมวดหมู่และหมวดย่อย");
//       return;
//     }

//     if (selectedCourse === "other" && !additionalInfo) {
//       alert("กรุณาระบุข้อมูลเพิ่มเติมในกรณีเลือก 'อื่นๆ'");
//       return;
//     }

//     // อัปเดตข้อมูลให้ตรงกับ FormRecord
//     const updatedData: FormRecord = {
//       ...formData,
//       id: Date.now(),
//       date: new Date().toISOString(),
//       selectedCategory: selectedCourse === "other" ? -1 : selectedCourse,
//       selectedSubCategory: selectedSubCourse || 0,
//       additionalInfo,
//       gender,
//       location,
//       patientRoom: "",
//       bed: "",
//       status: "pending",
//     };

//     setFormData(updatedData);
//     saveRecord(updatedData);

//     router.push(`/student/student_2/student_2_2`);
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-9 bg-gray-100 flex flex-col items-center">
//           <h2 className="text-3xl font-bold mb-9">เลือกบันทึกประสบการณ์</h2>
//           <div className="w-full max-w-lg bg-white p-9 rounded-lg shadow-md space-y-6">
//             <div>
//               <label className="block mb-1.5 text-lg">หมวดหมู่</label>
//               <select
//                 className="w-full p-3 text-base border border-gray-300 rounded-lg"
//                 value={selectedCourse ?? ""}
//                 onChange={handleCourseChange}
//               >
//                 <option value="">กรุณาเลือกหมวดหมู่</option>
//                 {courses.map((course) => (
//                   <option key={course.id} value={course.id}>
//                     {course.title}
//                   </option>
//                 ))}
//                 <option value="other">อื่นๆ</option>
//               </select>
//             </div>

//             {selectedCourse && selectedCourse !== "other" && (
//               <div>
//                 <label className="block mb-1.5 text-lg">หมวดย่อย</label>
//                 <select
//                   className="w-full p-3 text-base border border-gray-300 rounded-lg"
//                   value={selectedSubCourse ?? ""}
//                   onChange={(e) => setSelectedSubCourse(Number(e.target.value))}
//                 >
//                   <option value="">กรุณาเลือกหมวดย่อย</option>
//                   {courses
//                     .find((course) => course.id === selectedCourse)
//                     ?.subCourses.map((subCourse) => (
//                       <option key={subCourse.id} value={subCourse.id}>
//                         {subCourse.title}
//                       </option>
//                     ))}
//                 </select>
//               </div>
//             )}

//             {selectedCourse === "other" && (
//               <div>
//                 <label className="block mb-1.5 text-lg">กรณีเลือกอื่นๆ โปรดระบุ</label>
//                 <input
//                   type="text"
//                   className="w-full p-3 text-base border border-gray-300 rounded-lg"
//                   value={additionalInfo}
//                   onChange={(e) => setAdditionalInfo(e.target.value)}
//                 />
//               </div>
//             )}
            
//             <div>
//               <label className="block mb-1.5 text-lg">ผู้นิเทศก์</label>
//               <div className="flex items-center space-x-6">
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="ภายใน"
//                     checked={gender === "ภายใน"}
//                     onChange={(e) => setGender(e.target.value)}
//                     className="mr-3"
//                   />
//                   ภายใน
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="ภายนอก"
//                     checked={gender === "ภายนอก"}
//                     onChange={(e) => setGender(e.target.value)}
//                     className="mr-3"
//                   />
//                   ภายนอก
//                 </label>
//               </div>
//             </div>

//             {gender === "ภายใน" && (
//               <div>
//                 <label className="block mb-1.5 text-lg">เลือกอาจารย์นิเทศก์</label>
//                 <select
//                   className="w-full p-3 text-base border border-gray-300 rounded-lg"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                 >
//                   <option value="">เลือกอาจารย์นิเทศก์</option>
//                   <option value="location1">ผู้นิเทศก์ 1</option>
//                   <option value="location2">ผู้นิเทศก์ 2</option>
//                   <option value="location3">ผู้นิเทศก์ 3</option>
//                 </select>
//               </div>
//             )}

//             <div className="flex justify-between mt-9">
//               <button
//                 className="bg-red-500 text-white px-6 py-3 text-base rounded-lg hover:bg-red-600"
//                 onClick={() => router.back()}
//               >
//                 ยกเลิก
//               </button>
//               <button
//                 className="bg-green-500 text-white px-6 py-3 text-base rounded-lg hover:bg-green-600"
//                 onClick={handleSubmit}
//               >
//                 ขั้นตอนต่อไป
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DataEntryForm;


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar"; // นำเข้า Navbar
import SidenavAdmin from "@/components/sidenavAdmin"; // นำเข้า Sidebar
import { getCourses } from "@/components/coursesData"; // นำเข้าข้อมูลหลักสูตร
import { useDataContext } from "context/DataContext"; // นำเข้า Context เพื่อจัดการข้อมูล Form
import type { FormRecord } from "context/DataContext"; // นำเข้า Type ของข้อมูล Form

const DataEntryForm = () => {
  const router = useRouter();
  const [courses] = useState(getCourses()); // โหลดข้อมูลหลักสูตรจากไฟล์ coursesData.ts
  const [selectedCourse, setSelectedCourse] = useState<number | "other" | null>(null); // เก็บค่าหมวดหมู่ที่เลือก
  const [selectedSubCourse, setSelectedSubCourse] = useState<number | null>(null); // เก็บค่าหมวดย่อยที่เลือก
  const [additionalInfo, setAdditionalInfo] = useState<string>(""); // เก็บข้อมูลเพิ่มเติม (กรณีเลือก "อื่นๆ")
  const [gender, setGender] = useState<string>("ภายใน"); // เก็บข้อมูลผู้นิเทศก์ (ภายใน/ภายนอก)
  const [location, setLocation] = useState<string>(""); // เก็บค่าผู้นิเทศก์

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "other" ? "other" : Number(e.target.value);
    setSelectedCourse(value);
    setSelectedSubCourse(null);
  };

  const { formData, setFormData, saveRecord } = useDataContext(); // ใช้ Context สำหรับจัดการข้อมูล Form

  const handleSubmit = () => {
    if (!selectedCourse || (selectedCourse !== "other" && !selectedSubCourse)) {
      alert("กรุณาเลือกทั้งหมวดหมู่และหมวดย่อย");
      return;
    }

    if (selectedCourse === "other" && !additionalInfo) {
      alert("กรุณาระบุข้อมูลเพิ่มเติมในกรณีเลือก 'อื่นๆ'");
      return;
    }

    // 🔹 อัปเดตข้อมูล Form และจัดเก็บลง Context
    const updatedData: FormRecord = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
      selectedCategory: selectedCourse === "other" ? -1 : selectedCourse,
      selectedSubCategory: selectedSubCourse || 0,
      additionalInfo,
      gender,
      location,
      patientRoom: "",
      bed: "",
      status: "pending",
    };

    setFormData(updatedData);
    saveRecord(updatedData);

    // 🔹 นำทางไปยังหน้าถัดไป
    router.push(`/student/student_2/student_2_2`);
  };

  return (
    <div className="h-screen font-mitr flex flex-col">
      {/* ✅ Navbar อยู่ด้านบนและไม่เลื่อนลงตาม */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* ✅ Sidebar อยู่ด้านซ้ายและไม่เลื่อนตาม */}
        <SidenavAdmin />

        {/* ✅ ส่วนเนื้อหาหลัก */}
        <main className="flex-1 p-9 bg-gray-100 flex flex-col items-center overflow-auto">
          <h2 className="text-3xl font-bold mb-9">เลือกบันทึกประสบการณ์</h2>
          <div className="w-full max-w-lg bg-white p-9 rounded-lg shadow-md space-y-6">
            {/* 🔹 เลือกหมวดหมู่หลัก */}
            <div>
              <label className="block mb-1.5 text-lg">หมวดหมู่</label>
              <select
                className="w-full p-3 text-base border border-gray-300 rounded-lg"
                value={selectedCourse ?? ""}
                onChange={handleCourseChange}
              >
                <option value="">กรุณาเลือกหมวดหมู่</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
                <option value="other">อื่นๆ</option>
              </select>
            </div>

            {/* 🔹 แสดงหมวดย่อยเฉพาะเมื่อเลือกหมวดหมู่หลักที่ไม่ใช่ "อื่นๆ" */}
            {selectedCourse && selectedCourse !== "other" && (
              <div>
                <label className="block mb-1.5 text-lg">หมวดย่อย</label>
                <select
                  className="w-full p-3 text-base border border-gray-300 rounded-lg"
                  value={selectedSubCourse ?? ""}
                  onChange={(e) => setSelectedSubCourse(Number(e.target.value))}
                >
                  <option value="">กรุณาเลือกหมวดย่อย</option>
                  {courses
                    .find((course) => course.id === selectedCourse)
                    ?.subCourses.map((subCourse) => (
                      <option key={subCourse.id} value={subCourse.id}>
                        {subCourse.title}
                      </option>
                    ))}
                </select>
              </div>
            )}

            {/* 🔹 กรณีเลือก "อื่นๆ" ให้กรอกข้อมูลเพิ่มเติม */}
            {selectedCourse === "other" && (
              <div>
                <label className="block mb-1.5 text-lg">กรณีเลือกอื่นๆ โปรดระบุ</label>
                <input
                  type="text"
                  className="w-full p-3 text-base border border-gray-300 rounded-lg"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                />
              </div>
            )}

            {/* 🔹 เลือกผู้นิเทศก์ (ภายใน/ภายนอก) */}
            <div>
              <label className="block mb-1.5 text-lg">ผู้นิเทศก์</label>
              <div className="flex items-center space-x-6">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="ภายใน"
                    checked={gender === "ภายใน"}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-3"
                  />
                  ภายใน
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="ภายนอก"
                    checked={gender === "ภายนอก"}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-3"
                  />
                  ภายนอก
                </label>
              </div>
            </div>

            {/* 🔹 ถ้าเลือกผู้นิเทศก์เป็น "ภายใน" ให้เลือกชื่ออาจารย์นิเทศก์ */}
            {gender === "ภายใน" && (
              <div>
                <label className="block mb-1.5 text-lg">เลือกอาจารย์นิเทศก์</label>
                <select
                  className="w-full p-3 text-base border border-gray-300 rounded-lg"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">เลือกอาจารย์นิเทศก์</option>
                  <option value="location1">ผู้นิเทศก์ 1</option>
                  <option value="location2">ผู้นิเทศก์ 2</option>
                  <option value="location3">ผู้นิเทศก์ 3</option>
                </select>
              </div>
            )}

            {/* 🔹 ปุ่ม "ยกเลิก" และ "ขั้นตอนต่อไป" */}
            <div className="flex justify-between mt-9">
              <button
                className="bg-red-500 text-white px-6 py-3 text-base rounded-lg hover:bg-red-600"
                onClick={() => router.back()}
              >
                ยกเลิก
              </button>
              <button
                className="bg-green-500 text-white px-6 py-3 text-base rounded-lg hover:bg-green-600"
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

export default DataEntryForm;
