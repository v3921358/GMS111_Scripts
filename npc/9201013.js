/*
	����:	�������Ů
	�؈D:	�Y��С�
	����:	680000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 0) {
		cm.dispose();
	}
	status--;
	}
	if (status == 0) {
		cm.sendYesNo("����Ҫ�A��һ����Y����");
	} else if (status == 1) {
		if (cm.getPlayer().getMarriageId() <= 0) {
			cm.sendOk("���ǲ��Ǹ��e�ˣ���");
		} else if (!cm.canHold(4150000,60)) {
			cm.sendOk("Ո�ճ�һЩ�����ڡ���");
		} else if (!cm.haveItem(5251004,1) && !cm.haveItem(5251005,1) && !cm.haveItem(5251006,1)) {
			cm.sendOk("Ո�ȏ�ُ���̈��I�A�sƱ��");
		} else {
			var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
			if (chr == null) {
				cm.sendOk("�_����İ�H�ڵ؈D�ϡ�");
				cm.dispose();
				return;
				}
		var marr = cm.getQuestRecord(160001);
			var data = marr.getCustomData();
		if (data == null) {
			marr.setCustomData("0");
			data = "0";
			}
		if (data.equals("0")) {
			marr.setCustomData("1");
			cm.setQuestRecord(chr, 160001, "1");
			var num = 0;
		if (cm.haveItem(5251006,1)) {
			cm.gainItem(5251006,-1);
			num = 60;
		} else if (cm.haveItem(5251005,1)) {
			cm.gainItem(5251005,-1);
			num = 30;
		} else if (cm.haveItem(5251004,1)) {
			cm.gainItem(5251004,-1);
			num = 10;
			}
			cm.setQuestRecord(cm.getPlayer(), 160002, num + "");
			cm.setQuestRecord(chr, 160002, num + "");
			cm.sendNext("��F�����Y����Y���@�e�ǻ�YՈ�����ϣ����Ո��Ҫ�������Ŀ��ˡ�");
			cm.gainItemPeriod(4150000,num,1);
		} else {
			cm.sendOk("�������ѽ��Y������ѽ������A�s��");
			}
			}
		cm.dispose();
}
}