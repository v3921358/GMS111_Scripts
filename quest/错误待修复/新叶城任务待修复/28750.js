/*
	名字:	Get Me Outta Here
	地圖:	The Cell of General Holding
	描述:	610040500
*/

var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
		qm.dispose();
	
}

function end(mode, type, selection) {
	if (qm.getQuestStatus(28750) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(28750) == 1) {
		qm.forceCompleteQuest();
                                qm.warp(610040501);
	}
	qm.dispose();
}

