-- AlterTable
ALTER TABLE "public"."_SubjectToTeacher" ADD CONSTRAINT "_SubjectToTeacher_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "public"."_SubjectToTeacher_AB_unique";

-- CreateIndex
CREATE INDEX "Announcement_classId_idx" ON "public"."Announcement"("classId");

-- CreateIndex
CREATE INDEX "Assignment_lessonId_idx" ON "public"."Assignment"("lessonId");

-- CreateIndex
CREATE INDEX "Attendance_studentId_date_idx" ON "public"."Attendance"("studentId", "date");

-- CreateIndex
CREATE INDEX "Attendance_lessonId_idx" ON "public"."Attendance"("lessonId");

-- CreateIndex
CREATE INDEX "Class_gradeId_idx" ON "public"."Class"("gradeId");

-- CreateIndex
CREATE INDEX "Class_supervisorId_idx" ON "public"."Class"("supervisorId");

-- CreateIndex
CREATE INDEX "Event_classId_idx" ON "public"."Event"("classId");

-- CreateIndex
CREATE INDEX "Exam_lessonId_idx" ON "public"."Exam"("lessonId");

-- CreateIndex
CREATE INDEX "Lesson_classId_day_idx" ON "public"."Lesson"("classId", "day");

-- CreateIndex
CREATE INDEX "Lesson_teacherId_idx" ON "public"."Lesson"("teacherId");

-- CreateIndex
CREATE INDEX "Lesson_subjectId_idx" ON "public"."Lesson"("subjectId");

-- CreateIndex
CREATE INDEX "Parent_name_idx" ON "public"."Parent"("name");

-- CreateIndex
CREATE INDEX "Parent_phone_idx" ON "public"."Parent"("phone");

-- CreateIndex
CREATE INDEX "Result_studentId_idx" ON "public"."Result"("studentId");

-- CreateIndex
CREATE INDEX "Result_examId_idx" ON "public"."Result"("examId");

-- CreateIndex
CREATE INDEX "Result_assignmentId_idx" ON "public"."Result"("assignmentId");

-- CreateIndex
CREATE INDEX "Student_name_idx" ON "public"."Student"("name");

-- CreateIndex
CREATE INDEX "Student_surname_idx" ON "public"."Student"("surname");

-- CreateIndex
CREATE INDEX "Student_classId_idx" ON "public"."Student"("classId");

-- CreateIndex
CREATE INDEX "Student_gradeId_idx" ON "public"."Student"("gradeId");

-- CreateIndex
CREATE INDEX "Student_parentId_idx" ON "public"."Student"("parentId");

-- CreateIndex
CREATE INDEX "Teacher_name_idx" ON "public"."Teacher"("name");

-- CreateIndex
CREATE INDEX "Teacher_surname_idx" ON "public"."Teacher"("surname");
