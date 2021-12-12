/*
	名字:	魔女塔
	地圖:	魔女塔2层
	描述:	980041100
*/

function enter(pi) {
	var reac = pi.getMap().getReactorByName("goldkey7");
	if (reac.getState() == 0) {
		reac.hitReactor(pi.getClient());
}
}