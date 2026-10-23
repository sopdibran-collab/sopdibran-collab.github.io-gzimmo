import Link from "next/link";

export type BuildingServiceCard = {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
};

type Props = {
  heading: string;
  intro: string;
  cards: BuildingServiceCard[];
};

/** Grille des prestations immeuble (/conciergerie). Spec Website Designer 23.10. */
export function BuildingServicesGrid({ heading, intro, cards }: Props) {
  return (
    <section className="bg-[#F5F7F8] py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="max-w-[680px] text-left">
          <h2 className="font-display text-display-sm font-semibold text-[#1E2227]">{heading}</h2>
          <p className="mt-3 text-base leading-[1.6] text-[#1E2227]/80">{intro}</p>
        </div>
        <ul className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <li
              key={card.title}
              className={
                card.href
                  ? "group relative flex flex-col rounded-[12px] border border-[#E2E6E8] bg-white p-5 transition-[border-color,box-shadow] duration-150 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#2F7068] hover:border-[#2F7068] hover:shadow-[0_4px_14px_rgba(30,34,39,0.08)] motion-reduce:transition-none sm:p-6"
                  : "flex flex-col rounded-[12px] border border-[#E2E6E8] bg-white p-5 sm:p-6"
              }
            >
              <h3 className="text-[19px] font-semibold leading-snug text-[#1E2227]">
                {card.href ? (
                  <Link
                    href={card.href}
                    className="after:absolute after:inset-0 after:rounded-[12px] after:content-[''] focus-visible:outline-none"
                  >
                    {card.title}
                  </Link>
                ) : (
                  card.title
                )}
              </h3>
              <p className="mt-3 text-base leading-[1.6] text-[#1E2227]/80">{card.body}</p>
              {card.href && card.linkLabel ? (
                <p className="mt-auto pt-4 text-base font-medium text-[#2F7068]" aria-hidden="true">
                  {card.linkLabel}{" "}
                  <span className="inline-block transition-transform duration-150 group-hover:translate-x-[2px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
                    →
                  </span>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
