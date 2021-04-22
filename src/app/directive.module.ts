import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from '../directives/phone-mask.directive';

@NgModule({
    imports: [CommonModule],
    exports: [PhoneMaskDirective],
    declarations: [PhoneMaskDirective]
})
export class DirectiveModule { }