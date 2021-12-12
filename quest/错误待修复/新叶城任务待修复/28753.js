/*
	名字:
	地圖:	外星人基地走廊
	描述:	610040010
*/

var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
		qm.dispose();
	
}

function end(mode, type, selection) {
	if (qm.getQuestStatus(28753) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(28753) == 1) {
		qm.forceCompleteQuest();
	}
	qm.dispose();
}

