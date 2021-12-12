/*
	名字:	宝箱
	地圖:	地铁管理处
	描述:	910360203
*/

function start() {
	if (cm.getQuestStatus(2057) == 1 && !cm.haveItem(4031041)) {
		cm.gainItem(4031041, 1); // Shumi's Sack of Cash
	} else {
		var rand = 1 + Math.floor(Math.random() * 3);
		if (rand == 1) {
			cm.gainItem(4020007, 2); // Diamond Ore
			}
		if (rand == 2) {
			cm.gainItem(4020008, 2); // Black Crystal Ore
			}
		if (rand == 3) {
			cm.gainItem(4010006, 2); // Gold Ore
			}
			cm.warp(103000000, 0);
			}
		cm.dispose();
}
