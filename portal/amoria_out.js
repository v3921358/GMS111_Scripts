/*
	名字:	结婚小镇
	地圖:	结婚小镇
	描述:	680000000
*/

function enter(pi) {
	pi.warp(pi.getSavedLocation("AMORIA"), 0);
	pi.clearSavedLocation("AMORIA");
	return true;
}