/*
	����:	������
	�؈D:	����Σ�յĹ�������ѵ����
	����:	910050000
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {//�жϵ�ͼ��û�й���
		cm.sendOk("�K춵ȵ�����ˣ�#b#h0##k��");
	} else {
		cm.sendOk("Ո������ż���ځ����ң�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(21765, "2");//������������������
	cm.warp(100000201, 1); 
	cm.dispose();
}