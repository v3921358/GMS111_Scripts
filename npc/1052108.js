/*
	名字:	倒掉的垃圾箱
	地圖:	沼泽地带的棚屋
	描述:	103030101
*/

function start() {
	if (cm.getQuestStatus(2878) == 1) {
		cm.sendOk("#b说的是不是就是指这个垃圾桶。");
	} else {
		cm.sendOk(".........垃圾桶有什麼好看的？");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.getPlayer().updateQuestCustomData(2878,"check");
	cm.dispose();
}