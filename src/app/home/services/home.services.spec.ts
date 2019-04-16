import {
  inject,
  async,
  TestBed,
  ComponentFixture,
  getTestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeServices } from './home.services';
 
describe('Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeServices]
    });
  });

  it('should get data from the server', inject([HomeServices], (homeService: HomeServices) => {
    spyOn(console, 'log');
    //expect(console.log).not.toHaveBeenCalled();

    homeService.getData();
    expect(console.log).toHaveBeenCalled();
    homeService.getData().subscribe( (result) => {
      console.log(result);
      expect(result).toBeGreaterThan(0);
    });
  }));

});
