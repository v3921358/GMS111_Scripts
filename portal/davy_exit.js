/*
	名字:	百草堂
	地圖:	海盗船小港口
	描述:	251010404
*/

function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap < 0) {
		returnMap = 251010401; // to fix people who entered the fm trough an unconventional way
		}
		pi.clearSavedLocation("MULUNG_TC");
		pi.warp(returnMap, "unityPortal2");
		return true;
}