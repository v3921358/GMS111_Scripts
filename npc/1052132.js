/*
	����:	��ҩ�����4
	�؈D:	�϶�ҩ��
	����:	103000002
*/

function start() {
	if (cm.getQuestStatus(2852) == 1 && !cm.haveItem(4033036)) {
		cm.sendOk("���ĵ������������#v4033036:#��");
	} else {
		cm.sendOk("δ�����������򿪡�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.gainItem(4033036, 1);
	cm.dispose();
}
