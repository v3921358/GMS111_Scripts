/*
	名字:	达克鲁
	地圖:	选择之岔路
	描述:	1020000
*/

function start() {
	cm.sendYesNo("飛俠擁有運氣和一些敏捷及力量，在戰場中可以突襲敵人或者使用隱身等特殊技能。飛俠擁有非常敏捷的移動及回避，配合自身的多樣化技能可以充分享受操作的樂趣！#b你想看看教程麼？#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你想看看飛俠教程的話，請再來找我吧！");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020400, 0); // Effect/Direction3.img/rouge/Scene00
		}
	cm.dispose();
}
