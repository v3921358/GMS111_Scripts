/*
	����:	����
	�؈D:	Σ����·&amp;lt;׼����ͼ&gt
	����:	923040000
*/

function start() {
	var chat = "#e<�M��΄գ�����Σ�յĿ���>#n\r\n\r\n�����ˣ������غ�������Σ�U�ˣ����fҪ�H��ȥ�{�麣��������쳣�Єӣ����ǳ�ȥ��͛]�؁��϶��ǳ����ˣ��ҵðѿ����һ؁�Ո��͎�æ��  \n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��70 - 200#b";
	chat += "\r\n#L0#�M���΄յ؈D";
	chat += "\r\n#L1#���Q#v1022123:##t1022123# (50 Pianus Scale)";
	chat += "\r\n#L2#���Q#v2048010:##t2048010# (5 Pianus Scale)";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
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
		if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 200) {
				next = false;
				break;
				}
				size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("Kenta");
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
				cm.sendOk("2 Party Members, all level#r 70 and level 200");
				}
				}
				break;

	case 1:
		if (!cm.canHold(1022123,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001535,50)) { //TODO JUMP
			cm.gainItem(1022123, 1);
			cm.gainItem(4001535, -50);
		} else {
			cm.sendOk("��Ҫ50��#v4001535:##b#t4001535##k��");
			}
			break;
	case 2:
		if (!cm.canHold(2048010,1) || !cm.canHold(2048011,1) || !cm.canHold(2048012,1) || !cm.canHold(2048013,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001535,5)) { //TODO JUMP
			cm.gainItem(2048010 + java.lang.Math.floor(java.lang.Math.random() * 4) | 0, 1);
			cm.gainItem(4001535, -5);
		} else {
			cm.sendOk("��Ҫ5��#v4001535:##b#t4001535##k��");
			}
			}
		cm.dispose();
}