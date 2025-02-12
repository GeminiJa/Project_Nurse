// "use client";

// import React, { createContext, useContext, useState } from "react";

// // Define Record type
// type Record = {
//   id: number;
//   date: string;
//   selectedCategory: number | "other";  // Allow "other" as a valid value
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
//   formData: Record;
//   setFormData: React.Dispatch<React.SetStateAction<Record>>;
//   savedRecords: Record[];
//   saveRecord: (record: Record) => void;
//   updateRecordStatus: (id: number, status: "approved" | "pending") => void;
//   courses: Course[];
//   setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
//   updateCourseProgress: (courseId: number, subCourseId: number, progress: string) => void;
// };

// const DataContext = createContext<DataContextType | null>(null);

// export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [formData, setFormData] = useState<Record>({
//     id: 0,
//     date: "",
//     selectedCategory: 0,
//     selectedSubCategory: 0,
//     additionalInfo: "",
//     location: "",
//     patientRoom: "",
//     bed: "",
//     gender: "",
//     status: "pending",
//   });

//   const [savedRecords, setSavedRecords] = useState<Record[]>([]);
//   const [courses, setCourses] = useState<Course[]>([]);

//   const saveRecord = (record: Record) => setSavedRecords((prev) => [...prev, record]);

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


// "use client";

// import React, { createContext, useContext, useState } from "react";

// // Define Record type
// type FormRecord = {
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
//   const [formData, setFormData] = useState<Record>({
//     id: 0,
//     date: "",
//     selectedCategory: "other", // Default to "other"
//     selectedSubCategory: 0,
//     additionalInfo: "",
//     location: "",
//     patientRoom: "",
//     bed: "",
//     gender: "",
//     status: "pending",
//   });

//   const [savedRecords, setSavedRecords] = useState<Record[]>([]);
//   const [courses, setCourses] = useState<Course[]>([]);

//   const saveRecord = (record: Record) => {
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

// Define FormRecord type
export type FormRecord = {
  id: number;
  date: string;
  selectedCategory: number | "other";
  selectedSubCategory: number;
  additionalInfo: string;
  location: string;
  patientRoom: string;
  bed: string;
  gender: string;
  status: "pending" | "approved";
};

// Define Course and SubCourse types
type SubCourse = {
  id: number;
  title: string;
  progress: string;
};

type Course = {
  id: number;
  title: string;
  progress: string;
  subCourses: SubCourse[];
};



// Define DataContextType
type DataContextType = {
  formData: FormRecord;
  setFormData: React.Dispatch<React.SetStateAction<FormRecord>>;
  savedRecords: FormRecord[];
  saveRecord: (record: FormRecord) => void;
  updateRecordStatus: (id: number, status: "approved" | "pending") => void;
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  updateCourseProgress: (courseId: number, subCourseId: number, progress: string) => void;
};

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [formData, setFormData] = useState<FormRecord>({
  id: 0,
  date: "",
  selectedCategory: "other", // Default to "other"
  selectedSubCategory: 0,
  additionalInfo: "",
  location: "", // ค่าเริ่มต้นเป็นค่าว่าง
  patientRoom: "", // ค่าเริ่มต้นเป็นค่าว่าง
  bed: "", // ค่าเริ่มต้นเป็นค่าว่าง
  gender: "",
  status: "pending",
});


  const [savedRecords, setSavedRecords] = useState<FormRecord[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  const saveRecord = (record: FormRecord) => {
    // Ensure that record is complete before saving
    if (record.selectedCategory === "other" || record.selectedSubCategory !== 0) {
      setSavedRecords((prev) => [...prev, record]);
    } else {
      console.error("Record is incomplete");
    }
  };

  const updateRecordStatus = (id: number, status: "approved" | "pending") => {
    setSavedRecords((prev) =>
      prev.map((record) =>
        record.id === id ? { ...record, status } : record
      )
    );
  };

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
        formData,
        setFormData,
        savedRecords,
        saveRecord,
        updateRecordStatus,
        courses,
        setCourses,
        updateCourseProgress,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useDataContext must be used within a DataProvider");
  return context;
};
