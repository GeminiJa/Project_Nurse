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
      title: "1. การดูแลสุขวิทยาส่วนบุคคล",
      progress: "0/4",
      subCourses: [
        { id: 101, title: "1.1 Complete bed bath", progress: "0/2" },
        { id: 102, title: "1.2 Partial bed bath", progress: "0/1" },
        { id: 103, title: "1.3 Shampooing", progress: "0/1" },
      ],
    },
    {
      id: 2,
      title: "2. การทำความสะอาดเตียงและสิ่งแวดล้อม",
      progress: "0/4",
      subCourses: [
        { id: 201, title: "2.1 Open bed", progress: "0/1" },
        { id: 202, title: "2.2 Occupied bed", progress: "0/2" },
        { id: 203, title: "2.3 Closed bed", progress: "0/1" },
      ],
    },
    {
      id: 3,
      title: "3. การดูแลเพื่อความสุขสบาย",
      progress: "0/4",
      subCourses: [
        { id: 301, title: "3.1 Complete bed bath", progress: "0/2" },
        { id: 302, title: "3.2 Partial bed bath", progress: "0/2" },
      ],
    },
    {
      id: 4,
      title: "4. การดูแลผู้ป่วยเกี่ยวกับการเคลื่อนไหว",
      progress: "0/4",
      subCourses: [
        { id: 401, title: "4.1 Transfer (bed-strecher, bed-wheelchair)", progress: "0/2" },
        { id: 402, title: "4.2 Implementing ROM exercise", progress: "0/2" },
      ],
    },
    {
      id: 5,
      title: "5. การประเมินและบันทึกสัญญาณชีพ",
      progress: "0/4",
      subCourses: [
        { id: 501, title: "5.1 การประเมินและบันทึกสัญญาณชีพ", progress: "0/4" },
      ],
    },
    {
      id: 6,
      title: "6. การพยาบาลผู้ที่มีสัญญาณชีพผิดปกติ",
      progress: "0/8",
      subCourses: [
        { id: 601, title: "6.1 Tepid sponge", progress: "0/2" },
        { id: 602, title: "6.2 Administering oxygen", progress: "0/2" },
        { id: 603, title: "6.3 Suctioning ในปากและจมูก", progress: "0/2" },
        { id: 604, title: "6.4 Suctioning ในท่อช่วยหายใจ", progress: "0/2" },
      ],
    },
    {
      id: 7,
      title: "7. การดูแลผู้ป่วยเกี่ยวกับการได้รับสารน้ำ",
      progress: "0/6",
      subCourses: [
        { id: 701, title: "7.1 แทงหลอดเลือดดำเพื่อให้ได้รับสารน้ำ", progress: "0/2" },
        { id: 702, title: "7.2 ดูแลผู้ป่วยได้รับสารน้ำทางหลอดเลือดดำ", progress: "0/2" },
        { id: 703, title: "7.3 Monitoring Intake/out put", progress: "0/2" },
      ],
    },
    {
      id: 8,
      title: "8. การดูแลผู้ป่วยเกี่ยวกับการได้รับอาหาร",
      progress: "0/3",
      subCourses: [
        { id: 801, title: "8.1 Inserting nasogastric or orogastric tube", progress: "0/1" },
        { id: 802, title: "8.2 Gastric tube feeding", progress: "0/2" },
      ],
    },
    {
      id: 9,
      title: "9. การบริหารยา (Medication administration)",
      progress: "0/10",
      subCourses: [
        { id: 901, title: "9.1 การให้ยาทางปาก (Oral)", progress: "0/2" },
        { id: 902, title: "9.2 การให้ยาทางหลอดเลือดดำ (Intravenous)", progress: "0/2" },
        { id: 903, title: "9.3 การฉีดยาเข้ากล้ามเนื้อ (Intramuscular)", progress: "0/2" },
        { id: 904, title: "9.4 การฉีดยาเข้าชั้นไขมัน (Subcutaneous)", progress: "0/1" },
        { id: 905, title: "9.5 การให้ยาหยอดตาหรือป้ายตา (Eye drop/Ointment)", progress: "0/1" },
        { id: 906, title: "9.6 การให้ยาพ่น (inhalation)", progress: "0/2" },
      ],
    },
    {
      id: 10,
      title: "10. การดูแลผู้ป่วยที่มีบาดแผล",
      progress: "0/4",
      subCourses: [
        { id: 1001, title: "10.1 การทำแผลแบบแห้ง หรือ เปียก (Dry or Wet Dressing)", progress: "0/2" },
        { id: 1002, title: "10.2 Drainage care (Penrose drain, ICD, T-tube)", progress: "0/1" },
        { id: 1003, title: "10.3 Ostomy care (Tracheostomy, Colostomy)", progress: "0/1" },
      ],
    },
    {
      id: 11,
      title: "11. การดูแลผู้รับบริการเกี่ยวกับการขับถ่ายปัสสาวะ (Retained Urinary Catheterization)",
      progress: "0/6",
      subCourses: [
        { id: 1101, title: "11.1 การใส่สายสวนปัสสาวะชาย", progress: "0/1" },
        { id: 1102, title: "11.2 การใส่สายสวนปัสสาวะหญิง", progress: "0/1" },
        { id: 1103, title: "11.3 การถอดสายสวนปัสสาวะ", progress: "0/2" },
        { id: 1104, title: "11.4 การดูแลผู้ป่วยที่มีสายสวนปัสสาวะ", progress: "0/2" },
      ],
    },
    {
      id: 12,
      title: "12. การดูแลผู้รับบริการเกี่ยวกับการขับถ่ายอุจจาระบนเตียง (Assisting with Elimination and Perineum Care)",
      progress: "0/2",
      subCourses: [
        { id: 1201, title: "12.1 การดูแลผู้รับบริการเกี่ยวกับการขับถ่ายอุจจาระบนเตียง (Assisting with Elimination and Perineum Care)", progress: "0/2" },
      ],
    },
    {
      id: 13,
      title: "13. การเก็บสิ่งส่งตรวจ (Collecting Spacimens)",
      progress: "0/10",
      subCourses: [
        { id: 1301, title: "13.1 การเจาะและอ่านค่า Hematocrit", progress: "0/1" },
        { id: 1302, title: "13.2 อุจจาระ (Stool)", progress: "0/1" },
        { id: 1303, title: "13.3 เลือด (Blood)", progress: "0/2" },
        { id: 1304, title: "13.4 น้ำตาลในเลือด (Capillary blood sugar)", progress: "0/2" },
        { id: 1305, title: "13.5 เสมหะ (Sputum)", progress: "0/1" },
        { id: 1306, title: "13.6 ปัสสาวะ (Urine Analysis)", progress: "0/2" },
        { id: 1307, title: "13.7 ปัสสาวะเพื่อการเพาะเชื้อ (Urine C/S)", progress: "0/1" },
      ],
    },
    {
      id: 14,
      title: "14. การรับผู้ป่วยใหม่ (Admission)",
      progress: "0/2",
      subCourses: [
        { id: 1401, title: "14.1 การรับผู้ป่วยใหม่ (Admission)", progress: "0/2" },
      ],
    },
    {
      id: 15,
      title: "15. การจำหน่ายผุ้ป่วย (Discharge)",
      progress: "0/2",
      subCourses: [
        { id: 1501, title: "15.1 การจำหน่ายผุ้ป่วย (Discharge)", progress: "0/2" },
      ],
    },
    {
      id: 16,
      title: "16. กิจกรรมการพยาบาลอื่นๆ",
      progress: "0/0",
      subCourses: [
        { id: 1601, title: "16.1 กิจกรรมการพยาบาลอื่นๆ", progress: "0/0" },
      ],
    },
  ];
  
  export const getCourses = (): Course[] => courses;

  export const updateCourseProgress = (courseId: number, subCourseId: number): void => {
    courses = courses.map((course) => {
      if (course.id === courseId) {
        let totalCompleted = 0; // ตัวแปรนับหัวข้อที่ทำเสร็จ
  
        const updatedSubCourses = course.subCourses.map((subCourse) => {
          if (subCourse.id === subCourseId) {
            const [completed, total] = subCourse.progress.split("/").map(Number);
            const newCompleted = Math.min(completed + 1, total); // ป้องกันเกินจำนวนทั้งหมด
            console.log(`อัปเดตหัวข้อย่อย: ${subCourse.title} - จาก ${completed}/${total} เป็น ${newCompleted}/${total}`);
            return { ...subCourse, progress: `${newCompleted}/${total}` };
          }
          return subCourse;
        });
  
        // คำนวณ progress ใหม่ของ Course
        updatedSubCourses.forEach((sub) => {
          const [completed] = sub.progress.split("/").map(Number);
          totalCompleted += completed;
        });
  
        const totalSubCourses = updatedSubCourses.reduce((sum, sub) => sum + Number(sub.progress.split("/")[1]), 0);
        console.log(`คำนวณใหม่สำหรับ ${course.title}: ${totalCompleted}/${totalSubCourses}`);
  
        return {
          ...course,
          subCourses: updatedSubCourses,
          progress: `${totalCompleted}/${totalSubCourses}`,
        };
      }
      return course;
    });
  
    console.log("📌 ข้อมูล courses หลังอัปเดต:", courses);
  };
  
  

  // export const updateCourseProgress = (courseId: number, subCourseId: number): void => {
  //   courses.forEach((course) => {
  //     if (course.id === courseId) {
  //       let totalCompleted = 0; // ตัวแปรในการเก็บจำนวนหัวข้อย่อยที่ทำเสร็จ
  
  //       course.subCourses.forEach((subCourse) => {
  //         if (subCourse.id === subCourseId) {
  //           const [completed, total] = subCourse.progress.split("/").map(Number);
  //           const newCompleted = Math.min(completed + 1, total); // เพิ่มความคืบหน้าหัวข้อย่อย
  //           subCourse.progress = `${newCompleted}/${total}`;
  //         }
  
  //         // คำนวณจำนวนหัวข้อย่อยที่ทำเสร็จแล้ว
  //         const [completed, total] = subCourse.progress.split("/").map(Number);
  //         totalCompleted += completed;
  //       });
  
  //       // อัปเดต progress รวมของหลักสูตร
  //       const totalSubCourses = course.subCourses.length;
  //       course.progress = `${totalCompleted}/${totalSubCourses}`;
  //     }
  //   });
  // };

  
  
  

  
  