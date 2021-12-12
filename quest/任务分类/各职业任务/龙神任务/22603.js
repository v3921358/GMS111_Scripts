/*
	名字:	蜕皮之后2
	地圖:
	描述:	米乐
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
		qm.sendNext("主人，你看。 這次成長之後，我的力量幾乎已經完整了。");
	if (status == 1)
		qm.sendNextPrevS("#b嗯，看上去就感覺很有氣勢。 這就是瑪瑙龍的真正力量嗎？");
	if (status == 2)
		qm.sendNextPrev("這是瑪瑙龍的力量，同時也是主人的力量。 瑪瑙龍只有在契約者變强的時候才會成長。 也就是說，主人你也同樣成長了。");
	if (status == 3)
		qm.sendNextPrevS("#b果然……你現在越來越會說話了，#p1013000#");
	if (status == 4)
		qm.sendNextPrev("呵呵，那當然。 我這麼優雅的外表，如果太輕狂的話，豈不會被人笑掉大牙？ 對了主人，和上次一樣，這次蛻皮之後又留下了一塊鱗片。 裡面含有比以前更强的力量，我想應該會對你有所幫助。 來，拿著!!");
	if (status == 5)
		qm.sendPrev("#b雖然因為龍神是人類，會受到怪物的攻擊，可是說不定那塊鱗片可以保護龍神。 如果龍神變强，我也會變得更加强大……我們一起强大起來吧，龍神!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142157# 1 #t1142157# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30000 exp");
	if (status == 6){
		if(!qm.canHold(1142157, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142157, 1);
		qm.dispose();
}
}