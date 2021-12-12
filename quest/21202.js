/*
	名字:	等待主人的武器
	地圖:	大英雄铁匠铺
	描述:	914021000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.sendOk("#b等你考慮好在來找我談談吧！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("呵呵……年輕人來這麼偏僻的地方幹嘛？");
	if (status == 1)
		qm.sendNextPrevS("#b我想要最厲害的長矛！");
	if (status == 2)
		qm.sendNextPrev("最厲害的長矛？ 那種東西在小村子裏怎麼有賣的…….");
	if (status == 3)
		qm.sendNextPrevS("#b我知道你就是冒險島世界裏最厲害的鐵匠！ 我想要你做的武器！");
	if (status == 4)
		qm.sendAcceptDecline("我這個老頭子太老了，哪還能做什麼優秀的武器啊。 倒是有一支很久以前做的長矛……不過卻不能給你。 那個傢伙太鋒利，弄不好連主人都會被傷到。 這種武器你還想要嗎？");
	if (status == 5)
		qm.sendPrev("呵呵……既然你這麼說，我這個老頭子就試一試你。 你去旁邊的#b修煉場#k，打敗那些#r#o9001012##k，取回#b#v4032311:##t4032311##k#b30個#k給我。 我就把#p1201001#交給你。 ");
	if (status == 6){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("哎呦～#b#v4032311:##t4032311##k都取回來了？ 你……比我想像的還要厲害一些嘛。 不過，對於隨時都可能傷到自己的危險武器，你那種毫不畏懼的爽朗豪放的心態實在是……好吧，#p1201001#就給你了。 ");
	if (status == 1)
		qm.sendNextPrevS("#b(過了好一會兒，#p1203000#才鄭重地將裹在布裡的#p1201001#交給我.)#k");
	if (status == 2)
		qm.sendPrev("這就是專門為你而做的長矛，名叫#b#p1201002##k……以後就拜託了。");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.removeAll(4032311);
		qm.warp(914090201,0);
		qm.dispose();
}
}