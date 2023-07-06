document.getElementById("meme-form").addEventListener("submit", function (e) {
	e.preventDefault();
  
	let imgUrl = document.getElementById('img-url').value.trim();
	let topText = document.getElementById('top-text').value.trim();
	let bottomText = document.getElementById('bottom-text').value.trim();

	validateImage(imgUrl).then(() => {
  
	let memeElement = createMemeElement(imgUrl, topText, bottomText);
  
	if (memeElement) {
	  let memeList = document.getElementById("meme-list");
	  memeList.appendChild(memeElement);
  
	  document.getElementById('img-url').value = '';
	  document.getElementById('top-text').value = '';
	  document.getElementById('bottom-text').value = '';
	} else {
	  alert("Please enter a valid image URL");
	}
})
	.catch(() => {
		alert("Please enter a valid image URL");
  });
});

function validateImage(url) {
	return new Promise((resolve, reject) => {
	let image = new Image();
	image.onload = () => resolve();
	image.onerror = () => reject();
	image.src = url;
	});
}
  
  function createMemeElement(imgUrl, topText, bottomText) {
	let image = new Image();
	image.src = imgUrl;
  
	if (image.complete) {
	  let memeElement = document.createElement("div");
	  memeElement.classList.add("meme");
  
	  let memeContainer = document.createElement("div");
	  memeContainer.classList.add("meme-container"); // Corrected class name
	  memeElement.appendChild(memeContainer);
  
	  let imageElement = document.createElement("img");
	  imageElement.src = imgUrl;
	  imageElement.alt = "User Image";
	  memeContainer.appendChild(imageElement);
  
	  let topTextElement = document.createElement("div");
	  topTextElement.classList.add("meme-text", "topText");
	  topTextElement.textContent = topText;
	  memeContainer.appendChild(topTextElement);
  
	  let bottomTextElement = document.createElement("div");
	  bottomTextElement.classList.add("meme-text", "bottomText");
	  bottomTextElement.textContent = bottomText;
	  memeContainer.appendChild(bottomTextElement);
  
	  let deleteButton = document.createElement("button");
	  deleteButton.classList.add("delete-button");
	  deleteButton.textContent = "X";
	  memeElement.appendChild(deleteButton);

	
	  memeElement.addEventListener("mouseenter", function () {
		deleteButton.style.display = "block";
	  });
	
	  memeElement.addEventListener("mouseleave", function () {
		deleteButton.style.display = "none";
	  });
	
	  deleteButton.addEventListener("click", function () {
		memeElement.remove();
	  });


	  return memeElement;
	}
  
	return null;
  }
  
