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
	if (qm.getQuestStatus(20101) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20101) == 1) {
		qm.sendAcceptDecline("���ѽ������x���ˆ᣿ �x��֮���ǲ��ܷ��ڵģ����Ԅձ����ء� �����Ҫ#b�x����Tʿ֮·#k�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1302077#   #t1302077#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1100);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1302077,1);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("���ь�������w������m�ϻ��Tʿ�����w�� ֮���������׃�ø��������������ݴ���S�I�����������������ݣ�����X��̫�y������ʹ��#bAuto#k��");
		}
	if (status == 2)
		qm.sendNext("���⣬�ҽo�������һЩ#bSP#k������Դ��_#bSkill�x��#k�W�����ܡ� ��Ȼ��һ�_ʼ�K�������м��ܶ����ԌW������Щ���ܱ���ȌW������������ſ��ԌW����");
	if (status == 3)
		qm.sendNextPrev("��Ҫӛס���ͳ����ߵĕr��ͬ���ɞ���Tʿ֮��������������pʧ֮ǰ�e�۵Ĳ��ֽ��ֵ��");
	if (status == 4)
		qm.sendPrev("���ˡ�������ð�U�Tʿ�F���Tʿ��Ո���Լ��Ęs�u�����o�҂��ė��~�����Ŭ���ɡ�");
	if (status == 5){
		qm.dispose();
}
}