/*
	����:	��������ҩˮ
	�؈D:	����
	����:	250000000
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
		qm.sendNext("����ʲ�N�᣿ �ţ� ��ԭ#v4220151:##t4220151#�� ׌�ҿ���������ѽ�������N�ܰ�#t4220151#���ڷ�ˮ�Y���أ� ֻ��#p2090004#�ǂ�ɵ�ϲŕ����@�N�e�`�� ߀�ü������|�ر��^���g��");
	if (status == 1)
		qm.sendNextPrev("Ҫ��ԭ#t4220151#��Ҳ���ǲ����ܵ��¡� ֻҪ�������īˮ������׌���֏�ԭ��Ġ�B�� �ҿ��Ԏ����u��#t4032342#����ֻҪ�����L���Y�Ͼ��С� ��Ȼ����߀����һ�c�c���m�M��");
	if (status == 2)
		qm.sendAcceptDecline("��Ҫ50��������ż��50���ޟ�ľż�ĺۼ���100���ޟ�������Ƭ�����500000���m�M��");
	if (status == 3)
		qm.sendPrev("�Ǻǣ� �_����ˣ���Ȼ��#p2090004#׌���^��ģ���Ҳһ�������@��æ��������ȥ�ɣ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i4032342# 8 #t4032342#");
	if (status == 4){
		qm.forceStartQuest();
		qm.forceStartQuest(21763, '800'); //���������������
		qm.gainItem(4032342, 8);
		qm.forceCompleteQuest();
		qm.dispose();
}
}
