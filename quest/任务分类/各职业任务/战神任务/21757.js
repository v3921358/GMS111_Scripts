/*
	����:	Ů�ʵĲ�ʿ�Ϲ���
	�؈D:	���
	����:	140000000
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
	if (qm.getQuestStatus(21757) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21757) == 1) {
		qm.sendYesNo("����ʲ�N�᣿ ������ɞ��Tʿ����֮�⣬�@�e��ֹ�f�s�˵ȿ����� �š�������ʲ�N�� #v4032330:#����������oŮ�ʆ᣿ �f��������Σ�U���|�� ��Ո�����o�ҡ� ��Ҫ�ȿ�һ�¡�");
		}
		}
	if (status == 1)
		qm.sendNextPrev("�����š�������ă��ݷǳ���Ȥ�� ��Ȼ֪����F���ۜI���������]ʲ�N�� �҂��������о��ġ�");
	if (status == 2)
		qm.sendNextPrevS("#b��ɫ֮��Ҳ�S���ڴ��@�e�����⡣");
	if (status == 3)
		qm.sendPrev("��ʹ���ǘӣ�Ҳ��#m130000000#�����顣 �����@�ӵ����˛]���κ��P�S�� �������N���C�Լ����Ǻ�ɫ֮���أ����� �x�x��������Ҋ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainItem(4032330, -1);
		qm.gainExp(10000);
		qm.dispose();
}
}