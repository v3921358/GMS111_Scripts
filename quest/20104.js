/*
	名字:	夜行者之路
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
	if (qm.getQuestStatus(20104) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20104) == 1) {
		qm.sendAcceptDecline("你已經做好選擇了嗎？ 選擇之後是不能反悔的，所以務必慎重。 你真的要#b選擇夜行者之路#k嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1472061#   #t1472061#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1400);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1472061,1);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("現在你已經是夜行者了。 如果你想變得更強，可以在内容窗（S鍵）中提升相應的内容。 如果覺得太難，可以使用#b自動分配#k。 這對還不熟悉夜行者的人而言非常有用。");
		}
	if (status == 2)
		qm.sendNext("還有，我給了你一些#bSP#k，你可以打開#b技能選單#k，學習技能.這樣打獵起來才會容易，當然，有些技能必須在學會其它技能後，才能學習.一開始先別去碰它。");
	if (status == 3)
		qm.sendNextPrev("你要記住，和初心者的時候不同，成為夜行者之後如果死亡，會損失之前積累的部分經驗值。所以要懂得如何照顧自己。");
	if (status == 4)
		qm.sendPrev("好了……作為冒險騎士團的騎士，去探索誰都無法到達的黑暗吧。");
	if (status == 5){
		qm.dispose();
}
}