/*
	名字:	Witch Malady
	地圖:	鬧鬼宅邸外部
	描述:	682000000
*/

function start() {
	var chat = "#e<組隊任務：鬧鬼宅邸>#n Hello~I am Witch Malady.\r\n\r\n 2 Party Members, all level#r 10 and level 200\r\n#b";
	chat += "\r\n#L0#Go to Defeat Olivia - Easy (Level 10)";
	chat += "\r\n#L1#Go to Defeat Olivia - Medium (Level 30)";
	chat += "\r\n#L2#Go to Defeat Olivia - Hard (Level 70)";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (mode == 1) {
	var em = cm.getEventManager("Olivia");
	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
		return;
		}
	if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("很抱歉，我不能與妳交談，這樣做是違反規定的，如果妳想執行這項任務，請告訴妳的組長與我談話。");
	} else {
		var s = selection;
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer == null || ccPlayer.getLevel() < (s == 0 ? 10 : (s == 1 ? 30 : 70))) {
			next = false;
			break;
			}
			size++;
			}
			if (next && size >= 2) {
				if (em.getInstance("Olivia" + s) == null) {
					em.startInstance_Party("" + s, cm.getPlayer());
				} else {
					cm.sendOk("任務正在執行中，請嘗試其它頻道。");
					}
				} else {
					cm.sendOk("2 Party Members, all level#r 10 and level 200");
					}
					}
					}
				cm.dispose();
}