/*
	����:	��������ĵ���������
	�؈D:	��������ķ���
	����:	922030000
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
		qm.sendNext("��Ҫ���o��ĵ������΄����L��#t4000594#�� ���C#m220000000#�r�g������̎��#r#o9001028##k��ż�����ԫ@��#b#v4000594:##t4000594##k�� ��ֻҪ�L��#b100��#k���o�Ҿ��С�");
	if (status == 1)
		qm.sendNextPrev("�ҕ�һֱ�����@���ط�����ֻҪ���@�e���Ҿ����ˡ�\ r\n��������Ԓ�f������B����������ηǳ����ذ��� ����һ�b������������ ���^����ԓ�����������ɡ�");
	if (status == 2)
		qm.sendNextPrevS("#b.......................");
	if (status == 3)
		qm.sendAcceptDecline("�ðɣ��ҿ��԰����͵���#r#o9001028##k�ĵط�ȥ�� ����F�ھ�ȥ�᣿");
	if (status == 4){
		qm.forceStartQuest();
		qm.warp(922030002,1);
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
		qm.sendYesNo("�΄պ���������� ׌�ҿ������L������#b#v4000594:##t4000594##k�ɡ�");
	if (status == 1)
		qm.sendNextPrev("�Ǻǡ����ܺá� �@�ӵ�Ԓ���Ϳ��Ԉ����҂���Ӌ���ˡ���");
	if (status == 2)
		qm.sendNextPrevS("#bι�������Ђ����}����");
	if (status == 3)
		qm.sendNextPrev("������˼�����Ҫ̎�����L���������ɵ��`�꣬�ҬF�ں�æ�� �����������̎����֮���ف����҆᣿ ������Ҫ���Mһ�c�r�g����");
	if (status == 4)
		qm.sendPrevS("#b�����˼������ĕr�g����̎��׽��������e����ʲ�N�����᣿�mȻ���놖������������������æ���^һ�����ف������ɡ���\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 44669 exp",3);
	if (status == 5){
		qm.forceCompleteQuest();
		qm.gainItem(4000594, -100);
		qm.gainExp(44669);
		qm.dispose();
}
}