/*
	名字:	毒雾森林
	地圖:	变质的森林
	描述:	930000200
*/

function act() {
	if(rm.getReactor().getState() == 4) {   //被污染的植被
		rm.getEventInstance();
}
}