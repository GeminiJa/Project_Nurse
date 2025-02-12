export interface SubCourse {
    id: number;
    title: string;
    progress: string;
  }
  
  export interface Course {
    id: number;
    title: string;
    progress: string;
    subCourses: SubCourse[];
  }
  
  
  let courses: Course[] = [
    {
      id: 1,
      title: "การดูแลสุขวิทยาส่วนบุคคล",
      progress: "0/4",
      subCourses: [
        { id: 101, title: "Complete bed bath", progress: "0/2" },
        { id: 102, title: "Partial bed bath", progress: "0/1" },
        { id: 103, title: "Shampooing", progress: "0/1" },
      ],
    },
    {
      id: 2,
      title: "การทำความสะอาดเตียงและสิ่งแวดล้อม",
      progress: "0/4",
      subCourses: [
        { id: 201, title: "Open bed", progress: "0/1" },
        { id: 202, title: "Occupied bed", progress: "0/2" },
        { id: 203, title: "Closed bed", progress: "0/1" },
      ],
    },
    {
      id: 3,
      title: "การดูแลเพื่อความสุขสบาย",
      progress: "0/4",
      subCourses: [
        { id: 301, title: "Complete bed bath", progress: "0/2" },
        { id: 302, title: "Partial bed bath", progress: "0/2" },
      ],
    },
    {
      id: 4,
      title: "การดูแลผู้ป่วยเกี่ยวกับการเคลื่อนไหว",
      progress: "0/4",
      subCourses: [
        { id: 401, title: "Transfer (bed-strecher, bed-wheelchair)", progress: "0/2" },
        { id: 402, title: "Implementing ROM exercise", progress: "0/2" },
      ],
    },
    {
      id: 5,
      title: "การประเมินและบันทึกสัญญาณชีพ",
      progress: "0/4",
      subCourses: [
      ],
    },
    {
      id: 6,
      title: "การพยาบาลผู้ที่มีสัญญาณชีพผิดปกติ",
      progress: "0/8",
      subCourses: [
        { id: 601, title: "Tepid sponge", progress: "0/2" },
        { id: 602, title: "Administering oxygen", progress: "0/2" },
        { id: 603, title: "Suctioning ในปากและจมูก", progress: "0/2" },
        { id: 604, title: "Suctioning ในท่อช่วยหายใจ", progress: "0/2" },
      ],
    },
    {
      id: 7,
      title: "การดูแลผู้ป่วยเกี่ยวกับการได้รับสารน้ำ",
      progress: "0/6",
      subCourses: [
        { id: 701, title: "แทงหลอดเลือดดำเพื่อให้ได้รับสารน้ำ", progress: "0/2" },
        { id: 702, title: "ดูแลผู้ป่วยได้รับสารน้ำทางหลอดเลือดดำ", progress: "0/2" },
        { id: 703, title: "Monitoring Intake/out put", progress: "0/2" },
      ],
    },
    {
      id: 8,
      title: "การดูแลผู้ป่วยเกี่ยวกับการได้รับอาหาร",
      progress: "0/3",
      subCourses: [
        { id: 801, title: "Inserting nasogastric or orogastric tube", progress: "0/1" },
        { id: 802, title: "Gastric tube feeding", progress: "0/2" },
      ],
    },
    {
      id: 9,
      title: "การบริหารยา (Medication administration)",
      progress: "0/10",
      subCourses: [
        { id: 901, title: "การให้ยาทางปาก (Oral)", progress: "0/2" },
        { id: 902, title: "การให้ยาทางหลอดเลือดดำ (Intravenous)", progress: "0/2" },
        { id: 903, title: "การฉีดยาเข้ากล้ามเนื้อ (Intramuscular)", progress: "0/2" },
        { id: 904, title: "การฉีดยาเข้าชั้นไขมัน (Subcutaneous)", progress: "0/1" },
        { id: 905, title: "การให้ยาหยอดตาหรือป้ายตา (Eye drop/Ointment)", progress: "0/1" },
        { id: 906, title: "การให้ยาพ่น (inhalation)", progress: "0/2" },
      ],
    },
    {
      id: 10,
      title: "การดูแลผู้ป่วยที่มีบาดแผล",
      progress: "0/4",
      subCourses: [
        { id: 1001, title: "การทำแผลแบบแห้ง หรือ เปียก (Dry or Wet Dressing)", progress: "0/2" },
        { id: 1002, title: "Drainage care (Penrose drain, ICD, T-tube)", progress: "0/1" },
        { id: 1003, title: "Ostomy care (Tracheostomy, Colostomy)", progress: "0/1" },
      ],
    },
    {
      id: 11,
      title: "การดูแลผู้รับบริการเกี่ยวกับการขับถ่ายปัสสาวะ (Retained Urinary Catheterization)",
      progress: "0/6",
      subCourses: [
        { id: 1101, title: "การใส่สายสวนปัสสาวะชาย", progress: "0/1" },
        { id: 1102, title: "การใส่สายสวนปัสสาวะหญิง", progress: "0/1" },
        { id: 1103, title: "การถอดสายสวนปัสสาวะ", progress: "0/2" },
        { id: 1104, title: "การดูแลผู้ป่วยที่มีสายสวนปัสสาวะ", progress: "0/2" },
      ],
    },
    {
      id: 12,
      title: "การดูแลผู้รับบริการเกี่ยวกับการขับถ่ายอุจจาระบนเตียง (Assisting with Elimination and Perineum Care)",
      progress: "0/2",
      subCourses: [
      ],
    },
    {
      id: 13,
      title: "การเก็บสิ่งส่งตรวจ (Collecting Spacimens)",
      progress: "0/10",
      subCourses: [
        { id: 1301, title: "การเจาะและอ่านค่า Hematocrit", progress: "0/1" },
        { id: 1302, title: "อุจจาระ (Stool)", progress: "0/1" },
        { id: 1303, title: "เลือด (Blood)", progress: "0/2" },
        { id: 1304, title: "น้ำตาลในเลือด (Capillary blood sugar)", progress: "0/2" },
        { id: 1305, title: "เสมหะ (Sputum)", progress: "0/1" },
        { id: 1306, title: "ปัสสาวะ (Urine Analysis)", progress: "0/2" },
        { id: 1307, title: "ปัสสาวะเพื่อการเพาะเชื้อ (Urine C/S)", progress: "0/1" },
      ],
    },
    {
      id: 14,
      title: "การรับผู้ป่วยใหม่ (Admission)",
      progress: "0/2",
      subCourses: [
      ],
    },
    {
      id: 15,
      title: "การจำหน่ายผุ้ป่วย (Discharge)",
      progress: "0/2",
      subCourses: [
      ],
    },
    {
      id: 16,
      title: "กิจกรรมการพยาบาลอื่นๆ",
      progress: "0/0",
      subCourses: [
      ],
    },
  ];
  
  export const getCourses = (): Course[] => courses;

  export const updateCourseProgress = (courseId: number, subCourseId: number): void => {
    courses.forEach((course) => {
      if (course.id === courseId) {
        let totalCompleted = 0; // ตัวแปรในการเก็บจำนวนหัวข้อย่อยที่ทำเสร็จ
  
        course.subCourses.forEach((subCourse) => {
          if (subCourse.id === subCourseId) {
            const [completed, total] = subCourse.progress.split("/").map(Number);
            const newCompleted = Math.min(completed + 1, total); // เพิ่มความคืบหน้าหัวข้อย่อย
            subCourse.progress = `${newCompleted}/${total}`;
          }
  
          // คำนวณจำนวนหัวข้อย่อยที่ทำเสร็จแล้ว
          const [completed, total] = subCourse.progress.split("/").map(Number);
          totalCompleted += completed;
        });
  
        // อัปเดต progress รวมของหลักสูตร
        const totalSubCourses = course.subCourses.length;
        course.progress = `${totalCompleted}/${totalSubCourses}`;
      }
    });
  };
  
  
  
  
// coursesData.ts

// export const updateCourseProgress = (
//     courseId: number,
//     subCourseId: number
//   ) => {
//     courses = courses.map((course) => {
//       if (course.id === courseId) {
//         const updatedSubCourses = course.subCourses.map((sub) => {
//           if (sub.id === subCourseId) {
//             const [completed, total] = sub.progress.split("/").map(Number);
//             let newCompleted = completed + 1;
//             if (newCompleted > total) newCompleted = total;
//             return { ...sub, progress: `${newCompleted}/${total}` };
//           }
//           return sub;
//         });
//         return { ...course, subCourses: updatedSubCourses };
//       }
//       return course;
//     });
//   };
  
  