/*
	名字:	风灵使者之路
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("#b我等待著你的决定。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(20103) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20103) == 1) {
		qm.sendAcceptDecline("你已經做好選擇了嗎？ 選擇之後是不能反悔的，慎重的决定可以使人變得賢明。 你真的要#b選擇風靈使者之路#k嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1452051#   #t1452051# \r\n#i2060000# 500  #t2060000#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1300);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1452051,1);
		qm.gainItem(2060000,500);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("現在你已經是風靈使者了。 如果你想變得更強，可以在内容窗（S鍵）中提升相應的内容。 如果覺得太難，使用#b自動分配#k功能，可以使内容的分配變得更簡單。");
		}
	if (status == 2)
		qm.sendNext("我給你分配了一些#bSP#k。 你可以在#bSkill選單#k中學習技能。 有些技能需要先學習其它技能後才能學習，所以在學習技能的時候需要慎重考慮。");
	if (status == 3)
		qm.sendNextPrev("你要記住，和初心者的時候不同，成為風靈使者之後如果死亡，會損失之前積累的部分經驗值。");
	if (status == 4)
		qm.sendPrev("好了……作為冒險騎士團的一員，希望你能盡忠職守…。");
	if (status == 5){
		qm.dispose();
}
}