/*
	名字:	神圣的石头
	地圖:	雪原圣地
	描述:	211040401
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
		cm.sendOk("你是推薦過來的勇士嗎？能到這裡找到我，說明你已經擁有不凡的實力，你準備好迎接新的挑戰麼？");
	} else {
		cm.sendOk("一個神秘的能量包圍著這塊石頭。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.warp(910540000, 1);
	cm.dispose();
}