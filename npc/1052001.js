/*
	名字:	达克鲁
	地圖:	废都爵士酒吧
	描述:	103000003
*/

function start() {
	if (cm.getQuestStatus(2351) == 1) {
		cm.sendOk("你要轉職成为一位#r盜賊#k？看你賊眉鼠眼的樣子，估計還挺合適你！");
	} else {
		cm.sendOk("噓！ 小聲點。我是盜賊轉職官。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(7635,"1");
	cm.changeJob(400);
	cm.sendOk("你现在已经是位盜賊了。");
	cm.dispose();
}