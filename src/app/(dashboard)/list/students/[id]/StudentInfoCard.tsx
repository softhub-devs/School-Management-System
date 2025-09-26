import Image from "next/image";
import FormContainer from "@/components/FormContainer";
import { Class, Student } from "@prisma/client";

interface StudentInfoCardProps {
  student: Student & { class: Class };
  role?: string;
}

export default function StudentInfoCard({ student, role }: StudentInfoCardProps) {
  return (
    <div className="bg-Sky py-6 px-4 rounded-md flex-1 flex gap-4">
      <div className="w-1/3">
        <Image
          src={student.img || "/noAvatar.png"}
          alt=""
          width={144}
          height={144}
          className="w-36 h-36 rounded-full object-cover"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">
            {student.name + " " + student.surname}
          </h1>
          {role === "admin" && (
            <FormContainer table="student" type="update" data={student} />
          )}
        </div>
        <p className="text-sm text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
          <InfoItem icon="/blood.png" label={student.bloodType || "-"} />
          <InfoItem
            icon="/date.png"
            label={
              student.birthday
                ? new Intl.DateTimeFormat("en-GB").format(student.birthday)
                : "-"
            }
          />
          <InfoItem icon="/mail.png" label={student.email || "-"} />
          <InfoItem icon="/phone.png" label={student.phone || "-"} />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
      <Image src={icon} alt="" width={14} height={14} />
      <span>{label}</span>
    </div>
  );
}
