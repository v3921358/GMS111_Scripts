/*
	名字:	奇拉
	地圖:	神的黄昏
	描述:	270050100
*/

function start() {
	cm.sendAcceptDecline("如果我有一面善良的鏡子，那麼我就可以重新召喚黑巫師了！ \r\n等待！有點不對勁！為什麼黑巫師沒有被召喚？等等，這是什麼力量？我感覺到。。。和黑巫師完全不同啊!!!!! \r\n\r\n #b(將一隻手放在Kryston的肩膀上。)");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeNpc(270050100, 2141000);
		cm.forceStartReactor(270050100, 2709000);
		}
	cm.dispose();
}