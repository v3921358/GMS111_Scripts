/*
	名字:	隐藏地图
	地圖:	遗忘森林入口
	描述:	900020200
*/

function enter(pi) {
	if (pi.getEvanIntroState("mo30=o;mo40=o")) {
		return false;
		}
		pi.updateEvanIntroState("mo30=o;mo40=o");
	pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon40");
		return true;
}
