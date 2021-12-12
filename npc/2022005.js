/*
	名字:	邪摩斯
	地圖:	冰封谷入口
	描述:	921120000
*/

function start() {
	var chat = "你想要干什么？#b";
	chat += "\r\n#L0#給我一瓶古冰川水";
	chat += "\r\n#L1#獨自去冰穀（任務）";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.haveItem(4032649) && !cm.haveItem(2022698)) {
			cm.gainItem(4032649,1);
		} else {
			cm.sendOk("你已经有冰川水，不能在多給了。");
			}
			break;
	case 1:
		cm.warp(921120705,0);
		}
	cm.dispose();
}