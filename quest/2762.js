/*
	����:	��˵��������ί��
	�؈D:	����ɭ��ͨ��
	����:	101010000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("����� #p1032102#�Ɂ���ˆᡣ ��Ո����ҽ�Q�ҵğ����Æ᣿ ��������� #m101000000# �������F�� #r#o9100014##k�� #m101000000# �������� #r#o9100014##k���Ǻ���ֆ᣿");
	if (status == 1)
		qm.sendNextPrev("������������������ǰ�[�Ӹ��^�� �ϴ�߀�����^�ε��܂����ء� �@����ȥ����һ�챻���^������");
	if (status == 2)
		qm.sendAcceptDecline("������ȥ#r#o9100014##k�[�صĵط�Ո�������� 40�b�� �@�������Ͳ������}�_���˰ɡ�");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(910100100);
		qm.dispose();
}
}