/*
	名字:	秘密地图
	地圖:	危海岔路&amp;lt;准备地图&gt
	描述:	923040000
*/

function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap < 0) {
		returnMap = 230000000; // to fix people who entered the fm trough an unconventional way
		}
		pi.clearSavedLocation("MULUNG_TC");
		pi.warp(returnMap, "unityPortal2"); 
		return true;
}