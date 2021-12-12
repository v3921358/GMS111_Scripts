/*
	名字:	诺比特
	地圖:	新叶城 购物中心
	描述:	600000001
*/

var status = -1;

var beauty = 0;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1 || status == 2) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("歡迎光臨，請問有什麼要幫助你的？如果你持有 #b#v5152056:##t5152056##k, 我會隨機為你做個改變！");
	if (status == 1)
		cm.sendYesNo("如果你使用#v5152056:#，你的原貌可能會變成一個隨機的新形象，你還打算使用麼？");
	if (status == 2){
		var face = cm.getPlayerStat("FACE");
		var facetype;

		if (cm.getPlayerStat("GENDER") == 0) {
			facetype = [20050, 20052, 20053, 20055, 20056, 20057];
		} else {
			facetype = [21052, 21053, 21054, 21055, 21058, 21062];
			}
			for (var i = 0; i < facetype.length; i++) {
			facetype[i] = facetype[i] + face % 1000 - (face % 100);
			}

		if (cm.setRandomAvatar(5152056, facetype) == 1) {
			cm.sendOk("享受你新的開始吧！");
		} else {
			cm.sendOk("…看起來你沒有這個優惠券。很抱歉這麼說，我就不能幫你做整形手術了。");
			}
		cm.dispose();
}
}