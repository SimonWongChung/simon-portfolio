// components/PlaygroundSection.jsx
import PlaygroundItem from "@/components/PlaygroundItem";

export default function PlaygroundSection({
  title,
  items,
  fit = "cover",
}) {
  return (
    <section className="space-y-10">
      {/* Section header */}
      <div className="space-y-4">
        <div className="text-xs font-mono text-foreground/80">
          {title}
        </div>
        <div className="h-px w-full bg-foreground/20" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-15">
        {items.map((item, index) => (
          <PlaygroundItem
            key={item.href}
            number={String(index + 1).padStart(2, "0") + "."}
            title={item.title}
            src={item.src}
            alt={item.alt}
            href={item.href}
            fit={fit}
          />
        ))}
      </div>
    </section>
  );
}