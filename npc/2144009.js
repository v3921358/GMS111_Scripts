/*
	名字:	塔米尔
	地圖:	燃烧的神木村6
	描述:	272000600
*/

function start() {
	if (cm.isQuestFinished(31177)) {
		cm.sendSimple('約定就是約定。 只要你願意，我就能讓你變身成#r龍#k。 怎麼樣？\r\n\r\n#L1##b讓我變身成龍吧。#l');
	} else {
		cm.sendOk("以你現在的能力，我暫時不能給你提供幫助！#k");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(200090520, 0);
		cm.useItem(2210016);   //变龙
		}
	cm.dispose();
}
