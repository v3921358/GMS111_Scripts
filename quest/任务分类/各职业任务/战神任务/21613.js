/*
	����:	�ǵĿ���
	�؈D:	Ⱥ��ԭҰ
	����:	140010210
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("������߀�Ǜ]�������I�Bһ�b�ǡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�҂���һȺ���ڌ����҂��zʧ�ĺ��ӡ��� �f��������҂��ĺ��ӡ��҂����x��ĺ��⣬���F���ǰ��҂��ĺ���߀�o�҂��ĕr���ˡ�");
	if (status == 1)
		qm.sendNextPrevS("�������ҵ����ѣ��ҷǳ�ϲ�g�����y���Ͳ���׌�҂���һ���N��");
	if (status == 2)
		qm.sendAcceptDecline("�҂���⣬���҂������x�_�҂��ĺ��ӡ��������������һ�b�ǣ��ͱ��ͨ�^�҂��Ŀ�򞣬�����Ƿ����Bһ�b��#b�ʂ�ý����ǵĜyԇ�ˆ᣿��");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(914030000, 0);
		qm.resetMap(914030000);
		qm.dispose();
}
}