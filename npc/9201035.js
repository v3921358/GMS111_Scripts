/*
	����:	������
	�؈D:	�Y��С�
	����:	680000000
*/

function start() {
	if (cm.getPlayer().getMarriageId() <= 0) {
		cm.sendOk("�����߀�]�Y���أ��鶼�]�Y����Ҫ�Y���ָ����߀�����҂��Đ۵��ˣ��Y����ف��~");
		cm.dispose();
	} else {
		cm.sendSimple("��ð�~ ������һ�������۵��»�ζ��Ŷ~ ���ѣ����N߀����ӆ���ָ�����Y�˻��Ҫ�QƯ���ĽY���ָ�����������Ԓ���ҿ��Խo�ゃ�Q�����N�ӣ�\r\n\r\n#L0# ��ӆ���ָ�Q�ɽY���ָ��#l");
}
}

function action(mode, type, selection) {
	cm.sendOk("�Y���ָҲ�����b��ģ�һ��Ҫԇԇ��Ŷ~");
	cm.dispose();
}