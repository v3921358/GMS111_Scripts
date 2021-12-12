/*
	名字:	隐藏地图
	地圖:	恶魔猎手的老家
	描述:	924020000
*/

function enter(pi) {
	pi.ShowWZEffect("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon" + pi.getPortal().getName().substring(pi.getPortal().getName().length() - 1, pi.getPortal().getName().length()));
	return true;
}