/*
	����:	����
	�؈D:	�����
	����:	104000000
*/

function start() {
	cm.sendYesNo("����ȥ#b#m" + 914040000 + "##k��?�����֧��#b 500 ����#k �Ҳ��ܴ����ȥ��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���㿼�]���ف����Ұɣ�");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 500) {
		cm.gainMeso(-500);
		cm.warp(200090060,0);
		}
	cm.dispose();
}
}