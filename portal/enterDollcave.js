/*
	名字:	南部岩山
	地圖:	石冢荒野
	描述:	102010100
*/

function enter(pi) {
	if (pi.getQuestStatus(21731) == 1 && pi.getPlayerCount(910510000) == 0) {
		pi.openNpc(1063011);
	} else if (pi.getQuestStatus(22549) == 1) {
		pi.warp(910050300,1);  //遗弃洞穴
	} else if (pi.getQuestStatus(22549) == 2) {
		pi.warp(910050300,1);
	} else if (pi.getQuestStatus(21728) == 1) {
		pi.forceStartQuest(21761, "0");
		pi.showInstruction("找到了人偶師的洞穴，但好像設定了暗號，快回去找日吉吧。", 150, 5);
		pi.playerMessage(-7,"[Portal]找到了人偶師的洞穴，但好像設定了暗號，快回去找日吉吧。");
	} else if (pi.getQuestStatus(20730) == 1 && pi.getPlayerCount(910510000) == 0) {
		pi.openNpc(1063011);
	} else {
		pi.playerMessage(-7,"[Portal]好像有一股力量封鎖此傳送點");
		return false;
}
}