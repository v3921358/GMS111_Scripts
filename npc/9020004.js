/*
	����:	����
	�؈D:	Σ������
	����:	923040300
*/

function start() {
	if (cm.getMapId() / 100 == 9230403) {
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.warpParty(923040400,0);
		} else {
			cm.sendOk("�Ⱦ��ҡ����Ⱦ��ҡ����Ⱦ��ң�");
			}
		} else if (cm.getMapId() / 100 == 9230404) {
			if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
				if (!cm.canHold(4001535, 1)) {
				cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
			} else {
				cm.gainExp_PQ(200, 1.5);
				cm.gainItem(4001535, 1);
				cm.gainNX(2000);
				cm.addTrait("will", 26);
				cm.addTrait("charm", 26);
				cm.warp(923040000,0);
				}
			} else {
				cm.sendOk("Ո����Ƥ��Ŭ˹��");
				}
				}
			cm.dispose();
}

