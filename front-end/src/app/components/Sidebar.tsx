"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname

  return (
    <aside className="w-64 bg-gray-200 p-4 shadow-lg">
      <div className="space-y-4">
        <button
          className={`w-full p-3 rounded-lg focus:outline-none ${
            pathname.startsWith("/student/student_1")
              ? "bg-[#da935a] text-white"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
          onClick={() => router.push("/student/student_1")}
        >
          แสดงหลักสูตร
        </button>

        <button
          className={`w-full p-3 rounded-lg focus:outline-none ${
            pathname.startsWith("/student/student_2") // Highlight all subpaths
              ? "bg-[#da935a] text-white"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
          onClick={() => router.push("/student/student_2")}
        >
          บันทึกข้อมูล
        </button>

        <button
          className={`w-full p-3 rounded-lg focus:outline-none ${
            pathname.startsWith("/student/student_3") // Highlight all subpaths
              ? "bg-[#da935a] text-white"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
          onClick={() => router.push("/student/student_3")}
        >
          ตรวจสอบรายการบันทึก
        </button>

        <button
          className={`w-full p-3 rounded-lg focus:outline-none ${
            pathname === "/student_1/student_4"
              ? "bg-[#da935a] text-white"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
          onClick={() => router.push("/student/student_4")}
        >
          สั่งออกข้อมูล
        </button>
        
        <button
          className={`w-full p-3 rounded-lg focus:outline-none ${
            pathname === "/logout"
              ? "bg-[#da935a] text-white"
              : "bg-gray-300 text-red-600 hover:bg-gray-400"
          }`}
          onClick={() => router.push("/logout")}
        >
          ออกจากระบบ
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
