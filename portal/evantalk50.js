/*
	名字:	隐藏地图
	地圖:	遗忘小路
	描述:	900020210
*/

function enter(pi) {
	if (pi.getEvanIntroState("mo30=o;mo40=o;mo41=o;mo50=o;mo42=o")) {
		return false;
		}
		pi.updateEvanIntroState("mo30=o;mo40=o;mo41=o;mo50=o;mo42=o");
	pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon50");
		return true;
}
