/*
	����:	�ܿ˶�
	�؈D:	ͨ�����ܵĴ���
	����:	610030020
*/

function start() {
	var chat = "#e<̽�U���p�t> \r\n��Ҫ1�w#v4032012:##b#t4032012##k������Ո \r\n 5 Party Members, all level#r 90 and level 200 \r\n#b";
	chat += "\r\n#L0#�M���΄յ؈D";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.haveItem(4032012, 1)) {
			cm.sendOk("#e<̽�U���p�t>#n\r\n\r\n\r\n����Ҫ1�w#v4032012:##b#t4032012##k������Ո��");
		} else if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("�ܱ�Ǹ���e��Ĺ����Σ�U���Ҳ���׌��Ϊ�ȥð�U�������������@��΄գ�Ո���V���ĽM�L�c��ՄԒ��");
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
				cm.sendOk("�_���e�`��Ո������ԇ��");
			} else {
				var prop = em.getProperty("state");
				if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
			} else {
				cm.sendOk("�΄����ڈ����У�Ո�Lԇ�����l����");
				}
				}
			} else {
				cm.sendOk("5 Party Members, all level#r 90 and level 200");
				}
				}
				}
			cm.dispose();
}