/*
	名字:	奇袭者之路
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
	if (qm.getQuestStatus(20105) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20105) == 1) {
		qm.sendAcceptDecline("你已經做好選擇了嗎？ 選擇之後是不能反悔的，所以務必慎重。 你真的要#b選擇奇襲者之路#k嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1482014#   #t1482014#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1500);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1482014,1);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("現在你已經是奇襲者了。 如果你想變得更強，可以在内容窗（S鍵）中提升相應的内容。 如果覺得太難，可以使用#b自動分配#k。 這對還不熟悉奇襲者職業的人而言非常有用。");
		}
	if (status == 2)
		qm.sendNext("另外，我給你分配了一些#bSP#k，你可以打開#bSkill選單#k學習技能。 當然，一開始並不是所有技能都可以學習，有些技能必須先學習其它技能後才可以學習。");
	if (status == 3)
		qm.sendNextPrev("你要記住，和初心者的時候不同，成為奇襲者之後如果死亡，會損失之前積累的部分經驗值。所以別光顧著打獵而忘了危險。 知道了嗎？");
	if (status == 4)
		qm.sendPrev("好了……作為冒險騎士團的騎士，希望你冒險愉快！");
	if (status == 5){
		qm.dispose();
}
}