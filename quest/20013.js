/*
	����:	������װ�ŵ��ߵ�����
	�؈D:	�µ�����5
	����:	130030004
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.sendOk("�����Ҫ�ͻ؁����ҡ�~");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#b(*����........��.....*)#k");
	if (status == 1)
		qm.sendNextPrev("...�٣��㇘�����ˣ��Ҳ�֪������һ���L�͡���һ���Ǆ��ź�#p1102006#������˰ɡ��gӭ! ���� #p1102007#, �ҵ��dȤ���u�� #b����#k�������ڿ��]׌һ������gӭ��ĶY�");
	if (status == 2)
		qm.sendNextPrev("�e�����Ҳ��ܽo��һ�����ӣ�����қ]�����Ĳ��ϡ������ҵ�����Ҫ�Ĳ��ϣ����@���^�򸽽�������l�F�ܶ������e�����Ʒ�����ܲ��ܽo�Ҏ��� һ�� #i4032267:##t4032267# ��һ��  #i4032268:##t4032268# ��");
	if (status == 3)
		qm.sendNextPrev("��֪����δ����ǂ�����? ʹ����� #b��ͨ����#k ���������ӡ�");
	if (status == 4)
		qm.sendAcceptDecline("Ո�o�� 1�� #b#t4032267##k �� 1�� #b#t4032268##k Ȼ���Ҿ͕���һ����������ӽo�㣬 �ҕ����@�e�����㣡!");
	if (status == 5){
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
		qm.sendNext("���ѽ�����ˣ�\r\n̫���ˣ��ޣ���Щ������������Ҫ�� #b#t4032267##k ��  #b#t4032268##k��");
	if (status == 1)
		qm.sendPrev("���@�ǽo��� #t3010060#. �����N��?? Ư���ɺǺ�^^ ����� #b�����ӷŵ�����I����Kʹ����׌HP�֏͸��졣#k. ������ #b�b��e��#k ���_��ĵ��ߙ�, ����Ո�_�J�ǲ����յ������� #b#p1102008##k. ���ˣ�Ո���ռ��^ָʾ�����������һ���ˡ� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010060# 1 #t3010060# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 ���ֵ");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032267, -1);
		qm.gainItem(4032268, -1);
		qm.gainItem(3010060, 1);
		qm.gainExp(95);
		qm.dispose();
}
}