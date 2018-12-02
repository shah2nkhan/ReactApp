var SECURITIES = ["AAPL.N", "AMZN.N", "QQQ.N", "NVDA.N", "TSLA.N", "FB.N", "MSFT.N", "TLT.N", "XIV.N", "YY.N", "CSCO.N", "GOOGL.N", "PCLN.N"];

var CLIENTS = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Moe", "Lenny", "Carl", "Krusty"];

function newRows() {
    var rows = [];
    for (var x = 0; x < 5; x++) {
        rows.push({
            name: SECURITIES[Math.floor(Math.random() * SECURITIES.length)],
            client: CLIENTS[Math.floor(Math.random() * CLIENTS.length)],
            lastUpdate: new Date(),
            chg: Math.random() * 20 - 10,
            bid: Math.random() * 10 + 90,
            ask: Math.random() * 10 + 100,
            vol: Math.random() * 10 + 100
        });
    }
    return rows;
}

window.addEventListener("WebComponentsReady", function() {
    var elem = document.getElementsByTagName("perspective-viewer")[0];
    // eslint-disable-next-line no-undef
    var table = perspective.worker().table(newRows(), {
        limit: 2000
    });
    elem.load(table);

    (function postRow() {
        elem.update(newRows());
        setTimeout(postRow, 50);
    })();
});