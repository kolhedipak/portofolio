
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dipak Kolhe</h3>
            <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
          </div>
          <nav className="flex gap-8 mb-6 md:mb-0">
            <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Contact
            </a>
          </nav>
          <div className="flex gap-6">
            <a href="https://github.com/kolhedipak" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <Github className="h-5 w-5" />
            </a>
            <a href="ttps://www.linkedin.com/in/dipakkolhe/" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:dipakkolhe148@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} IamDK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}