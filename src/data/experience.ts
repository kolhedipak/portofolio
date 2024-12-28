export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Infosys Ltd.',
    role: 'Digital Specialist Engineer (Full stack developer)',
    period: '2021 - Present',
    description: 'Worked on development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines.',
    achievements: [
      'Utilized React.js, C#, ASP.Net MVC, DevExpress, HTML, CSS, JavaScript, and Bootstrap to design and develop responsive and multi-browser web-based components, resulting in a 15% improvement in user experience.',
      'Built a REST API using Node.js and MongoDB and Oracle DB to store data for a healthcare application, enhancing data accessibility and integration with frontend systems.',
       'Optimized database performance using SQL expertise, resulting in a 30% improvement in responsiveness.',
       'Conducted unit testing, integration testing, and wrote manual testing scripts, achieving a 20% reduction in defects and improved overall quality.',
       'Leveraged Azure fundamentals, Git, GitHub, and CI/CD pipelines to improve source control efficiency and team collaboration, reducing deployment times by 20%.',
       'Played an active role in all phases of the SDLC within an agile, Scrum-based team, contributing to a 15% increase in project delivery speed and improved software quality across releases.',
      'Reduced application load time by 40% through optimization',
    ],
    technologies: [
      'React', 'Node.js', 'Javascript','.Net', 'MVC','TypeScript', 'Azure', 'Docker',
      'Kubernetes', 'Database','SQL', 'GraphQL'
    ]
  },
  
];