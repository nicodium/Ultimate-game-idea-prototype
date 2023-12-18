var science = 0;
function sciclick(){
    science = science + 1;
    document.getElementById("science").innerHTML = science;
};
var skimdata = 0;
function buy1(){
    var buy1Cost = Math.floor(10 * Math.pow(1.1,skimdata));     
    if(science >= buy1Cost){                                   
        science = science + 1;                                   
    	cience = science - buy1Cost;                          
        document.getElementById('buy1').innerHTML = buy1;  
        document.getElementById('science').innerHTML = science;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,skimdata));       
    document.getElementById('buy1Cost').innerHTML = nextCost;  

window.setInterval(function(){
	
	sciclick(1);
	
}, 1000);

