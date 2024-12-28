
import { Code2, Rocket, Users } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+', icon: Code2 },
  { label: 'Projects Completed', value: '10+', icon: Rocket },
  { label: 'Happy Clients', value: '4+', icon: Users }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
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
              As a Full Stack Developer with 3+ years of experience, I specialize in building 
              scalable web applications that combine elegant design with robust functionality.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My approach combines technical expertise with creative problem-solving, 
              ensuring that each project not only meets but exceeds expectations.
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
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800"
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