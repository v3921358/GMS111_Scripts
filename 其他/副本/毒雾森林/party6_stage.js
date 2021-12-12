/*
	名字:	毒雾森林
	地圖:	毒雾森林
	描述:	930000000
*/

function enter(pi) {
	switch(pi.getMapId()) {
	case 930000000:
		pi.warp(930000100,0);  //森林初入
		break;
	case 930000100:
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(930000200,0);  //变质的森林
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
		}
		break;
	case 930000200:
	if (pi.getMap().getReactorByName("spine") != null && pi.getMap().getReactorByName("spine").getState() < 4) {
		pi.playerMessage(-7,"[Portal]脊椎擋住了去路");
	} else {
		pi.warp(930000300,0); //雾之丛
		}
		break;
}
}