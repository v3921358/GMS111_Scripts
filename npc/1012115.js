/*
	名字:	黑色影子
	地圖:	射手村北部小山
	描述:	100010000
*/

function start() {
	var status = cm.getQuestStatus(20706);
    
	if (status == 0)
		cm.sendOk("看起來這個地區沒有什麼可疑之處。");
	if (status == 1){
		cm.forceStartQuest(20731,"1");
		cm.sendOk("你已經發現了陰影！ 最好報告給 #p1103001#。");
		cm.dispose();
}
}
