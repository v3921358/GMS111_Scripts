/*
	名字:	阿班
	地圖:	冰峰原野入口
	描述:	932000000
*/

function start() {
	var chat = "#e<組隊任務：冰騎士的詛咒>#n \n\r\n\r\ 阿俊說想變得勇敢，想成為所有人認可的勇敢的人，但是他卻被冰騎士騙了，變成了那副模樣，請幫幫我的朋友阿俊！要是不快點把詛咒解開的話，阿俊可能會和冰騎士一樣，永遠失去人類的心！ \r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：70 - 200#b";
	chat += "\r\n#L0#進入任務地圖";
	chat += "\r\n#L1#兌換#v1072510:##t1072510# (10 Cold Ice)";
	chat += "\r\n#L2#兌換#v1032100:##t1032100# (20 Cold Ice)";
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
			var em = cm.getEventManager("Iceman");
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
		if (!cm.canHold(1072510,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001529,10)) { //TODO JUMP
			cm.gainItem(1072510, 1);
			cm.gainItem(4001529, -10);
		} else {
			cm.sendOk("需要10塊#v4001529:##b#t4001529##k。");
			}
			break;
	case 2:
		if (!cm.canHold(1032100,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001529,20)) { //TODO JUMP
			cm.gainItem(1032100, 1);
			cm.gainItem(4001529, -20);
		} else {
			cm.sendOk("需要20塊#v4001529:##b#t4001529##k。");
			}
			}
		cm.dispose();
}