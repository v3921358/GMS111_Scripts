/*
	����:	[ʮ������]��һ���ռ�
	�؈D:	δ֪����
	����:	102040600
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
		qm.sendYesNo("�����@���l���{ɫ�������׌�z�E�l��صĹ���׃�Ú�������Ć᣿ ��֪�����l��ʲ�N���҂�Ҫ���M�T�e��������ʂ���ˆ᣿");
	if (status == 1)
		qm.sendPrev("����l��ʲ�NΣ�U��Ԓһ��Ҫ���o�Ұ��� ���N��һ������������");
	if (status == 2){
		qm.forceStartQuest();
		qm.getMap(931050410).resetFully();//��ͼˢ��
		qm.warp(931050410, 0);
		qm.spawnNpc(9073000, 199,169);
		qm.dispose();
}
}