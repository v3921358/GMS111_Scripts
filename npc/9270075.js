/*
	����:	С��
	�؈D:	������
	����:
*/

function start() {
	cm.sendYesNo("��ɫ�}�Qɽ�ǂ������ĵط�������ȥ��ɫ�}�Qɽ�᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("������ȥ��ʱ��,�������Ұɡ�");
	} else {
		cm.saveLocation("CHRISTMAS");   //��ǵ�ͼ
		cm.warp(555000000,0);
		}
	cm.dispose();
}