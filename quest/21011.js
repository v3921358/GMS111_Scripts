/*
	����:	��ʧ������
	�؈D:	����ɭ��2
	����:	140090200
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2 && mode == 0) {
		qm.dispose();
		return;
		}
	if (status == 3) {
		qm.sendOk("Ŷ���ǘӰ���Ӣ�۹�Ȼ��æ��....�޿ޡ�Ҫ�Ǹ�׃�����ˣ��S�r���ԁ����ҡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(21011) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21011) == 1) {
		qm.sendNext("�����Һ��� ���f��Ӣ�ۻ؁���...�������� �e�ˆ᣿ʲ�N���] �e�᣿����@λ...�@λ��Ӣ�ۆ�?");
		}
		}
	if (status == 1)
		qm.sendNextPrev("...���Ǹ��d��...��Ȼ���@��Ҋ��Ӣ�ۣ����ǘs�Ұ��������Ղ��ְɣ�혱��ٱ�һ���Ҿ͸����ˣ�������߀���Ⱥ�������....");
	if (status == 2)
		qm.sendSimple("����...Ӣ�����N�]�Ў������أ���\r\n#b#L0#������֪Ӣ�����Լ�����...��...��ԓ�Ǻͺ�ħ�����Q�Y�rŪ���ˡ�");
	if (status == 3)
		qm.sendAcceptDecline("�������ÿ��ܕ�̫���ᣬ���^#bՈ���������@�ф��ɣ�#k �@�����ͽoӢ�۵ĶY�Ӣ�ۿ����ֿ������c���.. \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1302000# 1 #t1302000# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainItem(1302000,1);
		qm.gainExp(35);
		qm.sendOkS("#b(�B����һ�c������Ӣ��...�B������İ������֮ǰ��������^���᣿��ԓ���N�����?)#k",3);
		}
	if (status == 5){
		qm.summonMsg(16);
		qm.dispose();
}
}