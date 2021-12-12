/*
	名字:	殿堂入口
	地圖:	培训中心
	描述:
*/

function enter(pi) {
	pi.playPortalSE();
	switch (pi.getMapId()) {
	case 130000000:
		pi.warp(130000100, 5); //or 130000101   骑士殿堂
		break;
	case 130000200:
		pi.warp(130000100, 4); //or 130000101   骑士殿堂
		break;
	case 140010100:
		pi.warp(140010110, 0); //or 140010111   达人殿堂
		break;
	case 120000101:
		pi.warp(120000105, 0);   //训练场
		break;
	case 103000003:
		pi.warp(103000008, 0); //or 103000009   飞侠的殿堂
		break;
	case 100000201:
		pi.warp(100000204, 0); //or 100000205   弓箭手的殿堂
		break;
	default:
		pi.warp(pi.getMapId() + 1, 0); //or + 2
		break;
}
}