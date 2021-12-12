/*
	名字:	鸡蛋桶
	地圖:	前院
	描述:	100030102
*/

function start() {
	if (cm.isQuestActive(22007) && !cm.haveItem(4032451)) {
		cm.sendOk("#b(你得到了一個雞蛋，把它拿給尤塔。)#k");
		cm.gainItem(4032451, 1);
	} else {
		cm.sendOk("#b這是一個裝有雞蛋的桶。#k");
		}
	cm.dispose();
}
