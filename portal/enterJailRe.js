/*
	名字:	反抗者本部
	地圖:	训练室入口
	描述:	310010010
*/

function enter(pi) {
	if (pi.isQuestActive(23137)) {
		pi.warp(931000610,1);  //监狱
	} else{
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}
