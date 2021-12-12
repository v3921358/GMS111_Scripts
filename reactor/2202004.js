/*
	名字:	玩具城
	地圖:	废弃的塔&amp;lt;奖励之地&gt;
	描述:	922011000
*/

function act() {
	rand = Math.floor(Math.random() * 3);
	if (rand < 1) rand = 1;
	//We'll make it drop a lot of crap :D
	for (var i = 0; i<rand; i++) {
		rm.dropItems(true, 1, 30, 60, 15);
}
}