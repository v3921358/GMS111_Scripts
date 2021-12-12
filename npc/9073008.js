/*
	名字:	时空门
	地圖:	金银岛
	描述:
*/

function start() {
	cm.sendYesNo("(要移動到時空門裡面去嗎？)");
}

function action(mode, type, selection) {
	if (mode == 1) {
	var map = cm.getMapId();

	if (map == 102040600) {
		tomap = 931050410;
		// cm.getMap(931050410).resetFully();//地图刷新
		cm.spawnMobOnMap(9300471,1,199,196,931050410);//召唤怪物 

	} else if (map == 200080000) {
		tomap = 931050411;
		cm.getMap(931050411).resetFully();//地图刷新

	} else if (map == 220011000) {
		tomap = 931050412;
		cm.getMap(931050412).resetFully();//地图刷新

	} else if (map == 220040200) {
		tomap = 931050413;
		cm.getMap(931050413).resetFully();//地图刷新

	} else if (map == 221040400) {
		tomap = 931050414;
		cm.getMap(931050414).resetFully();//地图刷新

	} else if (map == 260010201) {
		tomap = 931050415;
		cm.getMap(931050415).resetFully();//地图刷新

	} else if (map == 250020300) {
		tomap = 931050416;
		cm.getMap(931050416).resetFully();//地图刷新

	} else if (map == 261020500) {
		tomap = 931050417;
		cm.getMap(931050417).resetFully();//地图刷新

	} else if (map == 251010500) {
		tomap = 931050418;
		cm.getMap(931050418).resetFully();//地图刷新

	} else if (map == 240010200) {
		tomap = 931050419;
		cm.getMap(931050419).resetFully();//地图刷新

	} else if (map == 240010500) {
		tomap = 931050421;
		cm.getMap(931050421).resetFully();//地图刷新

	} else if (map == 240010600) {
		tomap = 931050420;
                  cm.getMap(931050420).resetFully();//地图刷新

	} else if (map == 240020200) {
	    tomap = 931050422;
		cm.getMap(931050422).resetFully();//地图刷新

	} else if (map == 211040000) {    //结冰的平原Ⅱ
		tomap = 931050423;
		cm.getMap(931050423).resetFully();//地图刷新

	} else if (map == 261020200) {
		tomap = 931050424;
		cm.getMap(931050424).resetFully();//地图刷新

	} else if (map == 240020401) {
		tomap = 931050425;
		cm.getMap(931050425).resetFully();//地图刷新

	} else if (map == 240020101) {
		tomap = 931050426;
		cm.getMap(931050426).resetFully();//地图刷新

	} else if (map == 220080000) {
		tomap = 931050427;
		cm.getMap(931050427).resetFully();//地图刷新

	} else if (map == 211041400) {
		 tomap = 931050428;
		cm.getMap(931050428).resetFully();//地图刷新

	} else if (map == 230040410) {
		tomap = 931050429;
		cm.getMap(931050429).resetFully();//地图刷新

	} else if (map == 240040400) {
		tomap = 931050430;
		cm.getMap(931050430).resetFully();//地图刷新

	} else if (map == 270010500) {
		tomap = 931050431;
		cm.getMap(931050431).resetFully();//地图刷新

	} else if (map == 270020500) {
		tomap = 931050432;
		cm.getMap(931050432).resetFully();//地图刷新

	} else if (map == 270030500) {
		tomap = 931050433;
		cm.getMap(931050433).resetFully();//地图刷新

	} else if (map == 261010002) {
		tomap = 931050434;
		cm.getMap(931050434).resetFully();//地图刷新

	} else if (map == 261010103) {
		tomap = 931050435;
		cm.getMap(931050435).resetFully();//地图刷新

	} else if (map == 250010502) {
		tomap = 931050436;
		cm.getMap(931050436).resetFully();//地图刷新
		}
		cm.warp(tomap);
		}
	cm.dispose();
}