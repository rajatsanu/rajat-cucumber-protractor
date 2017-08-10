/// <reference path="../../../typings/index.d.ts" />


import {BrowserInteractions} from "./BrowserInteractions";


export class WebElementIntractions extends  BrowserInteractions{

 elem:any;

 constructor(elem){
  super(elem);
  this.elem = elem ;
 }



}