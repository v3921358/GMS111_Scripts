/*
	����:	[ʮ������]żȻ����Ȼ��
	�؈D:	ά���е��г�
	����:	931050400
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
		qm.sendAcceptDecline("�����R�Ͼ�Ҫ�l�𹥓��ˣ� ��ֻ���ң���Ҳ������Σ�U֮�еġ� Ո����������");
	if (status == 1){
		for (i = 1; i < 8; i++) {
		qm.spawnMob(9300470,0,0);
		}
		qm.forceStartQuest();
		qm.dispose();
}
}