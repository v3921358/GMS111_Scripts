/*
	����:	����̳ʯ��
	�؈D:	�������ռ�̳ǰ��
	����:	272020110
*/

var status = -1;

function start() {
	if (cm.getPlayer().getMapId() == 272020200) {
		cm.sendYesNo("�x�_�@�e��");
		status = 1;
		return;
		}
	if (cm.getPlayer().getLevel() < 120) {
		cm.sendOk("#e<̽�U���������r>#n\r\n\r\n\r\n��Ҫ120�ȼ����ϲ������𰢿����r��");
		cm.dispose();
		return;
		}
	if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3) {
		cm.sendOk("#e<̽�U���������r>#n\r\n\r\n\r\n�������rֻ���� 1��2��3 �l������");
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("ArkariumBattle");

	if (em == null) {
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.dispose();
		return;
		}
	var eim_status = em.getProperty("state");
	var marr = cm.getQuestRecord(160110);
	var data = marr.getCustomData();
	if (data == null) {
		marr.setCustomData("0");
		data = "0";
		}
		var time = parseInt(data);
	if (eim_status == null || eim_status.equals("0")) {

	var squadAvailability = cm.getSquadAvailability("Arkarium");
	if (squadAvailability == -1) {
	status = 0;
		if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��24С�r�Y���ѽ������^�������r��ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
			cm.dispose();
			return;
			}
			cm.sendYesNo("#e<̽�U���������r>#n\r\n\r\n\r\n�F�ڿ�����Ո�������r̽�Uꠣ�����ɞ�̽�U���L�᣿");

	} else if (squadAvailability == 1) {
		if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��24С�r�Y���ѽ������^�������r��ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
			cm.dispose();
			return;
			}
		// -1 = Cancelled, 0 = not, 1 = true
	var type = cm.isSquadLeader("Arkarium");
	if (type == -1) {
		cm.sendOk("����̽�U�ѽY����Ո�����]�ԡ�");
		cm.dispose();
		}
	if (type == 0) {
		var memberType = cm.isSquadMember("Arkarium");
		if (memberType == 2) {
			cm.sendOk("�������������Σ������م��ӱ���̽�U��");
			cm.dispose();
			}
		if (memberType == 1) {
			status = 5;
			cm.sendSimple("#e<̽�U���������r>#n\r\n\r\n\r\n#b#L0#��ӛ̽�U�#l \r\n#b#L1#�x�_̽�U�#l \r\n#b#L2#�鿴꠆T�YӍ#l");
			}
		if (memberType == -1) {
			cm.sendOk("����̽�U�ѽY����Ո�����]�ԡ�");
			cm.dispose();
		} else {
			status = 5;
			cm.sendSimple("#e<̽�U���������r>#n\r\n\r\n\r\n#b#L0#��ӛ̽�U�#l \r\n#b#L1#�x�_̽�U�#l \r\n#b#L2#�鿴꠆T�YӍ#l");
			}
		} else { // Is leader
			status = 10;
			cm.sendSimple("#e<̽�U���������r>#n\r\n\r\n\r\n#b#L0#�z��꠆T�YӍ #l \r\n#b#L1#�{��꠆T���#l \r\n#b#L2#����꠆T���#l \r\n#r#L3#�M��̽�U�؈D#l");
			// TODO viewing!
			}
		} else {
			var eim = cm.getDisconnected("ArkariumBattle");
			if (eim == null) {
				var squd = cm.getSquad("Arkarium");
			if (squd != null) {
		if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��24С�r�Y���ѽ������^�������r��ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
			cm.dispose();
			return;
			}
			cm.sendYesNo("̽�U�M���У�Ո�Lԇ�����l����\r\n" + squd.getNextPlayer());
			status = 3;
		} else {
			cm.sendOk("̽�U�M���У�Ո�Lԇ�����l����");
			cm.safeDispose();
			}
		} else {
			cm.sendYesNo("�F���Ƿ�Ҫ���·���̽�U����ڈ���?");
			status = 2;
			}
			}
		} else {
			var eim = cm.getDisconnected("ArkariumBattle");
			if (eim == null) {
				var squd = cm.getSquad("Arkarium");
			if (squd != null) {
		if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��24С�r�Y���ѽ������^�������r��ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
			cm.dispose();
			return;
			}
			cm.sendYesNo("̽�U�M���У�Ո�Lԇ�����l����\r\n" + squd.getNextPlayer());
			status = 3;
			} else {
			cm.sendOk("̽�U�M���У�Ո�Lԇ�����l����");
			cm.safeDispose();
			}
		} else {
			cm.sendYesNo("�F���Ƿ�Ҫ���·���̽�U����ڈ���?");
			status = 2;
}
}
}

function action(mode, type, selection) {
	switch (status) {
	case 0:
		if (mode == 1) {
			if (cm.registerSquad("Arkarium", 5, " �ѽ��ɞ���<�������r>̽�U���L���������Lԇ����̽�U��Ո�����c�Ҍ�Ԓ��Ո��ӛ̽�U.��t�㌢�o�����c����̽�U��")) {
				cm.sendOk("�ѽ��ɞ�<�������r>̽�U���L��Ո��5��犃��ټ���̽�U�꠆T�M��̽�U.��t�����Ԅ��]�N����̽�U�Y��");
			} else {
				cm.sendOk("δ֪�e�`��Ո�����هLԇ��");
				}
				}
				cm.dispose();
				break;
	case 1:
		if (mode == 1) {
			cm.warp(272020110, 0);
			}
			cm.dispose();
			break;
	case 2:
		if (!cm.reAdd("ArkariumBattle", "Arkarium")) {
			cm.sendOk("δ֪�e�`��Ո�����هLԇ��");
			}
			cm.safeDispose();
			break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("Arkarium");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("��Ո�������r̽�U꠳ɹ���");
				}
				}
				cm.dispose();
				break;
	case 5:
		if (selection == 0) { // join
			var ba = cm.addMember("Arkarium", true);
			if (ba == 2) {
				cm.sendOk("̽�U꠆T�ѽ��_��30����Ո�����هLԇ��");
				}
			if (ba == 1) {
				cm.sendOk("��Ո����̽�U꠳ɹ���Ո����̽�U�ʂ䡣");
			} else {
				cm.sendOk("�ѽ�������̽�Uꠣ�Ո����̽�U�ʂ䡣");
				}
				}
		if (selection == 1) {// withdraw
			var baa = cm.addMember("Arkarium", false);
			if (baa == 1) {
				cm.sendOk("�x�_̽�U꠳ɹ���");
			} else {
				cm.sendOk("���ѽ��x�_̽�Uꠡ�");
				}
				}
		if (selection == 2) {
			if (!cm.getSquadList("Arkarium", 0)) {
				cm.sendOk("���δ֪���e�`������ʧ����");
				}
				}
				cm.dispose();
				break;
	case 10:
		if (mode == 1) {
			if (selection == 0) {
			if (!cm.getSquadList("Arkarium", 0)) {
				cm.sendOk("���δ֪���e�`������ʧ����");
				}
				cm.dispose();
				}
			if (selection == 1) {
				status = 11;
			if (!cm.getSquadList("Arkarium", 1)) {
				cm.sendOk("���δ֪���e�`������ʧ����");
				cm.dispose();
				}
				}
			if (selection == 2) {
				status = 12;
			if (!cm.getSquadList("Arkarium", 2)) {
				cm.sendOk("���δ֪���e�`������ʧ����");
				cm.dispose();
				}
				}
			if (selection == 3) { // get insode
			if (cm.getSquad("Arkarium") != null) {
				var dd = cm.getEventManager("ArkariumBattle");
				dd.startInstance(cm.getSquad("Arkarium"), cm.getMap(), 160110);
			} else {
				cm.sendOk("���δ֪���e�`������ʧ����");
				}
				cm.dispose();
				}
			} else {
				cm.dispose();
				}
				break;
	case 11:
		cm.banMember("Arkarium", selection);
		cm.dispose();
		break;
	case 12:
		if (selection != -1) {
		cm.acceptMember("Arkarium", selection);
		}
		cm.dispose();
		break;
}
}