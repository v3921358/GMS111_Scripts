/*
	名字:	麦麦德
	地圖:	卡帕莱特协会1
	描述:	926150000
*/

function start() {
	if (cm.getQuestStatus(23270) == 1) { 
		cm.sendOk("有人袭击了我！把我的东西抢走了。");
	} else {
		cm.sendOk(".......... ");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(23276,"1");
	cm.warp(926150020, 1);
	cm.dispose();
}