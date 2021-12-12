/*
	名字:	梦中
	地圖:	梦中的森林入口
	描述:	900010000
*/

function enter(pi) {
	if (pi.getEvanIntroState("mo00=o")) {
		return false;
		}
		pi.updateEvanIntroState("mo00=o");
	pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon00");
		return true;
}