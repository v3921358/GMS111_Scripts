/*
	名字:	赵云子龙
	地圖:	赤壁
	描述:	960000000
*/

function start() {
	cm.sendYesNo("你打算回城嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("可能你還想要繼續磨練一下。");
	} else {
		var savedMapId = cm.getSavedLocation("MULUNG_TC");
		savedMapId = (savedMapId > 0 ? savedMapId : 100000000);  //没有标记地图的返回
		cm.clearSavedLocation("MULUNG_TC");    //返回标记地图
		cm.warp(savedMapId);
		}
	cm.dispose();
}
