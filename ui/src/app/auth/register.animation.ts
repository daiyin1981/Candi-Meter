import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export function registerScreenAnimation(){
    return  trigger('registerScreenAnimation', [
          state('invalid', style({})),
          state('unchecked', style({})),
          state('completed', style({ transform: 'translateX(150%)' })),
          transition('unchecked => invalid', animate(250, keyframes([
            style({ transform: 'translateX(-0.3%)' }),
            style({ transform: 'translateX(0.3%)' }),
            style({ transform: 'translateX(-0.3%)' }),
            style({ transform: 'translateX(0.3%)' })
          ])))
        ]);
      }