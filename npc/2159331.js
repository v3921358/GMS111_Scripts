/*
	����:	��˹����
	�؈D:	ʱ��ͨ��
	����:	220050300
*/

function start() {
	cm.sendYesNo("��_����Ҫ�����������N��");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(927000100, 0);
		cm.spawnMonster(9001041,1);//�ٻ�����
		}
	cm.dispose();
}