/*
	名字:	火毒巫师
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
	if (qm.getQuestStatus(1435) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1435) == 1) {
		qm.sendNext("#b其他次元的漢斯#k怎麼樣……呵呵，這就是#b神聖的石頭#k所擁有的力量。 可以在其他次元召喚出分身戰鬥的力量。 你得謝謝#b漢斯#k，他為你做了這麼細緻的準備…..");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("通過和真正的魔法師漢斯的戰鬥，你也獲得了成為真正魔法師的資格……剩下的事情就是轉職了。 你想成為更强的魔法師——巫師嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(211);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("現在你是#b巫師#k啦。#b火和毒#k的大師，真正的巫師，去盡情施展你的力量吧。");
		}
	if (status == 3){
		qm.dispose();
}
}