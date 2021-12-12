/*
	名字:	秘密地图
	地圖:	研究所C-4区域
	描述:	931050417
*/

function start() {
	if (cm.getQuestStatus(1628) == 1) {
		cm.sendOk("危險！ 快閃開！！！");
	} else {
		cm.sendOk("危險！ 快閃開！！！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(1641,"bomb");
	cm.dispose();
}