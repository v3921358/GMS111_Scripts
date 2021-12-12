/*
	名字:	隐藏地图
	地圖:	中央研究室入口
	描述:	926110400
*/

function enter(pi) {
	if (pi.getMap().getCharactersSize() > 0 || pi.getMap(926110401).getCharactersSize() > 0) { //修改过 if (pi.getMap().getCharactersSize() >= 1
		pi.warpParty(926110401,0);  //中央研究室
	} else {
		pi.playerMessage(-7,"[Portal]所有組員必須再這裡");
}
}