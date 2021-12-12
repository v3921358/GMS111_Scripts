/*
	名字:	秀林茨
	地圖:	训练场
	描述:	120000104
*/

function start() {
	if (cm.getQuestStatus(2915) == 1) {
		cm.warp(912040100, 0);   //秀林茨的第一个考场
	} else if (cm.getQuestStatus(2916) == 1) {
		cm.warp(912040200, 0);   //秀林茨的第二个考场
	} else {
		cm.sendOk("你好！我是海盗训练员！");
		}
	cm.dispose();
}
