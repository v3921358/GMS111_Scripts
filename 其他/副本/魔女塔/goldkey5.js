/*
	名字:	魔女塔
	地圖:	魔女塔1层
	描述:	980041000
*/

function enter(pi) {
	var reac = pi.getMap().getReactorByName("goldkey5");
	if (reac.getState() == 0) {
		reac.hitReactor(pi.getClient());
}
}