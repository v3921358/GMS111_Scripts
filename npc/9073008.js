/*
	����:	ʱ����
	�؈D:	������
	����:
*/

function start() {
	cm.sendYesNo("(Ҫ�Ƅӵ��r���T�e��ȥ�᣿)");
}

function action(mode, type, selection) {
	if (mode == 1) {
	var map = cm.getMapId();

	if (map == 102040600) {
		tomap = 931050410;
		// cm.getMap(931050410).resetFully();//��ͼˢ��
		cm.spawnMobOnMap(9300471,1,199,196,931050410);//�ٻ����� 

	} else if (map == 200080000) {
		tomap = 931050411;
		cm.getMap(931050411).resetFully();//��ͼˢ��

	} else if (map == 220011000) {
		tomap = 931050412;
		cm.getMap(931050412).resetFully();//��ͼˢ��

	} else if (map == 220040200) {
		tomap = 931050413;
		cm.getMap(931050413).resetFully();//��ͼˢ��

	} else if (map == 221040400) {
		tomap = 931050414;
		cm.getMap(931050414).resetFully();//��ͼˢ��

	} else if (map == 260010201) {
		tomap = 931050415;
		cm.getMap(931050415).resetFully();//��ͼˢ��

	} else if (map == 250020300) {
		tomap = 931050416;
		cm.getMap(931050416).resetFully();//��ͼˢ��

	} else if (map == 261020500) {
		tomap = 931050417;
		cm.getMap(931050417).resetFully();//��ͼˢ��

	} else if (map == 251010500) {
		tomap = 931050418;
		cm.getMap(931050418).resetFully();//��ͼˢ��

	} else if (map == 240010200) {
		tomap = 931050419;
		cm.getMap(931050419).resetFully();//��ͼˢ��

	} else if (map == 240010500) {
		tomap = 931050421;
		cm.getMap(931050421).resetFully();//��ͼˢ��

	} else if (map == 240010600) {
		tomap = 931050420;
                  cm.getMap(931050420).resetFully();//��ͼˢ��

	} else if (map == 240020200) {
	    tomap = 931050422;
		cm.getMap(931050422).resetFully();//��ͼˢ��

	} else if (map == 211040000) {    //�����ƽԭ��
		tomap = 931050423;
		cm.getMap(931050423).resetFully();//��ͼˢ��

	} else if (map == 261020200) {
		tomap = 931050424;
		cm.getMap(931050424).resetFully();//��ͼˢ��

	} else if (map == 240020401) {
		tomap = 931050425;
		cm.getMap(931050425).resetFully();//��ͼˢ��

	} else if (map == 240020101) {
		tomap = 931050426;
		cm.getMap(931050426).resetFully();//��ͼˢ��

	} else if (map == 220080000) {
		tomap = 931050427;
		cm.getMap(931050427).resetFully();//��ͼˢ��

	} else if (map == 211041400) {
		 tomap = 931050428;
		cm.getMap(931050428).resetFully();//��ͼˢ��

	} else if (map == 230040410) {
		tomap = 931050429;
		cm.getMap(931050429).resetFully();//��ͼˢ��

	} else if (map == 240040400) {
		tomap = 931050430;
		cm.getMap(931050430).resetFully();//��ͼˢ��

	} else if (map == 270010500) {
		tomap = 931050431;
		cm.getMap(931050431).resetFully();//��ͼˢ��

	} else if (map == 270020500) {
		tomap = 931050432;
		cm.getMap(931050432).resetFully();//��ͼˢ��

	} else if (map == 270030500) {
		tomap = 931050433;
		cm.getMap(931050433).resetFully();//��ͼˢ��

	} else if (map == 261010002) {
		tomap = 931050434;
		cm.getMap(931050434).resetFully();//��ͼˢ��

	} else if (map == 261010103) {
		tomap = 931050435;
		cm.getMap(931050435).resetFully();//��ͼˢ��

	} else if (map == 250010502) {
		tomap = 931050436;
		cm.getMap(931050436).resetFully();//��ͼˢ��
		}
		cm.warp(tomap);
		}
	cm.dispose();
}