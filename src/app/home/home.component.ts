import {
  Component,
  OnInit
} from '@angular/core';
import { 
  interval 
} from 'rxjs';
import {
   HomeServices 
} from './services';
import { 
  Moneyxchange 
} from './interfaces/moneyExchange';

@Component({ 
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    HomeServices
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public eurVal:number;
  public usdVal:number;
  public moneyChange = 0;
  public source:any;
  public subscribe:any;
  submitted = false;
  /**
   * TypeScript public modifiers
   */

  constructor(
    public _servicesHome: HomeServices
  ) {}

  public ngOnInit() {
    console.log('HomeComponent');
    this.getValueChange();

    //Timer 10min
    this.source = interval(600000);
    this.subscribe = this.source.subscribe(
      () => this.getValueChange()
    );
  }

   /*
  ** Submit Form submitExchange 
  ** Return exchange calculate
  */
  public submitExchange(value) {  
    if(value.usdVal){
      this.submitted = true;
      console.log('Submitted Form');
      return this.eurVal = value.usdVal == 0 || value.usdVal < 0 ? 0 : value.usdVal * this.moneyChange;
    } else{
      this.submitted = false;
      return this.eurVal = 0;
    }
  }

  /*
  ** Service getValue Api
  ** Return EUR-USD X-RATE
  */
  public getValueChange(){
    this._servicesHome.getData()
      .subscribe(
        (response:Moneyxchange) => {
          this.moneyChange = response.rates.USD
        }
      );
  }
}