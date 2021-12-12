/*
	名字:	新叶城出租车
	地圖:	新叶城-市区中心
	描述:	600000000
*/

function start() {
	if (cm.getMapId() == 600000000) {
		cm.sendYesNo("只需要#b1000 楓幣#k就可以到#b鬧鬼宅邸外部#k。");
	} else {
		cm.sendYesNo("只需要#b1000 楓幣#k就可以到#b新葉城#k。");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getMeso() < 1000) {
			cm.sendOk("請確認是不是有 "+1000+" 楓幣。");
		} else {
			cm.gainMeso(-1000);
		if (cm.getMapId() == 600000000) {
			cm.warp(682000000, 1);
		} else {
			cm.warp(600000000, 0);
			}
			}
			}
		cm.dispose();
}
