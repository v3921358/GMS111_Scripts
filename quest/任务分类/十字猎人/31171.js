/*
	����:	Ħڭ��ί��
	�؈D:	ȼ�յ���ľ��3
	����:	272000300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("������һ�£�����ܰ����ˎ����e���u�ϣ������e�ɼ������☋�ɵı����з�ӡ����Ҳ�S���Է����{�䡣 ���ٿ���׌�{�䲻���Mһ��������");
	if (status == 1)
		qm.sendNextPrev("���}�ǬF���ҵ�����׃�ú������]�k���Ƅӵ����eȥ�� ������Ǟ��˱��o���ˣ����@�eʣ�µĹ�����Y��Ԓ�����Ǖr���˱��o���ˣ���ֻ�ܰ��Լ������Yȫ��ጷų���");
	if (status == 2)
		qm.sendAcceptDecline("�ڸ����Ĺ������ϣ���ԓ�����ҵ������ҵ�������ì��Ƭ�� ��ȥ�����������L��#b50��#v4033080:##k�� �ǘӵ�Ԓ���Ҿ͑�ԓ���ԫ@�Ì����ˎ����e���u��ȥ��������");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���ѵ�ì��Ƭ#v4033080:#ȫ���L�����ˆ᣿");
	if (status == 1)
		qm.sendNextPrevS("#b�o���@�Ӿ͉��ˆ᣿");
	if (status == 2)
		qm.sendNextPrev("�ţ����@Щ��֏�������Ԓ������ԓ�㹻�ˡ�");
	if (status == 3)
		qm.sendNextPrev("�����mȻ�]��ȫ���֏ͣ�������֏���һЩ���Y�� �F����Ҫ�������˵��e���uȥ�ˡ� �Еr�g��Ԓ������ҊҊ#b#p1033201##k������ȥ�����������á�");
	if (status == 4)
		qm.sendNextPrevS("#b#p1033201##k��");
	if (status == 5)
		qm.sendNextPrev("���Ǭ����֮���� ͨ�^��߅�Ă��Ϳڣ���ԓ����Ҋ������ �����w�ͺܴ󣬄e�������ˡ� ��Ϥ��֮����͕��l�F�����䌍�ǂ��ܴ�����ˡ�");
	if (status == 6)
		qm.sendAcceptDecline("��̝���㣬���˽K춵þ��ˡ� �e���˴�����#b#p1033201##k���á�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 430000 exp");
	if (status == 7){
		qm.forceCompleteQuest();
		qm.removeAll(4033080);
		qm.gainExp(430000);
		qm.dispose();
}
}