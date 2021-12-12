/*
	名字:	蘑菇城
	地圖:	选择岔道
	描述:	106020400
*/

function enter(pi) {
	if (pi.getQuestStatus(2322) == 1) {
		pi.getPlayer().updateQuestCustomData(2322,"1");
		pi.showInstruction("有魔法屏障，暫時好像過不去，回去問問！！", 150, 5);
	} else  if (pi.getQuestStatus(2324) == 1) {
		pi.warp(106020501,0);  //城墙中央
		pi.getPlayer().updateQuestCustomData(2324,"1");
		pi.showInstruction("总算过来拉，回去报告下情况！！", 150, 5);
	} else  if (pi.isQuestFinished(2324)) {//判断是否完成任务
		pi.warp(106020501,0);
	} else {
		pi.playerMessage(-7,"[Portal]需要攜帶尖刺消除劑");
}
}