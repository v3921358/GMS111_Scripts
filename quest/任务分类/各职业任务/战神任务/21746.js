/*
	����:	�乫����ս
	�؈D:	�����������
	����:	925040000
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
		qm.sendNext("��ӡʯ�������Ǻܾúܾ���ǰ����#b#m250000000##k���ܵĖ|�������y���f�J�D�������ֳ��F�ˡ���");
	if (status == 1)
		qm.sendNextPrevS("#bՈ���V�����P��ӡʯ�����顣");
	if (status == 2)
		qm.sendAcceptDecline("�ǿɲ��С�#o9300351#�@�����_����Σ�U���������N֪�����������Σ�U�أ� ��Ҫ���һ���㡭�������#b���#k�᣿");
	if (status == 3)
		qm.sendPrev("��ʿ���������䌍�������š� ���ܱ��κ����Z���ܸ��õ��w�F��ă��ġ� ���ҵ�#r����#k�������Y��׌�ҿ���������������ӵġ�");
	if (status == 4){
		qm.forceStartQuest();
		qm.getMap(925040001).resetFully();//��ͼˢ��
		qm.warp(925040001, 1);
		qm.dispose();
}
}