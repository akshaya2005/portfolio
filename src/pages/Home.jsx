import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-12">
        
        <div className="prose prose-invert space-y-4 text-ink/90">
          <p className="text-lg leading-relaxed">
            Hi! I'm Akshaya Arun, a software engineer passionate about building systems that matter. I work at the intersection of systems design, machine learning, agentic AI, and software engineering.
          </p>
          <p className="text-lg leading-relaxed">
            This portfolio showcases some of my work across four core areas:
          </p>
        </div>
      </section>

      <hr className="border-rule mb-12" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/systems" className="block">
          <div className="border border-rule p-6 hover:bg-ink/5 hover:border-ink transition cursor-pointer">
            <h3 className="font-masthead text-2xl text-ink mb-3">Systems</h3>
            <p className="text-ink/80">
              Designing and building scalable distributed systems, optimizing databases, and architecting real-time data pipelines.
            </p>
          </div>
        </Link>

        <Link to="/machine-learning" className="block">
          <div className="border border-rule p-6 hover:bg-ink/5 hover:border-ink transition cursor-pointer">
            <h3 className="font-masthead text-2xl text-ink mb-3">Machine Learning</h3>
            <p className="text-ink/80">
              Developing computer vision models, NLP systems, and time series forecasting solutions that solve real-world problems.
            </p>
          </div>
        </Link>

        <Link to="/agentic" className="block">
          <div className="border border-rule p-6 hover:bg-ink/5 hover:border-ink transition cursor-pointer">
            <h3 className="font-masthead text-2xl text-ink mb-3">Agentic</h3>
            <p className="text-ink/80">
              Building AI agents that reason, collaborate, and autonomously solve complex problems through multi-agent systems.
            </p>
          </div>
        </Link>

        <Link to="/software-development" className="block">
          <div className="border border-rule p-6 hover:bg-ink/5 hover:border-ink transition cursor-pointer">
            <h3 className="font-masthead text-2xl text-ink mb-3">Software Development</h3>
            <p className="text-ink/80">
              Creating full-stack applications, mobile apps, and developer tools that deliver great user experiences.
            </p>
          </div>
        </Link>
      </section>

      <hr className="border-rule my-12" />

      <section>
        <p className="text-ink/80 text-center">
          Explore the sections above to learn more about my work in each area.
        </p>
      </section>
    </div>
  )
}
