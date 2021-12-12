/*
	名字:	斯卡德的委托
	地圖:	冰峰雪域
	描述:	211000000
*/

var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	   if (qm.getQuestStatus(3184) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(3184) == 1) {
		qm.forceCompleteQuest();
                                qm.sendOk(".");
	}
	qm.dispose();
}