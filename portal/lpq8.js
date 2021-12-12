/*
	名字:	秘密地图
	地圖:	废弃的塔&amp;lt;第5阶段&gt;
	描述:	922010800
*/

function enter(pi) {
	pi.warp(922010900, 1);   //时间裂缝
	pi.resetMap(922010900);   //地图刷新
	pi.spawnMonster(9300010, 1, -211);
	pi.spawnMonster(9300012, 941, 184);
	return false;
}