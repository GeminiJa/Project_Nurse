"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
//import Sidebar from "@/components/Sidebar";
import SidenavAdmin from '@/components/sidenavAdmin';

const books = [
  { id: 1, title: "เล่มที่ 1", description: "เนื้อหาเล่มที่ 1" },
  { id: 2, title: "เล่มที่ 2", description: "เนื้อหาเล่มที่ 2" },
  { id: 3, title: "เล่มที่ 3", description: "เนื้อหาเล่มที่ 3" },
  { id: 4, title: "เล่มที่ 4", description: "เนื้อหาเล่มที่ 4" },
];

function DataEntryPage() {
  const router = useRouter();

  const handleBookClick = (bookId: number) => {
    // Navigate to the DataEntryForm page with bookId as a query parameter
    router.push(`/student/student_2/student_2_1?bookId=${bookId}`);
  };

  return (
    <div className="h-screen font-mitr">
      <Navbar /> {/* Navbar Component */}

      {/* Main Content with Sidebar */}
      <div className="flex h-full">
        <SidenavAdmin /> {/* Sidebar Component */}

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-100 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#000000] mb-6">
            เลือกเล่มที่ต้องการบันทึกประสบการณ์
          </h2>
          <div className="flex flex-wrap space-x-6 justify-center mt-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="w-40 h-52 bg-blue-200 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-blue-300 mb-6"
                onClick={() => handleBookClick(book.id)} // Pass the bookId dynamically
              >
                <div className="w-24 h-32 bg-blue-300 rounded-md mb-2"></div>
                <span className="text-center">{book.title}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DataEntryPage;
