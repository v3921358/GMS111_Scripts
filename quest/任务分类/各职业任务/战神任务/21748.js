/*
	����:	�����ߵķ�ӡʯ
	�؈D:	��³���鱨�̵�
	����:	104000004
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
	if (qm.getQuestStatus(21748) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21748) == 1) {
		qm.sendNext("�� �f�ˣ������{���ɫ֮����¼�����ȥ��#m250000000#��#b#h0##k�� �����ˡ� ���^�����@���ǲ��������˺�ɫ֮����Ѓ���");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b���v��#m250000000#��ӡʯ�����顣��#k");
	if (status == 2)
		qm.sendNextPrev("����ʲ�N�� ��Ӣ�ۡ����^ȥ����ѷ�ӡʯ���o��ҵĆ᣿#b#m250000000##k��ӡʯ��������Ҳ�]�P�S�� �@���������x�ش�");
	if (status == 3)
		qm.sendNextPrevS("#b���x�ش�");
	if (status == 4)
		qm.sendNextPrev("��Ȼ�^ȥ��ӡʯ��Ӣ�۵Ė|�������N#bֻҪ��Ӣ���M��һЩ�{�飬�����Ǻܬ����һЩ����f�������ܰl�F��ӡʯ����������#k�� �ǘӵ�Ԓ���҂������ں�ɫ֮��֮ǰ���ҵ���ӡʯ�ˡ�");
	if (status == 5)
		qm.sendNextPrevS("#bԭ�����@�ӣ����ǂ����k����");
	if (status == 6)
		qm.sendNextPrev("�ǺǺǡ���̫���ˣ� �F�����Y־���P�˰ɣ� ��#b#h0##k�� �@���µļ���#s21100002#  #q21100002#��");
	if (status == 7)
		qm.sendPrev("���푪ԓ�����{��Ӣ�۵������ˣ� ����������^�m�� �P춺�ɫ֮����YӍ����߀�ǌ����ޟ��ɣ� һ��Ҫ�����Ѻ�ɫ֮����Ӵ��ĳ̶Ȱ��� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n#s21100002#  #q21100002#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20000 exp");
	if (status == 8){
		qm.forceCompleteQuest();
		qm.teachSkill(21100002, qm.getPlayer().getSkillLevel(21100002), 30);
		qm.gainExp(20000);
		qm.dispose();
}
}
