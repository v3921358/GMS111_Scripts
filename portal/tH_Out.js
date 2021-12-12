/*
	名字:	魔女塔
	地圖:	魔女塔入口
	描述:	980040000
*/

function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap < 0) {
		returnMap = 100000000; // to fix people who entered the fm trough an unconventional way
		}
		pi.clearSavedLocation("MULUNG_TC");
		pi.warp(returnMap, "unityPortal2"); 
		return true;
}