/*
	名字:	八德乐
	地圖:	阿里安特
	描述:	260000000
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
			facetype = [20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049];
		} else {
			facetype = [21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049];
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