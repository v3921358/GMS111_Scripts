/*
	����:	���ż������ֳ�ȥ��
	�؈D:	�ż�������Ӫ��
	����:	102040200
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
		qm.sendAcceptDecline("������춳��]���z۔�ھ�ص����t�������չ�_�����������߳��m�������У����ȴ������߂����M������");
	if (status == 1)
		qm.sendPrev("Ԕ����rՈȥԃ��#r�z�E�l��ꠠI��#k��#b�l����Lɼ��#k��");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}