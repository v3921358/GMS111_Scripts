/*
	名字:	休彼德蔓
	地圖:	休彼德蔓的办公室
	描述:	980030000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "#e<組隊任務：怪物嘉年華2>#n  \n\r\n\r\n－#eParty Members#n：2 - 3\r\n－#elevel#n：50 - 200  \r\n－#eSign up for Monster Carnival#n \r\n#L100#兌換獎勵#l";
		var found = false;
		for (var i = 0; i < 3; i++){
		if (getCPQField(i+1) != "") {
			selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
			found = true;
			}
			}
		if (cm.getParty() == null) {
			cm.sendSimple("必須組隊才能參加#b#e<怪物嘉年華2>#k \r\n#L100#兌換獎勵#l");
		} else {
			if (cm.isLeader()) {
			if (found) {
			cm.sendSimple(selStr);
		} else {
			cm.sendSimple("現在沒有多餘的房間。\r\n#L100#兌換獎勵#l");
			}
		} else {
			cm.sendSimple("很抱歉，我不能與妳交談，請讓妳的組長與我談話。\r\n#L100#兌換獎勵#l");
			}
			}
			}
	if (status == 1) {
		if (selection == 100) {
		var chat = "#請選擇你想兌換的獎勵！\r\n#b";
		chat += "\r\n#L0#50 #v4001129:##t4001129# = #v1122007:##t1122007#";
		chat += "\r\n#L1#30 #v4001129:##t4001129# = #v2041211:##t2041211#";
		chat += "\r\n#L2#50 #v4001254:##t4001254# = #v1122058:##t1122058#";
		cm.sendSimple(chat);
		} else if (selection >= 0 && selection < 3) {
		var mapid = 980030000+((selection+1)*1000);
		if (cm.getEventManager("cpq2").getInstance("cpq"+mapid) == null) {
		if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 1 ? 4 : 3)) || cm.getPlayer().isGM()) {
		if (checkLevelsAndMap(50, 200) == 1) {
			cm.sendOk("  \n\r\n\r\n－#eParty Members#n：2 - 3\r\n－#elevel#n：50 - 200  \r\n－#e其中一名組員不符合要求。");
			cm.dispose();
		} else if (checkLevelsAndMap(50, 200) == 2) {
			cm.sendOk("組隊中的組員必須都在這個地圖。");
			cm.dispose();
		} else {
			cm.getEventManager("cpq2").startInstance(""+mapid, cm.getPlayer());
			cm.dispose();
			}
		} else {
			cm.sendOk("請符合入場人數要求。");
			}
		} else if (cm.getParty() != null && cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
			if (checkLevelsAndMap(50, 200) == 1) {
			cm.sendOk("  \n\r\n\r\n－#eParty Members#n：2 - 3\r\n－#elevel#n：50 - 200  \r\n－#e其中一名組員不符合要求。");
			cm.dispose();
		} else if (checkLevelsAndMap(50, 200) == 2) {
			cm.sendOk("組隊中的組員必須都在這個地圖。");
			cm.dispose();
		} else {
			//Send challenge packet here
			var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
			owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
			//if (owner.getConversation() != 1) {
			cm.openNpc(owner.getClient(), 2042006);
			//}
			cm.sendOk("申請函已經發送。");
			cm.dispose();
			}
		} else {
			cm.sendOk("參加 嘉年華2 的雙方必須有相同數量的組員。");
			cm.dispose();
			}
		} else {
			cm.dispose();
			}
			}
	if (status == 2) {
		if (selection == 0) {
			if (!cm.haveItem(4001129,50)) {
				cm.sendOk("You have no items.");
			} else if (!cm.canHold(1122007,1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else {
				cm.gainItem(1122007,1);
				cm.gainItem(4001129,-50);
				}
				cm.dispose();
				}
		if (selection == 1) {
			if (!cm.haveItem(4001129,30)) {
				cm.sendOk("You have no items.");
			} else if (!cm.canHold(2041211,1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else {
				cm.gainItem(2041211,1);
				cm.gainItem(4001129,-30);
				}
				cm.dispose();
				}
		if (selection == 2) {
			if (!cm.haveItem(4001254,50)) {
				cm.sendOk("You have no items.");
			} else if (!cm.canHold(1122058,1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else {
				cm.gainItem(1122058,1);
				cm.gainItem(4001254,-50);
				}
				cm.dispose();
}
}
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var valid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
	var cPlayer = it.next();
	if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
		valid = 1;
		}
	if (cPlayer.getMapid() != mapId) {
		valid = 2;
		}
		}
		return valid;
}

function getCPQField(fieldnumber) {
	var status = "";
	var event1 = cm.getEventManager("cpq2");
	if (event1 != null) {
		var event = event1.getInstance("cpq"+(980030000+(fieldnumber*1000)));
	if (event == null && fieldnumber < 1) {
		status = "Carnival Field "+fieldnumber+"(2v2)";
	} else if (event == null) {
		status = "Carnival Field "+fieldnumber+"(3v3)";
	} else if (event != null && (event.getProperty("started").equals("false"))) {
		var averagelevel = 0;
		for (i = 0; i < event.getPlayerCount(); i++) {
		averagelevel += event.getPlayers().get(i).getLevel();
		}
		averagelevel /= event.getPlayerCount();
		status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"users/Avg. Level "+averagelevel;
		}
		}
		return status;
}
