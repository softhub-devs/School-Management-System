import Link from "next/link";

export default function StudentShortcuts({
  classId,
  studentId,
}: {
  classId: number;
  studentId: string;
}) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h1 className="text-xl font-semibold">Shortcuts</h1>
      <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
        <Shortcut href={`/list/lessons?classId=${classId}`} label="Student's Lessons" bg="bg-SkyLight" />
        <Shortcut href={`/list/teachers?classId=${classId}`} label="Student's Teachers" bg="bg-PurpleLight" />
        <Shortcut href={`/list/exams?classId=${classId}`} label="Student's Exams" bg="bg-pink-50" />
        <Shortcut href={`/list/assignments?classId=${classId}`} label="Student's Assignments" bg="bg-SkyLight" />
        <Shortcut href={`/list/results?studentId=${studentId}`} label="Student's Results" bg="bg-YellowLight" />
      </div>
    </div>
  );
}

function Shortcut({ href, label, bg }: { href: string; label: string; bg: string }) {
  return (
    <Link className={`p-3 rounded-md ${bg}`} href={href}>
      {label}
    </Link>
  );
}
