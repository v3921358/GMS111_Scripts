/*
	名字:	温黛林
	地圖:	训练室入口
	描述:	310010010
*/

function start() {
	cm.getPlayer().getStat().heal(cm.getPlayer());
	cm.sendOk("请继续战斗！我已经治愈了你。");
	cm.dispose();
}