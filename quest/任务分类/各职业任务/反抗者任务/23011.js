/*
	名字:	唤灵斗师之路
	地圖:	反抗者本部
	描述:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23011) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23011) == 1) {
		qm.sendAcceptDecline("你决心成為一名喚靈鬥師嗎？ 現在還可以重新選擇。 只要停止對話，放弃任務，然後和其他人對話就行。 你要考慮清楚。 你真的要選擇喚靈鬥師嗎？ 你覺得這個職業適合你的反抗者之路嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142242#  #t1142242#\r\n#i1382100#  #t1382100#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.resetStats(4, 4, 4, 4);
		qm.changeJob(3200);
		qm.gainItem(1142242,1);
		qm.gainItem(1382100,1);
		qm.sendNext("很好！ 歡迎你正式成為反抗者。 從現在開始你就是喚靈鬥師了。作為一名戰鬥的魔法師，希望你能勇敢地沖在最前面和敵人戰鬥。");
		}
	if (status == 2)
		qm.sendOk("你不能在外面自稱是喚靈鬥師。 如果被黑色之翼抓住了的話，就麻煩了。 從現在起，你要把我叫做班主任。 你是因為特別課程才到教室這裡來的。 呵呵……特別課程由我負責，我會好好帶你的。 ");
	if (status == 3){
		qm.dispose();
}
}