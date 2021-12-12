/*
	名字:	Mo
	地圖:	Dead Man's Gorge
	描述:	610010004
*/

function start() {
	if(cm.getQuestStatus(8224) == 2) {
		cm.openShopNPC(35);
	} else {
		cm.sendOk("嗯，你以為你在看誰？想要從我這裡獲取些什麼，就必須要幫助我們！");
		}
	cm.dispose();
}
