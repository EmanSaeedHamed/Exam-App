import ExamScreen from "@/features/exam/screens/exam.screen";

interface IproductDetailsProps {
  params: Promise<{exam: string}>;
}
export default async function page({params}:IproductDetailsProps) {
  const param = await params;
    console.log(param);
  return <ExamScreen />
}
