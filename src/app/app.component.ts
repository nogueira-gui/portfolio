import { animate, style, transition, trigger } from '@angular/animations';
import { Component , AfterViewInit} from '@angular/core';

declare function showMenu(toggleId:any , navId:any);
declare function linkAction();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  navLink: any;

  ngAfterViewInit(): void {
    showMenu(document.getElementById("nav-toggle"), document.getElementById("nav-menu"));
    this.navLink = document.querySelectorAll('.nav__link');
    this.removeActiveLink();

    document.querySelectorAll('.nav__link')
      .forEach(n => n.addEventListener('click', this.removeActiveLink));
  }

  removeActiveLink = () =>{
    this.navLink.forEach(n => n.classList.remove('active'));
    linkAction();

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
  }
}
