/*
	����:	ҹ���ߵ���ʿ�ȼ�����
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
	if (qm.getQuestStatus(20204) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20204) == 1) {
		qm.sendAcceptDecline("#v4032099:##t4032099#ȫ���������������^�����@�cС��߀��ֵ���ҷQד�� �Ҵ_�J����гɞ���ʽ�Tʿ���Y�� �����ɞ���ʽ�Tʿ�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142067#   #t1142067#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1410);
		qm.removeAll(4032099);
		qm.gainItem(1142067,1);
		qm.sendNext("�F�����Ѳ������ޟ��Tʿ�� ���ѽ��ɞ���ð�U�Tʿ�F����ʽ�Tʿ��");
		}
	if (status == 2)
		qm.sendNext("�ҽo����һЩ#bSP#k�� �mȻ���࣬�������Á�W�����ڵļ��ܡ� ����Ժͺڰ�һ��ԇ�һ��ҹ���߼�����ֻ����ʽ�Tʿ���܌W������Щ���ܡ�");
	if (status == 3)
		qm.sendPrev("����ð�U�Tʿ�F����ʽ�Tʿ��ϣ���㲻Ҫ����ڰ����mȻ�Լ����ں�Ӱ֮�С�");
	if (status == 4){
		qm.dispose();
}
}