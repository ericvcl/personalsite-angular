import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  changeThemeColor(){
    const body = document.getElementsByClassName('bg')[0]
    body.classList.toggle("dark")
    body.classList.toggle("light")
  }

}
