/*
	名字:	知识殿堂
	地圖:	埃欧雷
	描述:	101050000
*/

function start() {
	if (cm.isQuestActive(24058) && !cm.haveItem(4032963)) {
		cm.sendNext("#b带着#v4031708:#可以回去报告了！");
		cm.gainItem(4032963, 1);
	} else {
		cm.sendOk("好久沒聽到孩子們的聲音了，想念你！");
		}
	cm.dispose();
}
