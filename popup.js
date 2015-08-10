
addEventListener('DOMContentLoaded', function() {
	var arr =[];
	chrome.tabs.query({lastFocusedWindow: true, active: false}, function(tabs){
		arr = tabs.map(function (item, index){
			console.log(item.url);
			var yasssss = item.url + " "
			return yasssss;				
		});

		console.log(arr);
		var blob = new Blob(arr, {type:"text/plain; charset=utf-8"});
		saveAs(blob, "temp.txt");
	});
	
	
});


