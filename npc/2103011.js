/*
	名字:	阿里安特民宅４橱柜
	地圖:	民宅４
	描述:	260000205
*/

function start() {
	if (cm.getQuestStatus(3926) == 1) {
		cm.gainItem(4031579, -1);
		cm.sendOk("已经放好#v4031579:#！");
		cm.getPlayer().updateQuestCustomData(3926,"3333");
	} else {
		cm.sendOk("橱柜。。。。");
		}
	cm.dispose();
}