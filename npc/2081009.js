/*
	名字:	姆斯
	地圖:	森林岔道
	描述:	240010400
*/

function start() {
	if (cm.getQuestStatus(6180) == 1) {
		cm.sendYesNo("你要去盾牌訓練場，我會送你过去的！");
	} else {
		cm.sendOk("這裡是很危險的地方，沒有能力的就快點離開！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(924000000, 0);
		}
	cm.dispose();
}
