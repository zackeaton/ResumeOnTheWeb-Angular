import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-volunteer-work',
  templateUrl: './volunteer-work.component.html',
  styleUrls: ['./volunteer-work.component.scss']
})
export class VolunteerWorkComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  volunteerWork = [
    {
      title: 'TwitchCon',
      description:
        'Summer 2019'
    },
    {
      title: 'E3 Expo',
      description:
      'Summer 2019'

    },
    {
      title: 'Fortnite World Cup',
      description:
      'Summer 2019'
    },
    {
      title: 'Rocket League Championship Season Series 7',
      description:
      'Summer 2019'
    },
    {
      title: 'DevUp',
      description:
      'Spring 2019'
    },
  ];

  constructor() {}

  ngOnInit() {
  }

}
