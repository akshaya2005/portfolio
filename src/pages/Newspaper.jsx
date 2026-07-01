import ArticleCard from '../components/ArticleCard'
import { stories } from '../data/stories'

export default function Newspaper() {
  const [lead, ...rest] = stories

  return (
    <div>
      {/* Lead story — full width */}
      <section className="mb-10">
        <ArticleCard {...lead} size="large" />
      </section>

      <hr className="border-rule mb-10" />

      {/* Secondary stories — 2-col grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-x-0 md:divide-x divide-rule">
        {rest.map((story, i) => (
          <div key={story.id} className={i > 0 ? 'md:pl-8' : ''}>
            <ArticleCard {...story} />
          </div>
        ))}
      </section>
    </div>
  )
}
