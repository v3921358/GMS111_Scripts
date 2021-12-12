/*
	名字:	制造特殊药水
	地圖:	武陵
	描述:	250000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你有什麼事嗎？ 嗯？ 復原#v4220151:##t4220151#？ 讓我看看……哎呀，你怎麼能把#t4220151#放在沸水裏煮呢？ 只有#p2090004#那個傻瓜才會犯這種錯誤。 還好紙張的質地比較堅韌。");
	if (status == 1)
		qm.sendNextPrev("要復原#t4220151#，也不是不可能的事。 只要用特殊的墨水，就能讓它恢復原來的狀態。 我可以幫你製作#t4032342#，你只要幫我蒐集資料就行。 當然，我還得收一點點手續費。");
	if (status == 2)
		qm.sendAcceptDecline("需要50個稻草玩偶，50個修煉木偶的痕迹，100個修煉罎子碎片，外加500000手續費。");
	if (status == 3)
		qm.sendPrev("呵呵！ 騙你的了，既然是#p2090004#讓你過來的，我也一定會幫這個忙，你先拿去吧！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i4032342# 8 #t4032342#");
	if (status == 4){
		qm.forceStartQuest();
		qm.forceStartQuest(21763, '800'); //给予完成任务条件
		qm.gainItem(4032342, 8);
		qm.forceCompleteQuest();
		qm.dispose();
}
}
