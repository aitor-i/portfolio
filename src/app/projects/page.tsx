import Card from "@/components/Card/Card";
import elDormitorio from '@/../public/el-dormitorio.jpg'
import cirma from '@/../public/cirma.jpg'
import standard from '@/../public/std-3.jpg'
import slovakLearn from '@/../public/Slovak-learn.jpg'
import electricidad from '@/../public/irati.jpg'

export default function page() {
  return (
    <section className="px-4 md:px-8 " >
      <h1 className="text-5xl md:text-6xl">Projects</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 py-4 md:py-8">
        <Card
          url="https://decoracion-interior.vercel.app/"
          tags="#next"
          description="Tienda de muebles"
          title="El dormitorio"
          image={elDormitorio}
        />
        <Card
          url="https://cirima.vercel.app/"
          tags="#next #PostgreSQL"
          description="Mantenimientos & Reparaciones."
          title="Cirima"
          image={cirma}
        />
        <Card
          url="https://standard-directive-n2-web.vercel.app/"
          tags="#next #node #mongo"
          description="Be the General,Be the Soldier"
          title="Standar Directive no3"
          image={standard}
        />
        <Card
          url="https://lang-learn-web.vercel.app/"
          tags="#next #rust #mongoDb"
          description="Learn slovak language online"
          title="Slovak Learn"
          image={slovakLearn}
        />
        <Card
          url="https://irati-electricidad.vercel.app/"
          tags="#next"
          description="Instalaciones eléctricas en general."
          title="Irati electricidad"
          image={electricidad}
        />
      </div>
    </section>
  )
}
