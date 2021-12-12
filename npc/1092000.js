/*
	名字:	唐云
	地圖:	餐厅
	描述:	120000103
*/

function start() {
	if (cm.getQuestStatus(2905) == 1) {
		cm.warp(912000100, 0);
	} else {
		cm.sendOk("餐厅不能随便进出！");
		}
	cm.dispose();
}
