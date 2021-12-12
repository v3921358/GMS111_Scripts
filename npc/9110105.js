/*
	名字:	Naosuke
	地圖:	楓城 百間廊下
	描述:	800040211
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		cm.sendOk("…看到了嗎？擺在面前的是一條危險的道路，眾所周知，這條道路會把每個敢於去那裡的人都咬得粉碎，如果我是你，我會馬上轉身離開。");
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("你是誰，如何能進到這裡來?");
	if (status == 1)
		cm.sendYesNo("什麼，你還想打算繼續往裡面走?");
	if (status == 2)
		cm.sendPrev("...不怕死的笨蛋，既然你想進去，我就放你過去好了!");
	if (status == 3){
		cm.warp(800040300, 0);
		cm.dispose();
}
}