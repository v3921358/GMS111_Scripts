/*
	名字:	小猪
	地圖:	茂密的森林
	描述:	900020100
*/

function start() {
	cm.sendNext("我在這裡………快救救我！");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.playerMessage(-1, "你救了小猪。");
		cm.forceCompleteQuest(22015);
		if(!cm.haveItem(4032449, 1)) cm.gainItem(4032449, 1);
		}
	cm.dispose();
}