/*
	����:	���
	�؈D:	��ͷ&amp;lt;����������&gt;
	����:	200000111
*/

function start() {
	boat = cm.getEventManager("Boats");
		if (boat == null) {
			cm.sendOk("���C���ڜʂ��С�");
			cm.dispose();
		} else if (!cm.haveItem(4031047)) {
			cm.sendOk("��]�Дy�� #v4031047:#�Ҳ���׌��Ǵ������������Ʊُ̎�I��");
			cm.dispose();
		} else if (boat.getProperty("entry").equals("true")) {
			cm.sendYesNo("���F��ͣ����C�ѽ����ۣ�Ո����_���F��Ҫ�Ǵ��᣿");
		} else if (boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
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
		cm.gainItem(4031047, -1);
		cm.warp(200000112, 0);
		}
	cm.dispose();
}