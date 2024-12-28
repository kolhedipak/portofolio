import { Code2, Database, Globe, Layout, Server, Settings } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'JavaScript','TypeScript', 'Tailwind CSS', 'BootStrap', 'Asp.Net']
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'C#']
  },
  {
    category: 'Database',
    icon: Database,
    items: ['Oracle DB', 'MongoDB', 'Prisma', 'SQL', 'NoSQL']
  },
  {
    category: 'DevOps',
    icon: Settings,
    items: ['Docker', 'Kubernetes', 'Azure','Git','GitHub','CI/CD']
  },
  {
    category: 'Web Technologies',
    icon: Globe,
    items: ['REST APIs', 'GraphQL', 'WebSockets', 'OAuth']
  },
  {
    category: 'Tools & Others',
    icon: Code2,
    items: ['Git', 'Jest', 'Webpack', 'Linux']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}