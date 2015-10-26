function  ajaxFunction(str) {
	if (str.lenght == 0) {
		document.getElementsById("search").innerHTML = "";
		document.getElementsById("search").style.border= "0px";
		return;
	}
var input = document.getElementById("text1").value;
var ajaxRequest = new XMLHTTPRequest();
ajaxRequest.onreadystatechange = function () {
	if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
		var res = ajaxRequest.responseXML;
		var products = res.getElementsByTagName("products");
    var elem = products[0];
    var items = res.getElementsByTagName('items');
    document.getElementById('search').innerHTML = "";
  for (var i = 0; i < items.length; i ++) {

    var items = items[i].getElementsByTagName();
  }  

	}
}
}



function ajaxFunction(str) {
  if (str.length==0) { 
    document.getElementById("search").innerHTML="";
    document.getElementById("search").style.border="0px";
    return;
  }
  var input=document.getElementById('text1').value;
  var ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState==4 && ajaxRequest.status==200) {
        var res=ajaxRequest.responseXML;
        var states=res.getElementsByTagName("states");
        var elem=states[0];
        var items=res.getElementsByTagName("item");
        document.getElementById("search").innerHTML="";
    for(var i=0;i<items.length;i++){

        var item=items[i].getElementsByTagName("label");
        var state=item[0].innerHTML;
        var len=str.length;
        var match=state.substr(0,len);
        if(match.toUpperCase()==input.toUpperCase()){
            var val=items[i].getElementsByTagName("value");
            var value=val[0].innerHTML;
            var e = document.createElement('span');
            e.innerHTML = state+"("+value+")&nbsp;&nbsp;";
            document.getElementById("search").appendChild(e.firstChild);
        }
     }

      document.getElementById("search").style.border="1px solid #A5ACB2";
    }
  }
  ajaxRequest.open("GET","USA_States.xml",true);
  ajaxRequest.send();
}