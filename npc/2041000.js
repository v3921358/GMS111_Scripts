/*
	����:	�ﰲ
	�؈D:	��ͷ&amp;lt;�������֮��&gt;
	����:	220000110
*/

function start() {
	train = cm.getEventManager("Trains");
		if (train == null) {
			cm.sendOk("���C���ڜʂ��С�");
			cm.dispose();
		} else if (!cm.haveItem(4031045)) {
			cm.sendOk("��]�Дy�� #v4031045:#�Ҳ���׌��Ǵ������������Ʊُ̎�I��");
			cm.dispose();
		} else if (train.getProperty("entry").equals("true")) {
			cm.sendYesNo("���F��ͣ����C�ѽ����ۣ�Ո����_���F��Ҫ�Ǵ��᣿");
		} else if (train.getProperty("entry").equals("false") && train.getProperty("docked").equals("true")) {
			cm.sendOk("�����𣡴��ѽ��𺽣���õȴ���һ����ۡ�");
			cm.dispose();
		} else {
			cm.sendOk("Ո���ĵȴ���Ҫע����C�ĕr�g���zƱ����ǰһ���ֹͣ��Ʊ������Ո�ձ؜ʕr���_��");
			cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���C���𺽕r�g�ɲ������㡣");
	} else {
		cm.gainItem(4031045, -1);
		cm.warp(220000111, 0);
		}
	cm.dispose();
}