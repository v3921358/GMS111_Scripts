/*
	名字:	尤塔家
	地圖:	小阁楼
	描述:	100030100
*/

function enter(pi) {
	if (pi.getEvanIntroState("mo30=o")) {
		return false;
		}
		pi.updateEvanIntroState("mo30=o");
		pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon30");
		return true;
}