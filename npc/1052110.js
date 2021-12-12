/*
	名字:	地铁垃圾桶
	地圖:	地铁线
	描述:	103020100
*/

function start() {
	if (cm.getQuestStatus(2857) == 1) {
		cm.sendOk("#b这个箱子里。。。。仔细看看有没有线索。");
	} else {
		cm.sendOk("只是一個普通的垃圾桶。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.getPlayer().updateQuestCustomData(2857,"1111");
	cm.dispose();
}
