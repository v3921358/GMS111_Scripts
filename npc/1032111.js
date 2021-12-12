/*
	名字:	小树桩
	地圖:	大木林顶部
	描述:	101020300
*/

function start() {
	if (cm.isQuestActive(20716) && !cm.haveItem(4032142)) {
		cm.sendOk("你在小樹樁裏找到了!   #v4032142:#");
		cm.gainItem(4032142, 1);
	} else if (cm.isQuestActive(24078) && !cm.haveItem(4032967)) {
		cm.sendOk("你在小樹樁裏找到了!   #v4032967:#");
		cm.gainItem(4032967, 1);
	} else {
		cm.sendOk("只是一個普通的小樹樁。");
		}
	cm.dispose();
}