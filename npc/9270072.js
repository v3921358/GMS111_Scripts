/*
	名字:	小喙喙
	地圖:	白色圣诞山丘
	描述:	555000000
*/

function start() {
	cm.sendYesNo("你打算回城嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("那就多在這裡陪陪我。");
	} else {
		var savedMapId = cm.getSavedLocation("CHRISTMAS");
		savedMapId = (savedMapId > 0 ? savedMapId : 100000000);  //没有标记地图的返回
		cm.clearSavedLocation("CHRISTMAS");    //返回标记地图
		cm.warp(savedMapId);
		}
	cm.dispose();
}
