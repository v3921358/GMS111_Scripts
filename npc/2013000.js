/*
	����:	����
	�؈D:	δ֪֮��
	����:	200080101
*/

function start() {
	if (cm.getMapId() == 920010000) { //inside orbis pq
		cm.sendOk("�҂�����Ⱦȳ��͂��׿ˣ��ռ�20��#v4001063:#녵���Ƭ�Gȥ�l����������e���ſ��Ԍ���ӡ���_!");
		cm.dispose();
		return;
		}
	var chat = "#e<�M��΄գ�Ů��ĺۼ�>#n \r\n\r\n 2 Party Members, all level#r 40 and level 200 \r\n#b";
	chat += "\r\n#L0#�M���΄յ؈D";
	chat += "\r\n#L1#���Q#v1082232:##t1082232#";
	chat += "\r\n#L2#���Q#v1082322:##t1082322#";
	chat += "\r\n#L3#���Q#v1072455:##t1072455#";
	chat += "\r\n#L4#���Q#v1072534:##t1072534#";
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
			var em = cm.getEventManager("OrbisPQ");
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
		if (!cm.canHold(1082232,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001158,10)) {
			cm.gainItem(1082232,1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("���Q#v1082232:##b#t1082232##k ��Ҫ 10�� #v4001158:##b#t4001158##k��");
			}
			break;
	case 2:
		if (!cm.canHold(1082322,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001158,10) && cm.haveItem(1082232,1)) {
			cm.gainItem(1082322,1);
			cm.gainItem(1082232,-1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("�M�A#v1082322:##b#t1082322##k ��Ҫ1��#v1082232:##b#t1082232##k + 10�� #v4001158:##b#t4001158##k��");
			}
			break;
	case 3:
		if (!cm.canHold(1072455,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001158,10)) {
			cm.gainItem(1072455,1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("���Q#v1072455:##b#t1072455##k ��Ҫ 10�� #v4001158:##b#t4001158##k��");
			}
			break;
	case 4:
		if (!cm.canHold(1072534,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001158,10) && cm.haveItem(1072455,1)) {
			cm.gainItem(1072534,1);
			cm.gainItem(1072455,-1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("�M�A#v1072534:##b#t1072534##k ��Ҫ1��#v1072455:##b#t1072455##k + 10�� #v4001158:##b#t4001158##k��");
			}
			}
		cm.dispose();
}