// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { getCourses } from "@/components/coursesData";

// const CoursesPage: React.FC = () => {
//   const [courses] = useState(getCourses()); // เรียกข้อมูลหลักสูตรจาก coursesData.ts
//   const [openCourses, setOpenCourses] = useState<number[]>([]);

//   const getProgressColor = (progress: string) => {
//     const [completed, total] = progress.split("/").map(Number);
//     if (completed === 0) return "text-red-500";
//     if (completed < total) return "text-yellow-500";
//     return "text-green-500";
//   };

//   const toggleCourse = (id: number) => {
//     setOpenCourses((prevOpenCourses) =>
//       prevOpenCourses.includes(id)
//         ? prevOpenCourses.filter((courseId) => courseId !== id)
//         : [...prevOpenCourses, id]
//     );
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-6 bg-gray-100">
//           <h2 className="text-3xl font-bold mb-9">หลักสูตร</h2>
//           <div className="space-y-4">
//             {courses.map((course) => (
//               <div key={course.id} className="bg-white rounded-lg shadow p-4">
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => toggleCourse(course.id)}
//                 >
//                   <div>
//                     <h3 className="text-lg font-bold">{course.title}</h3>
//                     <p className="text-sm text-gray-600">
//                       ความคืบหน้า:{" "}
//                       <span className={getProgressColor(course.progress)}>
//                         {course.progress}
//                       </span>
//                     </p>
//                   </div>
//                   <span>{openCourses.includes(course.id) ? "▲" : "▼"}</span>
//                 </div>

//                 {openCourses.includes(course.id) && (
//                   <div className="mt-4 space-y-2">
//                     {course.subCourses.map((sub) => (
//                       <div
//                         key={sub.id}
//                         className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg"
//                       >
//                         <p>{sub.title}</p>
//                         <p className={`text-sm ${getProgressColor(sub.progress)}`}>
//                           {sub.progress}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };
// export default CoursesPage;

"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar"; // นำเข้า Navbar
import SidenavAdmin from "@/components/sidenavAdmin"; // นำเข้า Sidebar
import { getCourses } from "@/components/coursesData"; // นำเข้าข้อมูลหลักสูตรจากไฟล์ coursesData.ts

const CoursesPage: React.FC = () => {
  // 🔹 ดึงข้อมูลหลักสูตรทั้งหมดมาเก็บไว้ใน state
  const [courses] = useState(getCourses()); 
  // 🔹 เก็บรายการหลักสูตรที่ถูกเปิดแสดงรายละเอียด
  const [openCourses, setOpenCourses] = useState<number[]>([]);

  // 🔹 ฟังก์ชันกำหนดสีของ progress ตามสถานะ
  const getProgressColor = (progress: string) => {
    const [completed, total] = progress.split("/").map(Number);
    if (completed === 0) return "text-red-500"; // ถ้ายังไม่ได้เริ่มทำเลย ให้เป็นสีแดง
    if (completed < total) return "text-yellow-500"; // ถ้าทำไปบางส่วน ให้เป็นสีเหลือง
    return "text-green-500"; // ถ้าทำครบแล้ว ให้เป็นสีเขียว
  };

  // 🔹 ฟังก์ชันเปิด/ปิดการแสดงรายละเอียดหลักสูตร
  const toggleCourse = (id: number) => {
    setOpenCourses((prevOpenCourses) =>
      prevOpenCourses.includes(id)
        ? prevOpenCourses.filter((courseId) => courseId !== id) // ถ้าหลักสูตรนี้เปิดอยู่ ให้ปิดมัน
        : [...prevOpenCourses, id] // ถ้ายังไม่เปิด ให้เพิ่มลงในรายการที่เปิดอยู่
    );
  };

  return (
    <div className="h-screen font-mitr flex flex-col">
      {/* ✅ Navbar อยู่ด้านบนและไม่เลื่อนลงตาม */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* ✅ Sidebar อยู่ด้านซ้ายและไม่เลื่อนตาม */}
        <SidenavAdmin />

        {/* ✅ ส่วนเนื้อหาหลัก */}
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          <h2 className="text-3xl font-bold mb-9">หลักสูตร</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow p-4">
                {/* 🔹 ส่วนหัวของหลักสูตร */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCourse(course.id)}
                >
                  <div>
                    <h3 className="text-lg font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-600">
                      ความคืบหน้า:{" "}
                      <span className={getProgressColor(course.progress)}>
                        {course.progress}
                      </span>
                    </p>
                  </div>
                  <span>{openCourses.includes(course.id) ? "▲" : "▼"}</span>
                </div>

                {/* 🔹 แสดงรายละเอียดของหมวดย่อยถ้าหลักสูตรถูกเปิด */}
                {openCourses.includes(course.id) && (
                  <div className="mt-4 space-y-2">
                    {course.subCourses.map((sub) => (
                      <div
                        key={sub.id}
                        className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg"
                      >
                        <p>{sub.title}</p>
                        <p className={`text-sm ${getProgressColor(sub.progress)}`}>
                          {sub.progress}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursesPage;
