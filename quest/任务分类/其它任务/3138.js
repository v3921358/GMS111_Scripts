/*
	����:	�ž��ĳǱ��
	�؈D:	����ԭҰ
	����:	211060000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOk("����]�������@�N������ˎ��ҵ�Ԓ���ҾͲ����܌��@�e�M���{�顣 �����ٿ��]һ�᣿");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNextS("���l�o�Ҍ������أ� �]�аl���ˡ���Ҫ��һ���᣿",3);
	if (status == 1)
		qm.sendNextPrev("����x�@���ŵ�ð�U�ң�\r\n\r\n����ʮ�֫C�˵Ĺ����T������#b#p2161012##k�� �Ҿ��LԒ���f�ˡ� �҂�ʮ�֫C�˵Ĺ����T����ð�U�u��������߄ӣ���������а��������΄ա� ");
	if (status == 2)
		qm.sendNextPrev("�����ҬF�����ڵĵط�����#r�{����֮��#k����ɢ�l��֮ǰ�ҏě]Ҋ����ǿ�Һڰ���Ϣ�� �Ҹ��X���˱ȱ���ѩ��ĺ��L���z���ķεĿֲ���");
	if (status == 3)
		qm.sendAcceptDecline("��������ҵ��΄գ���Ҫ�����@�Ӄ����ð�U�ҵĎ����� �������ҵ�Ԓ��Ո�^�m���¿���");
	if (status == 4)
		qm.sendPrev("�x�x�� ������x�����@һ�Σ��f�����ѽ����������ˡ� ��축r�g�o�ȣ��������������O����һ��Сħ���� �x����֮�ᣬ��͕��Ƅӵ������ڵĵط��� ���N��һ����Ҋ��");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(211060000, 2);
		qm.dispose();
}
}