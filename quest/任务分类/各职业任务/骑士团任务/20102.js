/*
	����:	����ʿ֮·
	�؈D:	ʥ��
	����:	130000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("#b�ҵȴ�����ľ�����");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(20102) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20102) == 1) {
		qm.sendAcceptDecline("���ѽ������x���ˆ᣿ �x��֮���ǲ��ܷ��ڵģ����Ԅձ����ء� �����Ҫ#b�x�����gʿ֮·#k�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1372043#   #t1372043#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1200);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1372043,1);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("�F�����ѽ������gʿ�ˡ� �������׃�ø��������������ݴ���S�I�����������������ݡ� ����X��̫�y������ʹ��#b�Ԅӷ���#k�� �@��߀����Ϥħ�����I���˶��Էǳ����á�");
		}
	if (status == 2)
		qm.sendNext("���⣬�ҽo�������һЩ#bSP#k������Դ��_#bSkill�x��#k�W�����ܡ� ��Ȼ��һ�_ʼ�K�������м��ܶ����ԌW������Щ���ܱ���ȌW������������ſ��ԌW����");
	if (status == 3)
		qm.sendNextPrev("��Ҫӛס���ͳ����ߵĕr��ͬ���ɞ����gʿ֮��������������pʧ֮ǰ�e�۵Ĳ��ֽ��ֵ��");
	if (status == 4)
		qm.sendPrev("���ˡ�������ð�U�Tʿ�F���Tʿ��Ո���Լ��Ęs�u�����o�҂��ė��~�����Ŭ���ɡ�");
	if (status == 5){
		qm.dispose();
}
}