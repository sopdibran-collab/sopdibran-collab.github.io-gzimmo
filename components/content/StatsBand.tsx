import { stats } from "@/data/content";
import { Stat } from "@/components/ui/Stat";
import { FadeIn } from "@/components/ui/FadeIn";

export function StatsBand() {
  return (
    <div className="grid gap-12 md:grid-cols-3 md:gap-8">
      {stats.map((item, index) => (
        <FadeIn key={item.label} delay={index * 0.08}>
          <Stat value={item.value} label={item.label} inverse />
        </FadeIn>
      ))}
    </div>
  );
}
