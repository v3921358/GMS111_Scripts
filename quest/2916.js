/*
	����:	���ִĵ�����2
	�؈D:	ѵ����
	����:	120000105
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("�H�Hͨ�^��һ�ο����ѣ��ɲ������ԝM��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�@�ξ����һЩӖ�����ȡ� ��Σ� ���Üʂ��ˆ᣿");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}