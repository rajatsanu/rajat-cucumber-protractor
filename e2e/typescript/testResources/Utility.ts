/// <reference path="../../../typings/index.d.ts" />


import {Assertions} from "./Assertions";



export class Utility extends Assertions{

 elem:any;

 constructor(elem){
  super(elem);
  this.elem = elem ;
 }


}