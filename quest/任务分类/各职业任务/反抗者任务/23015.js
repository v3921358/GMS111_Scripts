/*
	����:	ѱ�����ޱ�
	�؈D:	�����߱���
	����:	310010000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��춱����[�b���f���T���Ǳ���ġ� �ɞ鱪���[�b֮�ᣬ����W�����в��@�ļ��ܡ� ���ǂ����ܿ����Z�B���T�����ޱ���");
	if (status == 1)
		qm.sendNextPrev("�м��鿴���ܴ�����ԓ�����ҵ�#s30001061#���ܡ� ��ͨ�^����ʹ���ޱ���Ѫ������50%���£�Ȼ��ʹ�ò��@���ܣ��Ϳ��Ի�׽���ޱ��ˡ� ��׽֮�ᣬʹ��#s33001001#���Ϳ����T�����ޱ��ˡ� ���N�ӣ����ΰɣ�");
	if (status == 2)
		qm.sendNextPrev("�����e�����ҵ����ޱ��� ��ǰ���#b�ڂܿ�#k�����㎧���������ڵĵط��ġ�");
	if (status == 3)
		qm.sendNextPrevS("#b��ã��ڂܿˣ� Ո���V�ґ�ԓ�����eȥ��");
	if (status == 4)
		qm.sendNextPrev("�ţ������µı����[�b�᣿ ߀�ǂ�С���ӡ�",2151008);
	if (status == 5)
		qm.sendNextPrevS("#b���mȻ߀�����������˳ɞ�һ�����������ķ����ߣ���һ����Ŭ���ġ� �����e�����ҵ����ޱ��أ�");
	if (status == 6)
		qm.sendYesNo("�����B�ܲ��e� �Ұ�����ȥҊҊ�ҵ��ֵ܂��ɡ� �����������ȥ�����������ԁ����ҡ�",2151008);
	if (status == 7){
		qm.forceStartQuest();
		qm.warp(931000500, 0);
		qm.dispose();
}
}