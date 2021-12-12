/*
	名字:	埃德尔斯坦公告牌
	地圖:	埃德尔斯坦
	描述:	310000000
*/

function start() {
	if (cm.isQuestActive(23005) && cm.haveItem(4032783)) {
		cm.sendYesNo("你想把海报贴在了留言板上？");
	} else {
		cm.sendOk("这是埃德尔斯坦自由市场的留言板，任何人都可以张贴海报。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.forceStartQuest(23006, "1");
		cm.gainItem(4032783, -1);
		cm.playerMessage(-1, "海报贴在了留言板上。");
		}
	cm.dispose();
}