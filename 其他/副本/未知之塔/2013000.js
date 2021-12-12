/*
	名字:	温莉
	地圖:	未知之塔
	描述:	200080101
*/

function start() {
	if (cm.getMapId() == 920010000) { //inside orbis pq
		cm.sendOk("我們必須先救出幫傭易克，收集20個#v4001063:#雲的碎片丟去發光的球球哪裡，才可以將封印解開!");
		cm.dispose();
		return;
		}
	var chat = "#e<組隊任務：女神的痕迹>#n \r\n\r\n 2 Party Members, all level#r 40 and level 200 \r\n#b";
	chat += "\r\n#L0#進入任務地圖";
	chat += "\r\n#L1#兌換#v1082232:##t1082232#";
	chat += "\r\n#L2#兌換#v1082322:##t1082322#";
	chat += "\r\n#L3#兌換#v1072455:##t1072455#";
	chat += "\r\n#L4#兌換#v1072534:##t1072534#";
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
			var em = cm.getEventManager("OrbisPQ");
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
		if (!cm.canHold(1082232,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001158,10)) {
			cm.gainItem(1082232,1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("兌換#v1082232:##b#t1082232##k 需要 10個 #v4001158:##b#t4001158##k。");
			}
			break;
	case 2:
		if (!cm.canHold(1082322,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001158,10) && cm.haveItem(1082232,1)) {
			cm.gainItem(1082322,1);
			cm.gainItem(1082232,-1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("進階#v1082322:##b#t1082322##k 需要1個#v1082232:##b#t1082232##k + 10個 #v4001158:##b#t4001158##k。");
			}
			break;
	case 3:
		if (!cm.canHold(1072455,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001158,10)) {
			cm.gainItem(1072455,1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("兌換#v1072455:##b#t1072455##k 需要 10個 #v4001158:##b#t4001158##k。");
			}
			break;
	case 4:
		if (!cm.canHold(1072534,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001158,10) && cm.haveItem(1072455,1)) {
			cm.gainItem(1072534,1);
			cm.gainItem(1072455,-1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("進階#v1072534:##b#t1072534##k 需要1個#v1072455:##b#t1072455##k + 10個 #v4001158:##b#t4001158##k。");
			}
			}
		cm.dispose();
}