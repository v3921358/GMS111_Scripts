/*
	����:	�������
	�؈D:	�Y��С�
	����:	680000000
*/

function start() {
	if (cm.getPlayer().getMarriageId() <= 0) {
		cm.sendOk("�����߀�]�Y���أ��鶼�]�Y����Ҫ�Y���ָ����߀�����҂��Đ۵��ˣ��Y����ف��~");
		cm.dispose();
	} else {
		cm.sendSimple("��Ҫ�Ҏ�æ�᣿\r\n#b#L0##b����鿴�Y��Y�#l#k");
}
}

function action(mode, type, selection) {
	cm.sendOk("���ĽY��Y����񄂄��ѽ��������ˣ�");
	cm.dispose();
}
