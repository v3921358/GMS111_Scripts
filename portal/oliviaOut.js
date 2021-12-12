/*
	名字:	闹鬼宅邸
	地圖:	682010102
	描述:	682010102
*/

function enter(pi) {
	if (pi.getPlayer().getEventInstance() != null ) {
	var s = parseInt(pi.getPlayer().getEventInstance().getProperty("Olivia"));
		pi.gainExp((s == 0 ? 1500 : (s == 1 ? 5500 : 16000)));
		pi.gainNX((s == 0 ? 150 : (s == 1 ? 300 : 600)));
		}
		pi.warp(682000000,0); //闹鬼宅邸外部
}