/*
	名字:	秘密地图
	地圖:	组队训练场&amp;lt;待机室&gt;
	描述:	910340700
*/

function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap < 0) {
		returnMap = 103000000; // to fix people who entered the fm trough an unconventional way
		}
		pi.clearSavedLocation("MULUNG_TC");
		pi.warp(returnMap, "unityPortal2");
		return true;
}