/*
	名字:	克鲁特
	地圖:	第一次同行&amp;lt;1号门&g
	描述:	910340100
*/

function start() {
	var mapId = cm.getMapId();
	if (mapId == 910340100) {
		cm.dispose();
		cm.openNpc(9020001,"9020001_1");
	} else if (mapId == 910340200) {
		cm.dispose();
		cm.openNpc(9020001,"9020001_2");
	} else if (mapId == 910340300) {
		cm.dispose();
		cm.openNpc(9020001,"9020001_3");
	} else if (mapId == 910340400) {
		cm.dispose();
		cm.openNpc(9020001,"9020001_4");
	} else if (mapId == 910340500) {
		cm.dispose();
		cm.openNpc(9020001,"9020001_5");
}
}