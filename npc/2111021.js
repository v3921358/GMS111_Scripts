/*
	名字:	第二个魔法阵
	地圖:	黑魔法师的研究所
	描述:	261040000
*/

function start() {
	if (cm.getQuestStatus(3345) == 1) {
		cm.forceStartQuest(334502,"1");
		cm.sendOk("你已启动第三个魔法阵。");
	} else {
		cm.sendOk("第三个魔法阵。");
		}
	cm.dispose();
}