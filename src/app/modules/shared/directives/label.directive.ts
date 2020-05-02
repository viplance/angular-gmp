import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLabel]'
})
export class LabelDirective implements OnInit {
  @Input() appLabel: string;
  @Input() required: boolean;
  constructor(public elementRef: ElementRef, public renderer: Renderer2) {}

  ngOnInit(): void {
    let container;

    // create input info container
    if (this.required !== undefined || this.appLabel) {
      container = this.renderer.createElement('div');
      this.renderer.addClass(container, 'input-container');
      const parent = this.elementRef.nativeElement.parentNode;
      const refChild = this.elementRef.nativeElement;
      this.renderer.insertBefore(parent, container, refChild);
    }

    if (this.appLabel) {
      const label = this.renderer.createElement('span');
      this.renderer.addClass(label, 'input-label');
      const text = this.renderer.createText(this.appLabel);
      this.renderer.appendChild(label, text);
      this.renderer.appendChild(container, label);
    }

    if (this.required !== undefined) {
      const required = this.renderer.createElement('span');
      this.renderer.addClass(required, 'input-required');
      const text = this.renderer.createText('*required');
      this.renderer.appendChild(required, text);
      this.renderer.appendChild(container, required);
    }
  }
}
