/*
	����:	��ֵ�ʯ��
	�؈D:	��żʦ������ͨ��
	����:	910510100
*/

function start() {
	if (cm.getPlayerCount(910510202) <= 0 && cm.isQuestActive(21734) ==1 ) {//�жϵ�ͼ�Ƿ����ˡ��ж�����
		cm.sendOk("��Ȼ�����ҵ���������");
	} else {
		cm.sendOk("�e�����˻��ߛ]�н������P�΄ն��o���M��˶�Ѩ��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.getMap(910510202).resetFully();//��ͼˢ��
	cm.spawnMobOnMap(9300346,1,205,257,910510202);//�ٻ�����
	cm.warp(910510202, 0);
	cm.dispose();
}