/*
	名字:	世紮樂
	地圖:	競技場等候室
	描述:	980010000
*/

var points;

function start() {
	var record = cm.getPlayer().getIntNoRecord(15001);
	points = record == null ? "0" : record;
	var chat = "#e<組隊任務：BOSS戰>#n  \r\n\ －#eParty Members#n：2 - 6\r\n\ －#elevel#n：70 - 200 #b";
	chat += "\r\n#L3#Current points";
	chat += "\r\n\r\n#L0##v03994115#";
	chat += "#L1##v03994116#";
	chat += "#L2##v03994117#";
	chat += "#L28##v03994118#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (mode == 1) {
	switch (selection) {
	case 0:
		if (cm.getParty() != null) {
		if (cm.getDisconnected("BossQuestEASY") != null) {
			cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
		} else if (cm.isLeader()) {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var it = party.iterator();
			while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 70) {
			next = false;
			break;
			}
			}
			if (next) {
			var q = cm.getEventManager("BossQuestEASY");
		if (q == null) {
			cm.sendOk("腳本錯誤，請稍後嘗試。");
		} else {
			q.startInstance(cm.getParty(), cm.getMap());
			}
		} else {
			cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：70 - 200");
			}
		} else {
			cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險，如果妳想執行這項任務，請告訴妳的組長與我談話。");
			}
		} else {
			cm.sendOk("需要組隊才能執行此任務。");
			}
			break;
	case 1:
		if (cm.getParty() != null) {
		if (cm.getDisconnected("BossQuestMed") != null) {
			cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
		} else if (cm.isLeader()) {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var it = party.iterator();
			while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 100) {
			next = false;
			break;
			}
			}
			if (next) {
			var q = cm.getEventManager("BossQuestMed");
		if (q == null) {
			cm.sendOk("腳本錯誤，請稍後嘗試。");
		} else {
			q.startInstance(cm.getParty(), cm.getMap());
			}
		} else {
			cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：100 - 200");
			}
		} else {
			cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險，如果妳想執行這項任務，請告訴妳的組長與我談話。");
			}
		} else {
			cm.sendOk("需要組隊才能執行此任務。");
			}
			break;
	case 2:
		if (cm.getParty() != null) {
		if (cm.getDisconnected("BossQuestHARD") != null) {
			cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
		} else if (cm.isLeader()) {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var it = party.iterator();
			while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 120) {
			next = false;
			break;
			}
			}
			if (next) {
			var q = cm.getEventManager("BossQuestHARD");
		if (q == null) {
			cm.sendOk("腳本錯誤，請稍後嘗試。");
		} else {
			q.startInstance(cm.getParty(), cm.getMap());
			}
		} else {
			cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：120 - 200");
			}
		} else {
			cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險，如果妳想執行這項任務，請告訴妳的組長與我談話。");
			}
		} else {
			cm.sendOk("需要組隊才能執行此任務。");
			}
			break;
	case 28:
		if (cm.getParty() != null) {
		if (cm.getDisconnected("BossQuestHELL") != null) {
			cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
		} else if (cm.isLeader()) {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var it = party.iterator();
			while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 160) {
			next = false;
			break;
			}
			}
			if (next) {
			var q = cm.getEventManager("BossQuestHELL");
		if (q == null) {
			cm.sendOk("腳本錯誤，請稍後嘗試。");
		} else {
			q.startInstance(cm.getParty(), cm.getMap());
			}
		} else {
			cm.sendOk("\n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：160 - 200");
			}
		} else {
			cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險，如果妳想執行這項任務，請告訴妳的組長與我談話。");
			}
		} else {
			cm.sendOk("需要組隊才能執行此任務。");
			}
			break;
	case 3:
		cm.sendOk("#bCurrent Points : " + points);
		break;
		}
		}
		cm.dispose();
}