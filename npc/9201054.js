/*
	名字:	莉塔 罗莉丝
	地圖:	新叶城-市区中心
	描述:	600000000
*/
 
var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status >= 2 && mode == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendSimple("你好啊，鄰居。 近來可好？#l\r\n#b#L0#我聽說有人找到了通往幽影森林深處的路！#l\r\n#b#L1#你能給我講講守護者的要塞麼？#l#k");
	if (status == 1){
		if (selection == 0){
			status = 1;
			cm.sendSimple("是啊。 我還對此有點不爽呢。 我也知道斯利姆市長有自己的理由去探索克拉齊亞，但是作為城裡的警長，我必須為公民的安全負責！ 我已經接到多起報告，說有人在林中走失了。#l\r\n#b#L0#你有沒有什麼線索？#l#k");
			}
		if (selection == 1){
			cm.sendOk("嗯，約翰和我說他兄弟回來了。 呃，準確的說，是回到了這片大陸……我肯定那個混蛋會不會在進入荒野尋找城堡之前在這座城市停留。 嗯，無論如何，如果你想瞭解這件事的詳情，那我建議你去找約翰聊聊，當然，如果你能找到傑克，那和他聊更好。");	
			cm.dispose();
			}
			}
	if (status == 2)
		cm.sendSimple("你是說除了林中那些幽靈和樹怪麼？ 嗯……是有人說過森林裏某個地方有個類似#b強盜#k營地的地方。 雖然我不願魯莽地做出任何結論，但是除非我親眼所見，否則我不排除對他們的懷疑。#l\r\n#b#L0#林中有什麼需要防備的麼？#l#k");
	if (status == 3)
		cm.sendSimple("人们都知道这片森林道路诡异难寻。据说里面的树木自身会移动，会等你走过之后挡住你的来路。比如你向某个方向走，转了两次方向，结果却发现回到了原点。光这些就足够让普通人走失了！#l\r\n#b#L0#继续说……#l#k");
	if (status == 4)
		cm.sendPrev("另外，林中還有一些自然界本身就有的危險……比如充滿劇毒泥沼的沼澤之類。 如果你要進去，那一定要帶上一些#b萬能藥#k或者#b解毒劑#k之類的東西。 此外#b回城卷軸#k也是必備物品，萬一你迷路了呢。 如果你一定要去，一定要小心謹慎，步步為營。");
	if (status == 5){
		cm.dispose();
}
}
