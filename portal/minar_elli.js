/*
	名字:	北部森林
	地圖:	绿色树枝
	描述:	101030100
*/

function enter(pi) {
	if (pi.haveItem(4031346)) {
	if (pi.getMapId() == 240010100) {
		pi.warp(101030100, "minar00");
	} else {
		pi.warp(240010100, "elli00");
		}
		pi.gainItem(4031346, -1);
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]需要魔法種子，才能啟動此傳送門");
		return false;
}
}