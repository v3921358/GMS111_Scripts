/*
	名字:	隐藏地图
	地圖:	出去的路
	描述:	926100700
*/

function enter(pi) {
	pi.removeAll(4001130);
	pi.removeAll(4001131);
	pi.removeAll(4001132);
	pi.removeAll(4001133);
	pi.removeAll(4001134);
	pi.removeAll(4001135);
	pi.warp(pi.getMapId() == 926100700 ? 261000011 : 261000021, 0);
}