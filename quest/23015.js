/*
	名字:	驯养美洲豹
	地圖:	反抗者本部
	描述:	310010000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("對於豹弩遊俠來說，騎寵是必需的。 成為豹弩遊俠之後，你會學會名叫捕獲的技能。 用那個技能可以馴養和騎乘美洲豹。");
	if (status == 1)
		qm.sendNextPrev("仔細查看技能窗，應該可以找到#s30001061#技能。 先通過攻擊使美洲豹的血量降到50%以下，然後使用捕獲技能，就可以活捉美洲豹了。 活捉之後，使用#s33001001#，就可以騎乘美洲豹了。 怎麼樣，簡單吧？");
	if (status == 2)
		qm.sendNextPrev("在哪裡可以找到美洲豹？ 我前面的#b黑傑克#k會把你帶到它們所在的地方的。");
	if (status == 3)
		qm.sendNextPrevS("#b你好，黑傑克？ 請告訴我應該到哪裡去。");
	if (status == 4)
		qm.sendNextPrev("嗯，你是新的豹弩遊俠嗎？ 還是個小孩子。",2151008);
	if (status == 5)
		qm.sendNextPrevS("#b我雖然還很弱，但為了成為一名堂堂正正的反抗者，我一定會努力的。 在哪裡才能找到美洲豹呢？");
	if (status == 6)
		qm.sendYesNo("精神狀態很不錯嘛。 我把你送去見見我的兄弟們吧。 今後你如果想去找它們，可以來找我。",2151008);
	if (status == 7){
		qm.forceStartQuest();
		qm.warp(931000500, 0);
		qm.dispose();
}
}