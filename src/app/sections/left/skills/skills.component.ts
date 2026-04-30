import { Component, OnInit } from '@angular/core';
import anime from 'node_modules/animejs/lib/anime.es.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      icon: 'shopify',
      name: 'Ecommerce',
      tech: 'Shopify, WordPress, WooCommerce, GitHub',
    },
    {
      icon: 'web',
      name: 'Web Design & Development',
      tech: 'HTML, CSS, JavaScript',
    },
    {
      icon: 'angular',
      name: 'Frontend Frameworks',
      tech: 'React, Vue.js, Angular',
    },
    {
      icon: 'sketch',
      name: 'Design & Media',
      tech: 'Figma, Adobe Creative Cloud, Canva',
    },
    {
      icon: 'powerbi',
      name: 'Analytics & Reporting',
      tech: 'Google Analytics 4, Google Tag Manager, SEMRush',
    },
    {
      icon: 'instagram',
      name: 'Paid & Social',
      tech: 'Google Ads, Meta Business Suite, TikTok, YouTube',
    },
    {
      icon: 'seo',
      name: 'Search Engine Optimization',
      tech: 'PageRank, Backlinks, Google Analytics',
    },
    {
      icon: 'hubspot',
      name: 'Platforms',
      tech: 'HubSpot, Asana, Slack, Zapier, Sanity, Mailchimp, Klaviyo',
    },
    {
      icon: 'web',
      name: 'AI Tools',
      tech: 'Claude (Anthropic), ChatGPT (OpenAI)',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  animate(inViewport: Boolean) {
    if (inViewport) {
      anime({
        targets: '.skill',
        opacity: 1,
        easing: 'easeInOutExpo',
        delay: anime.stagger(80)
      });
    }
  }

}
