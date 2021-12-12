/*
	名字:	克鲁巴
	地圖:	码头&amp;lt;前往天空之城&gt
	描述:	240000110
*/

function start() {
	cm.sendSimple("如果你有翅膀，我敢肯定，你可以去那裡。但是，這本身並沒有足夠的。如果你想要飛，雖然風這比刀片鋒利，你需要堅韌的尺度為好。我是唯一半身左邊那個知道回來的路上......如果你想去那裡，我可以改變你。不管你是什麼，這一刻，你會成為一個 #b龍#k...\r\n #L0##b我想變成一隻龍.#k#l");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(200090500, 0);
		cm.useItem(2210016);
		}
	cm.dispose();
}