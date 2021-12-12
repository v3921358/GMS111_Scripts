/*
	名字:	新加坡
	地圖:	毁灭的公园 II
	描述:	541020610
*/

var baseid = 541020610;
var dungeonid = 541020620; //
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