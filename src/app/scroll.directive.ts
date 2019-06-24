import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) {}

  @HostListener('window:scroll') handlerWindowScroll() {
    if (window.pageYOffset > 100) {
      this.hideAndShow('block');
    } else {
      this.hideAndShow(null);
    }
  }
  @HostListener('click') handlerGotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  hideAndShow(display: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'display', display);
  }

}
