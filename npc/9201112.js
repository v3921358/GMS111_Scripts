/*
	名字:	杰克恩
	地圖:	密室走廊
	描述:	610030100
*/

// 战士 属性攻击
// 弓手  箭扫射
// 法师启动  魔法双击
// 盗贼  金钱炸弹
//海盗  百烈拳

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	var em = cm.getEventManager("CWKPQ");
	if (em == null) {
		cm.sendNext("腳本錯誤，請稍後嘗試。");
		cm.dispose();
		return;
		}
	if (!cm.isLeader()) {
		cm.sendNext("很抱歉，我不能與妳交談，請讓妳的組長與我談話。");
		cm.dispose();
		return;
		}
	switch(cm.getPlayer().getMapId()) {
	case 610030100:
		if (status == 0)
			cm.sendNext("我們剛進入這個區域，就已經被守衛者有所察覺，所以我們必須要加快速度。");
		if (status == 1)
			cm.sendNextPrev("之前我有檢查過，通往扭曲大師的大門被摧毀了，我們必須找到另一條路，一條能帶我們穿過許多死亡陷阱的路。");
		if (status == 2) {
			cm.sendOk("現在，我們必須在這個附近尋找一下，馬上！！否則守衛者會趕來的。");
			cm.dispose();
			em.setProperty("glpq1", "1");
			}
			break;
	case 610030200:
		if (status == 0)
			cm.sendNext("這是個麻煩的事情，對於這條路，我相信我們需要集齊5種冒險家職業才能通過，希望我們的團隊是完整的，否則只能回去了。");
		if (status == 1) {
			cm.sendPrev("5種冒險家職業需要在這些被標有訊號的平臺上運用他們的技能，啟動各職業的標誌，這件事做完後，我們才能開啟傳送門。");
			cm.dispose();
			}
			break;
	case 610030300:
		if (status == 0)
			cm.sendNext("這個地方與之前的情况差不多，也是通過職業技能開啟標誌，但是正如你所看到的，希望一切都能順利。");
		if (status == 1) {
			cm.sendPrev("只要能躲過那些死亡陷阱，我相信我們很快就能繼續前進。");
			cm.dispose();
			}
			break;
	case 610030400:
		if (status == 0)
			cm.sendNext("哦！！！我的天哪，又是那些可怕的機關，這是我們唯一的出路，只能繼續前行。");
		if (status == 1) {
			cm.sendPrev("這是我們唯一的出路，只能繼續前行，我們最好快一點，要是有守衛者趕來就麻煩了。");
			cm.dispose();
			}
			break;
	case 610030500:
		if (status == 0)
			cm.sendNext("你看到那个残破的雕像了么，手中沒有任何武器，估计被拆分开了。");
		if (status == 1)
			cm.sendNextPrev("雕像周圍有五個房間，每個房間附近都有一座塑像。");
		if (status == 2)
			cm.sendNextPrev("我懷疑每個房間都有雕像的五件武器中的一件。");
		if (status == 3){
			cm.sendPrev("想辦法把武器帶回來，把它們恢復到原本雕像的位置！");
			cm.dispose();
			}
			break;
	case 610030700:
		cm.sendOk("這條路通向扭曲大師的軍械庫，我想我們到達目的地了。");
		cm.dispose();
		break;
}
}