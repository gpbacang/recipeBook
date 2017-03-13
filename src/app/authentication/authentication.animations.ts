import { trigger, state, animate, style, transition } from '@angular/core';

export function showError() {
  return trigger('showError', [
    transition(':enter', [
      style({opacity: '0', transform: 'translateY(30px)'}),
      animate('.4s .2s ease-in-out', style({opacity: '1', transform: 'translateY(0)'}))
    ]),
    transition(':leave', [
      style({opacity: '1', transform: 'translateY(0)'}),
      animate('.3s ease-in-out', style({opacity: '0', transform: 'translateY(30px)'}))
    ])
  ]);
}
