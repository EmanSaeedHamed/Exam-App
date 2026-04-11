import { BreadCrumb } from "../components/breed-crumb";
import { getDiplomaById } from "@/lib/api/diplomas/diplomas.api";
import { ChevronDown, CircleQuestionMark, GraduationCap, MoveRight, Timer } from "lucide-react";
import Image from "next/image";
import ExamItem from "../components/exam-item";
import Link from "next/link";

export type DiplomaByIdPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ExamsScreen(props: DiplomaByIdPageProps) {
  const { id } = await props.params;
  const diplomasPayload = await getDiplomaById(id);
    console.log(diplomasPayload);
    console.log(id);
    
  return <>
       {/* breedcrumb */}
  <div className="bg-white"><BreadCrumb/></div>
 <div className="bg-gray-50 p-6">

   {/* heading */}
   <div className="bg-blue-600 p-4 mb-6 flex items-center gap-4 text-white">
    <GraduationCap className="size-10" />
    <span className="font-inter text-[32px] font-semibold">Diplomas</span>
    </div>
   {/* content */}
   <div className="bg-white p-6">
   
    {/* diplomas */}
    <div className="my-6 grid grid-cols-1 gap-2.5 mt-0 bg-white">
      {diplomasPayload.payload.diploma.exams.map((exam) => (
        <ExamItem payload={exam} diplomaId={id} key={exam.id} />
      ))}
    </div>

 {/* footer */}
 <div className="text-gray-600 flex flex-col items-center py-2.5">
  <span className="font-mono">Scroll to view more</span>
 <ChevronDown className="size-[18px]"/>
 </div>

  </div>
 </div>
  </>
}



