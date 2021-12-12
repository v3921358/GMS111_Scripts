/*
	名字:	冰封谷
	地圖:	冰封谷入口
	描述:	921120000
*/

function enter(pi) {
	if (!pi.haveItem(4032649)) {
		pi.playerMessage(-7,"[Portal]在進入下一張地圖之前，請先拿瓶古氷水。");
	} else {
		pi.warp(921120700,0); //冰封绝壁
} 
}