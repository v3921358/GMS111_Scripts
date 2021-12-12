/*
	名字:	黄金寺院
	地圖:	809060000
	描述:	809060000
*/

function enter(pi) {
	if (pi.getPlayer().getMapId() == 809060000) {
		pi.warp(950100000,10);
	} else {
		pi.warp(809060000,10);
}
}