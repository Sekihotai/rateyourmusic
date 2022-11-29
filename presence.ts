const presence = new Presence({
	clientId: "1046959654321795142",
}),
browsingTimestamp = Math.floor(Date.now() / 1000);


presence.on("UpdateData", async () => {
const presenceData: PresenceData = {
	largeImageKey: "sonemic",
	startTimestamp: browsingTimestamp,
};

	if (document.location.pathname.includes("~")) {
		const username = document.querySelector("#profilename").innerHTML;
		presenceData.details = `Looking at profile named ${username}`;
	} else if (document.location.pathname.includes("/release/album/")) {
		// eslint-disable-next-line no-one-time-vars/no-one-time-vars
		const releasetitle = document.querySelector(".album_title").textContent;
		// eslint-disable-next-line semi, no-one-time-vars/no-one-time-vars
		 //artistname = document.getElementsByClassName(".subtext").textContent;
		presenceData.details = `Rating ${releasetitle}`;
	}

if (presenceData.details) presence.setActivity(presenceData);
else presence.setActivity();
});
