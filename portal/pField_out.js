/*
	名字:	唯一的路
	地圖:	宝物仓库出口
	描述:	390009999
*/

function enter(pi) {
	pi.playPortalSE();
	pi.warp(pi.getSavedLocation("RICHIE"), 0);
	pi.clearSavedLocation("RICHIE");
}