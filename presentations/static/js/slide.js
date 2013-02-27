slide = function() {
	var slide = {version: "0.0.1"}, 
	slide_document = document, 
	slide_window = window;

	formatImages = function (percentage) {
		for( i=0; i < document.images.length; i++)
		{ 
			width = document.images[i].naturalWidth * percentage / 100.0;
			height = document.images[i].naturalHeight  * percentage / 100.0;
			
			window.document.images[i].setAttribute("width",width);
			window.document.images[i].setAttribute("height",height);

		}
	};

	formatImage = function (percentage) {
		img = window.document.getElementById(imgId);
		width = img.width * percentage / 100.0;
		height = img.height  * percentage / 100.0;
		
		img.setAttribute("width",width);
		img.setAttribute("height",height);
	};
}();