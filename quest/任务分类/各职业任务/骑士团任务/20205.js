/*
	����:	��Ϯ�ߵ���ʿ�ȼ�����
	�؈D:	ʥ��
	����:	130000000
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
	if (qm.getQuestStatus(20205) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20205) == 1) {
		qm.sendAcceptDecline("#v4032100:##t40320100#ȫ�������������������ˣ� �������� �Ҿ�֪����һ�����С� �Ҵ_�J��߂��˳ɞ���ʽ�Tʿ���Y�� ����������ɞ���ʽ�Tʿ�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142067#   #t1142067#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1510);
		qm.removeAll(4032100);
		qm.gainItem(1142067,1);
		qm.sendNext("�F�����Ѳ������ޟ��Tʿ�� ���ѽ��ɞ���ð�U�Tʿ�F����ʽ�Tʿ��");
		}
	if (status == 2)
		qm.sendNext("�ҽo����һЩ#bSP#k�� ��F�ڿ��ԌW�����u�߼�����ֻ����ʽ�Tʿ���܌W���ļ����ˡ� �@Щ���W늽Y�ϵ�ǿ���ܣ�ϣ����ú�ʹ�á�");
	if (status == 3)
		qm.sendPrev("�e�ѳɞ���ʽ�Tʿ�����鿴��̫�ء� ���ܶ��D�y�����飬Ҳ�ö��Ì��Ҙ�Ȥ��");
	if (status == 4){
		qm.dispose();
}
}