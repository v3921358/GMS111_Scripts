/*
	����:	��ʥ��ʯͷ
	�؈D:	ѩԭʥ��
	����:	211040401
*/

function start() {
	if (cm.isQuestActive(1431) ||
	cm.isQuestActive(1432) ||
	cm.isQuestActive(1433) ||
	cm.isQuestActive(1435) ||
	cm.isQuestActive(1436) ||
	cm.isQuestActive(1437) ||
	cm.isQuestActive(1439) ||
	cm.isQuestActive(1440) ||
	cm.isQuestActive(1442) ||
	cm.isQuestActive(1443) ||
	cm.isQuestActive(1445) ||
	cm.isQuestActive(1446) ||
	cm.isQuestActive(1447) ||
	cm.isQuestActive(1448)){
		cm.sendOk("�������]�^�����ʿ�᣿�ܵ��@�e�ҵ��ң��f�����ѽ����в����Č�������ʂ��ӭ���µ������N��");
	} else {
		cm.sendOk("һ�����ص������������@�Kʯ�^��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.warp(910540000, 1);
	cm.dispose();
}