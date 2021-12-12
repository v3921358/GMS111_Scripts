/*
	名字:	武术教练
	地圖:	选择之岔路
	描述:	1020000
*/

function start() {
	cm.sendYesNo("戰士擁有很强的攻擊力和體力。囙此在戰鬥中處於非常重要的地位。因為基本攻擊很强，所以學習高級技能的話可以發揮超强的力量！#b你想看看教程麼？#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你想看看戰士教程的話，請再來找我吧！");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020100, 0); // Effect/Direction3.img/swordman/Scene00
		}
	cm.dispose();
}
