/*
	名字:	先代黑暗领主的日记本
	地圖:	先代黑暗领主的房间
	描述:	910350100
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0 && !cm.haveItem(4032617)) {
		cm.gainItem(4032617, 1);
		cm.sendOk("终于拿到了#v4032617:#，把它带回去交差。");
	} else if (cm.haveItem(4032617)) {
		cm.sendOk("你已经拿到#v4032617:#，不能太贪心。");
	} else {
		cm.sendOk("想偷东西的话，就必须要先消灭所有怪物。");
		}
	cm.dispose();
}