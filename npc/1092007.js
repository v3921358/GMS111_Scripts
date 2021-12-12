/*
	名字:	木拉特
	地圖:	诺特勒斯内部
	描述:	120000100
*/

function start() {
	if (cm.getQuestStatus(2925) == 1) {
		cm.warp(912040300, 0);   //木拉特的房间
	} else {
		cm.sendOk("你要是有什么事情最好不要来找我！");
		}
	cm.dispose();
}
