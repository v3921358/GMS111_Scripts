/*
	名字:	红雅
	地圖:	废弃都市
	描述:	103000000
*/

function start() {
	if (cm.getPlayer().getLevel() < 20) {
		if (cm.getPlayer().getSubcategory() != 1) {
		cm.sendOk("你一定在角色選擇中選擇了雙刃劍才能和我說話。");
	} else {
		cm.sendOk("你必須接受2級和9級的任務才能跟我說話。");
		}
	} else {
		cm.sendOk("我守衛著秘密花園的入口。。。哎呀，不再那麼秘密了，是嗎？");
		}
	cm.dispose();
}