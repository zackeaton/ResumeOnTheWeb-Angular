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
      tech: 'Shopify/WooCommerce/WordPress',
    },
    {
      icon: 'web',
      name: 'Web Design & Development',
      tech: 'HTML/CSS/Javascript',
    },
    {
      icon: 'angular',
      name: 'Frontend Javascript Frameworks',
      tech: 'React/Vue.js/Angular/Svelte',
    },
    {
      icon: 'nodejs',
      name: 'Backend Javascript Frameworks',
      tech: 'Node.js/Express.js/Mongoose',
    },
    {
      icon: 'sprout',
      name: 'Influencer Marketing',
      tech: 'Social Media, Affiliatly, Management',
    },
    {
      icon: 'database',
      name: 'Database Management System',
      tech: 'MySQL/Postgres/MongoDB',
    },
    {
      icon: 'hubspot',
      name: 'Customer Relationship Management',
      tech: 'HubSpot/Asana/ZenDesk',
    },
    {
      icon: 'powerbi',
      name: 'Analytics & Reporting',
      tech: 'Power BI/Google Analytics/Excel',
    },
    {
      icon: 'instagram',
      name: 'Social Media',
      tech: 'Content Management, Paid Ads, Analytics',
    },
    {
      icon: 'seo',
      name: 'Search Engine Optimization',
      tech: 'PageRank/Backlinks/Google Analytics',
    },
    {
      icon: 'photography',
      name: 'Photography & Cinematography',
      tech: 'Adobe Photoshop Lightroom',
    },
    {
      icon: 'fcpx',
      name: 'Photo & Video Post-Processing',
      tech: 'Premiere Pro, iMovie, In-Shot',
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
