import ArticleCard from '../components/ArticleCard'
import { systemsProjects } from '../data/stories'

export default function Systems() {
  const [lead, ...rest] = systemsProjects

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
