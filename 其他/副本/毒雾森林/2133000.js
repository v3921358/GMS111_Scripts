/*
	����:	����
	�؈D:	���������ɭ��
	����:	300030100
*/

function start() {
	cm.removeAll(4001163);
	cm.removeAll(4001169);
	cm.removeAll(2270004);
	var chat = "#e<�M��΄գ����Fɭ��>#n\n\r�����@Ƭɭ�ֳ�M�g�����ԏ��Ђ������֮�ᣬ�ʹ�����ɭ�ֵČ��o����һֱ�ڵȴ��ܽ�����҂���Ӣ�۵���ʹɭ�ֻ֏͵���ǰ�Ġ�B��   \r\n\r\n 2 Party Members, all level#r 70 and level 200     \r\n#b";
	chat += "\r\n#L0#�M���΄յ؈D";
	chat += "\r\n#L1#���Q#v1032060:##t1032060#";
	chat += "\r\n#L2#�M�A#v1032061:##t1032061#";
	chat += "\r\n#L3#�M�A#v1032101:##t1032101#";
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
			var em = cm.getEventManager("Ellin");
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
		if (!cm.canHold(1032060,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if(cm.haveItem(4001198,10)) { //TODO JUMP
			cm.gainItem(1032060,1);
			cm.gainItem(4001198, -10);
		} else {
			cm.sendOk("���Q#v1032060:##b#t1032060##k��Ҫ10��#v4001198:##b#t4001198##k��");
			}
			break;
	case 2:
		if (!cm.canHold(1032061,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(1032060) && cm.haveItem(4001198, 10)) {
			cm.gainItem(1032060,-1);
			cm.gainItem(1032061, 1);
			cm.gainItem(4001198, -10);
		} else {
			cm.sendOk("�M�A#v1032061:##b#t1032061##k��Ҫһ��#v1032060:##b#t1032060##k+10��#v4001198:##b#t4001198##k��");
			}
			break;
	case 3:
		if (!cm.canHold(1032101,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(1032061) && cm.haveItem(4001198, 10)) {
				cm.gainItem(1032061,-1);
				cm.gainItem(1032101, 1);
				cm.gainItem(4001198, -10);
		} else {
			cm.sendOk("�M�A#v1032101:##b#t1032101##k��Ҫһ��#v1032061:##b#t1032061##k+10��#v4001198:##b#t4001198##k��");
			}
			}
		cm.dispose();
}