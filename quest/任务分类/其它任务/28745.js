/*
	����:	�����г�
	�؈D:	��Ҷ��
	����:	600000000
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
		qm.sendNext("�������ˣ�#b#m600000000##k���l����һ��ǿ�� ���B׃�ɏU�棬ƽ��׃�ɜ��֡� �Ҷ����J�����@����һ�ք���Ķ����ˣ� �ҵ�����͂������W���о�����ʲ�N��������A�㌍���ǲ����� ������@�����H���о��� �܎����@��æ�᣿");
	if (status == 1)
		qm.sendAcceptDecline("�Ҿ�֪��������ң� ȥ#b#m600000000##k�������^�ɡ� ����㲻���㣬�ҿ������ҵ����u���L�����[�κ��A�I܇����㣬߀�������X�� ��Σ�");
	if (status == 2)
		qm.sendPrev("�ã� �Ҿ�֪���㲻���ܽ^�� ���ˣ����ǿ���Ҋ�I܇�ģ�ԭ�ص������ǡ�");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(600000000, 8);
		qm.dispose();
}
}