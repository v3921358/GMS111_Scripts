/*
	����:	�����а�
	�؈D:	���ﰲ�ر�����
	����:	260020000
*/

function start() {
	if (cm.getMapId() == 260020000) {
		cm.sendYesNo("  ������·��ֻ��Ҫ#b1000 ����#k�Ϳ��Ե�#b#m260020700##k��");
	} else {
		cm.sendYesNo("  ������·��ֻ��Ҫ#b1000 ����#k�Ϳ��Ե�#b#m260020000##k��");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if(cm.getPlayer().getMeso() >= 1000) {
		if (cm.getMapId() == 260020000) {
			cm.warp(260020700, 0);
		} else {
			cm.warp(260020000, 0); 
			}
			cm.gainMeso(-1000);
		} else {
			cm.sendOk("ι���ȵȡ����Ǯ���񲻹�����������#b1000#k���š�����ȷ�Ͽ�����Ƿ����㹻��Ǯ��");
			}
			}
		cm.dispose();
}