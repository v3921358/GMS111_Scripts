/*
	����:	Konpei
	�؈D:	������ǰ
	����:	801040000
*/

function start() {
	cm.sendYesNo("�@�e���ǲ���̎��ʲ�N �������������ܻ�#b#m801000000##k��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�Mȥ�e��ɣ��ܶ������ڵ��㣬��Ҳ������ģ�");
	} else {
		cm.warp(801000000,0);
		}
	cm.dispose();
}