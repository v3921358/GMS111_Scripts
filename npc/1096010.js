/*
	名字:	点火装置
	地圖:	可可岛对岸
	描述:	3000500
*/

function start() {
	if (cm.isQuestActive(2566) && !cm.haveItem(4032985,1)) {
		cm.gainItem(4032985,1);
		cm.sendOk("你找到了点火装置。");
	} else {
		cm.sendOk("点火装置。。");
		}
	cm.dispose();
}
