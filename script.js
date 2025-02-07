let inp=document.querySelector("input")

inp.addEventListener("click",()=>{
	let colorselect=document.querySelector("#colorSelect")
	let selectedIndex=colorselect.selectedIndex;
	if(selectedIndex !== -1){
		colorselect.remove(selectedIndex)
	}
})