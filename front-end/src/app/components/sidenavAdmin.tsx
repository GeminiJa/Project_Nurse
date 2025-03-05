"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaHome } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineManageSearch, MdLogout } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsing sidebar

  const menuItems = [
    { path: "/student/student_1", label: "แสดงหลักสูตร", icon: <FaHome /> },
    { path: "/student/student_2", label: "บันทึกข้อมูล", icon: <FaBookMedical /> },
    { path: "/student/student_3", label: "ตรวจสอบรายการบันทึก", icon: <GoChecklist /> },
    { path: "/student/student_4", label: "สั่งออกข้อมูล", icon: <MdOutlineManageSearch /> },
    { path: "/logout", label: "ออกจากระบบ", icon: <MdLogout />, isLogout: true },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-[#FEF1E6] p-4 shadow-lg transition-all duration-300 min-h-screen flex flex-col`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="self-end mb-4 p-2 hover:bg-[#da935a] rounded-lg transition"
      >
        <FaBars className="w-5 h-5 text-black" />
      </button>

      <div className="space-y-4">
        {menuItems.map(({ path, label, icon, isLogout }) => (
          <button
            key={path}
            onClick={() => router.push(path)}
            className={`flex items-center gap-4 w-full p-3 rounded-lg shadow-lg transition focus:outline-none ${
              pathname.startsWith(path)
                ? "bg-[#da935a] text-white"
                : `bg-[#444444] ${
                    isLogout ? "text-red-600" : "text-white"
                  } hover:bg-[#da935a] hover:text-black`
            } ${isCollapsed ? "justify-center" : "justify-start"}`}
          >
            <div className="text-xl">{icon}</div>
            {!isCollapsed && <span className="text-sm">{label}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;


