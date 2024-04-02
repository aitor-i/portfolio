
const dict = {
  paragraphs: [
    ` Hello there! I'm a passionate web developer with a somewhat unconventional path into the tech world. My journey began with a Bachelor's degree in Chemistry, where I honed my analytical skills and attention to detail. Little did I know, these skills would become the foundation of my transition into web development.`,
    "Over the past two years, I've had the privilege of evolving from focusing solely on React to embracing the challenges and rewards of full-stack development. My work involves leveraging React, .NET, and Node.js to create dynamic and responsive web applications. My commitment to quality and performance has not only been a constant in my projects but also a launchpad for expanding my skill set into testing technologies like Jest, React Testing Library, and Cypress. I've also dabbled in building REST APIs with Rust, a journey that's both challenged and expanded my understanding of backend technologies.",
    "As I continue to grow in this field, my current passion lies in mastering Next.js and TypeScript. These technologies excite me because of their potential to create efficient, scalable web applications that can meet the evolving needs of businesses and consumers alike.",
    "Outside the world of code, I find joy and inspiration in photography and chess. These hobbies offer me a creative outlet and strategic challenges that enrich my personal and professional life.",
    "Looking ahead, my goal is to specialize further in Next.js and TypeScript. I'm eager to delve deeper into these technologies, pushing the boundaries of what I can build and contribute to the tech community.",
    "Thank you for taking the time to learn a bit about me. I'm always open to discussing potential projects or diving into conversations about the latest in web development. Let's create something amazing together."

  ]
}

export default function page() {
  return (
    <section className="px-4 md:px-8 h-min-screen" >
      <h1 className="text-5xl md:text-6xl">About me</h1>
      <div className="grid gap-4 grid-cols-1 md:px-64 py-4 md:py-8">
        {dict.paragraphs.map(p => <p key={p}>{p}</p>)}
      </div>
    </section>
  )
}
