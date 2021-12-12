/*
	名字:	光夫人
	地圖:	昭和村
	描述:	801000000
*/

function start() {
	cm.sendYesNo("你想進澡堂嗎？那太好了 "+300+" 楓幣。");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("那請改天再來光顾。");
		}
	if (mode == 1) {
		if (cm.getMeso() < 300) {
			cm.sendOk("請確認是不是有 "+300+" 楓幣。");
		} else {
			cm.gainMeso(-300);

		if (cm.getPlayerStat("GENDER") == 0) {
			cm.warp(801000100);
		} else {
			cm.warp(801000200);
			}
			}
			}
		cm.dispose();
}