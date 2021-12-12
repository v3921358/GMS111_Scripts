/*
	名字:	隐藏地图
	地圖:	特殊实验室
	描述:	926100200
*/

function act() {
	rm.getMap(rm.getMapId() + 1).getReactorByName(rm.getMapId() == 926100200 ? "rnj31_out" : "jnr31_out").forceHitReactor(1);
}

//开门