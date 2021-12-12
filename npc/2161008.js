/*
	名字:	班·雷昂
	地圖:	忧郁的接见室
	描述:	921140001
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("你…是怎么知道这条路的？这条路只有王族、我和伊帕娅知道的啊…你还要撒谎说见过伊帕娅了吗？");
	if (status == 1)
		cm.sendNextPrevS("我真的见到伊帕娅了，而且这次我带着伊帕娅一起来了。你亲自和伊帕娅说说吧。");
	if (status == 2)
		cm.sendNextPrev("雷昂，你看不见我吗？你听不见我说话吗？",2161009);
	if (status == 3)
		cm.sendNextPrev("你在胡说什么……伊帕娅在哪里啊？你要耍我吗？");
	if (status == 4)
		cm.sendNextPrevS("你听不见伊帕娅的声音吗？为什么…？为什么她的声音无法传递给你？");
	if (status == 5)
		cm.sendNextPrev("说得好像真的一样，不…也许你说的是真的。说不定伊帕娅真的在这里，还和我说话。但那又有什么用呢？我的手已经不再干净了…");
	if (status == 6)
		cm.sendNextPrev("…为什么要说这么悲伤的话语…",2161009);
	if (status == 7)
		cm.sendNextPrev("啊啊…也许是因为那件事。是因为我把我的灵魂出卖给了黑魔法师…由于我杀了太多的人，才听不见她的声音…这就是我所犯下罪孽的代价吗…");
	if (status == 8)
		cm.sendNextPrev("认识伊帕娅的人啊，请收下这个。");
	if (status == 9){
		cm.gainItem(4032839, 1);
		cm.sendNextPrev("这个吊坠里装有很久以前宫廷画家画的伊帕娅的画像…我时长看着它回忆帕娅，但现在，这个已经不适合我了。");
		}
	if (status == 10)
		cm.sendNextPrev("出卖灵魂以满足复仇之心…最后什么都没有剩下。这样我没有资格回忆她。");
	if (status == 11)
		cm.sendNextPrev("如果能再回到当时，我会不会再做这样的决定？想过数万遍，但还是不知道答案。愤怒和虚无…选择哪一方，最终也不会有改变。");
	if (status == 12)
		cm.sendPrev("你还是回去吧，现在我不想打架…");
	if (status == 13){
		cm.warp(211061001, 1);
		cm.dispose();
}
}