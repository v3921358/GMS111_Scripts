/*
	����:	����Ͱ
	�؈D:	ǰԺ
	����:	100030102
*/

function start() {
	if (cm.isQuestActive(22007) && !cm.haveItem(4032451)) {
		cm.sendOk("#b(��õ���һ���u���������ýo������)#k");
		cm.gainItem(4032451, 1);
	} else {
		cm.sendOk("#b�@��һ���b���u����Ͱ��#k");
		}
	cm.dispose();
}
