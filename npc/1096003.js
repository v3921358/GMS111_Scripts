/*
	名字:	蒙奇
	地圖:	浅海滩
	描述:	3000100
*/

function start() {
	cm.sendNextNoESC("吱吱！吱吱！");
}

function action(mode, type, selection) {
	cm.EnableUI(0);//关闭动画
	cm.DisableUI(false);
	cm.dispose();
}