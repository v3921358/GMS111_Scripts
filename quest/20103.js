/*
	����:	����ʹ��֮·
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
	if (qm.getQuestStatus(20103) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20103) == 1) {
		qm.sendAcceptDecline("���ѽ������x���ˆ᣿ �x��֮���ǲ��ܷ��ڵģ����صľ�������ʹ��׃���t���� �����Ҫ#b�x���L�`ʹ��֮·#k�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1452051#   #t1452051# \r\n#i2060000# 500  #t2060000#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1300);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1452051,1);
		qm.gainItem(2060000,500);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("�F�����ѽ����L�`ʹ���ˡ� �������׃�ø��������������ݴ���S�I�����������������ݡ� ����X��̫�y��ʹ��#b�Ԅӷ���#k���ܣ�����ʹ���ݵķ���׃�ø����Ρ�");
		}
	if (status == 2)
		qm.sendNext("�ҽo�������һЩ#bSP#k�� �������#bSkill�x��#k�ЌW�����ܡ� ��Щ������Ҫ�ȌW��������������܌W���������ڌW�����ܵĕr����Ҫ���ؿ��]��");
	if (status == 3)
		qm.sendNextPrev("��Ҫӛס���ͳ����ߵĕr��ͬ���ɞ��L�`ʹ��֮��������������pʧ֮ǰ�e�۵Ĳ��ֽ��ֵ��");
	if (status == 4)
		qm.sendPrev("���ˡ�������ð�U�Tʿ�F��һ�T��ϣ�����ܱM���ء���");
	if (status == 5){
		qm.dispose();
}
}