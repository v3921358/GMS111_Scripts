/*
	����:	���ɵĶ�
	�؈D:	Σ�յ�׽�Բ�
	����:	931000001
*/

function start() {
	cm.sendYesNo("#b����Ҋ���ɵĶ��ڣ���֪�����ǲ������Mȥ�e���ˡ� Ҫ�Mȥ�����᣿��#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("#b�����N���ܡ������N�f��Ҳ�����㵽�e��ȥ�ġ��ǰɣ���#k");
	} else {
		cm.gainExp(35);
		cm.warp(931000010, 0);
		}
	cm.dispose();
}