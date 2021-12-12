/*
	名字:	豹弩游侠之路
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
	if (qm.getQuestStatus(23012) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23012) == 1) {
		qm.sendAcceptDecline("謝謝你這麼爽快地接受……你真的經過深思熟慮了嗎？ 豹弩遊俠雖然很强，但也很難操作。 在操作騎寵的同時，還必須進行攻擊，囙此在操控方面要求很高。 你能做到嗎？ 希望你仔細考慮清楚之後再回答我。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s30001061#  #q30001061# \r\n#i1142242#  #t1142242#\r\n#i1462092#  #t1462092#\r\n#i2061000# 500 #t2061000#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.resetStats(4, 4, 4, 4);
		qm.changeJob(3300);
		qm.teachSkill(30001061,1,1);
		qm.gainItem(1142242,1);
		qm.gainItem(1462092,1);
		qm.gainItem(2061000,500);
		qm.sendNext("很好！ 歡迎你正式成為反抗者。 從現在開始，你就是豹弩遊俠了。 希望你能騎著騎寵，靈活機動地消滅敵人。");
		}
	if (status == 2)
		qm.sendOk("如果在外面提到豹弩遊俠的話，難免會引起黑色之翼的懷疑。 所以從現在開始，你要叫我班主任。 你是來教室接受特別課程的學生。 呵呵呵……有意思吧？ 我的特別課程會把你培養成最好的豹弩遊俠。");
	if (status == 3){
		qm.dispose();
}
}