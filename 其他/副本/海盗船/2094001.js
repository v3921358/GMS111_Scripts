/*
	名字:	百草堂
	地圖:	无恙的感谢
	描述:	925100600
*/

function start() {
	var chat = "你的选择 \r\n#b";
	chat += "\r\n#L0#離開這裡";
	chat += "\r\n#L1#兌換#v1002571:##t1002571#";
	chat += "\r\n#L2#進階#v1002572:##t1002572#";
	chat += "\r\n#L3#進階#v1002573:##t1002573#";
	chat += "\r\n#L4#進階#v1002574:##t1002574#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		cm.removeAll(4001117);
		cm.removeAll(4001120);
		cm.removeAll(4001121);
		cm.removeAll(4001122);
		cm.warp(251010404, 0);
		break;
	case 1:
		if (!cm.canHold(1002571)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001455, 20)) { //TODO JUMP
			cm.gainItem(1002571,1);
			cm.gainItem(4001455, -20);
			cm.sendOk("兌換成功，請拿好你的#v1002571:#");
		} else {
			cm.sendOk("兌換#v1002571:#需要20個#v4001455:##b#t4001455##k。");
			}
			break;
	case 2:
		if (!cm.canHold(1002572,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(1002571) && cm.haveItem(4001455, 20)) {
			cm.gainItem(1002571,-1);
			cm.gainItem(4001455, -20);
			cm.gainItem(1002572, 1);
			cm.sendOk("進階成功，請拿好你的#v1002572:#");
		} else {
			cm.sendOk("進階#v1002572:#需要一個#v1002571:#+20個#v4001455:##b#t4001455##k。");
			}
			break;
	case 3:
		if (!cm.canHold(1002573,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(1002572) && cm.haveItem(4001455, 20)) {
			cm.gainItem(1002572,-1);
			cm.gainItem(4001455, -20);
			cm.gainItem(1002573, 1);
			cm.sendOk("進階成功，請拿好你的#v1002573:#");
		} else {
			cm.sendOk("進階#v1002573:#需要一個#v1002572:#+20個#v4001455:##b#t4001455##k。");
			}
			break;
	case 4:
		if (!cm.canHold(1002574,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(1002573) && cm.haveItem(4001455, 20)) {
			cm.gainItem(1002573,-1);
			cm.gainItem(4001455, -20);
			cm.gainItem(1002574, 1);
			cm.sendOk("進階成功，請拿好你的#v1002574:#");
		} else {
			cm.sendOk("進階#v1002574:#需要一個#v1002573:#+20個#v4001455:##b#t4001455##k。");
			}
			}
		cm.dispose();
}