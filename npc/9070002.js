/*
	名字:	斗神证物交换机
	地圖:	赤壁
	描述:	960000000
*/

function start() {
	var chat = "你現在有 #r" + cm.getPlayer().getBattlePoints() + "BP#b";
	chat += "\r\n#L0##i4310015##t4310015# x 1 (500BP)";
	chat += "\r\n#L1##i4310015##t4310015# x 4 (1500BP)";
	chat += "\r\n#L2##i4310015##t4310015# x 7 (2500BP)";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.canHold(4310015,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.getPlayer().getBattlePoints() >= 500) { //TODO JUMP
			cm.getPlayer().setBattlePoints(cm.getPlayer().getBattlePoints() - 500);
			cm.gainItem(4310015,1);
		} else {
			cm.sendOk("檢查您是否有正確的BP。");
			}
			break;
	case 1:
		if (!cm.canHold(4310015,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.getPlayer().getBattlePoints() >= 1500) { //TODO JUMP
			cm.getPlayer().setBattlePoints(cm.getPlayer().getBattlePoints() - 1500);
			cm.gainItem(4310015,4);
		} else {
			cm.sendOk("檢查您是否有正確的BP。");
			}
			break;
	case 2:
		if (!cm.canHold(4310015,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.getPlayer().getBattlePoints() >= 2500) { //TODO JUMP
			cm.getPlayer().setBattlePoints(cm.getPlayer().getBattlePoints() - 2500);
			cm.gainItem(4310015,7);
		} else {
			cm.sendOk("檢查您是否有正確的BP。");
			}
			}
		cm.dispose();
}