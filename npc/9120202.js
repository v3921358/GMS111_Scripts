/*
	����:	Konpei
	�؈D:	�����ι���
	����:	801040100
*/

function start() {
	if (cm.haveItem(4032142)) {
		cm.sendNext("�٣��٣�#v4000141:##b#t4000141##k�韩��̎��Ǭ�Q�ˣ��҂����x�_�@�e���f��")
	} else {
		cm.sendNext("�ߣ�����������܃e����������難��͵ð�#v4000141:##b#t4000141##k�����C���o�ҿ�����t���ǲ������ŵģ�");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.haveItem(4032142)) {
		cm.warp(801040101, 1);
	} else {
		cm.warp(801040004, 1);
		}
		}
	cm.dispose();
}
