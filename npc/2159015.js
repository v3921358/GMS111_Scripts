/*
	名字:	小伶俐
	地圖:	危险的捉迷藏
	描述:	931000001
*/

var status = -1;

function action(mode, type, selection) {
	status++;
	if (cm.getInfoQuest(23999).indexOf("exp3=1") != -1) {
		cm.sendOk("哈哈哈…我很会躲吧？");
		cm.dispose();
		return;
		}
	if (status == 0)
		cm.sendOk("哎哟，被发现了！哇…真会找，好厉害喔！\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 exp");
	if (status == 1){
		cm.gainExp(3);
		if (cm.getInfoQuest(23999).equals("")) {
			cm.updateInfoQuest(23999, "exp3=1");
		} else {
			cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp3=1");
			}
			cm.dispose();
}
}