/*
	名字:	普洛
	地圖:	明珠港
	描述:	104000000
*/

function start() {
	cm.sendYesNo("你想去#b#m" + 914040000 + "##k嗎?，必須支付#b 500 楓幣#k 我才能带你过去。");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("等你考慮好再來找我吧！");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 500) {
		cm.gainMeso(-500);
		cm.warp(200090060,0);
		}
	cm.dispose();
}
}