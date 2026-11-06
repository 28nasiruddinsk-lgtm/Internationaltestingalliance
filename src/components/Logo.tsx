import { bodies, logoSrc, type BodyKey } from '@/data/partners';

// One awarding body logo on its white tile (brief: white, 12px radius, 24px padding, 1px light border).
// The logo fits the box height and is never stretched; until a file exists the name is shown instead.
export default function Logo({ k, box = 'h-9 md:h-12', className = '' }: { k: BodyKey; box?: string; className?: string }) {
  const src = logoSrc(k);
  return (
    <span className={`flex items-center justify-center rounded-[12px] border border-line bg-white p-6 ${className}`}>
      <span className={`flex items-center justify-center ${box}`}>
        {src
          ? <img src={src} alt={`${bodies[k].name} logo`} className="h-full w-auto max-w-full object-contain" />
          : <span className="text-center font-serif text-[15px] leading-tight text-navy md:text-[17px]">{bodies[k].name}</span>}
      </span>
    </span>
  );
}
