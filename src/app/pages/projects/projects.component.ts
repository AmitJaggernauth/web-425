import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  learning: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Personal Portfolio (Angular)',
      description: 'A responsive personal portfolio site built with Angular, featuring routing and reusable components.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
      link: 'https://github.com/AmitJaggernauth', // update to specific repo
      learning: 'Deepened understanding of Angular routing, component architecture, and layout structure.'
    },
    {
      title: 'RPG Character Builder',
      description: 'A character creation tool with form validation and test-driven development.',
      technologies: ['Angular', 'TypeScript', 'Karma/Jasmine'],
      link: 'https://github.com/AmitJaggernauth', // update
      learning: 'Practiced TDD, modular component design, and BehaviorSubject-based state management.'
    },
    {
      title: 'Full Stack Demo App',
      description: 'A small full stack app demonstrating RESTful API integration and data-driven UI.',
      technologies: ['JavaScript', 'REST APIs', 'HTML', 'CSS'],
      learning: 'Improved API integration skills and handling of asynchronous data in the UI.'
    }
  ];
}

