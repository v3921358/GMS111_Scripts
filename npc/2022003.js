/*
	名字:	邪摩斯
	地圖:	邪摩斯的房间
	描述:	211000002
*/

function start() {		
	var chat = "#e<組隊任務：儒怪皇帝的復活>#n\r\n侏儒怪皇帝#b#o9300281##k馬上就要復活了,用來鎮壓它的封印石力量越來越弱，看來只能到它的封印地去封锁它復活了……需要的話，我可以把你帶到那裡，但是你必須保證我的安全。 \r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：70 - 200#b";
	chat += "\r\n#L0#獨自去冰風穀（任務）";
	chat += "\r\n#L1#進入任務地圖";
	chat += "\r\n#L2#進階#v1032103:##t1032103#";
	chat += "\r\n#L3#進階#v1032104:##t1032104#";
	chat += "\r\n#L4#進階#v1032102:##t1032102#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		cm.warp(921120000, 0);
		break;
	case 1:
		if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險，如果妳想執行這項任務，請告訴妳的組長與我談話。");
		} else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 200) {
				next = false;
				break;
				}
				size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("Rex");
			if (em == null) {
				cm.sendOk("腳本錯誤，請稍後再試。");
			} else {
				var prop = em.getProperty("state");
				if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
			} else {
				cm.sendOk("任務正在執行中，請嘗試其它頻道。");
				}
				}
			} else {
				cm.sendOk("2 Party Members, all level#r 70 and level 200");
				}
				}
				break;
	case 2:
		if (cm.haveItem(1032078,1)) {
			if (!cm.canHold(1032103,1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
				cm.gainItem(1032103, 1);
				cm.gainItem(4001530, -20);
			} else {
				cm.sendOk("帶著20個#v4001530:##b#t4001530##k的證明回來。");
				}
			} else {
				cm.sendOk("當你有#v1032078:#的時候再來。");
				}
				break;
	case 3:
		if (cm.haveItem(1032079,1)) {
			if (!cm.canHold(1032104,1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
				cm.gainItem(1032104, 1);
				cm.gainItem(4001530, -20);
			} else {
				cm.sendOk("帶著20個#v4001530:##b#t4001530##k的證明回來。");
				}
			} else {
				cm.sendOk("當你有#v1032079:#的時候再來。");
				}
				break;
	case 4:
		if (cm.haveItem(1032077,1)) {
			if (!cm.canHold(1032102,1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
				cm.gainItem(1032102, 1);
				cm.gainItem(4001530, -20);
			} else {
				cm.sendOk("帶著20個#v4001530:##b#t4001530##k的證明回來。");
				}
			} else {
				cm.sendOk("當你有#v1032077:#的時候再來。");
				}
				}
			cm.dispose();
}