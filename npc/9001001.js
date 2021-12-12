/*
	名字:	北极熊露露
	地圖:	新叶城-市区中心
	描述:	600000000
*/

function start() {
	cm.sendSimple("#b\r\n#L0#甜餅山 1#l\r\n#L1#甜餅山 2#l#k");
}

function action(mode,type,selection) {
	if (mode == 1) { //or 931000400 + selection..?
	switch(selection) {
	case 0:
		cm.warp(683000000,0);
		break;
	case 1:
		cm.warp(684000000,0);
		break;
		}
		}
	cm.dispose();
}