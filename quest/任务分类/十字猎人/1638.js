/*
	����:	[ʮ������]ʱ����ٰ�������
	�؈D:	��ħʮ�����žݵ�
	����:	931050500
*/

var status = -1;

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
	if (status == 0) {
	if (qm.getQuestStatus(1638) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1638) == 1) {
		qm.sendNext("�������պ���؁��ˣ� ���ڕr�g�������ˡ� ���ǲ�֪�����F��ȥ�����e����");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b�������գ� ���������l��");
	if (status == 2)
		qm.sendNextPrev("�������ա������Ǻ�ħ����܊�F�L��һ�T����ħ��������ӡ�ᣬ���Ͷ�������ˡ�");
	if (status == 3)
		qm.sendNextPrevS("#b܊�F�L�� ���N���ĳ��F������ζ����ħ�����؁��ˆ᣿");
	if (status == 4)
		qm.sendPrev("�ǂ�߀��̫����� ��֮�F�����ڰl��һЩ��ֵ����顣 �جF�İ������պ͕r���T�����@֮�g�϶���ʲ�Nϵ�� �������������^��ħ�������\ʿ���r���T��Ŀ�đ�ԓ���μ�����׌ð�U�u���������y��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 70000 exp");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.gainExp(70000);
		qm.dispose();
}
}