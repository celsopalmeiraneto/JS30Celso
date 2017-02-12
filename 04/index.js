var doConsoleCardio = function(customers){

  listTable();
  tableCities();
  tableGroupByTitle();

  function listTable(){
    console.time("table");
    console.table(customers);
    console.timeEnd("table");
  }

  function tableCities(){
    console.time("tableCities");
    var tb = customers.reduce(function(accumulator, currentVal){
      for (var i = 0; i < accumulator.length; i++) {
        if(accumulator[i].city == currentVal.City)
          return accumulator;
      }
      return accumulator.concat({city: currentVal.City});
    },[]);
    console.table(tb);
    console.timeEnd("tableCities");
  }

  function tableGroupByTitle(){
    
    console.table({
      as: ["Celso, Jonas"],
      af: ["Pedor, Manel"]
    }, "0");
  }



};


var oReq = new XMLHttpRequest();
oReq.open("GET", "customers.json");
oReq.addEventListener("load", function(){
  var mCustomers = JSON.parse(this.response);
  doConsoleCardio(mCustomers.Customers);
});

oReq.send();
