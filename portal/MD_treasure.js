/*
	名字:	百草堂
	地圖:	红鼻子海盗团老巢2
	描述:	251010402
*/

var baseid = 251010402;
var dungeonid = 251010410;  //宝岛掠夺
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