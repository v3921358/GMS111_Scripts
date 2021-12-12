/*
	名字:	杰克恩
	地圖:	通往秘密的大厅
	描述:	610030020
*/

function start() {
	var chat = "#e<探險：緋紅> \r\n需要1顆#v4032012:##b#t4032012##k才能申請 \r\n 5 Party Members, all level#r 90 and level 200 \r\n#b";
	chat += "\r\n#L0#進入任務地圖";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.haveItem(4032012, 1)) {
			cm.sendOk("#e<探險：緋紅>#n\r\n\r\n\r\n你需要1顆#v4032012:##b#t4032012##k才能申請。");
		} else if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
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
				size += (ccPlayer.isGM() ? 5 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("CWKPQ");
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
				cm.sendOk("5 Party Members, all level#r 90 and level 200");
				}
				}
				}
			cm.dispose();
}