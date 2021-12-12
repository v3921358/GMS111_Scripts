/*
	名字:	玩具城
	地圖:	时间塔的本源
	描述:	220080001
*/

function act(){
try {
	rm.mapMessage(5, "The dimensional hole has been filled by the <Piece of Cracked Dimension>.");
	rm.changeMusic("Bgm09/TimeAttack");
	rm.spawnMonster(8500000, -410, -400);   //召唤闹钟
	rm.getMap(220080000).setReactorState();
	} catch(e) {
	rm.mapMessage(5, "Error: " + e);
}
}