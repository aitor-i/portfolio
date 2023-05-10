interface IParams {
  params: { skillName: string };
}
export default function SkillDescription({ params }: IParams) {
  return <p>{params.skillName}</p>;
}
