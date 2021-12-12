/*
	名字:
	地圖:
	描述:
*/


var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getQuestStatus() == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus() == 1) {
		qm.forceCompleteQuest();
		}
		qm.dispose();
}
