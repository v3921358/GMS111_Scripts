/*
	����:	Konpei
	�؈D:	������
	����:	801040004
*/

function start() {
	if (cm.getPlayerCount(801040100) == 0) {       //��ͼ����
		cm.sendOk("��雾����e�棬�я�Ů������e�õ���#v4000138:##b#t4000138##k�G���[�И䘶�Ĵ��_�£��������F��");
	} else {
		cm.sendOk("�������������}�_��難�߀���Ե�һ�£�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.resetMap(801040100);    //ˢ�µ�ͼ
	cm.warp(801040100,0);
	cm.dispose();
}