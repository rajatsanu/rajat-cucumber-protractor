import {Utility} from '../testResources/Utility';

class HomePage extends Utility {

 constructor() {

  super({

   buyBookIndiaTitleLabel : {type:'xpath',value:'//img[@title="Buy Books India"]'}
  });
 }
}

module.exports = new HomePage();