/*
	名字:	封印的庭院
	地圖:	老婆婆之屋
	描述:	200050001
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendNext("你有什麼事？ 雖然我並不歡迎不速之客…………但你的身上卻散發一種非比尋常的氣息…………看來我得聽聽你的事情了......");
	if (status == 1)
		qm.sendNextPrevS("#b（講述關於#o9300347#的事情。）#k");
	if (status == 2)
		qm.sendNextPrev("#o9300347#？ 雖然這的確是個嚴峻的問題…………不過到目前為止應該對#m200000000#還造不成影響。 等等，你剛才說#o9300347#在哪兒？");
	if (status == 3)
		qm.sendNextPrevS("#b在#m200060001#。");
	if (status == 4)
		qm.sendNextPrev("#m200060001#？#o9300347#居然在那裡，那麼你是說有人想要入侵#m920030001#？ 到底為什麼呢？ 是誰？");
	if (status == 5)
		qm.sendNextPrevS("#b#m920030001#？");
	if (status == 6)
		qm.sendNextPrev("……你到底是什麼人竟然來問這樣的問題？ 你先稍等會兒。 我要先蔔一卦看你是不是值得信任。");
	if (status == 7)
		qm.sendNextPrev("……………………");
	if (status == 8)
		qm.sendNextPrevS("#b…………………………………………");
	if (status == 9)
		qm.sendNextPrev("你，你…………不，你…………完全不同於普通人類。 那悠久的歲月，那可怕的宇宙，然而你有著再次戰勝它們的偉大命運…………你到底是誰？");
	if (status == 10)
		qm.sendPrev("……不管是誰都好。 占卦已經讓我把一切都告訴你了。 關於#b#m920030001##k的一切…………");
	if (status == 11){
		qm.forceStartQuest();
		qm.dispose();
}
}