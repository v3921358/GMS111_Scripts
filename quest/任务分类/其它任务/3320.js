/*
	����:	����ͷ֪��������
	�؈D:	��ֹ����(���������)
	����:	261020401
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("��? ��Ҫ? ӑ���͛]���k��... ���^�o�����V�����@�e�о��ğ����g�����l?");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��! ����˰�! �gӭ�gӭ! �����̝���㲻�o�� ...ʲ�N? ʲ�N? ���@�e�о��ğ����g�����l��? ��... ��������֪����֪��...");
	if (status == 1)
		qm.sendNextPrev("ʲ�N��? ʲ�N... ������ʲ�N... ����!  ���N���벻�����@���ˌ������Ҫ��? �]��ʲ�N��������˰�... ����? �@Ҫ���N�k..");
	if (status == 2)
		qm.sendAcceptDecline("��! ��֪���ˡ�����H�Կ���!");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(926120200);
		qm.dispose();
}
}