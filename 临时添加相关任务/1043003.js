/*
	名字:	蓝色酒瓶
	地圖:	废都爵士酒吧
	描述:	103000003
*/

function start() {
	if (cm.getQuestStatus(2358000) == 1 && cm.getQuestStatus(2358001) == 1) { //too lazy
		cm.getPlayer().updateQuestCustomData(2358,211);
		cm.sendOk("你已安装完炸弹。");
	} else {
		cm.sendOk("只是个蓝色的酒瓶。");
		}
	cm.dispose();
}
