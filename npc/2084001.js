/*
	����:	������
	�؈D:	�����
	����:	104000000
*/

function start() {
	if (cm.haveItem(4001255,1)) {
		cm.sendYesNo("�����ڴ��㽫�����е�#v4001255:##b#t4001255##k������");
	} else {
		cm.sendOk("���J�R�҆᣿���������һ���̽����棬��ͨ�^�Q��ٍ�˺ܶ��X���������#v4001255:##b#t4001255##k�������S�r�����ҡ�׌�ㅢ�^���ҵČ���");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("С�����ҵı���������кܶ౦��Ŷ��");
		cm.dispose();
		}
	if (mode == 1) {
	if (cm.getPlayerCount(801040100) == 0) {
		cm.saveLocation("RICHIE");   //��ǵ�ͼ
		cm.warp(390000000,0);
		cm.gainItem(4001255,-1);
	} else {
		cm.sendOk("Ո�Ե�һ�£��������c�����I���B����");
		}
		}
	cm.dispose();
}