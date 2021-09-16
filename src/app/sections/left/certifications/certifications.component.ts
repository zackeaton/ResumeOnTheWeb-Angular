import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  certifications = [
    {
      title: 'Google Analytics',
      issuer: 'Google',
      link: 'https://analytics.google.com/analytics/academy/certificate/LU8kuQ_JRA29_BqXQWAy3w',
    },
    {
      title: 'Beginner Javascript',
      issuer: 'Wes Bos',
      link: 'https://courses.wesbos.com/account/certificate/5e1dfa15ff799660b70ff27e',
    },
    {
      title: 'Become a Junior WordPress Developer',
      issuer: 'LinkedIn Learning',
      link: 'https://drive.google.com/file/d/1JBJk0m6jNq6ULyh2IZs2bls7fIcY0M-X/view?usp=sharing',
    },
    {
      title: 'Become a Front-End Web Developer',
      issuer: 'LinkedIn Learning',
      link: 'https://drive.google.com/file/d/1JBJk0m6jNq6ULyh2IZs2bls7fIcY0M-X/view?usp=sharing',
    },
    {
      title: 'Inbound Certification',
      issuer: 'HubSpot',
      link: 'https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-certificates/c9f5af306aea4a03853bb1b96f660271-1598478688921.png'
    },
    {
      title: 'Solutions Partner',
      issuer: 'HubSpot',
      link: 'https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/793e3e8dbbd04da886e11b6043ca83e8-1601484519090.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
