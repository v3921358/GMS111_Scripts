/*
	����:	[ʮ������]�µ��ѷ�
	�؈D:	��ħʮ�����žݵ�
	����:	931050500
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(1639) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1639) == 1) {
		qm.sendNext("ƴ�D��Ƭ������uƴ�����ˡ� �ڕr�g����г��F�İ������գ�߀�Еr�g�ѿp������ͬһ�r�ڳ��F�ĕr���T�����@һ��֮�g���������ĳ�Nϵ�� �������յ�Ŀ�ĵ�����ʲ�N�ء�������һ�N������A�С�");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("��F��Ҫ����һ��ȥ#b#m270000000##k̽��һ�����e������᣿");
	if (status == 2)
		qm.sendPrev("���҂��F�ڳ��l���鿴�ѿp������ɡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 50000 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.warp(270000000,2);
		qm.gainExp(50000);
		qm.dispose();
}
}