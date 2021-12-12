/*
	名字:	阿丁的沙子图团
	地圖:	阿里安特民宅
	描述:	260000200
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
		qm.sendAcceptDecline("沒想到你會這麼的强…以你的水准也許可以成為沙子圖團的團員也說不定。 對沙子圖團員來說，最重要的就是力量的强大，而你…看來已經具備了足够的實力！ 但我還是要再進行一次測試…如何？ 可以接受嗎？");
	if (status == 1)
		qm.sendPrev("若想要實際測試你的力量，應該需要親自去體驗吧？ 我想和你進行一場對戰！ 別擔心，我也不想傷害你…就用我的分身來對付你好了！");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(926000000,1);
		qm.spawnMonster(9100013,80,275);//召唤怪物
		qm.dispose();
}
}