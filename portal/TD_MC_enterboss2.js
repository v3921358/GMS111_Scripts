/*
	名字:	蘑菇城
	地圖:	最后的城塔
	描述:	106021402
*/

function enter(pi) {
	if (pi.getPlayerCount(106021700) == 0) {
		pi.resetMap(106021700);   //地图刷新
		pi.warpParty(106021700, 1);  //洞穴深处
		pi.spawnMobOnMap(3300008,1,292, 143,106021700);//召唤怪物
               
		//var em = pi.getEventManager("MK_PrimeMinister");
		//      em.startInstance(pi.getPlayer().getParty(), pi.getPlayer().getMap());
		} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}