/*
	����:	�����׵�����
	�؈D:	�о���B-1 ����
	����:	261020200
*/

function start() {
	if (cm.isQuestActive(3314) && !cm.haveItem(2022198)) {
		cm.sendOk("#b����#v2022198:#ȥ��#p2111009#");
	} else {
		cm.sendOk("ֻ��һ����ͨ��������");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(2022198, 1);
		}
	cm.dispose();
}