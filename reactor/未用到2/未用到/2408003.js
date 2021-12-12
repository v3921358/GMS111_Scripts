/*
	名字:	生命之穴
	地圖:	试炼之穴Ⅰ
	描述:	240060000
*/

function touch() {
	if (rm.getPlayer().getEventInstance() != null) {
		rm.getPlayer().getEventInstance().setProperty("summoned", "true");
		rm.getPlayer().getEventInstance().setProperty("canEnter", "false");
	}
    rm.spawnFakeMonster(8800000);
    rm.mapMessage(6, "A gigantic creature is approaching from the deep cave.");	
    //rm.createMapMonitor(rm.getPlayer().getMap().getId(),"ps00");
	switch (rm.getPlayer().getMap().getId()) {
		case 240060000: 
			rm.spawnMonster(8810000, 960, 0);   //暗黑龙王的左侧头颅
		break;
		case 240060100:
			rm.spawnMonster(8810001, 0, 0); //needs correct positions
		break;
	}
}
	
	