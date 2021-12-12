/*
	名字:	蘑菇城
	地圖:	蘑菇森林深处
	描述:	106020300
*/

function enter(pi) {
	if (pi.getQuestStatus(2314) == 1) {
		pi.removeAll(4000507);
		pi.getPlayer().updateQuestCustomData(2314,"1");
		pi.playerMessage(-7,"[Portal]魔法门被封印的，回去报告下情况！");
	} else if (pi.haveItem(4000507,1)){
		pi.warp(106020400,2);  //选择岔道
		pi.removeAll(4000507);
	} else if (pi.haveItem(2430014,1)){
		pi.warp(106020400,2);
	} else {
		pi.playerMessage(-7,"[Portal]需要攜帶蘑菇的毒袍子");
}
}






