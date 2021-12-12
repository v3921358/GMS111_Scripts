/*
	名字:	吉安特
	地圖:	矿山入口
	描述:	310040200
*/

function start() {
	if (cm.haveItem(1003134,1,true,true) || cm.isQuestFinished(23947) || cm.isQuestFinished(24087)) {
		cm.warp(310050000,1);  //电站大厅
		cm.dispose();
	} else {
		cm.sendOk("對不起，我不认识你，不能進入 。");
		}
	cm.dispose();
}