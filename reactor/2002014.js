/*
	名字:	隐密之地
	地圖:	雅典娜禁地&amp;lt;宝物仓库&gt;
	描述:	920011100
*/

function act() {
	rand = Math.floor(Math.random() * 4);
	if (rand < 1) rand = 1;
	//We'll make it drop a lot of crap :D
	for (var i = 0; i<rand; i++) {
		rm.dropItems(true, 1, 30, 60, 15);    //奖励
}
}