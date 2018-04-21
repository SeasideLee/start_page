function searchHistory(keyword) {
    chrome.history.search({"text": keyword}, function callback(results) {
        for (i in results) {
            console.log(results[i].title);
        }
    });
}

function toUpper(n, rate) {
    return (Math.ceil(n / 0.998 / 0.998 * (1 + rate) * 10000) / 10000).toFixed(4);
}

function toLower(n, rate) {
    return (Math.floor(n * 0.998 * 0.998 / (1 + rate) * 10000) / 10000).toFixed(4);
}

const rates = [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07];

$('#price').bind('input propertychange', function() {
    var str = $(this).val();
    var n = Number(str);
    if (!isNaN(n)) {
        for (let i = 0; i < rates.length; i++) {
            $('#up_' + i).html(toUpper(n, rates[i]));
            $('#low_' + i).html(toLower(n, rates[i]));
        }
    }
});