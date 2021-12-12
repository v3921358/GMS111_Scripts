/*
	名字:	血刀
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
	if (qm.getQuestStatus(1447) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1447) == 1) {
		qm.sendNext("你順利通過了考試……很不錯嘛？ 雖然#b其他次元的達克魯#k只是分身，但我沒想到你能戰勝他。 達克魯讓我通過#b神聖的石頭#k召喚分身，我還說幹嘛興師動眾的，看來達克魯的話沒錯。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("和真正的飛俠達克魯的戰鬥，讓你變成了真正的血刀……雖然你自己還沒感覺到。 現在剩下的事情就只有轉職了。 做好成為更强的双刀——血刀的準備了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(433);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("現在起你是#b血刀#k啦。#b短劍#k的大師，真正的血刀，去盡情施展你的力量吧。");
		}
	if (status == 3){
		qm.dispose();
}
}