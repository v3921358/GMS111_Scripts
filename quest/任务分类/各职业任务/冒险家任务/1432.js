/*
	名字:	骑士
	地圖:	长老公馆
	描述:	211000001
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(1432) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1432) == 1) {
		qm.sendNext("呵呵，和#b其他次元的武術教練#k戰鬥，感覺如何？ 那是#b神聖的石頭#k擁有的驚人力量所展現的神秘幻象……武術教練同意將你引向更强的戰士之路，所以才會現身。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("和真正的戰士#b武術教練#k戰鬥，你獲得了成為真正戰士的資格。 剩下的事情，就是轉職成#b騎士#k了……好了，做好接受新力量的準備了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(121);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("現在你是#b騎士#k啦。#b劍和鈍器#k的大師，真正的戰士，去盡情施展你的力量吧。");
		}
	if (status == 3){
		qm.dispose();
}
}