/*
	����:	����
	�؈D:	������
	����:	100000000
*/

function start() {
	cm.sendYesNo("�������ţ��f���������\����ؓ؟С�㣬����ȥ�����e��t��������᣿���S�r���Ԏ����^ȥ��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���������ҵĕr���ځ����ҡ�");
	} else {
		cm.saveLocation("CHRISTMAS");   //��ǵ�ͼ
		cm.warp(200000301,0);
		}
	cm.dispose();
}
