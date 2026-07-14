// ─── ArticleCard ─────────────────────────────────────────────────────────────
// Represents one "news story" — a photo of you two with a headline + body.
// Props:
//   image       : imported image or URL string
//   headline    : string  (big bold text)
//   subheadline : string  (italic deck)
//   body        : string  (your card / love-letter text)
//   byline      : string  (e.g. "By Your Name")
//   date        : string  (e.g. "June 12, 2025")
//   size        : 'large' | 'medium' | 'small'  (controls grid span)

export default function ArticleCard({
  image, headline, subheadline, body,
  byline = 'By You', date = '', size = 'medium', aspectRatio = null,
}) {
  const isLarge = size === 'large'
  const imageAspectRatio = aspectRatio || (isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]')

  return (
    <article className={`flex flex-col gap-3 ${isLarge ? 'md:col-span-2' : ''}`}>
     

      {/* Section label slot */}
  

      {/* Headline */}
      <h2 className={`font-display font-bold leading-tight ${isLarge ? 'text-4xl' : 'text-2xl'}`}>
        {headline}
      </h2>

      {/* Subheadline / deck */}
      {subheadline && (
        <p className="font-body italic text-lg text-ink/70 leading-snug">
          {subheadline}
        </p>
      )}

      {/* Byline + date */}
      <div className="flex gap-2 items-center rule-thin pb-2">
        <span className="section-label">{byline}</span>
        {date && <span className="section-label">· {date}</span>}
      </div>

      {/* Body */}
      {body && (
        <p className="font-body text-base leading-relaxed text-ink/90 whitespace-pre-line">
          {body}
        </p>
      )}
       {/* Photo */}
      {image && (
        <div className={`overflow-hidden bg-rule/20 ${imageAspectRatio}`}>
          <img
            src={image}
            alt={headline}
            className="w-full h-full object-cover"
          />
        </div>

      )}
    </article>
  )
}
