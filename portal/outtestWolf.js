/*
	名字:	隐藏地图
	地圖:	狼的考试
	描述:	914030000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	if(pi.canHold(4001193, 1)) {
		pi.gainItem(4001193, 1);
		pi.warp(140010210, 0); //群狼原野
		pi.forceStartQuest(21620,0);
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]無法收納物品，請清理背包空間");
		return false;
		}
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
		return false;
}
}