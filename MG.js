document.getElementById("meme-form").addEventListener("submit", function(e) {
	e.preventDefault();
  
	let imgUrl = document.getElementById('img-url').value.trim();
	let topText = document.getElementById('top-text').value.trim();
	let bottomText = document.getElementById('bottom-text').value.trim();
  

	let memeElement = createMemeElement(imgUrl, topText, bottomText);

	let memeList = document.getElementById("meme-list");
	memeList.appendChild(memeElement);

	document.getElementById('img-url').value = '';
	document.getElementById('top-text').value = '';
	document.getElementById('bottom-text').value = '';

  });

  function createMemeElement (imgUrl, topText, bottomText) {
	let memeElement = document.createElement("div");
	memeElement.classList.add("meme");
	// creates the meme element

	let memeImage = document.createElement("div");
	memeImage.classList.add("meme-image");
	memeElement.appendChild(memeImage);
	//encapsulate the image and text elements

	let imageElement = document.createElement("img");
	imageElement.src = imgUrl;
	imageElement.alt = "User Image";
	memeElement.appendChild(imageElement);
	//creates the image element

	let topTextElement = document.createElement("div");
	topTextElement.classList.add("meme-text", "topText");
	topTextElement.textContent = topText;
	memeElement.appendChild(topTextElement);
	// creates the top text element

	let bottomTextElement = document.createElement("div");
	bottomTextElement.classList.add("meme-text", "bottomText");
	bottomTextElement.textContent = bottomText;
	memeElement.appendChild(bottomTextElement);	
	// creates the bottom text element

	let deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function() {
		memeElement.remove();
	});
	memeElement.appendChild(deleteButton);

	return memeElement;

  }
  