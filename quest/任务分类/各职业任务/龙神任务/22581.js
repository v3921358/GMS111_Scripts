/*
	����:	�ڽӵ���������ĵ���������֮ǰ
	�؈D:
	����:	��ɫӰ��
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("ǰ�ɴ��΄���ă����F��׌�M���ṩ�˲��ٱ������F�ڵ����㹻���Y���^�m�~�M���벻��Ҫ������t���҂��@�����܈F�w��");
	if (status == 1)
		qm.sendPrev("�Ǿ́�#b#m220000300##k��#b#m922030000##k�� �������e�����㡣");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}