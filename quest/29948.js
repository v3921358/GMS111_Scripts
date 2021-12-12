/*
	名字:	克里塞的拯救者
	地圖:	克里塞村
	描述:	200100010
*/

var status = -1;

function start(mode, type, selection) {
	if (qm.haveItem(1142259,1) && qm.getPlayer().getLevel() >= 10) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
	}
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.haveItem(1142259,1) && qm.getPlayer().getLevel() >= 10) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
	}
	qm.dispose();
}