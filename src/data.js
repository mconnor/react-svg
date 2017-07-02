
function randomVal() {
	let val = Math.floor(Math.random() * 20);
	console.log(val)
	return val;
}




export default  [
	[
     [1, randomVal()],
     [2, randomVal()],
     [3, randomVal()],
     [4, randomVal()],
     [18, randomVal()]
   ],
   [
     [1, randomVal()],
     [2, randomVal()],
     [3, randomVal()],
     [4, randomVal()],
     [5, randomVal()]
   ]
];
