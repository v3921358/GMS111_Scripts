/*
	����:	�����ߵ���ѵ��
	�؈D:	�����߱���
	����:	310010000
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
	if (qm.getQuestStatus(23100) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23100) == 1) {
		qm.sendNext("��ϲ��ɞ鷴���ߣ���һ�_ʼ�������������׌�˲�Ŀ��������#b#p2151001##k�϶�Ҳ���������ϸ��ܵ���ʲ�N���ŕ������́����@�e��");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("��Ȼ���ѽ��ɞ��˷����ߣ��͵��J���ޟ����ú�ꅼ��˰ɣ� �e���ģ��ҕ�������������ԓ�߂��ؠ��һ�c�c�̽o��ġ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.forceStartQuest(23128, "1");
		qm.gainExp(100);
		qm.dispose();
}
}
