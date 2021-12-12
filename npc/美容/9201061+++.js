/*
	名字:	波马克
	地圖:	新叶城 购物中心
	描述:	600000001
*/

var status = -1;

var hair_Colo_new;

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
	return;
	} else {
	status++;
	}

	if (status == 0) {
		cm.sendNext("歡迎光臨，請問有什麼要幫助你的？如果你持有 #i" + 5152035 + "# , 就可以享受我們的專業服務!那麼，讓我給你換個樣样怎麼樣？");
	} else if (status == 1) {
		cm.sendYesNo("If you use the regular coupon, you'll be awarded a random pair of cosmetic lenses. Are you going to use #b#t5152035##k and really make the change to your eyes?");
	} else if (status == 2){
		hair_Colo_new = [];

		var teye = cm.getPlayerStat("FACE") % 100;

		if (cm.getPlayerStat("GENDER") == 0) {
			teye += 20000;
		} else {
			teye += 21000;
			}
			hair_Colo_new[0] = teye + 100;
			hair_Colo_new[1] = teye + 200;
			hair_Colo_new[2] = teye + 300;
			hair_Colo_new[3] = teye + 400;
			hair_Colo_new[4] = teye + 500;
			hair_Colo_new[5] = teye + 600;
			hair_Colo_new[6] = teye + 700;

			if (cm.setRandomAvatar(5152035, hair_Colo_new) == 1) {
				cm.sendOk("享受你新的开始吧!");
			} else {
				cm.sendOk("嗯……看來你沒有我們指定的優惠券……恐怕沒有它我不能給你幫助。我很抱歉。。");
				}
			cm.dispose();
}
}