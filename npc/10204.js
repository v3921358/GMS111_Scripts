/*
	名字:	凯琳
	地圖:	选择之岔路
	描述:	1020000
*/

function start() {
	cm.sendYesNo("海盜憑藉高敏捷及力量給與敵人發射百發百中的短槍或者可以使用瞬間制約敵人的格鬥術。使用短槍的海盜可以選擇内容子彈更有效地攻擊敵人或者坐在船上攻擊敵人，使用拳甲（指節）的海盜可以變身後發揮更强的力量！#b你想看看教程麼？#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你想看看海盜教程的話，請再來找我吧！");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020500, 0); // Effect/Direction3.img/pirate/Scene00
		}
	cm.dispose();
}
