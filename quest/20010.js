/*
	����:	��ӭ����ʥ�أ�
	�؈D:	�µ�����2
	����:	130030001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOk("��һֱ���@�e��������׃ע�⣬�����ٴ΁����ҡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�gӭ���}�أ� �����l�� �ޣ�����#b#h0##k�� �ܸ��dҊ���㣡 �����@�e����þ��ˣ��㌢�ɞ�һ��ð�U�u�Tʿ�����᣿ �ҵ�������#p1102004#��");
	if (status == 1)
		qm.sendNextPrev("�������ɞ�ð�U�u�Tʿ�F�е�һ�T������������؈D�ĵ���λ�����������Ԏ�����ɞ�ð�U�u�Tʿ�F�е�һ�T��");
	if (status == 2)
		qm.sendNextPrev("�ޣ���������һ�£��@����һ��΄ա� �����ż������ע�⵽��NPC�^���ż�����П��ݣ��ǷQ֮��#b�΄գ�QUEST��#k�� ����΄��㌢���Եõ��ܶ��S���Ī��");
	if (status == 3)
		qm.sendAcceptDecline("�����ҊҊ#b#p1102005##k�᣿ ����֪�����N��C�᣿ ������ҵ�#p1102005#��������N��C��");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendOk("�����Ҹ���Ɂ���F��᣿�ܸ��d�J�R�㣡����#b#p1102005##k���ҕ��o��#p1102004#׌�ҽo��Ĉ�ꡣՈӛס�������԰�#b  i �I#k�z�����Ď�档�tɫˎ��������֏͚�Ѫ���{ɫˎ��������֏�MP�����ȌW�����ʹ��������һ�������⣬�@�Ӯ�������Σ�U�r����Ϳ����S�r�ʂ�á�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000020# 5 #t2000020# \r\n#i2000021# 5 #t2000021#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(2000020, 5);
		qm.gainItem(2000021, 5);
		qm.gainExp(15);
		qm.dispose();
}
}