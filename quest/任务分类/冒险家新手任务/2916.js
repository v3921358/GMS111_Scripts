/*
	名字:	秀林茨的修炼2
	地圖:	训练场
	描述:	120000105
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("僅僅通過了一次考驗而已，可不能驕傲自滿。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("這次就提高一些訓練強度。 如何？ 做好準備了嗎？");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}