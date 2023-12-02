import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  private textColors = ['rgb(212, 241, 219)', 'rgb(181, 164, 144)', 'rgb(161, 204, 164)', 'rgb(125, 195, 215)'];
  private backgroundColors = ['rgb(0, 0, 0, 0.6)', 'rgb(20, 36, 80, 0.3)', 'rgb(18, 114, 183, 0.2)', 'rgb(0, 0, 75, 0.2)'];
  private counter = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.textColors[this.counter]);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColors[this.counter]);
  }

  @HostListener('click') onClick() {
    this.counter = (this.counter + 1) % this.textColors.length;
    this.renderer.setStyle(this.el.nativeElement, 'color', this.textColors[this.counter]);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColors[this.counter]);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.5s ease');
  }
}
