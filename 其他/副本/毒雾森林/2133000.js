/*
	名字:	艾琳
	地圖:	很深的妖精森林
	描述:	300030100
*/

function start() {
	cm.removeAll(4001163);
	cm.removeAll(4001169);
	cm.removeAll(2270004);
	var chat = "#e<組隊任務：毒霧森林>#n\n\r曾經這片森林充滿歡樂，自從有個怪物來到之後，就打破了森林的寧靜，我一直在等待能解幫助我們的英雄到來，使森林恢復到以前的狀態。   \r\n\r\n 2 Party Members, all level#r 70 and level 200     \r\n#b";
	chat += "\r\n#L0#進入任務地圖";
	chat += "\r\n#L1#兌換#v1032060:##t1032060#";
	chat += "\r\n#L2#進階#v1032061:##t1032061#";
	chat += "\r\n#L3#進階#v1032101:##t1032101#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
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
			var em = cm.getEventManager("Ellin");
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

	case 1:
		if (!cm.canHold(1032060,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if(cm.haveItem(4001198,10)) { //TODO JUMP
			cm.gainItem(1032060,1);
			cm.gainItem(4001198, -10);
		} else {
			cm.sendOk("兌換#v1032060:##b#t1032060##k需要10個#v4001198:##b#t4001198##k。");
			}
			break;
	case 2:
		if (!cm.canHold(1032061,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(1032060) && cm.haveItem(4001198, 10)) {
			cm.gainItem(1032060,-1);
			cm.gainItem(1032061, 1);
			cm.gainItem(4001198, -10);
		} else {
			cm.sendOk("進階#v1032061:##b#t1032061##k需要一個#v1032060:##b#t1032060##k+10個#v4001198:##b#t4001198##k。");
			}
			break;
	case 3:
		if (!cm.canHold(1032101,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(1032061) && cm.haveItem(4001198, 10)) {
				cm.gainItem(1032061,-1);
				cm.gainItem(1032101, 1);
				cm.gainItem(4001198, -10);
		} else {
			cm.sendOk("進階#v1032101:##b#t1032101##k需要一個#v1032061:##b#t1032061##k+10個#v4001198:##b#t4001198##k。");
			}
			}
		cm.dispose();
}