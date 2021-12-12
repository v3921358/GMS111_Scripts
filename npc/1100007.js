/*
	名字:	奇里路
	地圖:	圣地方向升降场
	描述:	104020120
*/

function start() {
	cm.sendYesNo("這艘船開往神秘島的#b聖地#k，時間大約是#b1分鐘#k，費用是#b1000#k楓幣，您要支付費用乘船嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("那是個陽光灑滿樹葉、微風吹皺湖水的、美麗的、居住著神獸和女皇的地方。");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 1000) {
		cm.warp(200090030, 0);   //金银岛-圣地
		cm.gainMeso(-1000);
	} else {
		cm.sendOk("我也很想搭你過去，但是你隨身攜帶的楓幣不够。");
		}
	cm.dispose();
}
}