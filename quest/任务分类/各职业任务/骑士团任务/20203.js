/*
	名字:	风灵使者的骑士等级考试
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
	if (qm.getQuestStatus(20203) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20203) == 1) {
		qm.sendAcceptDecline("#v4032098:##t4032098#全部帶來啦……很好。 你具備了成為正式騎士的資格。 你想踏上正式騎士之路嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142067#   #t1142067#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1310);
		qm.removeAll(4032098);
		qm.gainItem(1142067,1);
		qm.sendNext("現在你已不再是修煉騎士。 你已經成為了冒險騎士團的正式騎士。");
		}
	if (status == 2)
		qm.sendNext("我給了你#bSP#k。 此外還傳授了風靈使者技能中只有正式騎士才能學習的技能。 希望你能和風一起不斷磨煉。");
	if (status == 3)
		qm.sendPrev("作為冒險騎士團的正式騎士，希望你能一直保持理性的思維…");
	if (status == 4){
		qm.dispose();
}
}