/*
	����:	аĦ˹
	�؈D:	аĦ˹�ķ���
	����:	211000002
*/

function start() {		
	var chat = "#e<�M��΄գ���ֻʵ۵ďͻ�>#n\r\n٪��ֻʵ�#b#o9300281##k�R�Ͼ�Ҫ�ͻ���,�Á�悉����ķ�ӡʯ����Խ��Խ��������ֻ�ܵ����ķ�ӡ��ȥ�������ͻ��ˡ�����Ҫ��Ԓ���ҿ��԰��㎧�����e���������횱��C�ҵİ�ȫ�� \r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��70 - 200#b";
	chat += "\r\n#L0#����ȥ���L�Y���΄գ�";
	chat += "\r\n#L1#�M���΄յ؈D";
	chat += "\r\n#L2#�M�A#v1032103:##t1032103#";
	chat += "\r\n#L3#�M�A#v1032104:##t1032104#";
	chat += "\r\n#L4#�M�A#v1032102:##t1032102#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		cm.warp(921120000, 0);
		break;
	case 1:
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
			var em = cm.getEventManager("Rex");
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
	case 2:
		if (cm.haveItem(1032078,1)) {
			if (!cm.canHold(1032103,1)) {
				cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
			} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
				cm.gainItem(1032103, 1);
				cm.gainItem(4001530, -20);
			} else {
				cm.sendOk("����20��#v4001530:##b#t4001530##k���C���؁�");
				}
			} else {
				cm.sendOk("������#v1032078:#�ĕr���ف�");
				}
				break;
	case 3:
		if (cm.haveItem(1032079,1)) {
			if (!cm.canHold(1032104,1)) {
				cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
			} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
				cm.gainItem(1032104, 1);
				cm.gainItem(4001530, -20);
			} else {
				cm.sendOk("����20��#v4001530:##b#t4001530##k���C���؁�");
				}
			} else {
				cm.sendOk("������#v1032079:#�ĕr���ف�");
				}
				break;
	case 4:
		if (cm.haveItem(1032077,1)) {
			if (!cm.canHold(1032102,1)) {
				cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
			} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
				cm.gainItem(1032102, 1);
				cm.gainItem(4001530, -20);
			} else {
				cm.sendOk("����20��#v4001530:##b#t4001530##k���C���؁�");
				}
			} else {
				cm.sendOk("������#v1032077:#�ĕr���ف�");
				}
				}
			cm.dispose();
}