/*
	����:	���ɵĴ���
	�؈D:	���¶�˹̹
	����:	310000000
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
	if (qm.getQuestStatus(23905) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23905) == 1) {
		qm.sendNext("Ҋ�^#p2152016#�˰ɡ������f�˰ɣ����������ĕ��桭#p2152016#��<�Oҕ��>��߀�����Ѻõ��Ը�");
		}
		}
	if (status == 1)
		qm.sendNextPrev("���^���֪���ˡ��҂��屻������ɫ������������Ȼ�����Ǿ���ϣ���Ŀ��ơ��˂���ϲ�g�����������������ޡ���ˣ��ŕ������������˵��㡣");
	if (status == 2)
		qm.sendPrev("�F�ڴ_�J�㲻��<����>�ˣ�����Ҳ�����ĵġ�߀�ý�����`�����mȻ���c���ˣ�߀�Ǵ��к��ɡ��gӭ��#m310000000#��ֻҪ���h�x������#m310000000#�ľ������h��������ѡ�\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 7000 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(7000);
		qm.dispose();
}
}