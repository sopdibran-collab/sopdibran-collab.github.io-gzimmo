import { stats } from "@/data/content";
import { teamExperienceLabel } from "@/data/company";
import { Stat } from "@/components/ui/Stat";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function StatsBand() {
  return (
    <div>
      <FadeIn>
        <Badge className="text-accent/90">Gzimmo en chiffres</Badge>
        <p className="mt-5 max-w-lg text-lg text-white/80 leading-relaxed">
          {teamExperienceLabel(false)} au service de particuliers, régies et entreprises en Suisse
          romande.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
        {stats.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.08}>
            <Stat value={item.value} label={item.label} inverse />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
