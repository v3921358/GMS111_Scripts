/*
	����:	����
	�؈D:	��ͽ��������
	����:	674030100
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	switch(cm.getPlayer().getMapId()) {
	case 674030100:
		if (status == 0) {
			cm.sendOk("�����ȥ�ˆ᣿");
		} else {
			cm.warp(910010500,0);
			cm.dispose();
			}
			break;
	case 674030000:
		if (status == 0) {
			cm.sendOk("�����N�ܵ��@�e�������ҿ��Ԏ����Ƶ����@�����g�������ط���");
		} else {
			cm.warp(674030000,1);
			cm.dispose();
			}
			break;
	case 674030200:
		if (status == 0) {
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.warpParty(674030300);
		} else {
			cm.sendNext("Ո���@����ͽ��");
			}
			cm.dispose();
			}
			break;
	case 674030300:
		if (status == 0) {
			cm.sendOk("�����x�_�@�e��");
		} else {
			cm.warp(674030100,1);
			cm.dispose();
			}
			break;
}
}