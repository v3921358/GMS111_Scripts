/*
	����:	��ͼ����
	�؈D:	��վ����
	����:	310050000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23951) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23951) == 1) {
		qm.sendNext("��ʲ�N�᣿");
		}
		}
	if (status == 1)
		qm.sendNextPrev("�ţ��@�������ǂ����]��λ���ߵ����ˆ᣿");
	if (status == 2)
		qm.sendNextPrev("�����ڳ�Ц�������ӆ᣿ ���������ӣ��ҵĵ�λҲ����ߣ� ���c�þ��Z�����o�ذќʴ_��������V�ң�");
	if (status == 3)
		qm.sendNextPrev("�e��l�F�˱��Ɖĵ�#o6150000#�� �������ߣ�");
	if (status == 4)
		qm.sendYesNo("���fʲ�N�� ���N�F�ڲ��f�� �҂��s�oȥ������ �����ң�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 99395 exp");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.gainItem(4000608, -30);
		qm.gainExp(99395);
		qm.warp(310050200, 1);
		qm.dispose();
}
}
