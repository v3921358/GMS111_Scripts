/*
	名字:	拉克里斯
	地圖:	组队训练场&amp;lt;待机室&gt;
	描述:	910340700
*/

function start() {
	if (cm.getPlayer().getMapId() == 103000000) {
		cm.sendYesNo("你想去組隊訓練場？");
	} else {
		var chat = "#e<組隊任務：第一次同行>#n\r\n\r\n這裡是新手的組隊訓練場，裡面有很多困難，如果不同心協力就無法解决障礙\n\r\n\r\n－#eParty Members#n：2 - 4\r\n－#elevel#n：10 - 70\r\n#b";
		chat += "\r\n#L0#進入任務地圖";
		cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.getPlayer().getMapId() == 103000000) {
		cm.warp(910340700, 0);
		cm.dispose();
		}
		}
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
		if (ccPlayer == null || ccPlayer.getLevel() < 10 || ccPlayer.getLevel() > 70) {
				next = false;
				break;
				}
				size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("KerningPQ");
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
				cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 4\r\n－#elevel#n：10 - 70");
				}
				}
				}
			cm.dispose();
}