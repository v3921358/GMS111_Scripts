/*
	����:	���������������1
	�؈D:	������Ѩ
	����:	910050300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�þò�Ҋ�����ˣ� ���˵Ă����ѽ����ˣ�����æ���������_�c��һֱ�]�и���ϵ�� ����ǰ�����K춺����M�ˣ�");
	if (status == 1)
		qm.sendNextPrev("�Ҹ������f��������飬���f������Ǻ��˵�Ԓ���S�r�gӭ�������ĈF�w�� ���Ђ��l���� Ҫ�����F�w������Ҫͨ�^������Ŀ�ԇ��");
	if (status == 2)
		qm.sendNextPrev("������@�Nǿ���ˣ����둪ԓ�����׾���ͨ�^�ǷN��ԇ�� ��Ҫ���f��һ�¿�ԇ�ă��݆᣿");
	if (status == 3)
		qm.sendNextPrev("���ǳ����Σ� ��ֻҪǰ��#b#m101000000#��#m101030100#k������#r150ֻ#o3230100##k�����ˡ� �����������e������c���F�r����#o3230100#�����{���l�");
	if (status == 4)
		qm.sendNextPrev("��Ȼ���������ط����������ص�Ԓ�͸����ˡ������ǲ���ǰ#b�������Ђ���ʲ�N��Ժ�ĵط����������أ��Y�����e�Ĺ���̫ǿ���l���˱��y#k�� �����@���������ء�");
	if (status == 5)
		qm.sendAcceptDecline("���ˣ���Ո��һ��Ҫ�����҂����x�x�ˣ�");
	if (status == 6){
		qm.forceStartQuest();
		qm.dispose();
}
}
