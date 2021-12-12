/*
	名字:	阿里安特民宅４
	地圖:	民宅４
	描述:	260000205
*/

function start() {
	if (cm.getQuestStatus(3929) == 1) {
		cm.gainItem(4031580, -1);
		cm.sendOk("已经放好包装好的食物！");
		cm.getPlayer().updateQuestCustomData(3929,"3333");
	} else {
		cm.sendOk("这里没东西！");
		}
	cm.dispose();
}