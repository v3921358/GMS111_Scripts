/*
	名字:	废都广场
	地圖:	废都广场站
	描述:	103020020
*/

function enter(pi) {
	try {
		pi.warp(103020000, 2);  //地铁售票口
	} catch(e) {
		pi.playerMessage(5, "Error: " + e);
		e.printStackTrace();
}
}