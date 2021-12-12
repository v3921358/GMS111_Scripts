/*
	名字:	第二个管子
	地圖:	失踪炼金术士的家
	描述:	261000001
*/

function start() {
	if (cm.isQuestActive(3339) || cm.isQuestFinished(3339)) {
		cm.sendGetText("若想进入秘密书库，#e#b就要说出暗号#k#n");
	} else {
		cm.sendOk("第二个管子。。。。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (cm.getText() == "琵丽雅是我的爱") {
		cm.warp(261000001, 1);
	} else {
		cm.sendOk("密码错误！#k#n");
		}
	cm.dispose();
}
