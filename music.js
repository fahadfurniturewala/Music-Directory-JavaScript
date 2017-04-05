//Student name: Fahad Furiturewala, ID: 1001173992
// Put your Last.fm API key here
var api_key = "d0156574d9e8c18a1463797e9b5fde29";

var xhr1 = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var xhr3 = new XMLHttpRequest();
	
function sendRequest ()
	{
		document.getElementById("output1").innerHTML=" ";
		document.getElementById("imag").innerHTML=" ";
		document.getElementById("link").innerHTML=" ";
		document.getElementById("output2").innerHTML=" ";
		document.getElementById("output3").innerHTML=" ";
  
    var method1 = "artist.getinfo";
	var method2 = "artist.getTopAlbums";
	var method3 = "artist.getSimilar";
	
    var artist = document.getElementById("form-input").value;
	
    xhr1.open("GET", "proxy.php?method="+method1+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr1.setRequestHeader("Accept","application/json");
	xhr1.send(null);
   	xhr2.open("GET", "proxy.php?method="+method2+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr2.setRequestHeader("Accept","application/json");
	xhr2.send(null);
	xhr3.open("GET", "proxy.php?method="+method3+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr3.setRequestHeader("Accept","application/json");
	xhr3.send(null);
	xhr1.onreadystatechange = displayMethod1;		
	xhr2.onreadystatechange = displayMethod2;
	xhr3.onreadystatechange = displayMethod3;
    };
    
function displayMethod1(){
	 if (xhr1.readyState == 4) {
        var json1 = JSON.parse(xhr1.responseText);
        //var str1 = JSON.stringify(json1,undefined,2);
		
		//document.getElementById("output1").innerHTML="<pre>" + str1 + "</pre>";
		//alert(json.artist.name);
		
		//var artname=document.createElement("P");
		//var artlink=document.createElement("P");
		//var name=json1.artist.name;
		//artname.innerHTML=name;
		//document.getElementById("output1").innerHTML=json1.artist.name
		//document.write("<p align=center>"+Check on Last.fm+"</p>");
		var artistname=document.createElement("P");
		var artistlink=document.createElement("A");
		var nam=json1.artist.name;
		var lin=json1.artist.url;
		
		//console.log(lin);
		//var v=document.createElement("img");
		
		//v.src=json1.artist.image[1].#text;
		//document.body.appendChild(v);
		
		//document.getElementById("link").innerHTML=document.write("<br>"+"<p align='center'>"+"<font size=20 color='black' style='calibri'>"+"<a href="+lin+">Check on Last.fm</a>"+"</font>"+"</p>");
		//documnet.getElementById("img")=document.write("json1.artist.image[1].\#text");
		//document.getElementById("link").innerHTML=document.write(json1.artist.url);
		
		var artistimage=document.createElement("IMG");
		var biotext=document.createElement("P");
		var biotext2=document.createElement("P");
		
		var t="Check more on Last.fm!!!";
		
		
		var aimage= json1.artist.image;
		var arimage=aimage[3];
		var artimage=arimage["#text"];
		console.log(artimage);
		//var bio=json1.artist.bio.summary;
		var bio2=json1.artist.bio.content;
		//biotext.innerHTML=bio;
		biotext2.innerHTML=bio2;
		artistimage.src=artimage;
		artistname.innerHTML=nam;
		artistlink.href=lin;
		artistlink.innerHTML=t;
		
		

		//var im=document.createElement("icon");
		//im.src=artimage;
		artistimage.setAttribute("border","5px");
		artistname.style.fontSize="300%";
		//artistimage.setAttribute("align","left");
		//document.getElementById("output1").appendChild(artname);
		document.getElementById("output1").appendChild(artistname);
		document.getElementById("imag").appendChild(artistimage);
		//document.getElementById("output1").appendChild(biotext);
		document.getElementById("link").appendChild(biotext2);
		document.getElementById("link").appendChild(artistlink);
		
	 }
}
	 
	 function displayMethod2()
	 {
		 if (xhr2.readyState == 4) {
        var json2 = JSON.parse(xhr2.responseText);
		
		
		
		//var popalbumim=document.createElement("IMG");
		//var b1=document.createElement("BR");
		//var b2=document.createElement("BR");
		//document.getElementById("output2").appendChild(b1);
		//document.getElementById("output2").appendChild(b2);
		
		var heading1="Top Albums";
		var head1=document.createElement("P");
		head1.innerHTML=heading1;
		head1.style.fontSize="150%";
		head1.style.fontWeight="bold";
		document.getElementById("output2").appendChild(head1);
		
		
		
		var poptext=json2.topalbums;
	
		var popimage= json2.topalbums;
		
		for(var i=0;i<json2.topalbums.album.length;i++)
		{
			var next1=document.createElement("DIV");
			var brk1=document.createElement("BR");
			var popalbumim=document.createElement("IMG");
			var poptext2=poptext.album[i];
			var popimage2=popimage.album[i].image[2];
			var popimage3=popimage2["#text"];
			poptext3="\n" + poptext2.name;
			popalbumim.src=popimage3;
			var popalbum=document.createElement("P");
			popalbum.innerHTML=poptext3;
			//next1.appendChild(brk1);
			next1.appendChild(popalbum);
			//next1.appendChild(brk1);
			next1.appendChild(popalbumim);
			
			document.getElementById("output2").appendChild(next1);
			//document.getElementById("output2").appendChild(popalbumim);
			
		}
	 }
}

function displayMethod3()
{
	if (xhr3.readyState == 4) {
        var json3 = JSON.parse(xhr3.responseText);
		
		var heading2="Similar Arists:";
		var head2=document.createElement("P");
		head2.innerHTML=heading2;
		head2.style.fontSize="150%";
		head2.style.fontWeight="bold";
		document.getElementById("output3").appendChild(head2);
		
		var similarart=json3.similarartists.artist;
		for(var j=0;j<json3.similarartists.artist.length;j++)
		{
			var similar=similarart[j].name;
			//var next2=document.createElement("DIV");
			//var brk2=document.createElement("BR");
			var similarartistname=document.createElement("P");
			similarartistname.innerHTML=similar;
			
			//next2.appendChild(similarartistname);
			//next2.appendChild(brk2);
			
			document.getElementById("output3").appendChild(similarartistname);
			
			
		}
	}
	
}

