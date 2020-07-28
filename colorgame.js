var numSquares = 6
var colors = generateColors(numSquares)
var squares = document.querySelectorAll(".squares")
var message = document.querySelector("#message")
var heading = document.querySelector("#heading")
var h1 = document.querySelector("h1")
var newColor = document.querySelector("#reset")
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")
var pickedColor = pick(colors)
heading.textContent=pickedColor
for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener("click", function(){
    	if(this.style.backgroundColor===pickedColor){
    		message.textContent="Correct"
    		changeColor(pickedColor)
            h1.style.backgroundColor=pickedColor
            newColor.textContent="Play Again?"
    	}
    		else{
    			this.style.backgroundColor="#232323"
    			message.textContent="Try Again"
    		}
    })
}

function changeColor(color){
	for(i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color
	}
}

function pick(arr){
	var random = Math.floor(Math.random()*arr.length)
	return(arr[random])
}

function generateColors(num){
	var arr = []
	for(i=0; i<num; i++){
		arr.push(generate())
	}
	return(arr)
}

function generate(){
	var r=Math.floor(Math.random()*255+1)
	var g=Math.floor(Math.random()*255+1)
    var b=Math.floor(Math.random()*255+1)
    return("rgb("+ r +", "+ g +", "+ b +")")
}

newColor.addEventListener("click",function(){
	newColor.textContent="New Colors"
	message.textContent=""
    colors = generateColors(numSquares)
	pickedColor = pick(colors)
    heading.textContent=pickedColor
    for(i=0; i<squares.length; i++){
    	squares[i].style.backgroundColor=colors[i]
    }
    h1.style.backgroundColor="steelblue"
	})

easy.addEventListener("click", function(){
	easy.classList.add("selected")
	hard.classList.remove("selected")
	newColor.textContent="New Colors"
	message.textContent=""
	numSquares=3
	colors = generateColors(numSquares)
    pickedColor = pick(colors)
    heading.textContent=pickedColor
    for(i=0; i<squares.length; i++){
    	if(colors[i]){
    		squares[i].style.backgroundColor=colors[i]
    	}
    	else{
    		squares[i].style.display="none"
    	}
    }
    h1.style.backgroundColor="steelblue"
})

hard.addEventListener("click", function(){
	easy.classList.remove("selected")
	hard.classList.add("selected")
	newColor.textContent="New Colors"
	message.textContent=""
	numSquares=6
	colors = generateColors(numSquares)
    pickedColor = pick(colors)
    heading.textContent=pickedColor
    for(i=0; i<squares.length; i++){
    		squares[i].style.backgroundColor=colors[i]
    		squares[i].style.display="block"
    }
    h1.style.backgroundColor="steelblue"
})