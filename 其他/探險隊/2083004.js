/*
	����:	Զ���ӵı�ʶ
	�؈D:	����������Ѩ���
	����:	240050400
*/

var status = -1;

function start() {
	if (cm.getPlayer().getLevel() < 80) {
		cm.sendOk("#e<̽�U����������>#n\r\n\r\n\r\n��Ҫ80�ȼ����ϲ������𰵺�������");
		cm.dispose();
		return;
		}
	if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3 && cm.getPlayer().getClient().getChannel() != 4) {
		cm.sendOk("#e<̽�U����������>#n\r\n\r\n\r\n ֻ����1��2��3��4�l������");
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("HorntailBattle");

	if (em == null) {
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.dispose();
		return;
		}
	var eim_status = em.getProperty("state");
	var marr = cm.getQuestRecord(160100);
	var data = marr.getCustomData();
	if (data == null) {
		marr.setCustomData("0");
		data = "0";
		}
		var time = parseInt(data);
	if (eim_status == null || eim_status.equals("0")) {

	var squadAvailability = cm.getSquadAvailability("Horntail");
	if (squadAvailability == -1) {
	status = 0;
		if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��12С�r�Y���ѽ������^����������ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
			cm.dispose();
			return;
			}
			cm.sendYesNo("#e<̽�U����������>#n\r\n\r\n\r\n�F�ڿ�����Ո��������̽�Uꠣ�����ɞ�̽�U���L�᣿");

	} else if (squadAvailability == 1) {
		if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��12С�r�Y���ѽ������^����������ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
			cm.dispose();
			return;
			}
		// -1 = Cancelled, 0 = not, 1 = true
	var type = cm.isSquadLeader("Horntail");
	if (type == -1) {
		cm.sendOk("����̽�U�ѽY����Ո�����]�ԡ�");
		cm.dispose();
		}
	if (type == 0) {
		var memberType = cm.isSquadMember("Horntail");
		if (memberType == 2) {
			cm.sendOk("�������������Σ������م��ӱ���̽�U��");
			cm.dispose();
			}
		if (memberType == 1) {
			status = 5;
			cm.sendSimple("#e<̽�U����������>#n\r\n\r\n\r\n#b#L0#��ӛ̽�U�#l \r\n#b#L1#�x�_̽�U�#l \r\n#b#L2#�鿴꠆T�YӍ#l");
			}
		if (memberType == -1) {
			cm.sendOk("����̽�U�ѽY����Ո�����]�ԡ�");
			cm.dispose();
		} else {
			status = 5;
			cm.sendSimple("#e<̽�U����������>#n\r\n\r\n\r\n#b#L0#��ӛ̽�U�#l \r\n#b#L1#�x�_̽�U�#l \r\n#b#L2#�鿴꠆T�YӍ#l");
			}
		} else { // Is leader
			status = 10;
			cm.sendSimple("#e<̽�U����������>#n\r\n\r\n\r\n#b#L0#�z��꠆T�YӍ #l \r\n#b#L1#�{��꠆T���#l \r\n#b#L2#����꠆T���#l \r\n#r#L3#�M��̽�U�؈D#l");
			// TODO viewing!
			}
		} else {
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				var squd = cm.getSquad("Horntail");
			if (squd != null) {
		if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��12С�r�Y���ѽ������^����������ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
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
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				var squd = cm.getSquad("Horntail");
			if (squd != null) {
		if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��12С�r�Y���ѽ������^����������ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
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
			if (cm.registerSquad("Horntail", 5, " �ѽ��ɞ���<��������>̽�U���L���������Lԇ����̽�U��Ո�����c�Ҍ�Ԓ��Ո��ӛ̽�U.��t�㌢�o�����c����̽�U��")) {
				cm.sendOk("�ѽ��ɞ�<��������>̽�U���L��Ո��5��犃��ټ���̽�U�꠆T�M��̽�U.��t�����Ԅ��]�N����̽�U�Y��");
			} else {
				cm.sendOk("δ֪�e�`��Ո�����هLԇ��");
				}
				}
				cm.dispose();
				break;
	case 2:
		if (!cm.reAdd("HorntailBattle", "Horntail")) {
			cm.sendOk("δ֪�e�`��Ո�����هLԇ��");
			}
			cm.safeDispose();
			break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("Horntail");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("��Ո��������̽�U꠳ɹ���");
				}
				}
				cm.dispose();
				break;
	case 5:
		if (selection == 0) { // join
			var ba = cm.addMember("Horntail", true);
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
			var baa = cm.addMember("Horntail", false);
			if (baa == 1) {
				cm.sendOk("�x�_̽�U꠳ɹ���");
			} else {
				cm.sendOk("���ѽ��x�_̽�Uꠡ�");
				}
				}
		if (selection == 2) {
			if (!cm.getSquadList("Horntail", 0)) {
				cm.sendOk("���δ֪���e�`������ʧ����");
				}
				}
				cm.dispose();
				break;
	case 10:
		if (mode == 1) {
			if (selection == 0) {
			if (!cm.getSquadList("Horntail", 0)) {
				cm.sendOk("���δ֪���e�`������ʧ����");
				}
				cm.dispose();
				}
			if (selection == 1) {
				status = 11;
			if (!cm.getSquadList("Horntail", 1)) {
				cm.sendOk("���δ֪���e�`������ʧ����");
				cm.dispose();
				}
				}
			if (selection == 2) {
				status = 12;
			if (!cm.getSquadList("Horntail", 2)) {
				cm.sendOk("���δ֪���e�`������ʧ����");
				cm.dispose();
				}
				}
			if (selection == 3) { // get insode
			if (cm.getSquad("Horntail") != null) {
				var dd = cm.getEventManager("HorntailBattle");
				dd.startInstance(cm.getSquad("Horntail"), cm.getMap(), 160100);
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
		cm.banMember("Horntail", selection);
		cm.dispose();
		break;
	case 12:
		if (selection != -1) {
		cm.acceptMember("Horntail", selection);
		}
		cm.dispose();
		break;
}
}