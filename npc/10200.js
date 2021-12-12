/*
	名字:	赫丽娜
	地圖:	选择之岔路
	描述:	1020000
*/

function start() {
	cm.sendYesNo("弓手擁有高敏捷及力量。在戰鬥中負責遠距離攻擊。假如弓手職業能巧妙地運用地勢的話，打獵可是非常輕鬆厲害！#b你想看看教程麼？#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你想看看弓手教程的話，請再來找我吧！");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020300, 0); // Effect/Direction3.img/archer/Scene00
		}
	cm.dispose();
}
