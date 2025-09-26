import Image from "next/image";
import { Suspense } from "react";
import StudentAttendanceCard from "@/components/StudentAttendanceCard";

interface StudentStatsCardsProps {
  student: any; // adjust with proper Prisma type if needed
}

export default function StudentStatsCards({ student }: StudentStatsCardsProps) {
  return (
    <div className="flex-1 flex gap-4 justify-between flex-wrap">
      <StatCard icon="/singleAttendance.png">
        <Suspense fallback="loading...">
          <StudentAttendanceCard id={student.id} />
        </Suspense>
      </StatCard>

      <StatCard icon="/singleBranch.png">
        <h1 className="text-xl font-semibold">{student.class.name} Grade</h1>
        <span className="text-sm text-gray-400">Grade</span>
      </StatCard>

      <StatCard icon="/singleLesson.png">
        <h1 className="text-xl font-semibold">{student.class._count.lessons}</h1>
        <span className="text-sm text-gray-400">Lessons</span>
      </StatCard>

      <StatCard icon="/singleClass.png">
        <h1 className="text-xl font-semibold">{student.class.name}</h1>
        <span className="text-sm text-gray-400">Class</span>
      </StatCard>
    </div>
  );
}

function StatCard({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
      <Image src={icon} alt="" width={24} height={24} className="w-6 h-6" />
      <div>{children}</div>
    </div>
  );
}
