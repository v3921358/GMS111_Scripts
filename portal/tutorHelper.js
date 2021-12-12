/*
	名字:	女皇之路
	地圖:	新的启程1
	描述:	130030000
*/

function enter(pi) {
	pi.playerSummonHint(true);
	pi.forceStartQuest(20022,"1");
	pi.summonMsg("欢迎来到枫树世界！我的名字叫顾，我将是你的向导！我将在这里回答你的问题，并指导你，直到你达到10级，成为一名骑士在训练。如果您有任何问题，请双击我");
	return true;
}