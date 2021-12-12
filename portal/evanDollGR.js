/*
	名字:	石人寺院
	地圖:	石人寺院入口
	描述:	100040000
*/

function enter(pi) {
	if (pi.getQuestStatus(22556) == 1) {
		pi.forceStartQuest(22598, "1");
	} else if (pi.getQuestStatus(22557) == 1) {
		pi.forceStartQuest(22598, "2");
	} else {
		pi.warp(910600010,1);  //遗弃的巢穴
}
}
