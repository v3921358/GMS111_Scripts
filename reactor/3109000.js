/*
	名字:	埃德尔斯坦
	地圖:	苏阿尔的水仓库
	描述:	931000410
*/

function act() {
	if(rm.getReactor().getState() == 10) {
		rm.forceStartQuest(23130, "1");//给可以完成任务的条件
		rm.playerMessage(-1, "水满了，回去报告一下。。。。");
}
}
