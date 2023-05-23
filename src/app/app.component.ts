import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal, { centered: true, size: 'lg' })
  }

  isMobile: boolean = false;
  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 576) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 576) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

}
