/*
	名字:	隐藏地图
	地圖:	第一次同行&amp;lt;1号门&g
	描述:	910340100
*/

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	switch(pi.getMapId()) {
	case 910340100:
		if (eim.getProperty("1stageclear") == null) { // do nothing; send message to player
			pi.playerMessage(-7,"[Portal]需要完成相关任務");
		} else {
			pi.warp(910340200, 0);  //第一次同行&amp;lt;2号门&gt;
			}
			break;
	case 910340200:
		if (eim.getProperty("2stageclear") == null) { // do nothing; send message to player
			pi.playerMessage(-7,"[Portal]需要完成相关任務");
		} else {
 			pi.warp(910340300, 0); //第一次同行&amp;lt;3号门&gt;
			}
			break;
	case 910340300:
		if (eim.getProperty("3stageclear") == null) { // do nothing; send message to player
			pi.playerMessage(-7,"[Portal]需要完成相关任務");
		} else {
			pi.warp(910340400, 0);//第一次同行&amp;lt;4号门&gt;
			}
			break;
	case 910340400:
		if (eim.getProperty("4stageclear") == null) { // do nothing; send message to player
			pi.playerMessage(-7,"[Portal]需要完成相关任務");
		} else {
			pi.warp(910340500, 0);//第一次同行&amp;lt;5号门&gt;
			}
			break;
}
}