/*
	名字:	查尔斯
	地圖:	叛徒房间的入口
	描述:	674030000
*/

function start() {
	if (!cm.isLeader()) {
		cm.sendNext("很抱歉，我不能與妳交談，請讓你的組長與我交談。");
		cm.dispose();
		return;
		}
	if (cm.haveItem(4032248,20)) {
		cm.warpParty(674030200);
		cm.gainItem(4032248,-20);
		cm.spawnMonster(9400748,1);
	} else {
		cm.sendOk("嘿！從這裡的岩石中找到MV巢穴的20張#v4032248:##b#t4032248##k地圖！");
		}
	cm.dispose();
}