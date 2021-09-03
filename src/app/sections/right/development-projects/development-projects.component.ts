import { Component, OnInit } from '@angular/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-development-projects',
  templateUrl: './development-projects.component.html',
  styleUrls: ['./development-projects.component.scss']
})
export class DevelopmentProjectsComponent implements OnInit {
  faGithubAlt = faGithubAlt;

  projects = [
    {
      title: 'Resume On The Web - Angular',
      tags: ['Angular', 'Firebase', 'scss'],
      description: 'Everyone needs their own little spot on the interwebs,\
      and this is mine. Welcome to my resume, on the web!',
      github: 'https://github.com/zackeaton/ResumeOnTheWeb-Angular',
    },
    {
      title: 'Personal Website Using Gatsby',
      tags: ['Gatsby', 'Gatsby Cloud', 'Netlify'],
      description: 'Here is a personal website I built using the Gatsby\
      starter template. There are some pretty cool FX on this site.',
      github: 'https://github.com/zackeaton/gatsby-personal-site-template',
    },
    {
      title: 'OV Photography',
      tags: ['Vue', 'Firebase', 'Font Awesome'],
      description: 'A personalized CRM system for OV Photogrpahy.',
      github: 'https://github.com/zackeaton/OVPhoto',
    },
    {
      title: 'Creative COVID-19',
      tags: ['CRM', 'List'],
      description: 'An open source way for people to share their ideas of how\
      to stay busy during quarantine.',
      github: 'https://github.com/zackeaton/Creative-COVID19',
    },
  ];

  constructor() {}

  ngOnInit() {
  }

}
