/*
	名字:	魂骑士的骑士等级考试
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
	if (qm.getQuestStatus(20201) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20201) == 1) {
		qm.sendAcceptDecline("#v4032096:##t4032096#全部帶來啦……很好。 你具備了成為正式騎士的資格。 你想踏上正式騎士之路嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142067#   #t1142067#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1110);
		qm.removeAll(4032096);
		qm.gainItem(1142067,1);
		qm.sendNext("現在你已不再是修煉騎士。 你已經成為了冒險騎士團的正式騎士。");
		}
	if (status == 2)
		qm.sendNext("我給了你一些#bSP#k，並傳授了你魂騎士技能中只有正式騎士才能學習的幾種技能。 希望你能和靈魂一起變得更強。");
	if (status == 3)
		qm.sendPrev("作為冒險騎士團的正式騎士，希望你能以端正的品行提高女皇的名譽。");
	if (status == 4){
		qm.dispose();
}
}