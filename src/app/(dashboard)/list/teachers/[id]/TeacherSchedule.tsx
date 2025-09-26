
import BigCalendarContainer from "@/components/BigCalendarContainer";

export default function TeacherSchedule({ id }: { id: string }) {
  return (
    <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
      <h1>Teacher&apos;s Schedule</h1>
      <BigCalendarContainer type="teacherId" id={id} />
    </div>
  );
}
