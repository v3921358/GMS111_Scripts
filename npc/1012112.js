/*
	����:	�����
	�؈D:	��������&amp;lt;������&gt;
	����:	910010500
*/

function start() {
	if (cm.getPlayer().getMapId() != 910010500) {
		cm.sendYesNo("����ȥӭ�»����o����?");
	} else {
		var chat = "#e<�M��΄գ�ӭ�»����o����>#n \r\n\r\n���fֻ���ڝM�r��#b#m910010000##k�ŕ����F���ص���������.ҪҊ�������Ԓ����횰�ӭ�»��N�ӷNֲ��ָ����λ�ã��ن����M�£����ܰ��������������o����ܚ����Ą���Ă��������Եõ�������#b���#k��\n\r\n\r\n��#eParty Members#n��2 - 4\r\n��#elevel#n��10 - 200 \r\n#b";
		chat += "\r\n#L0#�M���΄յ؈D";
		chat += "\r\n#L1#�һ�#v1002798:##t1002798#";
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
		if (ccPlayer == null || ccPlayer.getLevel() < 10 || ccPlayer.getLevel() > 200) {
				next = false;
				break;
				}
				size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("HenesysPQ");
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
				cm.sendOk("2 Party Members, all level#r 10 and level 200");
				}
				}
				break;
	case 1:
		if (!cm.canHold(1002798,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001101,10)) { //TODO JUMP
			cm.gainItem(1002798,1);
			cm.gainItem(4001101, -10);
		} else {
			cm.sendOk("��Ҫ10��#v4001101:##b#t4001101##k��");
			}
			}
		cm.dispose();
}