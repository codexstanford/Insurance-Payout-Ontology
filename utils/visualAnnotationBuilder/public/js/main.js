
let ID_HISTORY = 122;
function getUniqueID() {
  return `__uid_${ID_HISTORY++}`;
}

function insuranceIDE() {

  // The DOM element that will contain the IDE
  this.container = null;
  // The Coverage Data
  this.data = null;

  this.init = function(container) {
    this.container = container;

    this.data = {
      payouts : [],
      riskChain: [],
      riskObjects: [],
    };

    this.render();
  }


  this.render = function() {
    this.renderPayouts();
  }



  this.renderPayouts = function() {
    for (let payouts of this.data.payouts) {
        // todo
    }
  }

  this.addPayout = function() {
    let newPayout = this.instantiateFromModel("InsurancePayout");
  }

  
    return object;
  }
}


let IDE = new insuranceIDE();

IDE.init(document.getElementById("main"));