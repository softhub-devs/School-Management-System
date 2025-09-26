import BigCalendarContainer from "@/components/BigCalendarContainer";

export default function StudentSchedule({ classId }: { classId: number }) {
  return (
    <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
      <h1>Student&apos;s Schedule</h1>
      <BigCalendarContainer type="classId" id={classId} />
    </div>
  );
}
