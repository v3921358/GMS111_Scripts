/*
	名字:	Konpei
	地圖:	アジト前(天晴れ)
	描述:	801040101
*/

function start() {
	if (cm.haveItem(4000141)) {
		cm.sendYesNo("比我想像中的意外，你居然趕跑了老闆，那現在這片區域的治安就交給我負責好了，請你相信我一定會幫你打理好這一切的。至於#v4000141:##b#t4000141##k我就先收下了，作為對以後生活的一種警惕，請多指教。");
	} else {
		cm.sendYesNo("哦！什麼？這是怎麼一回事，你想回去嗎？");
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("如果你决定返回#b#m801000000##k，請告訴我！");
		}
	if (mode == 1) {
		if (cm.haveItem(4000141)) {  
			cm.gainItem(4000141, -1);
			cm.gainItem(2000004, 200);
			cm.warp(801000000, 0);
		} else {
			cm.warp(800000000);
			}
			}
		cm.dispose();
}