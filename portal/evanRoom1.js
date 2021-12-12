/*
	名字:	尤塔家
	地圖:	小阁楼
	描述:	100030100
*/

function enter(pi) {
	if (pi.getEvanIntroState("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o") || pi.getEvanIntroState("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o;mo21=o")) {
		return false;
		}
		pi.updateEvanIntroState("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o;mo21=o");
		pi.evanTutorial("UI/tutorial/evan/0/0", -1);
	pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon70");
		return true;
}