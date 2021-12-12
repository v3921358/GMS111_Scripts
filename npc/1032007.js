/*
	名字:	售票员
	地圖:	天空之城方向升降场
	描述:	104020110
*/

function start() {
	cm.sendYesNo("你想出航嗎? 從這站到#b天空之城#k需要花費#b 5000楓幣#k 購買#v4031045:##b#t4031045##k 才可以起航。");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("謝謝光臨！");
		cm.dispose();
	} else {
	if (cm.getMeso() >= 5000 && cm.canHold(4031045)) {
		cm.gainItem(4031045,1);
		cm.gainMeso(-5000);
		cm.sendOk("請拿好你的船票，等待出航。");
	} else {
		cm.sendOk("你隨身攜帶的楓幣不够，或者請您檢查下背包ETC欄位是否裝滿。");
		}
	cm.dispose();
}
}