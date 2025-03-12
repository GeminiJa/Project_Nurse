// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/navbar";
// import SidenavAdmin from '@/components/sidenavAdmin';

// const books = [
//   { id: 1, title: "เล่มที่ 1", description: "เนื้อหาเล่มที่ 1" },
// ];

// function DataEntryPage() {
//   const router = useRouter();

//   const handleBookClick = (bookId: number) => {
//     // Navigate to the DataEntryForm page with bookId as a query parameter
//     router.push(`/student/student_2/student_2_1?bookId=${bookId}`);
//   };

//   return (
//     <div className="h-screen font-mitr">
//       <Navbar /> {/* Navbar Component */}

//       {/* Main Content with Sidebar */}
//       <div className="flex h-full">
//         <SidenavAdmin /> {/* Sidebar Component */}

//         {/* Main Content Area */}
//         <main className="flex-1 p-6 bg-gray-100 flex flex-col items-center">
//           <h2 className="text-2xl font-bold text-[#000000] mb-6">
//             เลือกเล่มที่ต้องการบันทึกประสบการณ์
//           </h2>
//           <div className="flex flex-wrap space-x-6 justify-center mt-6">
//             {books.map((book) => (
//               <div
//                 key={book.id}
//                 className="w-40 h-52 bg-blue-200 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-blue-300 mb-6"
//                 onClick={() => handleBookClick(book.id)} // Pass the bookId dynamically
//               >
//                 <div className="w-24 h-32 bg-blue-300 rounded-md mb-2"></div>
//                 <span className="text-center">{book.title}</span>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default DataEntryPage;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // ✅ ใช้ Next.js Image สำหรับโหลดรูปภาพ
import Navbar from "@/components/navbar";
import SidenavAdmin from '@/components/sidenavAdmin';

// 🔹 กำหนดรายการหนังสือที่ใช้เป็นตัวเลือก พร้อมรูปภาพ PNG
const books = [
  { id: 1, title: "เล่มที่ 1", description: "เนื้อหาเล่มที่ 1", image: "/book1.png" }, // เปลี่ยนรูปเป็น PNG
];

function DataEntryPage() {
  const router = useRouter(); // ใช้ `useRouter()` สำหรับเปลี่ยนเส้นทาง

  // 🔹 ฟังก์ชันที่ทำงานเมื่อกดเลือกหนังสือ
  const handleBookClick = (bookId: number) => {
    // นำทางไปยังหน้า `/student/student_2/student_2_1` พร้อมส่ง `bookId` เป็น query parameter
    router.push(`/student/student_2/student_2_1?bookId=${bookId}`);
  };

  return (
    <div className="h-screen font-mitr">
      <Navbar /> {/* ✅ Navbar อยู่ด้านบนและไม่เลื่อนลงตาม */}

      {/* ✅ Main Content พร้อม Sidebar */}
      <div className="flex h-full">
        <SidenavAdmin /> {/* ✅ Sidebar อยู่ด้านซ้ายและไม่เลื่อนตาม */}

        {/* ✅ ส่วนเนื้อหาหลัก */}
        <main className="flex-1 p-6 bg-gray-100 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#000000] mb-6">
            เลือกเล่มที่ต้องการบันทึกประสบการณ์
          </h2>

          {/* 🔹 แสดงรายการหนังสือที่เลือก */}
          <div className="flex flex-wrap gap-6 justify-center mt-6">
            {books.map((book) => (
              <div
                key={book.id} // ใช้ `key` เพื่อให้ React จัดการรายการได้ดีขึ้น
                className="w-40 h-60 bg-blue-200 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-blue-300 transition-all duration-300"
                onClick={() => handleBookClick(book.id)} // เมื่อกดหนังสือ จะเรียก `handleBookClick`
              >
                {/* 🔹 แสดงรูปหนังสือแทนการใช้ div */}
                <Image
                  src={book.image} // โหลดไฟล์ PNG ที่กำหนด
                  alt={book.title}
                  width={96} // กำหนดขนาดความกว้าง
                  height={128} // กำหนดขนาดความสูง
                  className="rounded-md mb-2"
                />
                {/* 🔹 แสดงชื่อหนังสือ */}
                <span className="text-center font-bold">{book.title}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DataEntryPage;

