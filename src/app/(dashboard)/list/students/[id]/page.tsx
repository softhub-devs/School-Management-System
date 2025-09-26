import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Class, Student } from "@prisma/client";
import StudentInfoCard from "./StudentInfoCard";
import StudentStatsCards from "./StudentStatsCards";
import StudentSchedule from "./StudentSchedule";
import StudentShortcuts from "./StudentShortcuts";
import Performance from "@/components/Performance";
import Announcements from "@/components/Announcements";

const SingleStudentPage = async ({ params: { id } }: { params: { id: string } }) => {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const student:
    | (Student & { class: Class & { _count: { lessons: number } } })
    | null = await prisma.student.findUnique({
    where: { id },
    include: { class: { include: { _count: { select: { lessons: true } } } } },
  });

  if (!student) return notFound();

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <StudentInfoCard student={student} role={role} />
          <StudentStatsCards student={student} />
        </div>
        <StudentSchedule classId={student.class.id} />
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <StudentShortcuts classId={student.class.id} studentId={student.id} />
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
