import { BreadCrumb } from "../components/breed-crumb";
import { getDiplomas } from "@/lib/api/diplomas/diplomas.api";
import { ChevronDown, GraduationCap } from "lucide-react";
import DiplomaItem from "../components/diploma-item";
import { IDiplomasResponse } from "@/lib/types/diplomas";

export default async function DiplomasScreen() {
  const diplomaPayload: IDiplomasResponse = await getDiplomas();
  console.log(diplomaPayload);
  return <>
   {/* breedcrumb */}
  <div className="bg-white"><BreadCrumb/></div>
  {/* content */}
  <div className="bg-gray-50 p-6">
    {/* heading */}
    <div className="bg-blue-600 p-4 flex items-center gap-4 text-white">
    <GraduationCap className="size-10" />
    <span className="font-inter text-[32px] font-semibold">Diplomas</span>
    </div>
    {/* diplomas */}
    <div className="my-6 grid grid-cols-3 gap-2.5">
  {diplomaPayload?.payload.data.map((diploma) => (
    <DiplomaItem diploma={diploma} key={diploma.id}/>
  ))}
</div>

 {/* footer */}
 <div className="text-gray-600 flex flex-col items-center py-2.5">
  <span className="font-mono">Scroll to view more</span>
 <ChevronDown className="size-[18px]"/>
 </div>

  </div>
   
  </>
}




