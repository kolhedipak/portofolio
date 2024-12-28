
import { CircularPortal } from './hero/CircularPortal';
import { HeroText } from './hero/HeroText';


export default function Hero() {
  return (
    <div className="relative min-h-screen  bg-white dark:bg-black overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10  to-black/10 z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroText />
          <CircularPortal />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 flex flex-col items-center z-20 ">
        <div className="h-24 w-[1px] bg-blue-900 dark:bg-white/20 " />
        <span className="mt-4 text-blue-900 dark:text-white/60 text-sm tracking-wider rotate-180" style={{ writingMode: 'vertical-rl' }}>
          SCROLL DOWN
        </span>
      </div>

      {/* Year indicator */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
        <span className="text-grey-100 dark:text-white/20 text-9xl font-serif ">2025</span>
      </div>
    </div>
  );
}