// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";

// const courses = [
//   {
//     id: 1,
//     title: "การดูแลสุขวิทยาส่วนบุคคล",
//     progress: "0/4", 
//     subCourses: [
//       { id: 1.1, title: "Complete bed bath", progress: "0/2" },
//       { id: 1.2, title: "Partial bed bath", progress: "0/1" },
//       { id: 1.3, title: "Shampooing", progress: "0/1" },
//     ],
//   },
// ];

// const getProgressColor = (progress: string) => {
//   const [completed, total] = progress.split("/").map(Number);
//   if (completed === 0) return "text-red-500";
//   if (completed < total) return "text-yellow-500";
//   return "text-green-500";
// };

// function CoursesPage() {
//   const [openCourses, setOpenCourses] = useState<number[]>([]);

//   const toggleCourse = (id: number) => {
//     setOpenCourses((prevOpenCourses) =>
//       prevOpenCourses.includes(id)
//         ? prevOpenCourses.filter((courseId) => courseId !== id)
//         : [...prevOpenCourses, id]
//     );
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar /> {/* Navbar */}

//       <div className="flex h-full">
//         <SidenavAdmin /> {/* Sidebar */}

//         <main className="flex-1 p-6 bg-gray-100">
//           <h2 className="text-2xl font-bold text-[#da935a] mb-6">หลักสูตร</h2>
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
//                       ความคืบหน้า: <span className={getProgressColor(course.progress)}>{course.progress}</span>
//                     </p>
//                   </div>
//                   <span>{openCourses.includes(course.id) ? "▲" : "▼"}</span>
//                 </div>

//                 {openCourses.includes(course.id) && (
//                   <div className="mt-4 space-y-2">
//                     {course.subCourses.map((sub) => (
//                       <div key={sub.id} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
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
// }

// export default CoursesPage;

"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import SidenavAdmin from "@/components/sidenavAdmin";
import { getCourses } from "@/components/coursesData";

const CoursesPage: React.FC = () => {
  const [courses] = useState(getCourses()); // เรียกข้อมูลหลักสูตรจาก coursesData.ts
  const [openCourses, setOpenCourses] = useState<number[]>([]);

  const getProgressColor = (progress: string) => {
    const [completed, total] = progress.split("/").map(Number);
    if (completed === 0) return "text-red-500";
    if (completed < total) return "text-yellow-500";
    return "text-green-500";
  };

  const toggleCourse = (id: number) => {
    setOpenCourses((prevOpenCourses) =>
      prevOpenCourses.includes(id)
        ? prevOpenCourses.filter((courseId) => courseId !== id)
        : [...prevOpenCourses, id]
    );
  };

  return (
    <div className="h-screen font-mitr">
      <Navbar />
      <div className="flex h-full">
        <SidenavAdmin />
        <main className="flex-1 p-6 bg-gray-100">
          <h2 className="text-2xl font-bold text-[#da935a] mb-6">หลักสูตร</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow p-4">
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






// "use client";

// import React, { useState } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";

// // Helper function to get progress color
// const getProgressColor = (progress: string) => {
//   const [completed, total] = progress.split("/").map(Number);
//   if (completed === 0) return "text-red-500";
//   if (completed < total) return "text-yellow-500";
//   return "text-green-500";
// };

// function CoursesPage() {
//   const { courses, updateCourseProgress } = useDataContext(); // Use updateCourseProgress from context
//   const [openCourses, setOpenCourses] = useState<number[]>([]);

//   const toggleCourse = (id: number) => {
//     setOpenCourses((prevOpenCourses) =>
//       prevOpenCourses.includes(id)
//         ? prevOpenCourses.filter((courseId) => courseId !== id)
//         : [...prevOpenCourses, id]
//     );
//   };

//   const handleProgressUpdate = (courseId: number, subCourseId: number) => {
//     const newProgress = prompt("Enter new progress (e.g., 3/5):");
//     if (newProgress) {
//       updateCourseProgress(courseId, subCourseId, newProgress); // Update the progress
//     }
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-6 bg-gray-100">
//           <h2 className="text-2xl font-bold text-[#da935a] mb-6">หลักสูตร</h2>
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
//                         <button
//                           className="text-blue-500 text-sm"
//                           onClick={() => handleProgressUpdate(course.id, sub.id)}
//                         >
//                           แก้ไข
//                         </button>
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
// }

// export default CoursesPage;

// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from "@/components/sidenavAdmin";
// import { useDataContext } from "context/DataContext";  // ใช้ Context
// import { getCourses, updateCourseProgress } from "@/components/coursesData";

// const CoursesPage: React.FC = () => {
//   const { courses } = useDataContext();  // ใช้ Context
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

//   useEffect(() => {
//     // เมื่อ component ถูก mount หรือ courses มีการเปลี่ยนแปลง
//     // ไม่ต้องทำอะไรพิเศษ ถ้า courses มาแล้วจะแสดงโดยอัตโนมัติ
//   }, [courses]);  // เมื่อ courses เปลี่ยนแปลง ก็จะ rerender ใหม่

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar />
//       <div className="flex h-full">
//         <SidenavAdmin />
//         <main className="flex-1 p-6 bg-gray-100">
//           <h2 className="text-2xl font-bold text-[#da935a] mb-6">หลักสูตร</h2>
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