import ExamsScreen, {
  type DiplomaByIdPageProps,
} from "@/features/diplomas/screens/exams.screen";

export default async function Page(props: DiplomaByIdPageProps) {
  return <>
      <ExamsScreen {...props} />
  </>;
}