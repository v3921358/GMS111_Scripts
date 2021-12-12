/*
	名字:	神秘岛
	地圖:	悲恋之地
	描述:	280090000
*/

function start() {
	if (cm.haveItem(4031061)) {
		cm.sendNext("你很好的完成了第一關的任務！ 好吧……。 我會把你送到 #b#p2030008##k 那裡。 不過在那之前！！ 你不能把這裡特殊的東西留到外面去。我將會在你的背包中拿走這些東西。那麼，就這樣吧！回頭見！");
	} else {
		cm.sendNext("你在中途退出了任務。好吧……。我會送你出去。但是在那之前！！你不能把這裡特殊的東西帶到外面去。我講會在你的背包中拿走這些東西。那麼，就這樣吧！回頭見。");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeAll(4001015);
		cm.removeAll(4001016);
		cm.removeAll(4001018);
		cm.warp(211042300, 0);
		}
	cm.dispose();
}