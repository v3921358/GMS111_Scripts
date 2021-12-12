/*
	名字:	镜框
	地圖:	失踪炼金术士的家
	描述:	261000001
*/

function start() {
	if (cm.isQuestActive(3311)) {
		cm.sendOk("#這是德朗博士的一張照片。 看起來他正在用阿爾卡德諾學院的徽章裝潢一個小盒，他是阿爾卡德諾學會的一名會員。");
		cm.getPlayer().updateQuestCustomData(3311,"5");
	} else {
		cm.sendOk("德朗博士的照片。");
		}
	cm.dispose();
}
