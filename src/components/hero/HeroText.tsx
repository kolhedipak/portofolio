
import { ArrowRight } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import ThemeToggle from '../ThemeToggle';
export function HeroText() {
  return (
    <div className="space-y-8 ">
       <ThemeToggle />
      <div>
        <h1 className="text-6xl md:text-8xl font-serif text-gray-900 dark:text-white mb-4">
          between
          <span className="block">Reality</span>
          <span className="block">&amp; Dream</span>
        </h1>
        <p className="text-grey-900 dark:text-white/60 text-lg max-w-md">
          Crafting digital experiences that blur the line between imagination and reality
        </p>
      </div>

      <div className="flex gap-6 ">
        <a
          href="#projects"
          className=" bg-black dark:bg-white/10 group px-6 py-3  hover:bg-blue-900 text-white rounded-full flex items-center gap-2 transition-all"
        >
          View Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <SocialLinks />
    </div>
  );
}