/*
	名字:	如果想见到武公
	地圖:	武陵道场大厅
	描述:	925020001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status >= 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("什麼事？這裡是神聖的道場！禁止私聊！\r\n\r\n\r\n\r\n#b#L0#相見武公，是重要的事。#l\n#k");
	if (status == 1)
		qm.sendSimple("那麼挑戰桃花仙島道場吧！武公大人一直在最上層等著挑戰者！\r\n\r\n\r\n\r\n#b#L0#…沒有用後路可相見武公的方法…#l\n#k");
	if (status == 2)
		qm.sendSimple("駁回！說什麼呢！竟然想在這神聖的道場裡使用這種卑鄙的手段啊！\r\n\r\n\r\n\r\n#b#L0#…對身體有益的深山人參。#l\n#k");
	if (status == 3)
		qm.sendSimple("…啊…\r\n\r\n\r\n\r\n#b#L0#對身體很好的深山人參#l\n#k");
	if (status == 4)
		qm.sendSimple("…啊，不可以，絕對不可以。\r\n\r\n\r\n\r\n#b#L0#有益身體的深山人參100個！#l\n#k");
	if (status == 5)
		qm.sendSimple("…吼…咳…咳咳…那麼，請…  \r\n\r\n\r\n\r\n#b#L0#請告訴我密道！#l\n#k");
	if (status == 6)
		qm.sendAcceptDecline("不經過道場去見老師，方法只有一個，那就是通過道場的近道過去。#b武陵道場外面的旗幟中，在右面綠色的旗幟下有一個隱藏的傳送點#k，你可以從那裡過去。不過你得幫我弄到100個滋補身體的桔梗……咳咳….咳。");
	if (status == 7){
		qm.forceStartQuest();
		qm.warp(925041001, 0);
		qm.dispose();
}
}