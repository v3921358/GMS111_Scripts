/*
	名字:	骑士团要塞
	地圖:	要塞入口
	描述:	271030010
*/

function enter(pi) {
	pi.warp(271030100, 4);  //骑士团第1区域
	pi.playerMessage(5, '要塞的警戒强化了，无法入场。');
	return true;
}