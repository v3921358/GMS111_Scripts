/*
	����:	֪ʶ����
	�؈D:	��ŷ��
	����:	101050000
*/

function start() {
	if (cm.isQuestActive(24058) && !cm.haveItem(4032963)) {
		cm.sendNext("#b����#v4031708:#���Ի�ȥ�����ˣ�");
		cm.gainItem(4032963, 1);
	} else {
		cm.sendOk("�þÛ] �����ӂ������ˣ������㣡");
		}
	cm.dispose();
}
