/*
	����:	������˹�ص�ˮ��
	�؈D:	ѩ����
	����:	211000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#b#p2161004##k�����ѽ����o�����ļ��ˡ� ϣ�����܎���һ��æ����");
	if (status == 1)
		qm.sendNextPrev("�F��#p2161004#���`��֮���ԕ��ܵ��������ĥ�������{������#p2161004#�����{�䡣 Ҫ����_�ǂ��{�䣬����Д�{������#p2161004#֮�g���{�����������");
	if (status == 2)
		qm.sendNextPrev("�㎧���@��#v2430159:#ˮ���^ȥ�� �@��ˮ���Y�����ҵ�ħ���������� ��#p2161004#���ڵĵط�ʹ��ˮ�����{����ʩ����#p2161004#���ϵ��{��͕����_��");
	if (status == 3)
		qm.sendAcceptDecline("�@��ˮ���Ҿ��ͽo�㣬���������Ū�G�ˣ������u������Ҫ#r1000�f����#k�� һ��Ҫӛס�� �ҕ������͵��{����֮�����̎�����ȥ��Ī�ذɡ�");
	if (status == 4){
		qm.forceStartQuest();
		qm.gainItem(2430159, 1);
		qm.warp(211060000, 0);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���㰡��������ҵ��Ž��o������˹���ˆ᣿");
	if (status == 1)
		qm.sendNextPrev("ʲ�N�� �ҵ��{����_�ˣ� ���N������");
	if (status == 2)
		qm.sendNextPrev("�ס�������İ������F���Ҳ��X�����ˣ� Ҳ�����ˣ� �������ɵ��Ƅ��ˣ� ���������������x�x�㡭��");
	if (status == 3)
		qm.sendPrev("��Ƿ�˰�����˹��һ�����顭����ȻҲǷ��һ�����顭��������x����������L����#b#t4310009##k��#b#t4310010##k���Ҿ����ڳ��e�ҵ���#b�b��#k��#b����#k���㽻�Q��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainItem(2430159, -1);
		qm.gainExp(12000);
		qm.dispose();
}
}
