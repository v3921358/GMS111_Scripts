/*
	名字:
	地圖:	被破坏的新叶城
	描述:	600000000
*/

var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
		qm.dispose();
	
}

function end(mode, type, selection) {
	if (qm.getQuestStatus(28752) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(28752) == 1) {
		qm.forceCompleteQuest();
	}
	qm.dispose();
}

