
import image from '../assets/developer.png';

export function CircularPortal() {
  return (
    <div className="relative aspect-square">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[2px] rounded-full border border-white/5" />
      <div className="absolute inset-[4px] rounded-full overflow-hidden">
      <img
          src={image}
          alt="Scenic landscape"
          className="w-full h-full object-cover"
        />
        
      </div>
    </div>
  );
}