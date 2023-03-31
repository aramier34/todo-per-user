import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  private _ids: { one?: any, two?: any } = {};

  @HostBinding('style.backgroundColor') bgColor = '';
  @HostBinding('style.color') color = '#444';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.colorHost(true);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.colorHost();
  }

  colorHost(on?: boolean) {
    if (on) {
      this.bgColor = 'red';
      
      this._ids.one = setTimeout(() => {
        this.bgColor = 'green';
        this._ids.two = setTimeout(() => {
          this.bgColor = '';
        }, 1000);
      }, 1000);
    }
    else {
      Object.values(this._ids).forEach(clearTimeout);
      this.bgColor = '';
    }
  }
}
