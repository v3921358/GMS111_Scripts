/*
	����:	����ʹ�ߵ���ʿ�ȼ�����
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
	if (qm.getQuestStatus(20203) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20203) == 1) {
		qm.sendAcceptDecline("#v4032098:##t4032098#ȫ�������������ܺá� ��߂��˳ɞ���ʽ�Tʿ���Y�� ����̤����ʽ�Tʿ֮·�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142067#   #t1142067#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1310);
		qm.removeAll(4032098);
		qm.gainItem(1142067,1);
		qm.sendNext("�F�����Ѳ������ޟ��Tʿ�� ���ѽ��ɞ���ð�U�Tʿ�F����ʽ�Tʿ��");
		}
	if (status == 2)
		qm.sendNext("�ҽo����#bSP#k�� ����߀�������L�`ʹ�߼�����ֻ����ʽ�Tʿ���܌W���ļ��ܡ� ϣ�����ܺ��Lһ�𲻔�ĥ����");
	if (status == 3)
		qm.sendPrev("����ð�U�Tʿ�F����ʽ�Tʿ��ϣ������һֱ�������Ե�˼�S��");
	if (status == 4){
		qm.dispose();
}
}