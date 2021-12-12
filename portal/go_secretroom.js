/*
	名字:	蘑菇城
	地圖:	摩天楼3
	描述:	106021000
*/

var baseid = 106021000;
var dungeonid = 106021001;   //保安室
var dungeons = 10;

function enter(pi) {
	if (pi.getPlayer().getMapId() == baseid) {
		for(var i = 0; i < dungeons; i++) {
	if (pi.getMap(dungeonid + i).getCharactersSize() == 0) {
		pi.warp(dungeonid + i, 0);
		return true;
		}
		}
		pi.playerMessage(5, "所有迷你地下城現在都在使用中，請稍後再試。");
		return false;
	} else {
		pi.warp(baseid, "in00");
}
}
