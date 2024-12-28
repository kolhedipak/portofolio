
import { Code2, Rocket, Users } from 'lucide-react';
import dev from "../components/assets/dev-photo.jpg";

const stats = [
  { label: 'Years Experience', value: '3+', icon: Code2 },
  { label: 'Projects Completed', value: '10+', icon: Rocket },
  { label: 'Happy Clients', value: '4+', icon: Users }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Crafting Digital Experiences
              </h2>
              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400"></div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              As a Full Stack Developer with 3+ years of experience, in React, TypeScript, Tailwind CSS, and Azure. 
              I focus on building dynamic, user-friendly web applications that solve problems and enhance user experience.
               Always eager to learn and improve, I thrive on collaboration and delivering quality solutions. 
               Let’s connect if you're looking for someone proactive and results-driven!
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Let’s connect if you're looking for someone proactive and results-driven!
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={dev}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}