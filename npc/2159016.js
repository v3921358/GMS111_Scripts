/*
	名字:	小胖
	地圖:	危险的捉迷藏
	描述:	931000001
*/

var status = -1;

function action(mode, type, selection) {
	status++;
	if (cm.getInfoQuest(23999).indexOf("exp4=1") != -1) {
		cm.sendOk("反正都被发现了，来吃点糖果吧！");
		cm.dispose();
		return;
		}
	if (status == 0)
		cm.sendOk("呜？被发现了？我这娇小的身躯都找得到，真是不简单哦。\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 exp");
	if (status == 1){
		cm.gainExp(3);
		if (cm.getInfoQuest(23999).equals("")) {
			cm.updateInfoQuest(23999, "exp4=1");
		} else {
			cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp4=1");
			}
		cm.dispose();
}
}