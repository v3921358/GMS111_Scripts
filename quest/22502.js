/*
	����:	һ�ڸɲ�
	�؈D:	ũ������
	����:	100030300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ţ����Ǌ��Lԇ����t�����h����֪������ֻ���������ˣ����܊��Ų��š������ܳԎֲݡ�");
	if (status == 1)
		qm.sendAcceptDecline("���治����ţһ������һ��Ѹɲ��𣿸����кܶ�Ұ�ݣ���������ι����");
	if (status == 2){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/12/0", 1);
		qm.dispose();
}
}