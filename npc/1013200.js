/*
	����:	С��
	�؈D:	ï�ܵ�ɭ��
	����:	900020100
*/

function start() {
	cm.sendNext("�����@�e��������Ⱦ��ң�");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.playerMessage(-1, "�����С��");
		cm.forceCompleteQuest(22015);
		if(!cm.haveItem(4032449, 1)) cm.gainItem(4032449, 1);
		}
	cm.dispose();
}