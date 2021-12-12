/*
	名字:	地铁垃圾桶
	地圖:	地铁线
	描述:	103020100
*/

function start() {
	if (cm.isQuestActive(20710) && !cm.haveItem(4032136)) {
		cm.sendOk("你在垃圾桶裏找到了#b#t4032136#k！#i4032136:#");
		cm.gainItem(4032136, 1);
        } else {
		cm.sendOk("只是一個普通的垃圾桶。");
		}
	cm.dispose();
}
