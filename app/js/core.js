//js  code here

let img = document.querySelector('.slider__img')

let slider__item = document.getElementsByClassName('slider__item')
for (let j = 0; j < slider__item.length; j++) {
	slider__item[j].addEventListener('click', (e) => {
		img.src = e.path[0].currentSrc
	}) 
}



var krest = document.getElementsByClassName('krest');
var p = document.getElementsByClassName('p__class');
var qna = document.getElementsByClassName('qna__block');
for( var i = 0; i<krest.length; i++){
	krest[i].addEventListener('click', function(){
		this.firstElementChild.classList.toggle('active');
		let content = this.nextElementSibling;
		if(content.style.maxHeight){
			content.style.maxHeight = null;
		}
		else{
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	})
}
