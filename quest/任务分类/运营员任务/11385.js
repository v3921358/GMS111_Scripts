/*
	����:	һ�۾��ܲ鿴�
	�؈D:	ð�յ���ӪԱ
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
		qm.sendNext("��ã�#b#h0##k��\ r\n���N��ӿ���׌����#rð�U�u#k���^�옷��ÿһ�졣 ���ڷe�O���Ӹ��N��ӆ᣿ �Л]������Ӄ���̫�S�����e�^��ӵĽ��v�أ� ����׌��Ҳ��e�^ÿһ����ӣ�������V��һ������Ϣ��");
	if (status == 1)
		qm.sendNextPrev("����c�������϶˵�#r[���]#k���o�����ɲ鿴����#b[������]#k���x�Ρ� ֻҪ�c��ԓ�x�Σ��Ϳ��Բ鿴���������M�еĻ���ˡ�");
	if (status == 2)
		qm.sendPrev("����Կ��������M��ʲ�N��ӣ���ӵ��_ʼ�ͽY���r�g�����ԫ@��ʲ�N���ߵ����õ��YӍ��");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}