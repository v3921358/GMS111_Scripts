/*
	名字:	愤怒的对象在哪里
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getQuestStatus(23909) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(23909) == 1) {
		qm.forceCompleteQuest();
	}
	qm.dispose();
}
