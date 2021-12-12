/*
	名字:	魔法药水图鉴
	地圖:	魔法密林图书馆
	描述:	101000003
*/

function start() {
	if (cm.isQuestActive(2757) && !cm.haveItem(4033005)) {
		cm.sendOk("#b你已經找到#v4033005:#！");
		cm.gainItem(4033005, 1);
	} else {
		cm.sendOk("這裡只有書，其它的什麼也沒有！");
		}
	cm.dispose();
}
