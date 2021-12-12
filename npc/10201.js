/*
	名字:	汉斯
	地圖:	选择之岔路
	描述:	1020000
*/

function start() {
	cm.sendYesNo("魔法師可以使用華麗效果的内容魔法。並可以在組隊打獵中使用非常有用的輔助魔法。2轉後學習的内容魔法可以給相反内容的敵人致命的傷害哦！#b你想看看教程麼？#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你想看看魔法師教程的話，請再來找我吧！");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020200, 0); // Effect/Direction3.img/magician/Scene00
		}
	cm.dispose();
}
