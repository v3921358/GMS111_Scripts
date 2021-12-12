/*
	名字:	迷路
	地圖:	迷路
	描述:	809050000
*/

function act() {
    var rand = (Math.random() * 2) + 1;
    var q = 0;
    var q2 = 0;
    if (rand < 2) {
	q = 3;
	q2 = 4;
    } else {
	q = 4;
	q2 = 3;
    }
	rm.spawnMonster(9400648, q);
	rm.spawnMonster(9400649, q2);
}