/*
	����:	[ʮ������]��ħʮ������-ʮ������
	�؈D:	��ħʮ�����žݵ�
	����:	931050500
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
		qm.sendAcceptDecline("����@ͻȻ�Ľ��h�е����@�ɡ� ������˼���ܲ����ȴ_�J�����Л]���Y����҂�һ�����أ� ����҂����܌��]���Y������S���fԒ�ġ� �]�P�S�ɣ�");
	if (status == 1)
		qm.sendPrev("�õģ����NՈ�f������һЩ���εĜyԇ�ɣ���Ҏ���r�g�ȓ����ҵ�С�����ȵ�Ԓ�����ˣ����N�_ʼ�ɡ� ");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(931050510,0);
		qm.getMap(931050510).resetFully();//��ͼˢ��
		qm.spawnMob(9300474,0,0);
		qm.dispose();
}
}
