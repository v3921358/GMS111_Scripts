/*
	����:	������˹
	�؈D:	���ѵ����&amp;lt;������&gt;
	����:	910340700
*/

function start() {
	if (cm.getPlayer().getMapId() == 103000000) {
		cm.sendYesNo("����ȥ�M�Ӗ������");
	} else {
		var chat = "#e<�M��΄գ���һ��ͬ��>#n\r\n\r\n�@�e�����ֵĽM�Ӗ�������e���кܶ����y�������ͬ�ąf���͟o������ϵK\n\r\n\r\n��#eParty Members#n��2 - 4\r\n��#elevel#n��10 - 70\r\n#b";
		chat += "\r\n#L0#�M���΄յ؈D";
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
		if (ccPlayer == null || ccPlayer.getLevel() < 10 || ccPlayer.getLevel() > 70) {
				next = false;
				break;
				}
				size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("KerningPQ");
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
				cm.sendOk("\n\r\n\r\n��#eParty Members#n��2 - 4\r\n��#elevel#n��10 - 70");
				}
				}
				}
			cm.dispose();
}