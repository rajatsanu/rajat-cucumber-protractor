/// <reference path="../../../typings/index.d.ts" />



export class BrowserInteractions {

 elem:any;

 constructor(elem){
  this.elem = elem ;
 }

 public load(url, browserInstance?:webdriver.WebDriver){
  var deferred = protractor.promise.defer();
  var browserInstance = browserInstance ? browserInstance : browser ;

  browserInstance['get'](url).then(()=>{
   deferred.fulfill();
  });
  return deferred.promise;
 }

}