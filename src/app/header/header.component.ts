import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({ 
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'footer'.
   */
  selector: 'header',  // <footer></footer>
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
   /**
   * TypeScript public modifiers
   */

  @Input() result:string; 
  
  constructor() {}

  public ngOnInit() {
    console.log(this.result);
    console.log('FooterComponent');
  }
}