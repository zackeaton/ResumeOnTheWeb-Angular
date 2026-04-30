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
      specialization: '',
      period: 'Oct \'24 - current',
    },
    {
      logo: '/assets/work/sikich.png',
      title: 'Sikich LLC.',
      position: 'Full-Stack Web Developer & Digital Marketing Specialist',
      specialization: 'Wordpress, PHP, AJAX, Javascript',
      period: 'April \'21 - Sept \'24',
    },
    {
      logo: '/assets/work/zackeaton.png',
      title: 'Freelance',
      position: 'Web Developer',
      specialization: 'Wordpress, Web Hosting, Javascript',
      period: 'April \'20 - April \'21',
    },
    {
      logo: '/assets/work/dcds.png',
      title: 'DC Dev Shop',
      position: 'Business Development Manager',
      specialization: 'Sales, Marketing, HubSpot, Client Relations',
      period: 'Aug \'20 - Oct \'20',
    },
    {
      logo: '/assets/work/eyepromise.png',
      title: 'EyePromise',
      position: 'Esports Product Manager',
      specialization: 'Social Media, Influencer Marketing, Content Creation',
      period: 'Jan \'19 - April \'20',
    },
    {
      logo: '/assets/work/eaton.png',
      title: 'Eaton Properties',
      position: 'Real Estate Agent',
      specialization: 'Property Management, Real Estate Sales',
      period: 'Aug \'15 - May \'19',
    },
    {
      logo: '/assets/work/strange.png',
      title: 'Strange Donuts',
      position: 'Front of House',
      specialization: 'Sales, Customer Service, Delivery',
      period: 'July \'15 - Sept \'16',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
