/*
	名字:	宝箱
	地圖:	地铁管理处
	描述:	910360102
*/

function start() {
	if (cm.getQuestStatus(2056) == 1 && !cm.haveItem(4031040)) {
		cm.gainItem(4031040, 1); // Shumi's Roll of Cash
		cm.warp(103000000, 0);
	} else {
		var rand = 1 + Math.floor(Math.random() * 7);
		if (rand == 1) {
			cm.gainItem(4020005, 2); // Sapphire Ore
			}
		if (rand == 2) {
			cm.gainItem(4020006, 2); // Topaz Ore
			}
		if (rand == 3) {
			cm.gainItem(4020004, 2); // Opal Ore
			}
		if (rand == 4) {
			cm.gainItem(4020001, 2); // Amethyst Ore
			}
		if (rand == 5) {
			cm.gainItem(4020003, 2); // Emerald Ore
			}
		if (rand == 6) {
			cm.gainItem(4020000, 2); // Garnet Ore
			}
		if (rand == 7) {
			cm.gainItem(4020002, 2); // AquaMarine Ore
			}
			cm.warp(103000000, 0);
			}
		cm.dispose();
}
