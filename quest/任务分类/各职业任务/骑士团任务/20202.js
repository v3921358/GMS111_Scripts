/*
	名字:	炎术士的骑士等级考试
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
	if (qm.getQuestStatus(20202) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20202) == 1) {
		qm.sendAcceptDecline("#v4032097:##t4032097#全部帶來啦……很好。 你具備了成為正式騎士的資格。 你想踏上正式騎士之路嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142067#   #t1142067#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1210);
		qm.removeAll(4032097);
		qm.gainItem(1142067,1);
		qm.sendNext("現在你已不再是修煉騎士。 你已經成為了冒險騎士團的正式騎士。");
		}
	if (status == 2)
		qm.sendNext("我給了你一些#bSP#k，並傳授了你炎術士技能中只有正式騎士才能學習的幾種技能。 希望你能和火焰一起變得更強！");
	if (status == 3)
		qm.sendPrev("好了，作為冒險騎士團的正式騎士，希望你能以更高的熱情繼續努力！");
	if (status == 4){
		qm.dispose();
}
}