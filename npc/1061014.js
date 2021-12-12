/*
	����:	��Ӱ
	�؈D:	��Ժ����
	����:	105100100
*/

var status = -1;

var balrogMode; // false = easy, true = hard

function action(mode, type, selection) {
	switch (status) {
	case -1:
		status = 0;
	switch (cm.getChannelNumber()) {
	case 2:
		balrogMode = true;
		cm.sendNext("#e<̽�U���͠��_��>#n\r\n\r\n\r\n��ǰ���ڵ��l�������#b��ͨ�y�Ȱ͠��_��̽�U�#k. �������̽�U����ģʽ��Ո�x�����_���l��. \n\r #b#i3994116# �l��.2 / �ȼ�50������ / 6 ~ 15 ����� \n#b#i3994115# ���N���l�� / �ȼ�50 ~ 70 / 3 ~ 6 �����.");
		break;
		default:
		balrogMode = false;
		cm.sendNext("#e<̽�U���͠��_��>#n\r\n\r\n\r\n��ǰ���ڵ��l�������#b�����y�Ȱ͠��_��̽�U�#k. �������̽�U����ģʽ��Ո�x�����_���l��. \n\r #b#i3994116# �l��.2 / �ȼ�50������ / 6 ~ 15 ����� \n#b#i3994115# T���N���l�� / �ȼ�50 ~ 70 / 3 ~ 6 �����.");
		break;
		}
		break;
	case 0:
		var em = cm.getEventManager(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");

	if (em == null) {
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.safeDispose();
		return;
		}

	if (cm.getParty() != null) {
		var prop = em.getProperty("state");
		var marr = cm.getQuestRecord(balrogMode ? 160106 : 160105);
		var data = marr.getCustomData();
	if (data == null) {
		marr.setCustomData("0");
		data = "0";
		}
		var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
		var squadAvailability = cm.getSquadAvailability("BossBalrog");
	if (squadAvailability == -1) {
		status = 1;
	if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("���^ȥ��6С�r�Y���ѽ������^�͠��_��ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
		}
		cm.sendYesNo("#e<̽�U���͠��_��>#n\r\n\r\n\r\n�F�ڿ�����Ո�͠��_��̽�Uꠣ�����ɞ�̽�U���L�᣿");

		} else if (squadAvailability == 1) {
		if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("���^ȥ��6С�r�Y���ѽ������^�͠��_��ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
		}
		// -1 = Cancelled, 0 = not, 1 = true
		var type = cm.isSquadLeader("BossBalrog");
		if (type == -1) {
			cm.sendOk("����̽�U�ѽY����Ո�����]�ԡ�");
			cm.safeDispose();
		} else if (type == 0) {
			var memberType = cm.isSquadMember("BossBalrog");
		if (memberType == 2) {
			cm.sendOk("�������������Σ������م��ӱ���̽�U��");
			cm.safeDispose();
		} else if (memberType == 1) {
			status = 5;
			cm.sendSimple("#e<̽�U���͠��_��>#n\r\n\r\n\r\n#b#L0#�鿴꠆T�YӍ#l \r\n#b#L1#��ӛ̽�U�#l \r\n#b#L2#�x�_̽�U�#l");
		} else if (memberType == -1) {
			cm.sendOk("����̽�U�ѽY����Ո�����]�ԡ�");
			cm.safeDispose();
		} else {
			status = 5;
			cm.sendSimple("#e<̽�U���͠��_��>#n\r\n\r\n\r\n#b#L0#�鿴꠆T�YӍ#l \r\n#b#L1#��ӛ̽�U�#l \r\n#b#L2#�x�_̽�U�#l");
			}
		} else { // Is leader
			status = 10;
			cm.sendSimple("#e<̽�U���͠��_��>#n\r\n\r\n\r\n#b#L0#�z��꠆T�YӍ#l \r\n#b#L1#�{��꠆T���#l \r\n#b#L2#����꠆T���#l \r\n#r#L3#�M��̽�U�؈D#l");
		// TODO viewing!
			}
		} else {
			var eim = cm.getDisconnected(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
		if (eim == null) {
			var squd = cm.getSquad("BossBalrog");
		if (squd != null) {
		if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��6С�r�Y���ѽ������^�͠��_��ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
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
			cm.sendYesNo("�F���Ƿ�Ҫ���·���̽�U����ڈ��أ�");
			status = 2;
			}
			}
		} else {
			var eim = cm.getDisconnected(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
		if (eim == null) {
			var squd = cm.getSquad("BossBalrog");
		if (squd != null) {
		if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("���^ȥ��6С�r�Y���ѽ������^�͠��_��ʣ�N��s�r�g: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
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
			cm.sendYesNo("�F���Ƿ�Ҫ���·���̽�U����ڈ��أ�");
			status = 2;
			}
			}
		} else {
			cm.sendPrev("����Ҫ�����Լ���С꠲����_������̽�U��");
			cm.safeDispose();
			}
			break;
	case 1:
		if (mode == 1) {
		if (!balrogMode) { // Easy Mode
			var lvl = cm.getPlayerStat("LVL");
		if (lvl >= 50 && lvl <= 70) {
		if (cm.registerSquad("BossBalrog", 5, " �ѽ��ɞ�<�͠��_��>̽�U���L���������Lԇ����̽�U��Ո�����c�Ҍ�Ԓ��Ո��ӛ̽�U.��t�㌢�o�����c����̽�U��")) {
			cm.sendOk("�ѽ��ɞ�<�͠��_��>̽�U���L��Ո��5��犃��ټ���̽�U�꠆T�M��̽�U.��t�����Ԅ��]�N����̽�U�Y��");
		} else {
			cm.sendOk("δ֪�e�`��Ո�����هLԇ��");
			}
		} else {
			cm.sendNext("Ո�{������̽�U�꠆T��Σ�ʹ����꠆T���߂�̽�U�Y��");
			}
		} else { // Normal Mode
			if (cm.registerSquad("BossBalrog", 5, " �ѽ��ɞ�<�͠��_��>̽�U���L���������Lԇ����̽�U��Ո�����c�Ҍ�Ԓ��Ո��ӛ̽�U.��t�㌢�o�����c����̽�U��")) {
			cm.sendOk("�ѽ��ɞ�<�͠��_��>̽�U���L��Ո��5��犃��ټ���̽�U�꠆T�M��̽�U.��t�����Ԅ��]�N����̽�U�Y��");
		} else {
			cm.sendOk("δ֪�e�`��Ո�����هLԇ��");
			}
			}
		} else {
			cm.sendOk("#e<̽�U���͠��_��>#n\r\n\r\n\r\nҲ�S��߀���߂���ԓ�����������������������ف����ҡ�")
			}
			cm.safeDispose();
			break;
	case 2:
		if (!cm.reAdd(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY", "BossBalrog")) {
			cm.sendOk("δ֪�e�`��Ո�����هLԇ��");
			}
			cm.safeDispose();
			break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("BossBalrog");
		if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
			squd.setNextPlayer(cm.getPlayer().getName());
			cm.sendOk("��Ո�͠��_��̽�U꠳ɹ���");
			}
			}
			cm.dispose();
			break;
	case 5:
		if (selection == 0) {
		if (!cm.getSquadList("BossBalrog", 0)) {
			cm.sendOk("���δ֪���e�`������ʧ����");
			cm.safeDispose();
		} else {
			cm.dispose();
			}
		} else if (selection == 1) { // join
			var ba = cm.addMember("BossBalrog", true);
		if (ba == 2) {
			cm.sendOk("̽�U꠆T�ѽ��_��30����Ո�����هLԇ��");
			cm.safeDispose();
		} else if (ba == 1) {
			cm.sendOk("��Ո����̽�U꠳ɹ���Ո����̽�U�ʂ䡣");
			cm.safeDispose();
		} else {
			cm.sendOk("�ѽ�������̽�Uꠣ�Ո�����΄՜ʂ䡣");
			cm.safeDispose();
			}
		} else {// withdraw
			var baa = cm.addMember("BossBalrog", false);
		if (baa == 1) {
			cm.sendOk("�x�_̽�U꠳ɹ���");
			cm.safeDispose();
		} else {
			cm.sendOk("���ѽ��x�_̽�Uꠡ�");
			cm.safeDispose();
			}
			}
			break;
	case 10:
		if (selection == 0) {
		if (!cm.getSquadList("BossBalrog", 0)) {
			cm.sendOk("���δ֪���e�`������ʧ����");
			}
			cm.safeDispose();
		} else if (selection == 1) {
			status = 11;
		if (!cm.getSquadList("BossBalrog", 1)) {
			cm.sendOk("���δ֪���e�`������ʧ����");
			}
			cm.safeDispose();
		} else if (selection == 2) {
			status = 12;
		if (!cm.getSquadList("BossBalrog", 2)) {
			cm.sendOk("���δ֪���e�`������ʧ����");
			}
			cm.safeDispose();
		} else if (selection == 3) { // get insode
			if (cm.getSquad("BossBalrog") != null) {
			var dd = cm.getEventManager(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
			dd.startInstance(cm.getSquad("BossBalrog"), cm.getMap(), balrogMode ? 160106 : 160105);
			cm.dispose();
		} else {
			cm.sendOk("���δ֪���e�`������ʧ����");
			cm.safeDispose();
			}
			}
			break;
	case 11:
			cm.banMember("BossBalrog", selection);
			cm.dispose();
			break;
	case 12:
		if (selection != -1) {
			cm.acceptMember("BossBalrog", selection);
			}
		cm.dispose();
		break;
}
}