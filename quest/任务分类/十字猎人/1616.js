/*
	����:	[ʮ������]л����������
	�؈D:	��ħʮ�����žݵ�
	����:	931050500
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	}
	if (status == 1) {
		qm.sendOk("�㲻�����fδ��ð�U�u׃��ʲ�N���Ӷ����P����°ɣ� ���ȥ����һ��ɡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("����ܕ����@���¸е����@���������Ƿ�ҪЧ���ð�U�u�����أ�\r\n#L0##b����ĺ�ƽ�� ���@��ָʲ�N��#l\n#k");
	if (status == 1)
		qm.sendAcceptDecline("�ҕ��r�������fԔ�������飬���ǣ������ҵ��О�Ź��Ǟ��˿�����������δ��İlչ�� �����Ұl�F����һ�����ɶ�õ���ţ����Л]�����^����Ĳ��ܱ��o�����أ�");
	if (status == 2){
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
		qm.sendYesNo("�������Ҫ�ȵ���λ���ˣ� �gӭ���R�� Ԕ������҂����o�ĵط����f�ɡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.warp(931050500,0);
		qm.gainExp(10000);
		qm.dispose();
}
}