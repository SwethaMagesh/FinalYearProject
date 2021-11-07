function preview(){

    
    var orderform = document.forms[0];

    var product = orderform.product.value;
    var totalvalue = orderform.totalvalue.value;
    var weight = orderform.weight.value;
    var source = orderform.source.value;
    var destination = orderform.destination.value;
    var sourcedate = orderform.sourcedate.value;
    var deliverytime = orderform.deliverytime.value;
    var estimcost = orderform.estimcost.value;
    var maxbudget = orderform.maxbudget.value;
    var timedelay = orderform.timedelay.value;
    var penalty = orderform.penalty.value;
    var priority = orderform.priority.value;
    var cooling = orderform.cooling.value;
    var fragile = orderform.fragile.value;
    var scf = orderform.scf.value;
    var env = orderform.env.value;

    // console.log(
    // product + " " +
    // totalvalue + " " + 
    // weight + " " + 
    // source + " " + 
    // destination + " " + 
    // sourcedate + " " + 
    // deliverytime + " " + 
    // estimcost + " " + 
    // maxbudget + " " + 
    // timedelay + " " + 
    // penalty + " " + 
    // priority + " " + 
    // cooling + " " + 
    // fragile + " " + 
    // scf + " " + 
    // env
    // )

    document.getElementsByClassName("order")[0].style.display = "none";
    document.getElementsByClassName("orderDetails")[0].style.display = "block";


    var orderdet = document.getElementsByClassName("details"); 

    orderdet[0].innerText = "Product Name : " + product;

    orderdet[1].innerText = "Total Value of product : " + totalvalue;

    orderdet[2].innerText = "Weight of package : " + weight;

    orderdet[3].innerText = "Source : " + source;

    orderdet[4].innerText = "Destination : " + destination;

    orderdet[5].innerText = "Date of reaching source : " + sourcedate;

    orderdet[6].innerText = "Estimated time of delivery : " + deliverytime;

    orderdet[7].innerText = "Estimated Cost : " + estimcost;

    orderdet[8].innerText = "Max Budget : " + maxbudget;

    orderdet[9].innerText = "Max Time Delay Allowed : " + timedelay;

    orderdet[10].innerText = "Penalty for Time Delay : " + penalty;

    orderdet[11].innerText = "Priority : " + priority;


    orderdet[12].innerText = "Cooling : " + cooling;

    orderdet[13].innerText = "Fragile Material : " + fragile;

    orderdet[14].innerText = "Supply Chain Friendly : " + scf;

    orderdet[15].innerText = "Environment Friendly : " + env;

}