function odliczanie()	
			{
			var dzisiaj = new Date();
			
			var dzien = dzisiaj.getDate();
			var miesiac = dzisiaj.getMonth()+1;
			var rok = dzisiaj.getFullYear();
			
			var godziny = dzisiaj.getHours();
			if(godziny<10) godziny = "0"+godziny;
			
			var minuty = dzisiaj.getMinutes();
			if(minuty<10) minuty = "0"+minuty;
			
			var sekundy = dzisiaj.getSeconds();
			if(sekundy<10) sekundy = "0"+sekundy;
			
			document.getElementById("zegar").innerHTML = 
		dzien+"/"+miesiac+"/"+rok+"   |   "+godziny+":"+minuty+":"+sekundy;
		
				setTimeout ("odliczanie()",1000);
			}