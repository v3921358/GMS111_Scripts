/*
	����:	��������
	�؈D:	��³���鱨�̵�
	����:	104000004
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ȼ������ˆᣬӢ�۴��ˣ��l�F���c��ɫ������P����Ȥ������@�����c�h��֪����#b#m250000000##k���f�᣿��Ҫȥ���e��");
	if (status == 1)
		qm.sendAcceptDecline("������#m250000000#�Ľ�#b#p2090004##k���˸���ɫ�����|�ˡ�������������N���ǘӣ����ǂ��ʴ_������{���ʲ�N��ɫ����#p2090004#���|�ˣ�����ʲ�N�ӵĽ��ס�");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
