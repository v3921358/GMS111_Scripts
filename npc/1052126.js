/*
	����:	�ȴ��ڰ��������ռǱ�
	�؈D:	�ȴ��ڰ������ķ���
	����:	910350100
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0 && !cm.haveItem(4032617)) {
		cm.gainItem(4032617, 1);
		cm.sendOk("�����õ���#v4032617:#����������ȥ���");
	} else if (cm.haveItem(4032617)) {
		cm.sendOk("���Ѿ��õ�#v4032617:#������̫̰�ġ�");
	} else {
		cm.sendOk("��͵�����Ļ����ͱ���Ҫ���������й��");
		}
	cm.dispose();
}