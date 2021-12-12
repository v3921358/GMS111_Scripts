/*
	名字:	夜行者的骑士等级考试
	地圖:	圣地
	描述:	130000000
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
	if (qm.getQuestStatus(20204) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20204) == 1) {
		qm.sendAcceptDecline("#v4032099:##t4032099#全部帶來啦……不過，就這點小事還不值得我稱讚。 我確認你擁有成為正式騎士的資格。 你願意成為正式騎士嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142067#   #t1142067#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1410);
		qm.removeAll(4032099);
		qm.gainItem(1142067,1);
		qm.sendNext("現在你已不再是修煉騎士。 你已經成為了冒險騎士團的正式騎士。");
		}
	if (status == 2)
		qm.sendNext("我給了你一些#bSP#k。 雖然不多，但可以用來學習新傳授的技能。 你可以和黑暗一起，試驗一下夜行者技能中只有正式騎士才能學習的那些技能。");
	if (status == 3)
		qm.sendPrev("作為冒險騎士團的正式騎士，希望你不要陷入黑暗，雖然自己身在黑影之中。");
	if (status == 4){
		qm.dispose();
}
}