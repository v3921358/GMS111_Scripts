/*
	����:	����
	�؈D:	��ͷ&amp;lt;������ľ��&gt;
	����:	200000131
*/

function start() {
	cabin = cm.getEventManager("Cabin");
		if (cabin == null) {
			cm.sendOk("���C���ڜʂ��С�");
			cm.dispose();
		} else if (!cm.haveItem(4031331)) {
			cm.sendOk("��]�Дy�� #v4031331:#�Ҳ���׌��Ǵ������������Ʊُ̎�I��");
			cm.dispose();
		} else if (cabin.getProperty("entry").equals("true")) {
			cm.sendYesNo("���F��ͣ����C�ѽ����ۣ�Ո����_���F��Ҫ�Ǵ��᣿");
		} else if (cabin.getProperty("entry").equals("false") && cabin.getProperty("docked").equals("true")) {
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
		cm.gainItem(4031331, -1);
		cm.warp(200000132, 0);
		}
	cm.dispose();
}