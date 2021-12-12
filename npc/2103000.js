/*
	名字:	水池
	地圖:	阿里安特宫殿
	描述:	260000300
*/

function start() {
	if (cm.getQuestStatus(3900) == 1) {
		cm.sendOk("#b多麼清澈的水，喝一口就應該可以融入這裡，我現在應該是個合格的阿裡安特人拉！");
		cm.getPlayer().updateQuestCustomData(3900,"5");
	} else {
		cm.sendOk("這裡的水不能亂喝！");
		}
	cm.dispose();
}
