/*
	����:	��³
	�؈D:	Σ�յ��鱨�̵�
	����:	910400000
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {//�жϵ�ͼ��û�й���
		cm.sendOk("���Ǵ����ˣ���Ȼ�l�����@�ӵĠ�r��̫�GĘ�ˣ�");
	} else {
		cm.sendOk("Ո������ż���ځ����ң�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(21762, "2");  //���������������
	cm.warp(104000004, 0);
	cm.dispose();
}