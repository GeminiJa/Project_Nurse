// "use client"

// import React, { useState } from "react";
// import Link from "next/link";

// //เรียกใช้ icon
// import { MdLogout, MdOutlineManageSearch } from "react-icons/md";
// import { FaUserEdit, FaHome, FaBars } from "react-icons/fa"; // นำเข้า FaBars
// import { FaBookMedical } from "react-icons/fa6";
// import { GoChecklist } from "react-icons/go";

// interface MenuItemProps {
//   icon: React.ReactNode;
//   label: string;
//   isCollapsed: boolean;
// }

// function MenuItem({ icon, label, isCollapsed }: MenuItemProps) {
//   return (
//     <div
//       className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-[#da935a] bg-[#444444] hover:text-black text-white transition shadow-lg ${
//         isCollapsed ? "justify-center" : "justify-start"
//       }`}
//     >
//       <div className="text-xl">{icon}</div>
//       {!isCollapsed && <span className="text-sm">{label}</span>}
//     </div>
//   );
// }

// function SidenavAdmin() {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <aside
//       className={`bg-[#FEF1E6]  text-white min-h-screen ${
//         isCollapsed ? "w-20" : "w-64"
//       } transition-all duration-300 flex flex-col items-center shadow-lg`}
//     >
//       {/* ปุ่ม Toggle */}
//       <button
//         onClick={() => setIsCollapsed(!isCollapsed)}
//         className="mt-4 mb-8 hover:text-white text-black hover:bg-[#444444] p-2 rounded-lg transition self-end mr-4"
//       >
//         <FaBars className="w-5 h-5" />
//       </button>

//       {/* เมนู */}
//       <nav className="flex flex-col gap-4 w-full px-2 ">
//         <Link href="#" className="hover:text-white text-black"><MenuItem isCollapsed={isCollapsed} icon={<FaHome />} label="หน้าหลัก" /></Link>
//         <Link href="#" className="hover:text-white text-black"><MenuItem isCollapsed={isCollapsed} icon={<FaBookMedical />} label="จัดการเล่มบันทึกระสบการณ์" /></Link>
//         <Link href="#" className="hover:text-white text-black"><MenuItem isCollapsed={isCollapsed} icon={<FaUserEdit />} label="จัดการผู้ใช้" /></Link>
//         <Link href="#" className="hover:text-white text-black"><MenuItem isCollapsed={isCollapsed} icon={<MdOutlineManageSearch />} label="ตรวจสอบข้อมูล" /></Link>
//         <Link href="#" className="hover:text-white text-black"><MenuItem isCollapsed={isCollapsed} icon={<GoChecklist />} label="ตรวจสอบ log" /></Link>
//         <Link href="/" className="hover:text-white text-black"><MenuItem isCollapsed={isCollapsed} icon={<MdLogout />} label="ออกจากระบบ" /></Link>
//       </nav>
//     </aside>
//   );
// }

// export default SidenavAdmin;

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// //เรียกใช้ icon
// import { MdLogout, MdOutlineManageSearch } from "react-icons/md";
// import { FaUserEdit, FaHome, FaBars } from "react-icons/fa"; // นำเข้า FaBars
// import { FaBookMedical } from "react-icons/fa6";
// import { GoChecklist } from "react-icons/go";

// interface MenuItemProps {
//   icon: React.ReactNode;
//   label: string;
//   isCollapsed: boolean;
//   onClick?: () => void;
// }

// function MenuItem({ icon, label, isCollapsed, onClick }: MenuItemProps) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-[#da935a] bg-[#444444] hover:text-black text-white transition shadow-lg cursor-pointer ${
//         isCollapsed ? "justify-center" : "justify-start"
//       }`}
//     >
//       <div className="text-xl">{icon}</div>
//       {!isCollapsed && <span className="text-sm">{label}</span>}
//     </div>
//   );
// }

// function SidenavAdmin() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <aside
//       className={`bg-[#FEF1E6] text-white min-h-screen ${
//         isCollapsed ? "w-20" : "w-64"
//       } transition-all duration-300 flex flex-col items-center shadow-lg`}
//     >
//       {/* ปุ่ม Toggle */}
//       <button
//         onClick={() => setIsCollapsed(!isCollapsed)}
//         className="mt-4 mb-8 hover:text-white text-black hover:bg-[#da935a] p-2 rounded-lg transition self-end mr-4"
//       >
//         <FaBars className="w-5 h-5" />
//       </button>

//       {/* เมนู */}
//       <nav className="flex flex-col gap-4 w-full px-2">
//         <Link href="#" className="hover:text-white text-black">
//           <MenuItem isCollapsed={isCollapsed} icon={<FaHome />} label="หน้าหลัก" />
//         </Link>
//         <Link href="#" className="hover:text-white text-black">
//           <MenuItem isCollapsed={isCollapsed} icon={<FaBookMedical />} label="จัดการเล่มบันทึกระสบการณ์" />
//         </Link>

//         {/* Dropdown เมนูสำหรับจัดการผู้ใช้ */}
//         <div>
//           <MenuItem
//             isCollapsed={isCollapsed}
//             icon={<FaUserEdit />}
//             label="จัดการผู้ใช้"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           />
//           {!isCollapsed && isDropdownOpen && (
//             <ul className="pl-8 flex flex-col gap-2 mt-2">
//               <li>
//                 <Link
//                   href="#"
//                   className="block px-4 py-2 rounded-lg bg-[#555555] text-white hover:bg-[#da935a] hover:text-black transition"
//                 >
//                   นิสิต
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="block px-4 py-2 rounded-lg bg-[#555555] text-white hover:bg-[#da935a] hover:text-black transition"
//                 >
//                   อาจารย์ภายใน
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="block px-4 py-2 rounded-lg bg-[#555555] text-white hover:bg-[#da935a] hover:text-black transition"
//                 >
//                   อาจารย์ภายนอก
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </div>

//         <Link href="#" className="hover:text-white text-black">
//           <MenuItem isCollapsed={isCollapsed} icon={<MdOutlineManageSearch />} label="ตรวจสอบข้อมูล" />
//         </Link>
//         <Link href="#" className="hover:text-white text-black">
//           <MenuItem isCollapsed={isCollapsed} icon={<GoChecklist />} label="ตรวจสอบ log" />
//         </Link>
//         <Link href="/" className="hover:text-white text-black">
//           <MenuItem isCollapsed={isCollapsed} icon={<MdLogout />} label="ออกจากระบบ" />
//         </Link>
//       </nav>
//     </aside>
//   );
// }

// export default SidenavAdmin;

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


