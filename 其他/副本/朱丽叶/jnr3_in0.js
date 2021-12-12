/*
	名字:	秘密地图
	地圖:	特殊实验室
	描述:	926110200
*/

function enter(pi) {
	if (pi.getMap().getReactorByName("jnr3_out1").getState() > 0) {
		pi.warp(926110201, 1);  //灰暗的研究室1
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}