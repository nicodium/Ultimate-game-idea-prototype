var science = 0;
function sciclick(){
    science = science + 1;
    document.getElementById("science").innerHTML = science;
};
var skimdata = 0;
function buy1(){
    var buy1Cost = Math.floor(10 * Math.pow(1.1,skimdata));     
    if(science >= buy1Cost){                                   
        skimdata = skimdata + 1;                                   
    	science = science - sciCost;                          
        document.getElementById('buy1').innerHTML = skimdata;  
        document.getElementById('science').innerHTML = science;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,skimdata));       
    document.getElementById('buy1Cost').innerHTML = nextCost;
function buy1Cost() {return 10 * 1.1 ** skimdata}

window.setInterval(function(){
	
	sciclick(1);
	
}, 1000);

