import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education = [
    {
      icon: '/assets/education/umsl.png',
      title: 'University of Missouri St. Louis',
      period: '2014 - 2019',
      major: 'Bachelor of Science in Information Systems & Technology',
      grade: ''
    },
    {
      icon: '/assets/education/realtor.png',
      title: 'Missouri Real Estate Commission',
      period: '2015',
      major: 'Missouri Real Estate License',
      grade: ''
    },
    {
      icon: '/assets/education/fhn.png',
      title: 'Francis Howell North',
      period: '2010 - 2014',
      major: 'High School Diploma',
      grade: ''
    },
  ];

  constructor() {}

  ngOnInit() {
  }

}
