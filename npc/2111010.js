/*
	����:	�������ص���ҳ
	�؈D:	Ϩ�˵Ƶ��о���
	����:	926120000
*/

function start() {
	if (cm.isQuestActive(3309) && !cm.haveItem(4031708)) {
		cm.sendOk("#b����#v4031708:#���Ի�ȥ�����ˣ�");
	} else {
		cm.sendOk("���һƬ��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4031708, 1);
		}
	cm.dispose();
}

