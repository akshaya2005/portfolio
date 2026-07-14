import ArticleCard from '../components/ArticleCard'
import { agenticProjects } from '../data/stories'

export default function Agentic() {
  const [lead, ...rest] = agenticProjects

  return (
    <div>
      <section className="mb-10">
        <ArticleCard {...lead} size="large" />
      </section>

      <hr className="border-rule mb-10" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rest.map((project) => (
          <div key={project.id}>
            <ArticleCard {...project} />
          </div>
        ))}
      </section>
    </div>
  )
}
