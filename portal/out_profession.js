/*
	名字:	隐藏地图
	地圖:	专业技术村庄
	描述:	910001000
*/

function enter(pi) {
	var returnMap = pi.getSavedLocation("ARDENTMILL");
		pi.clearSavedLocation("ARDENTMILL");

	if (returnMap < 0) {
		returnMap = 100000000; // to fix people who entered the fm trough an unconventional way
		}
		var target = pi.getMap(returnMap);
		var portal = target.getPortal("profession");
	if (portal == null) {
		portal = target.getPortal(0);
		}
	if (pi.getMapId() != target) {
		pi.getPlayer().changeMap(target, portal);
}
}