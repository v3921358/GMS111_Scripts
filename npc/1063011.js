/*
	����:	��ֵ�ǽ��
	�؈D:	ʯڣ��Ұ 
	����:	102010100
*/

function start() {
	if (cm.isQuestActive(21731) || cm.isQuestActive(20730))
		cm.sendGetText("������ֵ�������������룬#e#b��Ҫ˵������#k#n");
}

function action(mode, type, selection) {
	if (cm.getText() == "������˹�������żʦ��" && cm.isQuestActive(20730)) {
		cm.resetMap(910510000);   //��ͼˢ��
		cm.warp(910510000,1);
		cm.spawnMobOnMap(9300285,1,220,240,910510000);//�ٻ�����
	} else if (cm.getText() == "������˹�������żʦ��" && cm.isQuestActive(21731)) {
		cm.resetMap(910510201);   //��ͼˢ��
		cm.warp(910510201,1);
		cm.spawnMobOnMap(9300344,1,220,240,910510201);//�ٻ�����
	} else {
		cm.sendOk("����ֵ�������Ц��\r\n\r\n#e#b���Ǳ��������ǰ����𣿴�д������̾�Ŷ�һģһ����#k#n");
		}
	cm.dispose();
}