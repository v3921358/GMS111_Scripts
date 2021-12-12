/*
	名字:	寂静的城堡深处
	地圖:	沉寂原野
	描述:	211060000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOk("如果沒有像你這麼優秀的人幫我的話，我就不可能對這裡進行調查。 你能再考慮一下嗎？");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNextS("是誰給我寫的信呢？ 沒有發件人……要看一看嗎？",3);
	if (status == 1)
		qm.sendNextPrev("致閱讀這封信的冒險家：\r\n\r\n我是十字獵人的工作員，名叫#b#p2161012##k。 我就長話短說了。 我們十字獵人的工作員們在冒險島世界各地走動，執行消滅邪惡怪物的任務。 ");
	if (status == 2)
		qm.sendNextPrev("但是我現在所在的地方——#r獅子王之城#k，正散發出之前我從沒見到的强烈黑暗氣息。 我感覺到了比冰峰雪域的寒風更攝人心肺的恐怖。");
	if (status == 3)
		qm.sendAcceptDecline("為了完成我的任務，需要像你這樣優秀的冒險家的幫助。 願意幫助我的話，請繼續往下看。");
	if (status == 4)
		qm.sendPrev("謝謝。 如果你讀到了這一段，說明你已經决定幫我了。 由於時間緊迫，所以我在信上設定了一個小魔法。 讀完信之後，你就會移動到我所在的地方。 那麼，一會兒見。");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(211060000, 2);
		qm.dispose();
}
}