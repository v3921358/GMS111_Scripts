/*
	����:	��Ϯ��֮·
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
	if (qm.getQuestStatus(20105) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20105) == 1) {
		qm.sendAcceptDecline("���ѽ������x���ˆ᣿ �x��֮���ǲ��ܷ��ڵģ����Ԅձ����ء� �����Ҫ#b�x�����u��֮·#k�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1482014#   #t1482014#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1500);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1482014,1);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("�F�����ѽ������u���ˡ� �������׃�ø��������������ݴ���S�I�����������������ݡ� ����X��̫�y������ʹ��#b�Ԅӷ���#k�� �@��߀����Ϥ���u���I���˶��Էǳ����á�");
		}
	if (status == 2)
		qm.sendNext("���⣬�ҽo�������һЩ#bSP#k������Դ��_#bSkill�x��#k�W�����ܡ� ��Ȼ��һ�_ʼ�K�������м��ܶ����ԌW������Щ���ܱ���ȌW������������ſ��ԌW����");
	if (status == 3)
		qm.sendNextPrev("��Ҫӛס���ͳ����ߵĕr��ͬ���ɞ����u��֮��������������pʧ֮ǰ�e�۵Ĳ��ֽ��ֵ�����Ԅe�������C������Σ�U�� ֪���ˆ᣿");
	if (status == 4)
		qm.sendPrev("���ˡ�������ð�U�Tʿ�F���Tʿ��ϣ����ð�U��죡");
	if (status == 5){
		qm.dispose();
}
}