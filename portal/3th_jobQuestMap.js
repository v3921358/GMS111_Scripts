/*
	名字:	秘密地图
	地圖:	发光水晶通道
	描述:	910540000
*/

function enter(pi) {
	if (pi.isQuestActive(1431) || pi.isQuestActive(1432) || pi.isQuestActive(1433)) {//warrior
		pi.resetMap(910540100);   //次元的世界
		pi.warp(910540100,0);
	}else if (pi.isQuestActive(1435) || pi.isQuestActive(1436) || pi.isQuestActive(1437)) {//mage
		pi.resetMap(910540200);
		pi.warp(910540200,0);     //次元的世界
	}else if (pi.isQuestActive(1439) || pi.isQuestActive(1440)) {//bowman
		pi.resetMap(910540300);
		pi.warp(910540300,0);        //次元的世界
	}else if (pi.isQuestActive(1442) || pi.isQuestActive(1443) || pi.isQuestActive(1447)) {//theif
		pi.resetMap(910540400);
		pi.warp(910540400,0);       //次元的世界
	}else if (pi.isQuestActive(1445) || pi.isQuestActive(1446) || pi.isQuestActive(1448)) {//pirate
		pi.resetMap(910540500);
		pi.warp(910540500,0);      //次元的世界
	}else{
		pi.playerMessage("Something went wrong");
		pi.warp(100000000,0);
}
}