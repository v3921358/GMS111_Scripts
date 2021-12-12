/*
	名字:	黄金寺院
	地圖:	809060000
	描述:	809060000
*/

function enter(pi) {
	if (pi.getPlayer().getMapId() == 809060000) {
		pi.warp(809061000,6);
	} else {
		pi.warp(950101000,6);
}
}