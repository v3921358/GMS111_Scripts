/*
	����:	��Ҷ�Ǽ�Ʊ��
	�؈D:	��Ҷ�� ����վ
	����:	600010001
*/

function start() {
	sw = cm.getEventManager("Subway");
		if (sw == null) {
			cm.sendOk("�������ڜʂ��С�");
			cm.dispose();
		} else if (!cm.haveItem(4031713)) {
			cm.sendOk("��]�Дy�� #v4031713:#���]�����Ҳ���׌���M��Ո����Ʊͤ�IƱ��");
			cm.dispose();
		} else if (sw.getProperty("entry").equals("true")) {
			cm.sendYesNo("���F��ͣ������ѽ���վ��Ո����_���F��Ҫ�ǳ��᣿");
		} else if (sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
			cm.sendOk("�����𣡵����ѽ��𺽣���õȴ���һ����վ��");
			cm.dispose();
		} else {
			cm.sendOk("Ո���ĵȴ���Ҫע������ĕr�g���zƱ����ǰһ���ֹͣ��Ʊ������Ո�ձ؜ʕr���_��");
			cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�������𺽕r�g�ɲ������㡣");
	} else {
		cm.gainItem(4031713, -1);
		cm.warp(600010002);
		}
	cm.dispose();
}
