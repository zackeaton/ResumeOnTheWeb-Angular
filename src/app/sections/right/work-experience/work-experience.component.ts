import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  workExperience = [
    {
      logo: '/assets/work/brooklynbrewery.png',
      title: 'Brooklyn Brewery',
      position: 'Digital Marketing Manager',
      specialization: 'Shopify, Klaviyo, Project Management',
      period: 'Oct \'24 - current',
    },
    {
      logo: '/assets/work/sikich.png',
      title: 'Sikich LLC.',
      position: 'Full-Stack Web Developer & Digital Marketing Specialist',
      specialization: 'WordPress, Shopify, Project Management',
      period: 'April \'21 - Sept \'24',
    },
    {
      logo: '/assets/work/zackeaton.png',
      title: 'Freelance',
      position: 'Web Developer',
      specialization: 'Shopify, Web Hosting, Project Managment',
      period: 'April \'20 - April \'21',
    },
    {
      logo: '/assets/work/eyepromise.png',
      title: 'EyePromise',
      position: 'Esports Product Manager',
      specialization: 'Social Media, Influencer Marketing, Content Creation',
      period: 'Jan \'19 - April \'20',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
