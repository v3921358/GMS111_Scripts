/*
	名字:	杜阿特
	地圖:	金字塔山丘
	描述:	926010000
*/

var status = 0;

var section = 0;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 99 || status == 1 || status == 2 && mode == 0) {
		cm.dispose();
		return;
	}
	status--;
	}
	if (status == 1) {
	if (cm.getMapId() >= 926020001 && cm.getMapId() <= 926020004) {
		var itemid = 4001321 + (cm.getMapId() % 10);
			if (!cm.canHold(itemid)) {
			cm.sendOk("無法收納物品，請清理背包空間..");
		} else {
			cm.gainItem(itemid,1);
			cm.warp(cm.getMapId() - 10000, 0);
			}
			cm.dispose();
		} else if (cm.getMapId() >= 926010001 && cm.getMapId() <= 926010004) {
			cm.warp(926010000,0);
			cm.dispose();
		} else if (cm.getMapId() >= 926010100 && cm.getMapId() <= 926013504) {
			cm.sendYesNo("你確定想離開這個地方嗎？");
			status = 99;
		} else {
			cm.sendSimple("#e<組隊任務：奈特的金字塔>#n  \n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n： 40 - 200  \n\r\n\r\n#b#e#L1#進入金字塔#l#n\r\n#L2#雪人法老墓#l\r\n#L3#聽一個關於雪人法老珠寶的故事#l\r\n#L4#兌換<法老護衛者>勳章#l#k");
			}
			}
	if (status == 2) {
		section = selection;
		if (selection == 1) {
			var chat = "請選擇你對應難度： \r\n#b";
			//chat += "\r\n#L0##v3994115#";
			chat += "\r\n#L1##v3994116#";
			chat += "#L2##v3994117#";
			chat += "#L3##v3994118#";
			cm.sendSimple(chat);
			}
		if (selection == 2) {
			var chat = "只有攜帶了相應寶石我才能讓你進去： \r\n#b";
			chat += "\r\n#L0##v4001322:##t4001322#";
			chat += "\r\n#L1##v4001323:##t4001323#";
			chat += "\r\n#L2##v4001324:##t4001324#";
			chat += "\r\n#L3##v4001325:##t4001325#";
			cm.sendSimple(chat);
			}
		if (selection == 3) {
			cm.sendOk("在耶提法老的墳墓裏，你可以獲得#e#b#t2022613##k#n證明自己有能力打敗小耶提法老，法老的複製人。盒子裏藏著一個非常特別的寶藏。它是#b#b#t1132012##k#n.\r\n#i1132012# \r\n\r\n如果你能在地獄模式下生存，你將得到#b#b#t1132013##k#n.\r\n#i1132013# \r\n當然，奈特是不允許這種事發生。");
			cm.dispose();
			}
		if (selection == 4) {
			var record = cm.getQuestRecord(7760);
			var data = record.getCustomData();
			if (data == null) {
				record.setCustomData("0");
				data = record.getCustomData();
				}
				var mons = parseInt(data);
			if (mons < 50000) {
				cm.sendOk("請打敗金字塔裏至少五萬個怪物. Kills : " + mons);
			} else if (cm.canHold(1142142) && !cm.haveItem(1142142)){
				cm.gainItem(1142142,1);
				cm.forceStartQuest(29932);
				cm.forceCompleteQuest(29932);
			} else {
				cm.sendOk("無法收納物品，請清理背包空間。");
				}
				cm.dispose();
				}
				}
	if (status == 3) {
		if (section == 1) {
			var cont_ = false;
			if (selection == 0) { //easy; 40-45
				if (cm.getPlayer().getLevel() < 40) {
					cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：40 - 60");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：40 - 60");
				} else {
					cont_ = true;
					}
				} else if (selection == 1) { //normal; 46-50
					if (cm.getPlayer().getLevel() < 45) {
					cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：45 - 60");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：45 - 60");
				} else {	
					cont_ = true;
					}
					}
			if (selection == 2) { //hard; 51-60
				if (cm.getPlayer().getLevel() < 50) {
					cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：50 - 60");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：50 - 60");
				} else {
					cont_ = true;
					}
					}
			if (selection == 3) { //hell; 61+
				if (cm.getPlayer().getLevel() < 61) {
					cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：60 - 200");
				} else {
					cont_ = true;
					}
					}
				if (cont_ && cm.isLeader()) {//todo
				if (!cm.start_PyramidSubway(selection)) {
					cm.sendOk("金字塔接納人員已滿，請稍後嘗試。");
					}
				} else if (cont_ && !cm.isLeader()) {
					cm.sendOk("You must be the party leader");
					}
					}
		if (section == 2) {
			var itemid = 4001322 + selection;
				if (!cm.haveItem(itemid,1)) {
					cm.sendOk("您沒有該物品，我無法給你服務。");
				} else {
					if (cm.bonus_PyramidSubway(selection)) {
					cm.gainItem(itemid, -1);
				} else {
					cm.sendOk("金字塔接納人員已滿，請稍後嘗試。");
					}
					}
					}
					cm.dispose(); //todo
					}
	if (status == 100) {
		cm.warp(926010000,0);
		cm.dispose();
}
}