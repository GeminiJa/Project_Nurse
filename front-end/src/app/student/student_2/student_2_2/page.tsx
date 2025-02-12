// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/components/navbar';
// //import Sidebar from '@/components/Sidebar';
// import { useDataContext } from 'context/DataContext'; // Import context to update and read data
// import SidenavAdmin from '@/components/sidenavAdmin';

// function ExperienceEntryPage() {
//   const router = useRouter();
//   const { setFormData, formData } = useDataContext(); // Get and set form data from context

//   // States for experience data
//   const [location, setLocation] = useState(formData.location || '');
//   const [patientRoom, setPatientRoom] = useState(formData.patientRoom || '');
//   const [bed, setBed] = useState(formData.bed || '');
//   const [date, setDate] = useState(formData.date || '');

//   const handleSubmit = () => {
//     setFormData({
//       ...formData, // Preserve previous form data
//       location,
//       patientRoom,
//       bed,
//       date,
//     });

//     // Navigate to the summary page
//     router.push('/student/student_2/student_2_3');
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar /> {/* Navbar Component */}

//       {/* Main Content with Sidebar */}
//       <div className="flex h-full">
//         <SidenavAdmin /> {/* Sidebar Component */}

//         <main className="flex-1 p-9 bg-gray-100 flex flex-col items-center">
//           <h2 className="text-3xl font-bold text-[#000000] mb-9">
//             เลือกสถานที่ฝึกประสบการณ์
//           </h2>
//           <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-md space-y-9">
//             {/* Location fields */}
//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">
//                 สถานที่ฝึกประสบการณ์
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">หอผู้ป่วย</label>
//               <input
//                 type="text"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={patientRoom}
//                 onChange={(e) => setPatientRoom(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">เตียง</label>
//               <input
//                 type="text"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={bed}
//                 onChange={(e) => setBed(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">วันที่</label>
//               <input
//                 type="date"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>

//             <div className="mt-9 flex justify-between w-full max-w-lg">
//               {/* Back button */}
//               <button
//                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-600"
//                 onClick={() => router.back()}
//               >
//                 ย้อนกลับ
//               </button>

//               <button
//                 className="bg-green-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-600"
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
// }

// export default ExperienceEntryPage;


// "use client";

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/components/navbar';
// import { useDataContext } from 'context/DataContext'; // Import context to update and read data
// import SidenavAdmin from '@/components/sidenavAdmin';

// function ExperienceEntryPage() {
//   const router = useRouter();
//   const { setFormData, formData } = useDataContext(); // Get and set form data from context

//   // States for experience data
//   const [location, setLocation] = useState(formData.location || '');
//   const [patientRoom, setPatientRoom] = useState(formData.patientRoom || '');
//   const [bed, setBed] = useState(formData.bed || '');
//   const [date, setDate] = useState(formData.date || '');

//   // Ensure that the formData is set correctly when the page mounts
//   useEffect(() => {
//     setLocation(formData.location || '');
//     setPatientRoom(formData.patientRoom || '');
//     setBed(formData.bed || '');
//     setDate(formData.date || '');
//   }, [formData]);

//   const handleSubmit = () => {
//     // Set the form data in context
//     setFormData({
//       ...formData, // Preserve previous form data
//       location,
//       patientRoom,
//       bed,
//       date,
//     });

//     // Navigate to the next step (summary page)
//     router.push('/student/student_2/student_2_3');
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar /> {/* Navbar Component */}

//       {/* Main Content with Sidebar */}
//       <div className="flex h-full">
//         <SidenavAdmin /> {/* Sidebar Component */}

//         <main className="flex-1 p-9 bg-gray-100 flex flex-col items-center">
//           <h2 className="text-3xl font-bold text-[#000000] mb-9">
//             เลือกสถานที่ฝึกประสบการณ์
//           </h2>
//           <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-md space-y-9">
//             {/* Location fields */}
//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">
//                 สถานที่ฝึกประสบการณ์
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">หอผู้ป่วย</label>
//               <input
//                 type="text"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={patientRoom}
//                 onChange={(e) => setPatientRoom(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">เตียง</label>
//               <input
//                 type="text"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={bed}
//                 onChange={(e) => setBed(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">วันที่</label>
//               <input
//                 type="date"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>

//             <div className="mt-9 flex justify-between w-full max-w-lg">
//               {/* Back button */}
//               <button
//                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-600"
//                 onClick={() => router.back()}
//               >
//                 ย้อนกลับ
//               </button>

//               <button
//                 className="bg-green-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-600"
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
// }

// export default ExperienceEntryPage;


// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/navbar";
// import { useDataContext } from "context/DataContext"; // Import context to update and read data
// import SidenavAdmin from "@/components/sidenavAdmin";

// const ExperienceEntryPage: React.FC = () => {
//   const [location, setLocation] = useState("");
//   const [patientRoom, setPatientRoom] = useState("");
//   const [bed, setBed] = useState("");
//   const [date, setDate] = useState("");
  
//   const router = useRouter();

//   const locationOptions = ["สถานที่ 1", "สถานที่ 2", "สถานที่ 3"];
//   const patientRoomOptions = ["ห้อง 1", "ห้อง 2", "ห้อง 3"];

//   const { formData, setFormData } = useDataContext();

//   useEffect(() => {
//     if (formData) {
//       setLocation(formData.location ?? "");
//       setPatientRoom(formData.patientRoom ?? "");
//       setBed(formData.bed ?? "");
//       setDate(formData.date ?? "");
//     }
//   }, [formData]);

//   const handleSubmit = () => {
//     // Validate form fields before setting formData in context
//     if (location && patientRoom && bed && date) {
//       setFormData((prevData) => ({
//         ...prevData,
//         location,
//         patientRoom,
//         bed,
//         date,
//       }));

//       // Navigate to the next step (summary page)
//       router.push("/student/student_2/student_2_3");
//     } else {
//       console.error("Please fill in all the fields before submitting.");
//     }
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar /> {/* Navbar Component */}

//       {/* Main Content with Sidebar */}
//       <div className="flex h-full">
//         <SidenavAdmin /> {/* Sidebar Component */}

//         <main className="flex-1 p-9 bg-gray-100 flex flex-col items-center">
//           <h2 className="text-3xl font-bold text-[#000000] mb-9">
//             เลือกสถานที่ฝึกประสบการณ์
//           </h2>
//           <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-md space-y-9">
//             {/* Location field with dropdown */}
//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">
//                 สถานที่ฝึกประสบการณ์
//               </label>
//               <select
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               >
//                 <option value="">เลือกสถานที่ฝึกประสบการณ์</option>
//                 {locationOptions.map((loc, index) => (
//                   <option key={index} value={loc}>
//                     {loc}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Patient Room field with dropdown */}
//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">
//                 หอผู้ป่วย
//               </label>
//               <select
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={patientRoom}
//                 onChange={(e) => setPatientRoom(e.target.value)}
//               >
//                 <option value="">เลือกหอผู้ป่วย</option>
//                 {patientRoomOptions.map((room, index) => (
//                   <option key={index} value={room}>
//                     {room}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">เตียง</label>
//               <input
//                 type="text"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={bed}
//                 onChange={(e) => setBed(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1.5 text-lg">วันที่</label>
//               <input
//                 type="date"
//                 className="w-full p-3 text-lg border border-gray-300 rounded-lg"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>

//             <div className="mt-9 flex justify-between w-full max-w-lg">
//               {/* Back button */}
//               <button
//                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-600"
//                 onClick={() => router.back()}
//               >
//                 ย้อนกลับ
//               </button>

//               <button
//                 className="bg-green-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-600"
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

// export default ExperienceEntryPage;


"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import SidenavAdmin from "@/components/sidenavAdmin";
import { useDataContext } from "context/DataContext";
import { getCourses } from "@/components/coursesData";

const ExperienceEntryPage: React.FC = () => {
  const { formData, setFormData } = useDataContext();
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
    if (location && patientRoom && bed && date) {
      setFormData((prevData) => ({
        ...prevData,
        location,
        patientRoom,
        bed,
        date,
      }));

      router.push("/student/student_2/student_2_3");
    } else {
      console.error("กรุณากรอกข้อมูลให้ครบถ้วนก่อนยืนยัน");
    }
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

