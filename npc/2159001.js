/*
	名字:	乌里卡
	地圖:	人机罕至的岩山
	描述:	931000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0)
		cm.sendNext("遲到了啦，#b#h0##k！ 快過來這裡！");
	if (status == 1)
		cm.sendNextPrev("為什麼這麼慢？ 之前不是就說好要來這裡玩了嗎！ 不會是害怕了吧？",2159002);
	if (status == 2)
		cm.sendNextPrevS("#b我沒有害怕。");
	if (status == 3)
		cm.sendNextPrev("真的嗎？ 我好害怕哦…老人家們不是有警告說不要來礦山這裡玩。 有#r黑色之翼的壞人們#k守在這裡…",2159000);
	if (status == 4)
		cm.sendNextPrev("所以才故意避開監視者來到這裡的啊。 真是的，膽小鬼！！",2159002);
	if (status == 5)
		cm.sendNextPrev("但是…被罵怎麼辦？",2159000);
	if (status == 6)
		cm.sendNextPrev("都已經來到這裡了，還能怎麼辦。 反正都會被罵，玩玩再回去吧，我們來玩捉迷藏！");
	if (status == 7)
		cm.sendNextPrevS("#b咦？ 捉迷藏！");
	if (status == 8)
		cm.sendNextPrev("真幼稚…",2159002);
	if (status == 9)
		cm.sendPrev("什麼幼稚！ 在這裡還可以玩什麼？ 說來聽聽啊！ 還有你當鬼，#b#h0##k！ 因為你遲到了啊。 哈，那麼我們要躲了哦，數到十後開始找！");
	if (status == 10){
		cm.warp(931000001, 1);
		cm.dispose();
}
}