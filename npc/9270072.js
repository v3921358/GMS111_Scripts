/*
	����:	С��
	�؈D:	��ɫʥ��ɽ��
	����:	555000000
*/

function start() {
	cm.sendYesNo("�����سǆ᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�ǾͶ����@�e�����ҡ�");
	} else {
		var savedMapId = cm.getSavedLocation("CHRISTMAS");
		savedMapId = (savedMapId > 0 ? savedMapId : 100000000);  //û�б�ǵ�ͼ�ķ���
		cm.clearSavedLocation("CHRISTMAS");    //���ر�ǵ�ͼ
		cm.warp(savedMapId);
		}
	cm.dispose();
}
