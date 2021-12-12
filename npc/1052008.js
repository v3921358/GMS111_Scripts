/*
	名字:	宝箱
	地圖:	地铁管理处
	描述:	910360002
*/

function start() {
	if (cm.getQuestStatus(2055) == 1 && !cm.haveItem(4031039)) {
		cm.gainItem(4031039, 1); // Shumi's Coin
		cm.warp(103000000, 0);
	} else {
		var rand = 1 + Math.floor(Math.random() * 6);
		if (rand == 1) {
			cm.gainItem(4010003, 2); // Adamantium Ore
			}
		if (rand == 2) {
			cm.gainItem(4010000, 2); // Bronze Ore
			}
		if (rand == 3) {
			cm.gainItem(4010002, 2); // Mithril Ore
			}
		if (rand == 4) {
			cm.gainItem(4010005, 2); // Orihalcon Ore
			}
		if (rand == 5) {
			cm.gainItem(4010004, 2); // Silver Ore
			}
		if (rand == 6) {
			cm.gainItem(4010001, 2); // Steel Ore
			}
			cm.warp(103000000, 0);
			}
		cm.dispose();
}