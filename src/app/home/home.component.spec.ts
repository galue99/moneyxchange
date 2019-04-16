import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture,
  getTestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { BrowserModule, By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
/**
 * Load the implementations that should be tested.
 */
import { AppState } from '../app.service';
import { HomeComponent } from './home.component';
import { HomeServices } from './services';

describe(`Home`, () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let injector: TestBed;
  let service: HomeServices;
  let httpMock: HttpTestingController;
  let de:DebugElement;
  let el:HTMLElement;
  /**
   * async beforeEach.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule, FormsModule ],
      providers: [AppState, HomeServices]
    })

      /**
       * Compile template and css.
       */
      .compileComponents();
    injector = getTestBed();
    service = injector.get(HomeServices);
    httpMock = injector.get(HttpTestingController);
  }));

  /**
   * Synchronous beforeEach.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    /**
     * Trigger initial data binding.
     */
    fixture.detectChanges();

  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();
    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

  it('should submit function', () => {
    fixture.detectChanges();
    spyOn(comp, 'submitExchange');
    el = fixture.debugElement.query(By.css('#submitButton')).nativeElement;
    el.click();
    expect(comp.submitExchange).toHaveBeenCalledTimes(1);
  });

  it('should submit function Error', () => {
    fixture.detectChanges();
    spyOn(comp, 'submitExchange');
    el = fixture.debugElement.query(By.css('#submitButton')).nativeElement;
    el.click();
    expect(comp.submitted).toEqual(false);
  });

  it('Should return 2.24', async(() => {
    comp.moneyChange = 1.1278;
    var value = { usdVal: 2};
    comp.submitExchange(value);
    expect(comp.eurVal).toBe(2.2556);
  }));

  it('Should return 0', async(() => {
    var value = { usdVal: 0};
    comp.submitExchange(value);
    expect(comp.eurVal).toBe(0);
  }));

});
