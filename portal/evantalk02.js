/*
	名字:	梦中
	地圖:	梦中的森林入口
	描述:	900010000
*/

function enter(pi) {
	if (pi.getEvanIntroState("dt00=o;mo00=o;mo01=o;mo02=o")) {
		return false;
		}
		pi.updateEvanIntroState("dt00=o;mo00=o;mo01=o;mo02=o");
	pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon02");
		return true;
}