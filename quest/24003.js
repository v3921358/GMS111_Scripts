/*
	����:	��ƽ������
	�؈D:	��ŷ��
	����:	910150001
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
		qm.sendNext("�������ֺУ��������������ɡ�");
	if (status == 1)
		qm.sendPrev("#b(�����˺ʹ���������Ϣ����Ƶĺ�ƽ�����֡�ϣ�����������������Ρ���)");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
}
}