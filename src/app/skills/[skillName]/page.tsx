import { Button } from '@/components/ui/button'
import skillDescriptions from '@/domain/texts/skillsDescription.json'
import Link from 'next/link'

interface Props {
  params: {
    skillName: string
  }
}

export default function page({ params }: Props) {
  const { skillName } = params
  const skill = skillDescriptions.filter(skill => compareStrings(skill.SkillName, skillName))[0]
  const hasKeyWords = skill?.['key-words'] ?? null
  return (
    <div className="min-h-screen flex flex-col ">
      <article className="bg-gray-50 flex-col flex gap-4 min-h-screen py-12 md:py-24 text-gray-950 px-4 md:px-48">
        <h1 className="text-4xl pt-12 md:text-6xl font-semibold md:pt-24 ">{skill?.SkillName}</h1>
        <i className="text-gray-500">{skill?.dates}</i>
        {hasKeyWords && skill['key-words']?.map(word => <p key={word} className='font-bold'>#{word}</p>)
        }
        <div className="pt-12 md:pt-24">
          <p>{skill?.description}</p>
        </div>
        {skill?.workExperience && <div>
          <h2 className='text-2xl font-bold'>Work experience</h2>
          {skill.workExperience?.map(experience =>
            <p key={experience} className='font-light'>
              {experience}
            </p>
          )}
        </div>
        }
        {
          skill?.projects && <div>
            <h2 className='text-2xl font-bold'>Projects</h2>
            {
              skill?.projects?.map(project =>
                <p key={project} className='font-light'>
                  {project}
                </p>)
            }
          </div>
        }
        {skill?.certificates && <div>
          <h2 className='text-2xl font-bold'>Certificates</h2>
          {
            skill?.certificates?.map(certiificate =>
              <p key={certiificate} className='font-light'>
                {certiificate}
              </p>)
          }

        </div>}
        <div className='pt-52'>
          <Link href={"/skills"} >
            <Button>Back to skills </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}
function compareStrings(s1: string, s2: string): boolean {
  const normalizedS1 = decodeURIComponent(s1);
  const normalizedS2 = decodeURIComponent(s2);

  return normalizedS1 === normalizedS2;
}

