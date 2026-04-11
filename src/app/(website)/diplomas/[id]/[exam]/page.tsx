interface IproductDetailsProps {
  params: Promise<{exam: string}>;
}
export default async function page({params}:IproductDetailsProps) {
  const param = await params;
    console.log(param);
  return <>
    <h2>exam question</h2>
  </>
}
