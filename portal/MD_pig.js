/*
	名字:	海岸
	地圖:	波浪海岸
	描述:	120020200
*/

var baseid = 120020100;
var dungeonid = 120020200;   //猪的海岸
var dungeons = 10;

function enter(pi) {
	if (pi.getMapId() == baseid) {
		for (var i = 0; i < dungeons; i++) {
	if (pi.getPlayerCount(dungeonid + i) == 0) {
	if (pi.getPlayer().getLevel() <= 200) {
	if (pi.haveItem(4032055)) {
		pi.gainItem(4032055, -1);
		pi.warp(dungeonid + i, 0);
	} else {
		pi.playerMessage(-7,"[Portal]沒有持有楓之谷迷你城入場券，無法進入該地圖");
		}
	} else {
		pi.playerMessage(-7,"[Portal]等級超過了200級，無法進入該地圖");
		}
		return true;
		}
		}
		pi.playerMessage(-7,"[Portal]迷你地下城正在服務中，請嘗試其它頻道");
	} else
		pi.warp(baseid, "MD00");
		return true;
}