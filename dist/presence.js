const presence = new Presence({
    clientId: "1046959654321795142",
}), browsingTimestamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", async () => {
    const presenceData = {
        largeImageKey: "sonemic",
        startTimestamp: browsingTimestamp,
    };
    if (document.location.pathname.includes("~")) {
        const username = document.querySelector("#profilename").innerHTML;
        presenceData.details = `Looking at profile named ${username}`;
    }
    else if (document.location.pathname.includes("/release/album/")) {
        const releasetitle = document.querySelector(".album_title").textContent;
        presenceData.details = `Rating ${releasetitle}`;
    }
    if (presenceData.details)
        presence.setActivity(presenceData);
    else
        presence.setActivity();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUM3QixRQUFRLEVBQUUscUJBQXFCO0NBQy9CLENBQUMsRUFDRixpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUdsRCxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxLQUFLLElBQUksRUFBRTtJQUNyQyxNQUFNLFlBQVksR0FBaUI7UUFDbEMsYUFBYSxFQUFFLFNBQVM7UUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtLQUNqQyxDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDN0MsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsUUFBUSxFQUFFLENBQUM7S0FDOUQ7U0FBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBRWxFLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBR3hFLFlBQVksQ0FBQyxPQUFPLEdBQUcsVUFBVSxZQUFZLEVBQUUsQ0FBQztLQUNoRDtJQUVGLElBQUksWUFBWSxDQUFDLE9BQU87UUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDOztRQUN4RCxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMifQ==