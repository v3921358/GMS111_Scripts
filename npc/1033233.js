/*
	名字:	小伶俐
	地圖:	人偶师的房间
	描述:	931040000
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.sendOk("#b(有個昏倒的孩子……快點帶出去讓醫生看看吧！)");
	} else {
		cm.sendOk("請先消滅周圍所有怪物！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.warp(310050000,0);
	cm.forceStartQuest(24096,"1");
	cm.dispose();
}
