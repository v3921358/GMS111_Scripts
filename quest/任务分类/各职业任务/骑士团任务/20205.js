/*
	名字:	奇袭者的骑士等级考试
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
	if (qm.getQuestStatus(20205) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20205) == 1) {
		qm.sendAcceptDecline("#v4032100:##t40320100#全部帶來啦……都帶來了？ 嘻嘻嘻！ 我就知道你一定能行。 我確認你具備了成為正式騎士的資格！ 哈哈，你想成為正式騎士嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142067#   #t1142067#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1510);
		qm.removeAll(4032100);
		qm.gainItem(1142067,1);
		qm.sendNext("現在你已不再是修煉騎士。 你已經成為了冒險騎士團的正式騎士。");
		}
	if (status == 2)
		qm.sendNext("我給了你一些#bSP#k。 你現在可以學習奇襲者技能中只有正式騎士才能學習的技能了。 這些和閃電結合的强大技能，希望你好好使用。");
	if (status == 3)
		qm.sendPrev("別把成為正式騎士的事情看得太重。 不管多艱難的事情，也得懂得尋找樂趣。");
	if (status == 4){
		qm.dispose();
}
}