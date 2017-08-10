/// <reference path="../../../typings/index.d.ts" />


import {WebElementIntractions} from "./WebElementIntractions";



var chai = require('chai');
var expect = chai.expect;

export class Assertions extends WebElementIntractions{

 elem:any;

 constructor(elem){
  super(elem);
  this.elem = elem ;
 }


 public shouldExists(key, browserInstance?:webdriver.WebDriver){

  var deferred = protractor.promise.defer();
  var browserInstance = browserInstance ? browserInstance : browser ;

  browserInstance['element'](by[this.elem[key].type](this.elem[key].value)).isPresent().then((exist)=>{
   expect(exist,"The element "+ key + " should exists in page").to.be.true;
   deferred.fulfill();
  });
  return deferred.promise;
 }





}