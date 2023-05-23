import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal, { centered: true, size: 'lg' })
  }

  /*changeThemeColor(){
    const body = document.getElementsByClassName('bg')[0]
    body.classList.toggle("dark")
    body.classList.toggle("light")
  }

  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }*/
}
