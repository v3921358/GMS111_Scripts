/*
	����:	���������˳���
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("�����[����ģ���ĺܹ֡�����#p1201002#�����}�ˣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�ޟ��M�е�߀�Æ᣿�@�Næ�挦����ɿ��#m140000000#��#p1201002#���Ю����������F���ֲܹ�����ǰ�ķ���������ǰ������ڵĸ��X��");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}