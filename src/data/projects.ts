export interface Project {
  year: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
}
import portfolio from '../components/assets/portfolio.png';

export const projects: Project[] = [
  {
    year: '2024',
    title: 'AI-Powered Task Manager',
    description: 'Smart task management platform with AI-driven prioritization and scheduling.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800',
    tech: ['React', 'TypeScript', 'OpenAI API', 'Node.js'],
    demo: 'https://example.com/task-manager',
    github: 'https://github.com/example/task-manager',
    longDescription: 'An intelligent task management system that uses AI to analyze task patterns, suggest optimal schedules, and automate routine task organization. Features include natural language processing for task creation, smart categorization, and predictive due date suggestions.'
  },
  {
    year: '2023',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with real-time inventory and analytics.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    demo: 'https://example.com/ecommerce',
    github: 'https://github.com/example/ecommerce',
    longDescription: 'A comprehensive e-commerce platform built for scalability and performance. Features include real-time inventory management, advanced analytics dashboard, multi-currency support, and integration with multiple payment providers.'
  },
  {
    year: '2023',
    title: 'Secure File Sharing with React and Supabase',
    description: 'A file-sharing app built with React, TypeScript, Tailwind, and Supabase, allowing users to upload and share files securely via a generated link',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800',
    tech: ['React', 'Supabase', 'Tailwind', 'Typescript'],
    demo: '',
    github: '',
    longDescription: 'A file-sharing application built with React, TypeScript, Tailwind CSS, and Supabase. Users can easily upload a file, generate a secure link, and share it with others for seamless file transfer. The app leverages Supabase for backend storage and authentication, ensuring a smooth and efficient experience for sharing files with just a few clicks'
  },
  {
    year: '2022',
    title: 'Interactive Portfolio with Theme Toggle and Contact Form',
    description: ' A responsive portfolio website with a theme toggle and a contact form powered by EmailJS for easy communication.',
    image: portfolio,
    tech: ['React', 'Tailwind css', 'Typescript','EmailJs'],
    demo: '',
    github: '',
    longDescription: 'A dynamic portfolio website built with React, Tailwind CSS featuring a theme toggle for light and dark modes, and a contact form integrated with EmailJS for seamless communication. The app showcases personal projects and skills, providing an interactive and professional online presence'
  },

];