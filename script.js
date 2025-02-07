//your JS code here. If required.
// let colorselect=document.querySelector("#colorSelect")
let inp=document.querySelector("input")

inp.addEventListener("click",()=>{
	let colorselect=document.querySelector("#colorSelect")
	let index=colorselect.selectIndex;
	if(index !== -1){
		colorselect.remove(index)
	}
})