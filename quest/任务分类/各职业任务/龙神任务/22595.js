/*
	����:	����������Ľ��
	�؈D:	��߳�
	����:	220000000
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendNext("��ã�����#m220000000#���l��#p2041004#�� ��ʲ�N���Ԏ���Ć᣿ �ţ�#o9300390#�᣿");
	if (status == 1)
		qm.sendNextPrev("�u�� �������N֪��#o9300390#������ģ� �lҲ��֪���������l���܂}��Ŀ��ء����Ǻǣ��ðɣ��ҾͰ�#o9300390#��������V��ɡ�");
	if (status == 2)
		qm.sendNextPrev("����ǰ��#o9300390#�⵽�u���������؂���#r��˾͛]�����l���܂}���ˡ� С͵���@���C�������M��#k�� �mȻ��֪����ʲ�N�����������܇��ء�");
	if (status == 3)
		qm.sendPrev("���ǣ��飬��ʲ�N�[���@�N���µı��飿 �x�x�㌦С͵�������ʾ���������@����������ұ��ܣ�\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 28135 exp");
	if (status == 4){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(28135);
		qm.dispose();
}
}