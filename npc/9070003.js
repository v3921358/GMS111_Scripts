/*
	����:	��������
	�؈D:	���
	����:	960000000
*/

function start() {
	cm.sendYesNo("�����سǆ᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("������߀��Ҫ�^�mĥ��һ�¡�");
	} else {
		var savedMapId = cm.getSavedLocation("MULUNG_TC");
		savedMapId = (savedMapId > 0 ? savedMapId : 100000000);  //û�б�ǵ�ͼ�ķ���
		cm.clearSavedLocation("MULUNG_TC");    //���ر�ǵ�ͼ
		cm.warp(savedMapId);
		}
	cm.dispose();
}
