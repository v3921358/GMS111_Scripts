/*
	����:	[ʮ������]ҵ�񱨸�
	�؈D:	��ľ��
	����:	240000000
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendAcceptDecline("�r���T�϶��ͺ�ħ�������P�S�� ��ͨ�^�ٿv�r���T��ȡ����Ě�Ϣ�� ���Ǟ�ʲ�NҪ�@���أ� �y���Ǟ��˽oð�U�u�����u���y�᣿ �������ӣ��s�o���@һ��r���o#b���R��#k�ɡ� ��߀Ҫ���{��ׂ��ط����������Ȼ�#b#m310000000##k���ɡ�");
	if (status == 1){
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
		qm.sendAcceptDecline("����ľ��l�F��ʲ�N�᣿߀���^�m���҂����o�ĵط����f�� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 164200 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.warp(931050500,0);
		qm.gainExp(164200);
		qm.dispose();
}
}
