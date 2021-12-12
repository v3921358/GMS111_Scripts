/*
	名字:	隐藏地图
	地圖:	特殊实验室
	描述:	926100200
*/

function enter(pi) {
	if (pi.getMap().getReactorByName("rnj3_out2").getState() > 0) {
		pi.warp(926100202, 1);  //灰暗的研究室2
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}