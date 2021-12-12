/*
	名字:	射手
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
	if (qm.getQuestStatus(1439) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1439) == 1) {
		qm.sendNext("見到了#b其他次元的赫麗娜#k，感覺如何？ 是不是很吃驚？ 這就是#b神聖的石頭#k所擁有的驚人力量。 可以在其他次元召喚出分身戰鬥的力量。 據說這是#b赫麗娜#k特地為你準備的。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("和真正的弓箭手赫麗娜的戰鬥，會把你引上真正的弓箭手之路……你感覺到自己成長了嗎？ 現在剩下的事情就是轉職了。 做好成為更强的弓箭手——射手的準備了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(311);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("現在起你是#b射手#k啦。#b弓#k的大師，真正的射手，去盡情施展你的力量吧。");
		}
	if (status == 3){
		qm.dispose();
}
}