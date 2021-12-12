/*
	名字:	卡帕莱特的书页
	地圖:	熄了灯的研究室
	描述:	926120000
*/

function start() {
	if (cm.isQuestActive(3309) && !cm.haveItem(4031708)) {
		cm.sendOk("#b带着#v4031708:#可以回去报告了！");
	} else {
		cm.sendOk("漆黑一片。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4031708, 1);
		}
	cm.dispose();
}

