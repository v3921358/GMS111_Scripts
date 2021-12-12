/*
	名字:	玩具城
	地圖:	废弃的塔&amp;lt;冒险的果实&gt;
	描述:	922011100
*/

function start() {
	cm.sendYesNo("离开这里？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n will  +35 \r\n charisma +10\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1500 exp");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeAll(4001022);
		cm.removeAll(4001023);
		cm.addTrait("will", 35);
		cm.addTrait("charisma", 10);
		cm.getPlayer().endPartyQuest(1202);//might be a bad implentation.. incase they dc or something
		cm.gainNX(1500);
		cm.warp(221023300);
		}
	cm.dispose();
}