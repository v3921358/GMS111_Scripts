/*
	名字:	毒雾森林
	地圖:	毒树丛
	描述:	930000600
*/

function enter(pi) {
	if (pi.canHold(4001198,1) && (pi.getMap().getAllMonstersThreadsafe().size() == 0 || pi.getMap().getMonsterById(9300183) != null) && (pi.getMap().getReactorByName("") == null || pi.getMap().getReactorByName("").getState() == 1)) {
		pi.warp(930000800,0);  //森林外围出口
		pi.gainExp_PQ(120, 1.0);
		pi.getPlayer().endPartyQuest(1206);
		pi.addTrait("will", 30);
		pi.gainNX(2000);
		pi.gainItem(4001198,1);
	} else {
		pi.playerMessage(-7,"[Portal]請消滅毒魔像並預留背包空間");
}
}