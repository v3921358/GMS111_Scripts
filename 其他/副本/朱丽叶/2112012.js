/*
	名字:	犹泰
	地圖:	犹泰的痕迹
	描述:	926110500
*/

var status = -1;

function action(mode, type, selection) {
	if (cm.getMapId() == 926100500) {
		cm.removeAll(4001130);
		cm.removeAll(4001131);
		cm.removeAll(4001132);
		cm.removeAll(4001133);
		cm.removeAll(4001134);
		cm.removeAll(4001135);
		var em = cm.getEventManager("Juliet");
	if (em != null) {
		var itemid = 4001159;
		if (!cm.canHold(itemid, 1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
			cm.dispose();
			return;
			}
			cm.gainItem(itemid, 1);
	if (em.getProperty("stage").equals("2")) {
			cm.gainNX(5000);
		} else {
			cm.gainNX(3500);
			}
			cm.gainExp_PQ(120, 1.0);
			}
			cm.addTrait("will", 25);
			cm.addTrait("sense", 1);
			cm.getPlayer().endPartyQuest(1205);
			cm.warp(926100700,0);
			cm.dispose();
			return;
			}
		if (mode > 0) {
		status++;
		} else {
		status--;
		}
	if (status == 0) {
		cm.removeAll(4001130);
		cm.removeAll(4001131);
		cm.removeAll(4001132);
		cm.removeAll(4001133);
		cm.removeAll(4001134);
		cm.removeAll(4001135);
		cm.sendSimple("#b#L0#離開這裡#l#k\r\n#L1#兌換#v1122010:##b#t1122010##k#l\r\n#L2#兌換#v1122118:##b#t1122118##k");
	} else {
		if (selection == 0) {
			cm.warp(926100600,0);
		} else if (selection == 1) {
			if (!cm.canHold(1122010,1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else if (cm.haveItem(4001160,10) && cm.haveItem(4001159,10)) {
				cm.gainItem(1122010,1);
				cm.gainItem(4001160,-10);
				cm.gainItem(4001159,-10);
			} else {
				cm.sendOk("需要#v4001160:##b#t4001160##k和#v4001159:##b#t4001159##k各10個才能兌換#v1122010:#");
				}
		} else if (selection == 2) {
			if (!cm.canHold(1122118,1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else if (cm.haveItem(4001160,20) && cm.haveItem(4001159,20)) {
				cm.gainItem(1122118,1);
				cm.gainItem(4001160,-20);
				cm.gainItem(4001159,-20);
			} else {
				cm.sendOk("需要#v4001160:##b#t4001160##k和#v4001159:##b#t4001159##k各20個才能兌換#v1122118:#");
				}
				}
			cm.dispose();
}
}