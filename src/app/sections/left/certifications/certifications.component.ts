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
      title: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic Education',
      link: 'https://verify.skilljar.com/c/vqv9e3haacos',
    },
    {
      title: 'Google Analytics',
      issuer: 'Google',
      link: 'https://analytics.google.com/analytics/academy/certificate/LU8kuQ_JRA29_BqXQWAy3w',
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
