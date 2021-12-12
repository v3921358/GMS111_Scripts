/*
	名字:	达尔利
	地圖:	月秒的年糕&amp;lt;待机室&gt;
	描述:	910010500
*/

function start() {
	if (cm.getPlayer().getMapId() != 910010500) {
		cm.sendYesNo("你想去迎月花保護月妙?");
	} else {
		var chat = "#e<組隊任務：迎月花保護月妙>#n \r\n\r\n傳說只有在滿月時的#b#m910010000##k才會出現神秘的兔子月妙.要見到月妙的話，必須把迎月花種子種植到指定的位置，召喚出滿月，才能把月妙引出來，保護月妙不受殘暴的動物們的傷害，可以得到它做的#b年糕#k！\n\r\n\r\n－#eParty Members#n：2 - 4\r\n－#elevel#n：10 - 200 \r\n#b";
		chat += "\r\n#L0#進入任務地圖";
		chat += "\r\n#L1#兑换#v1002798:##t1002798#";
		cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.getPlayer().getMapId() != 910010500) {
		cm.warp(910010500, 0);
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
		if (ccPlayer == null || ccPlayer.getLevel() < 10 || ccPlayer.getLevel() > 200) {
				next = false;
				break;
				}
				size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("HenesysPQ");
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
				cm.sendOk("2 Party Members, all level#r 10 and level 200");
				}
				}
				break;
	case 1:
		if (!cm.canHold(1002798,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.haveItem(4001101,10)) { //TODO JUMP
			cm.gainItem(1002798,1);
			cm.gainItem(4001101, -10);
		} else {
			cm.sendOk("需要10個#v4001101:##b#t4001101##k。");
			}
			}
		cm.dispose();
}