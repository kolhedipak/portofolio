
import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      <a
        href="https://github.com/kolhedipak"
        className="text-blue-900 dark:text-white/60 hover:text-white transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/dipakkolhe/"
        className="text-blue-900 dark:text-white/60 hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="mailto:dipakkolhe148@gmail.com"
        className="text-blue-900 dark:text-white/60 hover:text-white transition-colors"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
}