/*
	名字:	时空门
	地圖:	金银岛
	描述:
*/

function start() {
    cm.sendYesNo("(要移動到時空門外面去嗎?)");
}

function action(mode, type, selection) {
    if (mode == 1) {
        var map = cm.getMapId();

	if (map == 931050410) {
            	    tomap = 102040600;

	} else if (map == 931050411) {
	    tomap = 200080000;    

	} else if (map == 931050412) {
	    tomap = 220011000;

	} else if (map == 931050413) {
	    tomap = 220040200;
                  

	} else if (map == 931050414) {
	    tomap = 221040400;
                  

	} else if (map == 931050415) {
	    tomap = 260010201;
                  

	} else if (map == 931050416) {
	    tomap = 250020300;
                  

	} else if (map == 931050417) {
	    tomap = 261020500;
                  

	} else if (map == 931050418) {
	    tomap = 251010500;
                  

	} else if (map == 931050419) {
	    tomap = 240010200;

	} else if (map == 931050421) {
	    tomap = 240010500;

	} else if (map == 931050420) {
	    tomap = 240010600;

	} else if (map == 931050422) {
	    tomap = 240020200;

	} else if (map == 931050423) {
	    tomap = 211040000;

	} else if (map == 931050424) {
	    tomap = 261020200;

	} else if (map == 931050425) {
	    tomap = 240020401;

	} else if (map == 931050426) {
	    tomap = 240020101;

	} else if (map == 931050427) {
	    tomap = 220080000;

	} else if (map == 931050428) {
	    tomap = 211041400;

	} else if (map == 931050429) {
	    tomap = 230040410;

	} else if (map == 931050430) {
	    tomap = 240040400;

	} else if (map == 931050431) {
	    tomap = 270010500;

	} else if (map == 931050432) {
	    tomap = 270020500;

	} else if (map == 931050433) {
	    tomap = 270030500;

	} else if (map == 931050434) {
	    tomap = 261010002;

	} else if (map == 931050435) {
	    tomap = 261010103;

	} else if (map == 931050436) {
	    tomap = 250010502;
                  

	}
        cm.warp(tomap);
    }
    cm.dispose();
}