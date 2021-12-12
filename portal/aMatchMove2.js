/*
	名字:	阿裡安特競技場
	地圖:	競技場等候室
	描述:	980010000
*/

function enter(pi) { 
	var returnMap = pi.getSavedLocation("MULUNG_TC"); 
	if (returnMap < 0) { 
		returnMap = 910000000; // to fix people who entered the fm trough an unconventional way 
		} 
		pi.clearSavedLocation("MULUNG_TC"); 
		pi.warp(returnMap, "unityPortal2"); 
		return true;
}