/*
	����:	˵������
	�؈D:	��ֵĸ�ľ����û�ش�
	����:	910100100
*/

function start() {
	cm.sendYesNo("�ҵ����ѣ���Ҫ��ȥ���N��#b�������δ����΄գ�����ȡ���΄������½����΄ա���");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�َ��Ҷ�����һЩ��");
	} else {
		cm.warp(101010000,0);
		}
	cm.dispose();
}