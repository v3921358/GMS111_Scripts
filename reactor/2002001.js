/*
	名字:	秘密之地
	地圖:	雅典娜禁地&amp;lt;岔路&gt;
	描述:	920010000
*/

function act() {
	var r = rm.getMap().getReactorByName("eak");
	r.forceHitReactor(r.getState() + 1);
	rm.dropItems();      //云的碎片 4001063
}