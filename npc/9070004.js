/*
	����:	��������
	�؈D:	������
	����:	100000000
*/

function start() {
	cm.sendYesNo("���Y�V���gӭӢ�۵ļ��룬�ҷǳ��ڴ���ĵ���");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("��ϧ�ˣ���߀�Ԟ����M�˲��ܡ�");
	} else {
		cm.saveLocation("MULUNG_TC");   //��ǵ�ͼ
		cm.warp(960000000,0);
		}
	cm.dispose();
}
