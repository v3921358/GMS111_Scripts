/*
	����:	�����Ӱ��
	�؈D:
	����:
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
		qm.sendNext("���ֿ��Զ�����",1033110);
	if (status == 1)
		qm.sendNextPrev("����Ҳû���⡭��",1033110);
	if (status == 2)
		qm.sendNextPrev("��Ҳû�¡�",1033110);
	if (status == 3)
		qm.sendPrev("��ȫ�����ˡ�ֻ�ǵȼ�������������������ޡ���",1033110);
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}