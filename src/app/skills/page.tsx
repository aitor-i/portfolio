import skills from '@/domain/texts/skills.json'
import Link from 'next/link'

export default function page() {
  return (
    <section className="px-4 md:px-8 min-h-screen" >
      <h1 className="text-5xl md:text-6xl">Skills</h1>
      <div className="flex md:py-32 md:px-32 flex-wrap gap-2 py-4 md:gap-4  justify-center">
        {skills.reverse().map(skill => {
          const { textColor, backgroundColor } = getRandomTailwindColorPair()
          return <Link key={skill.SkillName} href={`skills/${skill.SkillName}`} className={`p-1 font-bold px-3 ${textColor} ${backgroundColor} rounded`} >
            <h3>{skill.SkillName}</h3>
          </Link>

        }

        )}

      </div>
    </section >
  )
}
type ColorPair = {
  backgroundColor: string;
  textColor: string;
};

function getRandomTailwindColorPair(): ColorPair {
  const backgroundColors = [
    'bg-red-300',
    'bg-blue-700',
    'bg-green-700',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
  ];

  const backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  const textColor = ['bg-yellow-500', 'bg-red-300', 'bg-green-500'].includes(backgroundColor) ? 'text-gray-800' : 'text-white';

  return { backgroundColor, textColor };
}
