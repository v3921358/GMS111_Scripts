/*
	名字:	Amos the Strong
	地圖:	670010100
	描述:	670010100
*/

function start() {
	cm.removeAll(4031595);
	cm.removeAll(4031594);
	cm.removeAll(4031597);
	var chat = "#e<組隊任務：結婚小鎮>#n  \n\r\n\r 2 Party Members, all level#r 40 and level 200\r\n#b";
	chat += "\r\n#L0#進入任務地圖";
	chat += "\r\n#L1#離開這裡";
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
		if (ccPlayer == null || ccPlayer.getLevel() < 40 || ccPlayer.getLevel() > 200) {
				next = false;
				break;
				}
				size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("Amoria");
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
				cm.sendOk("2 Party Members, all level#r 40 and level 200");
				}
				}
				break;
	case 1:
		cm.warp(670010000, 0);
		}
	cm.dispose();
}
