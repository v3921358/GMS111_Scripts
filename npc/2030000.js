/*
	����:	�ܷ�
	�؈D:	��ѩϿ�Ȣ�
	����:	211040200
*/

function start() {
	if (cm.haveItem(4031450)) {
		cm.warp(921100100, 0);
		cm.dispose();
	} else {
		cm.sendYesNo("�����Ҫ�����������...���Ҫ�������Ŷ����˵��кܶ�ܿ��µĹ����������ʮλ��ʿ���˽�ȥ������û��һ���˻��������Ӵ���Ҳû���˸ҽ�ȥ�ˡ�������׼����ô��֣�ǧ��ҪðȻ�ж�����");
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�������Լ�����Լ���ʵ����");
		cm.dispose();
	} else {
	if (cm.getPlayerStat("LVL") >= 40) {
		cm.warp(211040300, 5);  
	} else {
		cm.sendOk("��ĵȼ���������û���ʸ�Ͳ�Ҫǿ��ȥ������");
		}
	cm.dispose();
}
}
