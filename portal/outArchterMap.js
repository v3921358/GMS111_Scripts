/*
	名字:	射手村
	地圖:	弓箭手培训中心
	描述:	100000201
*/

function enter(pi) {
		var returnMap = 100000000;   //射手村
		var target = pi.getMap(returnMap);
		var portal = target.getPortal("Achter00");
	if (portal == null) {
		portal = target.getPortal(0);
		}
	if (pi.getMapId() != target) {
		pi.getPlayer().changeMap(target, portal);
}
}