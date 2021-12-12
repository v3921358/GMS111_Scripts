/*
	名字:	黄金寺院
	地圖:	809061000
	描述:	809061000
*/

function enter(pi) {
	if (pi.getPlayer().getMapId() == 809061000) {
		pi.warp(809060000,8);
	} else {
		pi.warp(950100000,8);
}
}