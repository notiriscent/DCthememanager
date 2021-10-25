var formdata;

function cutcolor(text) {
	let cut = text.substr(3);
	return cut;
};

function generate(){
	var sourceinp = document.getElementById("sourceinp")
	formdata = $('form').serialize().split("&");
	var text = `{
			"author":
	    	{
	        	"Author": "${decodeURI(formdata[2].split("=")[1].replace())}",
	        	"Site": "${decodeURI(sourceinp.value)}"
	    	},
	    	"main":
	    	{
	        	"BColor": "#${cutcolor(formdata[0].split("=")[1])}",
	        	"TitleFormat": "${decodeURI(formdata[1].split("=")[1].replace())} - &HOST&:&PORT&@&NICK&"
	    	},
	    	"text":
	    	{
	        	"FFont": "${decodeURI(formdata[4].split("=")[1].replace())}",
	        	"SFont": ${Number(formdata[5].split("=")[1])},
	        	"BColor": "#${cutcolor(formdata[6].split("=")[1])}",
	        	"FColor": "#${cutcolor(formdata[7].split("=")[1])}"
	    	},
	    	"input":
	    	{
	        	"FFont": "${decodeURI(formdata[8].split("=")[1].replace())}",
	        	"SFont": ${Number(formdata[9].split("=")[1])},
	        	"BColor": "#${cutcolor(formdata[10].split("=")[1])}",
	        	"FColor": "#${cutcolor(formdata[11].split("=")[1])}",
	        	"CCursor": "#${cutcolor(formdata[12].split("=")[1])}"
	    	},
	    	"popup":
	    	{
	        	"FFont": "${decodeURI(formdata[13].split("=")[1].replace())}",
	        	"SFont": ${Number(formdata[14].split("=")[1])},
	        	"BColor": "#${cutcolor(formdata[15].split("=")[1])}",
	        	"FColor": "#${cutcolor(formdata[16].split("=")[1])}"
	    	}
	    }
	`;
	return text;
};

document.getElementById("dwn-btn").addEventListener("click", function(){
    var text = generate();
    var filename = `${formdata[1].split("=")[1]}.thm`;

	var blob = new Blob([text], {
	type: "text/plain;charset=utf-8"
	});

	saveAs(blob, filename);
}, false);