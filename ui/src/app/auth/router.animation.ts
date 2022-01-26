import { animate, state, style, transition, trigger } from "@angular/animations";

    export function routerTransition(){
    return trigger('handelTransition', [
        state('void',style({position:'fixed',left:'-150%',width:'100%',opacity:0})),
        transition(':enter', [
          style({transform: "translateX(150%)"}),
          animate(1000)
        ])
      ])
}