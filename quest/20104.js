/*
	����:	ҹ����֮·
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
	if (qm.getQuestStatus(20104) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20104) == 1) {
		qm.sendAcceptDecline("���ѽ������x���ˆ᣿ �x��֮���ǲ��ܷ��ڵģ����Ԅձ����ء� �����Ҫ#b�x��ҹ����֮·#k�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1472061#   #t1472061#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1400);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1472061,1);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("�F�����ѽ���ҹ�����ˡ� �������׃�ø��������������ݴ���S�I�����������������ݡ� ����X��̫�y������ʹ��#b�Ԅӷ���#k�� �@��߀����Ϥҹ���ߵ��˶��Էǳ����á�");
		}
	if (status == 2)
		qm.sendNext("߀�У��ҽo����һЩ#bSP#k������Դ��_#b�����x��#k���W������.�@�Ӵ�C����ŕ����ף���Ȼ����Щ���ܱ���ڌW�����������ᣬ���܌W��.һ�_ʼ�Ȅeȥ������");
	if (status == 3)
		qm.sendNextPrev("��Ҫӛס���ͳ����ߵĕr��ͬ���ɞ�ҹ����֮��������������pʧ֮ǰ�e�۵Ĳ��ֽ��ֵ������Ҫ�����������Լ���");
	if (status == 4)
		qm.sendPrev("���ˡ�������ð�U�Tʿ�F���Tʿ��ȥ̽���l���o�����_�ĺڰ��ɡ�");
	if (status == 5){
		qm.dispose();
}
}