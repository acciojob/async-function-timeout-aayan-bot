//your JS code here. If required.
async function promise1(){
	return new Promise((resolve)=>{
		let time=document.getElementById("delay").value
		let item=document.getElementById("text").value
		setTimeout(()=>{
			resolve(item)
		},time)
	})
}
async function display(){
	let data=await promise1()
	document.getElementById("output").innerHTML=`
	${data}
	`
}