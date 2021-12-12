/*
	名字:	敢死队的暗号石板
	地圖:	洞穴入口
	描述:	240050000
*/

function start() {
	if (cm.haveItem(4001086)) {
		cm.sendYesNo("石板上的文字發出了奇异的光芒，石板後的一扇小門開啟了。 想要使用秘密通道嗎？");
	} else {
		cm.sendOk("你看不清石板上的字。 你不知道在哪裡使用它？\r\n#b（需要持有#v4001086:##e#b#t4001086##k才能進入）");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(240050400, 0);
		}
	cm.dispose();
}