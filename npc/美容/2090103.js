/*
	名字:	巴塔
	地圖:	武陵
	描述:	250000000
*/

var status = -1;

var facetype;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("歡迎光臨，請問有什麼要幫助你的？如果你持有 #b#v5152057:##t5152057##k, 就可以享受我們的專業服務!");
	if (status == 1) {
		var face = cm.getPlayerStat("FACE");

		if (cm.getPlayerStat("GENDER") == 0) {
			facetype = [20030, 20031, 20032, 20036, 20037];
		} else {
			facetype = [21030, 21031, 21033, 21034, 21035, 21038];
			}
			for (var i = 0; i < facetype.length; i++) {
			facetype[i] = facetype[i] + face % 1000 - (face % 100);
			}
			cm.askAvatar("優質的服務能讓你有新的改變#v5152057:# 可以讓你得到夢想的一切！！", facetype);
			}
	if (status == 2) {
		if (cm.setAvatar(5152057, facetype[selection]) == 1) {
			cm.sendOk("享受你新的開始吧！");
		} else {
		cm.sendOk("看起來你沒有這個地方的優惠券。很抱歉這麼說，但是沒有優惠券，你就沒有整形手術了。");
		}
	cm.dispose();
}
}