import {Directive, provide} from 'angular2/core';
import {NG_VALIDATORS}      from 'angular2/common';

@Directive({
    selector: '[validateEmail][ngControl]',
    providers: [
        provide(NG_VALIDATORS, {
            multi: true
        })
    ]
})
export class FormValidatorDirective { }
