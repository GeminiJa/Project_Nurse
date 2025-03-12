// "use client";

// import React, { createContext, useContext, useState } from "react";

// // Define FormRecord type
// export type FormRecord = {
//   id: number;
//   date: string;
//   selectedCategory: number | "other";
//   selectedSubCategory: number;
//   additionalInfo: string;
//   location: string;
//   patientRoom: string;
//   bed: string;
//   gender: string;
//   status: "pending" | "approved";
// };

// // Define Course and SubCourse types
// type SubCourse = {
//   id: number;
//   title: string;
//   progress: string;
// };

// type Course = {
//   id: number;
//   title: string;
//   progress: string;
//   subCourses: SubCourse[];
// };



// // Define DataContextType
// type DataContextType = {
//   formData: FormRecord;
//   setFormData: React.Dispatch<React.SetStateAction<FormRecord>>;
//   savedRecords: FormRecord[];
//   saveRecord: (record: FormRecord) => void;
//   updateRecordStatus: (id: number, status: "approved" | "pending") => void;
//   courses: Course[];
//   setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
//   updateCourseProgress: (courseId: number, subCourseId: number, progress: string) => void;
// };

// const DataContext = createContext<DataContextType | null>(null);

// export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// const [formData, setFormData] = useState<FormRecord>({
//   id: 0,
//   date: "",
//   selectedCategory: "other", // Default to "other"
//   selectedSubCategory: 0,
//   additionalInfo: "",
//   location: "", // ค่าเริ่มต้นเป็นค่าว่าง
//   patientRoom: "", // ค่าเริ่มต้นเป็นค่าว่าง
//   bed: "", // ค่าเริ่มต้นเป็นค่าว่าง
//   gender: "",
//   status: "pending",
// });


//   const [savedRecords, setSavedRecords] = useState<FormRecord[]>([]);
//   const [courses, setCourses] = useState<Course[]>([]);

//   const saveRecord = (record: FormRecord) => {
//     // Ensure that record is complete before saving
//     if (record.selectedCategory === "other" || record.selectedSubCategory !== 0) {
//       setSavedRecords((prev) => [...prev, record]);
//     } else {
//       console.error("Record is incomplete");
//     }
//   };

//   const updateRecordStatus = (id: number, status: "approved" | "pending") => {
//     setSavedRecords((prev) =>
//       prev.map((record) =>
//         record.id === id ? { ...record, status } : record
//       )
//     );
//   };

//   const updateCourseProgress = (courseId: number, subCourseId: number, progress: string) => {
//     setCourses((prevCourses) =>
//       prevCourses.map((course) =>
//         course.id === courseId
//           ? {
//               ...course,
//               subCourses: course.subCourses.map((subCourse) =>
//                 subCourse.id === subCourseId ? { ...subCourse, progress } : subCourse
//               ),
//             }
//           : course
//       )
//     );
//   };

//   return (
//     <DataContext.Provider
//       value={{
//         formData,
//         setFormData,
//         savedRecords,
//         saveRecord,
//         updateRecordStatus,
//         courses,
//         setCourses,
//         updateCourseProgress,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useDataContext = () => {
//   const context = useContext(DataContext);
//   if (!context) throw new Error("useDataContext must be used within a DataProvider");
//   return context;
// };

"use client";

import React, { createContext, useContext, useState } from "react";

// 🔹 กำหนดประเภทของข้อมูลแบบฟอร์มที่ใช้ในการบันทึก (FormRecord)
export type FormRecord = {
  id: number; // รหัสของบันทึก
  date: string; // วันที่บันทึก
  selectedCategory: number | "other"; // หมวดหมู่ที่เลือก (ตัวเลข หรือ "other" กรณีไม่มีในตัวเลือก)
  selectedSubCategory: number; // หมวดย่อยที่เลือก
  additionalInfo: string; // ข้อมูลเพิ่มเติม
  location: string; // สถานที่
  patientRoom: string; // ห้องผู้ป่วย
  bed: string; // เตียง
  gender: string; // เพศของผู้บันทึก
  status: "pending" | "approved"; // สถานะของบันทึก (รออนุมัติ หรือ อนุมัติแล้ว)
};

// 🔹 กำหนดประเภทของหมวดย่อย (SubCourse)
type SubCourse = {
  id: number; // รหัสหมวดย่อย
  title: string; // ชื่อของหมวดย่อย
  progress: string; // ความคืบหน้าของหมวดย่อย เช่น "2/4"
};

// 🔹 กำหนดประเภทของหลักสูตร (Course)
type Course = {
  id: number; // รหัสหลักสูตร
  title: string; // ชื่อของหลักสูตร
  progress: string; // ความคืบหน้าของหลักสูตร เช่น "5/10"
  subCourses: SubCourse[]; // รายการของหมวดย่อย
};

// 🔹 กำหนดประเภทของ DataContext ที่จะใช้ภายในแอป
type DataContextType = {
  formData: FormRecord; // ข้อมูลแบบฟอร์มปัจจุบัน
  setFormData: React.Dispatch<React.SetStateAction<FormRecord>>; // ฟังก์ชันอัปเดตข้อมูลแบบฟอร์ม
  savedRecords: FormRecord[]; // รายการบันทึกที่ถูกบันทึก
  saveRecord: (record: FormRecord) => void; // ฟังก์ชันบันทึกข้อมูล
  updateRecordStatus: (id: number, status: "approved" | "pending") => void; // ฟังก์ชันอัปเดตสถานะบันทึก
  courses: Course[]; // รายการหลักสูตรทั้งหมด
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>; // ฟังก์ชันอัปเดตหลักสูตร
  updateCourseProgress: (courseId: number, subCourseId: number, progress: string) => void; // ฟังก์ชันอัปเดตความคืบหน้าหลักสูตร
};

// สร้าง Context สำหรับการจัดการข้อมูล
const DataContext = createContext<DataContextType | null>(null);

// 🔹 Component ที่ทำหน้าที่เป็นตัวจัดการข้อมูลของแอปพลิเคชัน (Data Provider)
export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 🔸 กำหนดค่าเริ่มต้นของแบบฟอร์ม
  const [formData, setFormData] = useState<FormRecord>({
    id: 0,
    date: "",
    selectedCategory: "other", // ค่าเริ่มต้นให้เป็น "other"
    selectedSubCategory: 0,
    additionalInfo: "",
    location: "", // ค่าเริ่มต้นเป็นค่าว่าง
    patientRoom: "", // ค่าเริ่มต้นเป็นค่าว่าง
    bed: "", // ค่าเริ่มต้นเป็นค่าว่าง
    gender: "",
    status: "pending",
  });

  const [savedRecords, setSavedRecords] = useState<FormRecord[]>([]); // เก็บรายการบันทึกทั้งหมด
  const [courses, setCourses] = useState<Course[]>([]); // เก็บรายการหลักสูตรทั้งหมด

  // 🔹 ฟังก์ชันบันทึกข้อมูลบันทึกใหม่
  const saveRecord = (record: FormRecord) => {
    // ตรวจสอบว่าข้อมูลครบถ้วนก่อนบันทึก
    if (record.selectedCategory === "other" || record.selectedSubCategory !== 0) {
      setSavedRecords((prev) => [...prev, record]); // เพิ่มบันทึกใหม่เข้าไปในรายการ
    } else {
      console.error("Record is incomplete"); // แจ้งเตือนถ้าข้อมูลไม่สมบูรณ์
    }
  };

  // 🔹 ฟังก์ชันอัปเดตสถานะของบันทึก (เช่น อนุมัติ หรือ รออนุมัติ)
  const updateRecordStatus = (id: number, status: "approved" | "pending") => {
    setSavedRecords((prev) =>
      prev.map((record) =>
        record.id === id ? { ...record, status } : record
      )
    );
  };

  // 🔹 ฟังก์ชันอัปเดตความคืบหน้าของหลักสูตร
  const updateCourseProgress = (courseId: number, subCourseId: number, progress: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              subCourses: course.subCourses.map((subCourse) =>
                subCourse.id === subCourseId ? { ...subCourse, progress } : subCourse
              ),
            }
          : course
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        formData, // ข้อมูลแบบฟอร์มปัจจุบัน
        setFormData, // ฟังก์ชันอัปเดตข้อมูลแบบฟอร์ม
        savedRecords, // รายการบันทึกที่บันทึกไว้
        saveRecord, // ฟังก์ชันสำหรับบันทึกข้อมูล
        updateRecordStatus, // ฟังก์ชันเปลี่ยนสถานะบันทึก
        courses, // รายการหลักสูตรทั้งหมด
        setCourses, // ฟังก์ชันอัปเดตหลักสูตร
        updateCourseProgress, // ฟังก์ชันอัปเดตความคืบหน้าของหลักสูตร
      }}
    >
      {children} {/* ใช้เพื่อให้ components ลูกทั้งหมดสามารถเข้าถึง Context นี้ได้ */}
    </DataContext.Provider>
  );
};

// 🔹 Hook สำหรับใช้งาน DataContext
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useDataContext must be used within a DataProvider");
  return context;
};
