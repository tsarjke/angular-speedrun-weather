import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  links = [
    { name: 'linkedin', iconPath: 'assets/img/icons/footer/linkedin.svg', link: 'https://www.linkedin.com/in/ivan~tsarev/' },
    { name: 'github', iconPath: 'assets/img/icons/footer/github.svg', link: 'https://github.com/tsarjke' },
    { name: 'email', iconPath: 'assets/img/icons/footer/email.svg', link: 'mailto:ivantsarb@gmail.com' },
    { name: 'telegram', iconPath: 'assets/img/icons/footer/telegram.svg', link: 'tg://resolve?domain=tsarjke' },
  ];
}
