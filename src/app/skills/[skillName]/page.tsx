import SkillDescriptionPage from "_components/layout/SkillDescriptionPage";
interface IParams {
  params: { skillName: string };
}
export default function SkillDescription({ params }: IParams) {
  return <SkillDescriptionPage skillName={params.skillName} />;
}
