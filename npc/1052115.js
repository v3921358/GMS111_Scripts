/*
	����:	�ֳ���
	�؈D:	�����ĵ���վ
	����:	910320000
*/

function start() {
	if (cm.getMapId() == 910320001) {
		cm.warp(910320000, 0);
		cm.dispose();
	} else if (cm.getMapId() == 910330001) {
		if (!cm.canHold(4001321, 1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else {
			cm.gainItem(4001321, 1);
			cm.warp(910320000, 0);
			}
			cm.dispose();
		} else if (cm.getMapId() >= 910320100 && cm.getMapId() <= 910320304) {
			cm.sendYesNo("����Ҫ�x�_����");
		} else {
			var chat = "���ã�����#p1052115# ��ʲ�N���Ԏ�æ�Ć᣿��#b";
			chat += "\r\n#L0#�Mȥ����";
			chat += "\r\n#L1#��܇Ӗ�� 999";
			chat += "\r\n#L2#�Iȡ���� <#i1142141#>";
			cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.getMapId() >= 910320100 && cm.getMapId() <= 910320304) {
		cm.warp(910320000, 0);
		cm.dispose();
		}
		}
	switch (selection) {
	case 0:
		if (cm.getPlayer().getLevel() < 25 || cm.getPlayer().getLevel() > 35 || !cm.isLeader()) {
			cm.sendOk("����Ҫ�ȼ�25-35֮�ȣ��K����L���ҡ�");
		} else {
		if (!cm.start_PyramidSubway(-1)) {
			cm.sendOk("�΄����ڈ����У�Ո�Lԇ�����l����");
			}
			}
			break;
	case 1:
		if (cm.haveItem(4001321)) {
		if (cm.bonus_PyramidSubway(-1)) {
			cm.gainItem(4001321, -1);
		} else {
			cm.sendOk("�΄����ڈ����У�Ո�Lԇ�����l����");
			}
		} else {
			cm.sendOk("��]��#b#t4001321##k��");
			}
			break;
	case 2:
		var record = cm.getQuestRecord(7662);
		var data = record.getCustomData();
		if (data == null) {
			record.setCustomData("0");
			data = record.getCustomData();
			}
			var mons = parseInt(data);
		if (mons < 10000) {
			cm.sendOk("����Ҫ����1�f�b���Ŀǰ : " + mons);
		} else if (cm.canHold(1142141) && !cm.haveItem(1142141)) {
			cm.gainItem(1142141, 1);
			cm.forceStartQuest(29931);
			cm.forceCompleteQuest(29931);
		} else {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
			}
			}
			cm.dispose();
}