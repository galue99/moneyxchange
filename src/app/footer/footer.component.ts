import {
  Component,
  OnInit
} from '@angular/core';

@Component({ 
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'footer'.
   */
  selector: 'footer',  // <footer></footer>
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
   /**
   * TypeScript public modifiers
   */

  constructor() {}

  public ngOnInit() {
    console.log('FooterComponent');
  }
}