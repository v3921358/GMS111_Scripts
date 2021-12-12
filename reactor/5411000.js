/*
	名字:	新加坡
	地圖:	轮机舱
	描述:	541010100
*/

function act(){
try {
	rm.changeMusic("Bgm09/TimeAttack");    //4000381   白色精华
	rm.spawnMonster(9420513, -146, 225);
	rm.mapMessage(5, "如你所願，拉坦尼卡上尉來了.");
	} catch(e) {
	rm.mapMessage(5, "Error: " + e);
}
}