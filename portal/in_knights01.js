/*
	名字:	骑士团要塞
	地圖:	要塞入口
	描述:	271030010
*/

function enter(pi) {
	if (pi.getQuestStatus(31124) == 1) {
		pi.getPlayer().updateQuestCustomData(31124,"end");
		pi.playerMessage(-7,"[Portal]要塞的警戒强化了，无法入场。");
	} else {
		pi.playerMessage(-7,"[Portal]要塞的警戒强化了，无法入场。");
}
}