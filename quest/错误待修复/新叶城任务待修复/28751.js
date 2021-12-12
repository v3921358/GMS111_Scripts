/*
	名字:	Gassing Up
	地圖:	外星人基地走廊
	描述:	610040010
*/

var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
		qm.dispose();
	
}

function end(mode, type, selection) {
	if (qm.getQuestStatus(28751) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(28751) == 1) {
		qm.forceCompleteQuest();
	}
	qm.dispose();
}

