/*
	名字:	倒下的战神
	地圖:	燃烧的神木村3
	描述:	272000300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("喂，這裡！");
	if (status == 1)
		qm.sendNextPrevS("#b發生了什麼事？…… 咦，這是戰神……？！ 但怎麼變成了……");
	if (status == 2)
		qm.sendNextPrev("你認識主人嗎？ 我看你好像不是這個世界的人……不管怎樣都沒關係，現在只有你能幫助我們。");
	if (status == 3)
		qm.sendNextPrev("我是戰斧之魂摩詞。 旁邊是我的主人，我和主人一起打敗了黑魔法師，把他永遠地封印了起來。 但是黑魔法師在被封印的瞬間，用最後的力裏給英雄們下了强大的詛咒。 主人囙此失去了意識，倒下了。 ");
	if (status == 4)
		qm.sendAcceptDecline("這樣下去的話，他可能永遠都站不起來了。 必須儘快把主人帶到安全的地方去才行，但是我也變成了這個樣子，所以希望你能幫幫我。 ");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}