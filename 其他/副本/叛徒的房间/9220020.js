/*
	����:	���˹
	�؈D:	��ͽ��������
	����:	674030000
*/

function start() {
	if (!cm.isLeader()) {
		cm.sendNext("�ܱ�Ǹ���Ҳ����c����Մ��Ո׌��ĽM�L�c�ҽ�Մ��");
		cm.dispose();
		return;
		}
	if (cm.haveItem(4032248,20)) {
		cm.warpParty(674030200);
		cm.gainItem(4032248,-20);
		cm.spawnMonster(9400748,1);
	} else {
		cm.sendOk("�٣����@�e����ʯ���ҵ�MV��Ѩ��20��#v4032248:##b#t4032248##k�؈D��");
		}
	cm.dispose();
}