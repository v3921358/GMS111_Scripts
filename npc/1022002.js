/*
	����:	��
	�؈D:	��ʿ����
	����:	102000000
*/

function start() {
	if (cm.getPlayer().getLevel() > 50) {
		cm.sendOk("�㿴�����ǿ�Ę��ӣ�Ҫ��Ҫȥһ�� #b#m105100100##k �أ�");
	} else {
		cm.sendOk("���㳬Խ�ҵĕr�����^��ɡ�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.warp(105100100,0);
	cm.dispose();
}
