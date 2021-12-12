/*
	名字:	彩虹岛
	地圖:	彩虹村
	描述:	1000000
*/

function enter(pi) {
	if(pi.isQuestActive(1008))  //当前任务
		pi.ShowWZEffect("UI/tutorial.img/22");
	else if (pi.isQuestFinished(1020))
		pi.ShowWZEffect("UI/tutorial.img/27");
		return true;
}