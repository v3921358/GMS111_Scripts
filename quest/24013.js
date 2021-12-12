/*
	名字:	精灵的英雄3转
	地圖:
	描述:
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("……精灵之王双弩精灵……你已经具备了资格，我允许你获得国王之力。", 1033210);
	if (status == 1){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.changeJob(2312);
		qm.dispose();
}
}