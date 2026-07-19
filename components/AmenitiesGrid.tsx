import { Waves, Dumbbell, ShieldCheck, PartyPopper } from "lucide-react";

const AMENITIES = [
  {
    icon: <Waves size={24} />,
    title: "Olympic Pool",
    desc: "Temperature controlled"
  },
  {
    icon: <Dumbbell size={24} />,
    title: "Elite Gym",
    desc: "Technogym equipment"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "3-Tier Security",
    desc: "24/7 CCTV & Guards"
  },
  {
    icon: <PartyPopper size={24} />,
    title: "Grand Club",
    desc: "40,000 sq.ft facility"
  }
];

export default function AmenitiesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full py-8">
      {AMENITIES.map((amenity, idx) => (
        <div 
          key={idx}
          className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-4">
            {amenity.icon}
          </div>
          <h4 className="text-white font-bold text-sm tracking-wide text-center">{amenity.title}</h4>
          <p className="text-white/50 text-xs text-center mt-1">{amenity.desc}</p>
        </div>
      ))}
    </div>
  );
}
