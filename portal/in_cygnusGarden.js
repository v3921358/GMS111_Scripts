/*
	名字:	骑士团要塞
	地圖:	荣誉殿堂
	描述:	271030600
*/

function enter(pi) {
	if (pi.getQuestStatus(31149) == 1) {
		pi.getPlayer().updateQuestCustomData(31149,"find");
		pi.playerMessage(-7,"[Portal]确认了希纳斯的庭院的位置");
	} else if (pi.isQuestFinished(31149)) {
		pi.warp(271040000, 1);  //希纳斯的庭院  //pi.openNpc(2133005);  取消npc
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}