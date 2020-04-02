import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Course } from 'app/modules/shared/interfaces';

@Directive({
  selector: '[appStatusIcons]'
})
export class StatusIconsDirective implements OnInit {
  @Input() course: Course;

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {}

  ngOnInit(): void {
    const h1 = this.elementRef.nativeElement.querySelector('section h1');
    // top rated icon
    if (this.course.topRated) {
      const topRatedIcon = this.renderer.createElement('i');
      this.renderer.addClass(topRatedIcon, 'fas');
      this.renderer.addClass(topRatedIcon, 'fa-star');
      this.renderer.setStyle(topRatedIcon, 'color', 'orange');
      this.renderer.setStyle(topRatedIcon, 'margin-left', '1rem');
      this.renderer.appendChild(h1, topRatedIcon);
    }
    // hourglass icon
    if (this.course.duration > 90) {
      const hourglassIcon = this.renderer.createElement('i');
      this.renderer.addClass(hourglassIcon, 'fas');
      this.renderer.addClass(hourglassIcon, 'fa-hourglass');
      this.renderer.setStyle(hourglassIcon, 'color', '#b9bdce');
      this.renderer.setStyle(hourglassIcon, 'margin-left', '1rem');
      this.renderer.appendChild(h1, hourglassIcon);
    }
  }
}
