/*
	����:	ͨ����ӡͥԺ��·
	�؈D:	������֮��
	����:	200050001
*/

var status = -1;

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
	if (status == 0) {
	if (qm.getQuestStatus(21739) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21739) == 1) {
		qm.sendNext("#b#m920030000##k���������ѽ������ˣ�");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b���v��#b#m920030000##k�l�������顣��");
	if (status == 2)
		qm.sendNextPrev("����֮���P�ף����õ���#b���֮�ǵķ�ӡʯ#k��Ŷ������������������̫�����ˣ�");
	if (status == 3)
		qm.sendPrev("�҂���Ҫ�����u�����ߣ�Ո��#b#m200000000##k������猍����#b#p1002104##k����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainExp(12000);
		qm.dispose();
}
}