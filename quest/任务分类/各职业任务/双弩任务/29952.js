/*
	����:	������Ӣ��
	�؈D:	��ŷ��
	����:	101050000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("Ŷ, ������ " + qm.getPlayer().getName()+" ����");
	if (status == 1)
		qm.sendNextPrev("����������Ӣ�ۡ�");
	if (status == 2)
		qm.sendPrev("ϣ�����ܼ������������־��");
	if (status == 3){
		qm.forceStartQuest();
		qm.gainItem(1142336,1);
		qm.dispose();
}
}