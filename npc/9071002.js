/*
	名字:	梅里
	地圖:	怪物公园
	描述:	951000000
*/

function start() {
	var chat = "Welcome to  #b#m951000000##k\r\n#b";
	chat += "\r\n#L0#兌換#v4001514:##t4001514#";
	chat += "\r\n#L1#兌換#v4001516:##t4001516#";
	chat += "\r\n#L2#兌換#v4001522:##t4001522#";
	chat += "\r\n#L3#購買#v4001514:##t4001514#";
	chat += "\r\n#L4#購買#v4001516:##t4001516#";
	chat += "\r\n#L5#購買#v4001522:##t4001522#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.canHold(4001514,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001513,10)) {
			cm.gainItem(4001514,1);
			cm.gainItem(4001513, -10);
			cm.sendOk("請拿好妳的#v4001514:#期待下次光臨。");
		} else {
			cm.sendOk("#v4001514:#入場券，需要10個#v4001513:##b#t4001513##k");
			}
			break;
	case 1:
		if (!cm.canHold(4001516,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001515,10)) {
			cm.gainItem(4001516,1);
			cm.gainItem(4001515, -10);
			cm.sendOk("請拿好妳的#v4001516:#期待下次光臨。");
		} else {
			cm.sendOk("#v4001516:#入場券，需要10個#v4001515:##b#t4001515##k");
			}
			break;
	case 2:
		if (!cm.canHold(4001522,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001521,10)) {
			cm.gainItem(4001522,1);
			cm.gainItem(4001521, -10);
			cm.sendOk("請拿好妳的#v4001522:#期待下次光臨。");
		} else {
			cm.sendOk("#v4001522:#入場券，需要10個#v4001521:##b#t4001521##k");
			}
			break;
	case 3:
		if (cm.getMeso() < 100000 || !cm.canHold(4001514,1)){
			cm.sendOk("請查看是否有足够的楓幣或者 ETC 欄已滿。");
		} else {
			cm.gainItem(4001514,1);
			cm.gainMeso(-100000);
			cm.sendOk("謝謝惠顧，期待你的下次光臨。");
			}
			break;
	case 4:
		if (cm.getMeso() < 200000 || !cm.canHold(4001516,1)){
			cm.sendOk("請查看是否有足够的楓幣或者 ETC 欄已滿。");
		} else {
			cm.gainItem(4001516,1);
			cm.gainMeso(-200000);
			cm.sendOk("謝謝惠顧，期待你的下次光臨。");
			}
			break;
	case 5:
		if (cm.getMeso() < 300000 || !cm.canHold(4001522,1)){
			cm.sendOk("請查看是否有足够的楓幣或者 ETC 欄已滿。");
		} else {
			cm.gainItem(4001522,1);
			cm.gainMeso(-300000);
			cm.sendOk("謝謝惠顧，期待你的下次光臨。");
			}
			}
		cm.dispose();
}