/*
	����:	���ڳ����ð�ռ�
	�؈D:	�̵��ٵķ���
	����:	921160700
*/

function start() {
	if (cm.getMapId() / 100 == 9211607) {
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			if (!cm.canHold(4001534, 1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else {
			cm.gainExp_PQ(200, 1.5);
			cm.gainItem(4001534, 1);
			cm.gainNX(2000);
			cm.warp(921160000,0);
			}
		} else {
			cm.sendOk("�ұ������������Ո������ Ani��");
			}
			}
		cm.dispose();
}