/*
	����:	�ܶ�
	�؈D:	���ص������&amp;lt;׼����ͼ&gt;
	����:	921160000
*/

function start() {
	var chat = "#e<�M��΄գ��Ӫz>#n  \n\r\n\r 2 Party Members, all level#r 70 and level 200#b";
	chat += "\r\n#L0#�M���΄յ؈D";
	chat += "\r\n#L1#���Q#v1132093:##b#t1132093#";
	chat += "\r\n#L2#���Q#v1132094:##b#t1132094#";
	chat += "\r\n#L3#���Q#v1132095:##b#t1132095#";
	chat += "\r\n#L4#���Q#v1132096:##b#t1132096#";
	chat += "\r\n#L5#���Q#v1132097:##b#t1132097#";
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
			var em = cm.getEventManager("Prison");
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
		if (!cm.canHold(1132093)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001534,10)) { //TODO JUMP
			cm.gainItem(1132093, 1);
			cm.gainItem(4001534, -10);
		} else {
			cm.sendOk("��Ҫ10�� #v4001534:##b#t4001534##k��");
			}
			break;
	case 2:
		if (!cm.canHold(1132094)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001534,20)) { //TODO JUMP
			cm.gainItem(1132094, 1);
			cm.gainItem(4001534, -20);
		} else {
			cm.sendOk("��Ҫ20�� #v4001534:##b#t4001534##k��");
			}
			break;
	case 3:
		if (!cm.canHold(1132095)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001534,20)) { //TODO JUMP
			cm.gainItem(1132095, 1);
			cm.gainItem(4001534, -20);
		} else {
			cm.sendOk("��Ҫ20�� #v4001534:##b#t4001534##k��");
			}
			break;
	case 4:
		if (!cm.canHold(1132096)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001534,20)) { //TODO JUMP
			cm.gainItem(1132096, 1);
			cm.gainItem(4001534, -20);
		} else {
			cm.sendOk("��Ҫ20�� #v4001534:##b#t4001534##k��");
			}
			break;
	case 5:
		if (!cm.canHold(1132097)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001534,20)) { //TODO JUMP
			cm.gainItem(1132097, 1);
			cm.gainItem(4001534, -20);
		} else {
			cm.sendOk("��Ҫ20�� #v4001534:##b#t4001534##k��");
			}
			}
		cm.dispose();
}