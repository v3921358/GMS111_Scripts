/*
	名字:	梦中
	地圖:	梦中的小路
	描述:	900010100
*/

function enter(pi) {
	if (pi.getEvanIntroState("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o")) {
		return false;
		}
		pi.updateEvanIntroState("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o");
	pi.showMapEffect("evan/dragonTalk01");
		return true;
}