import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements = [
    {
      title: 'National Honor Society of Leadership & Success',
      position: 'Member'
    },
    {
      title: 'CompTIA AITP',
      position: 'Member'
    },
    {
      title: 'UMSL|Hack',
      position: 'Member'
    },
    {
      title: 'Information Systems Programming Club',
      position: 'Member'
    },
    {
      title: 'Dean\'s List',
      position: 'Fall \'18, Spring \'19'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
