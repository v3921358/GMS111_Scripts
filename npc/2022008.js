/*
	名字:	莱格斯
	地圖:	冰封谷 4
	描述:	921121000
*/

function start() {
	if (cm.isQuestActive(3122)) {
		cm.sendOk("封印的情况还算稳定！");
		cm.getPlayer().updateQuestCustomData(3122,"1");
	} else {
		cm.sendOk("封印的情况还算稳定！");
		}
	cm.dispose();
}