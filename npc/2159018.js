/*
	����:	����
	�؈D:	����ԭҰ���
	����:	932000000
*/

function start() {
	var chat = "#e<�M��΄գ����Tʿ���{��>#n \n\r\n\r\ �����f��׃���¸ң���ɞ��������J�ɵ��¸ҵ��ˣ��������s�����Tʿ�_�ˣ�׃�����Ǹ�ģ�ӣ�Ո�͎��ҵ����Ѱ�����Ҫ�ǲ����c���{����_��Ԓ���������ܕ��ͱ��Tʿһ�ӣ����hʧȥ����ģ� \r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��70 - 200#b";
	chat += "\r\n#L0#�M���΄յ؈D";
	chat += "\r\n#L1#���Q#v1072510:##t1072510# (10 Cold Ice)";
	chat += "\r\n#L2#���Q#v1032100:##t1032100# (20 Cold Ice)";
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
			var em = cm.getEventManager("Iceman");
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
		if (!cm.canHold(1072510,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001529,10)) { //TODO JUMP
			cm.gainItem(1072510, 1);
			cm.gainItem(4001529, -10);
		} else {
			cm.sendOk("��Ҫ10�K#v4001529:##b#t4001529##k��");
			}
			break;
	case 2:
		if (!cm.canHold(1032100,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001529,20)) { //TODO JUMP
			cm.gainItem(1032100, 1);
			cm.gainItem(4001529, -20);
		} else {
			cm.sendOk("��Ҫ20�K#v4001529:##b#t4001529##k��");
			}
			}
		cm.dispose();
}