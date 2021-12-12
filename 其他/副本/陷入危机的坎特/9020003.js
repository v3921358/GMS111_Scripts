/*
	名字:	海豚
	地圖:	危海岔路&amp;lt;准备地图&gt
	描述:	923040000
*/

function start() {
	var chat = "#e<組隊任務：陷入危险的坎特>#n\r\n\r\n不好了！！坎特好像陷入危險了，他說要親自去調查海洋生物的异常行動，可是出去後就沒回來，肯定是出事了，我得把坎特找回來，請你幫幫忙！  \n\r\n\r\n－#eParty Members#n：2 - 6\r\n－#elevel#n：70 - 200#b";
	chat += "\r\n#L0#進入任務地圖";
	chat += "\r\n#L1#兌換#v1022123:##t1022123# (50 Pianus Scale)";
	chat += "\r\n#L2#兌換#v2048010:##t2048010# (5 Pianus Scale)";
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
			var em = cm.getEventManager("Kenta");
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
		if (!cm.canHold(1022123,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001535,50)) { //TODO JUMP
			cm.gainItem(1022123, 1);
			cm.gainItem(4001535, -50);
		} else {
			cm.sendOk("需要50個#v4001535:##b#t4001535##k。");
			}
			break;
	case 2:
		if (!cm.canHold(2048010,1) || !cm.canHold(2048011,1) || !cm.canHold(2048012,1) || !cm.canHold(2048013,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001535,5)) { //TODO JUMP
			cm.gainItem(2048010 + java.lang.Math.floor(java.lang.Math.random() * 4) | 0, 1);
			cm.gainItem(4001535, -5);
		} else {
			cm.sendOk("需要5個#v4001535:##b#t4001535##k。");
			}
			}
		cm.dispose();
}