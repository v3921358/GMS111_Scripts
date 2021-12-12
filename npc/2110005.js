/*
	名字:	骆驼中巴
	地圖:	阿里安特北门外
	描述:	260020000
*/

function start() {
	if (cm.getMapId() == 260020000) {
		cm.sendYesNo("  不想走路？只需要#b1000 楓幣#k就可以到#b#m260020700##k。");
	} else {
		cm.sendYesNo("  不想走路？只需要#b1000 楓幣#k就可以到#b#m260020000##k。");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if(cm.getPlayer().getMeso() >= 1000) {
		if (cm.getMapId() == 260020000) {
			cm.warp(260020700, 0);
		} else {
			cm.warp(260020000, 0); 
			}
			cm.gainMeso(-1000);
		} else {
			cm.sendOk("喂，等等。你的钱好像不够……费用是#b1000#k楓幣……请确认库存中是否有足够的钱。");
			}
			}
		cm.dispose();
}