/*
	����:	���������Եķ���
	�؈D:	�µ�����3
	����:	130030002
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("�@�䌍�K���y������õ������b�����骄� �ðɣ�Ո�J����һ�룬������׃����͸��V�ҡ� ");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���S��ܵ����ԁ��C������������Ĺܵ�����#b�����A������#k�� ��ֻҪһ��������ֻҪ���εĲ����Ϳ��Ԛ������ˡ� ");
	if (status == 1)
		qm.sendNextPrev("��#bCtrl#k�I������ͨ����������㲻�����@�����I�����������½ǵ��I�P�O��̎���Q�����İ��I�� ");
	if (status == 2)
		qm.sendAcceptDecline("�F�ڣ����ѽ��Lԇ�^�ˣ��҂�һ��Ҫ�yԇ���� ���@���棬������ҵ����#r#o100120##k��Ү�׸����@����������x�� �Lԇ���C#r1ֻ#k.����؁��ҽo��Ī�� ");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendNext("�ܰ�ࡿ���W�úܿ죬����һ���Ǐ�������ߣ�");
	if (status == 1)
		qm.sendPrev("�@���b�����F�匣�ٵġ� �����ͽo�㴩���������ɣ� Ȼ�ᰴ�ռ��^�ķ���ȥ���ҵ��ֵ� #b#p1102006##k. �������V����һ��ԓ���N���� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1002869# 1 #t1002869#  \r\n#i1052177# 1 #t1052177#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 ���ֵ");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(1002869, 1);
		qm.gainItem(1052177, 1);
		qm.gainExp(35);
		qm.dispose();
}
}