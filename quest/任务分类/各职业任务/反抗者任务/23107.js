/*
	����:	��һ������
	�؈D:	�����߱���
	����:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23107) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23107) == 1) {
		qm.sendNext("�gӭ�㣬#h0#�� ����ؓ؟�����ߵČ����΄յ�#b#p2151003##k�� �ڴ���֮��ĵط�Ҋ�棬���X�������c��Ť��");
		}
		}
	if (status == 1)
		qm.sendNextPrev("�䌍�ґ�ԓ���w�b�̹٣�����Ҳ֪�����������Ǜ]�����B���w�b�ģ������Ҿ�ؓ؟���@헹�����");
	if (status == 2)
		qm.sendAcceptDecline("��֮��ؓ؟���ǌ����΄գ����������Ҋ��ĴΔ�����Ҫ������D�̹�#b#p2151001##k߀Ҫ�ࡣ �ں�ɫ֮���s���@���ط�֮ǰ�������΄յĕr��һ��Ҫ�����fȫ�Ĝʂ䡣\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 200 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.forceStartQuest(23129, "1");
		qm.gainExp(200);
		qm.dispose();
}
}
