
import image from '../assets/developer.png';

export function CircularPortal() {
  return (
    <div className="relative aspect-square">
    <div className="absolute inset-0 rounded-full border border-white/10 bg-transparent" />
    <div className="absolute inset-[2px] rounded-full border border-white/5 bg-transparent" />
    <div className="absolute inset-[4px] rounded-full overflow-hidden bg-transparent">
      <img
        src={image}
        alt="Scenic landscape"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  
  );
}