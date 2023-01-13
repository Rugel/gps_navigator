
//tablica punktów lat i lon
const latlngTab = [[52.2007456, 22.1184492], [52.1998836, 22.1249418], [52.1993589, 22.1288888], [52.1988388, 22.1327648], [52.1986125, 22.1343779], [52.1983405, 22.1361401], [52.1981399, 22.1373274], [52.1980288, 22.1379153], [52.1978862, 22.1386388], [52.1976890, 22.1395547], [52.1974749, 22.1404566], [52.1972870, 22.1411863], [52.1970476, 22.1420406], [52.1967565, 22.1429697], [52.1964268, 22.1439218], [52.1961457, 22.1446623], [52.1958780, 22.1453243], [52.1955795, 22.1460046], [52.1952665, 22.1466613], [52.1949487, 22.1472878], [52.1945679, 22.1479882], [52.1941343, 22.1487370], [52.1934315, 22.1498092], [52.1930782, 22.1502979], [52.1925984, 22.1509201], [52.1918976, 22.1517484], [52.1913275, 22.1523438], [52.1907375, 22.1529081], [52.1901385, 22.1534064], [52.1898360, 22.1536457], [52.1895253, 22.1538778], [52.1891921, 22.1541099], [52.1888072, 22.1543517], [52.1880993, 22.1547624], [52.1875397, 22.1550271], [52.1873028, 22.1551310], [52.1867524, 22.1553504], [52.1862283, 22.1555301], [52.1858968, 22.1556331], [52.1855904, 22.1557160], [52.1849430, 22.1558625], [52.1846820, 22.1559152], [52.1841732, 22.1559949], [52.1837202, 22.1560538], [52.1826075, 22.1561538], [52.1814927, 22.1562151], [52.1812445, 22.1562256], [52.1798992, 22.1562687], [52.1788548, 22.1563005], [52.1778425, 22.1563819], [52.1773734, 22.1564358], [52.1769845, 22.1564964], [52.1766476, 22.1565625], [52.1762327, 22.1566592], [52.1757863, 22.1567812], [52.1752929, 22.1569394], [52.1747522, 22.1571374], [52.1742559, 22.1573549], [52.1737469, 22.1576002], [52.1735021, 22.1577284], [52.1732558, 22.1578635], [52.1728212, 22.1581206], [52.1723946, 22.1583971], [52.1719740, 22.1586892], [52.1715411, 22.1590086], [52.1712064, 22.1592823], [52.1708786, 22.1595624], [52.1703172, 22.1600749], [52.1697383, 22.1606562], [52.1692468, 22.1612011], [52.1687737, 22.1617572], [52.1682982, 22.1623629], [52.1678934, 22.1629175], [52.1674734, 22.1635362], [52.1670927, 22.1641213], [52.1667994, 22.1646104], [52.1662803, 22.1653200], [52.1653801, 22.1671257], [52.1647413, 22.1686007], [52.1639448, 22.1708716], [52.1636423, 22.1718303], [52.1633721, 22.1728000], [52.1629563, 22.1745520], [52.1625823, 22.1762964], [52.1622444, 22.1779717], [52.1617398, 22.1802750], [52.1612795, 22.1822030], [52.1607639, 22.1839150], [52.1599844, 22.1859466], [52.1590714, 22.1878982], [52.1571705, 22.1908121], [52.1560091, 22.1921068], [52.1547596, 22.1932250], [52.1529775, 22.1946199], [52.1512343, 22.1960506], [52.1498841, 22.1974870], [52.1488108, 22.1989454], [52.1478950, 22.2005087], [52.1470560, 22.2021750], [52.1462088, 22.2040820], [52.1455451, 22.2061470], [52.1450062, 22.2080929], [52.1442596, 22.2108494], [52.1438630, 22.2124625], [52.1434199, 22.2145993], [52.1430609, 22.2171937], [52.1428884, 22.2188682], [52.1428445, 22.2194370], [52.1427946, 22.2201641], [52.1427444, 22.2211671], [52.1427175, 22.2222249], [52.1427108, 22.2227334], [52.1427138, 22.2237561], [52.1427284, 22.2247087], [52.1427548, 22.2256276], [52.1428146, 22.2274766], [52.1428389, 22.2281938], [52.1428683, 22.2290393], [52.1429308, 22.2308297], [52.1429628, 22.2317408], [52.1429992, 22.2328074], [52.1430264, 22.2337057], [52.1430631, 22.2354606], [52.1430736, 22.2363189], [52.1430799, 22.2371613], [52.1430764, 22.2381660], [52.1430594, 22.2391782], [52.1430483, 22.2398701], [52.1430303, 22.2404977], [52.1430154, 22.2408942], [52.1429880, 22.2414703], [52.1429242, 22.2425230], [52.1428400, 22.2436602], [52.1427562, 22.2446125], [52.1427352, 22.2448200], [52.1427108, 22.2450242], [52.1426388, 22.2456329], [52.1425869, 22.2460478], [52.1425204, 22.2465656], [52.1424477, 22.2470800], [52.1422216, 22.2485906], [52.1419348, 22.2503665]];

//dodanie mapy
var map = L.map('map').setView([52.1713402, 22.1844079], 12);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//funkcja licząca długość wycinka lini 
function lineLenth(latitude, longitude) {
    var point = L.latLng(latitude, longitude);
    var closestPoint = L.GeometryUtil.closest(map, pointsLine, point);
    var start = turf.point(strLine.geometry.coordinates[0]);
    var stop = turf.point([closestPoint.lng, closestPoint.lat]);
    var subline = turf.lineSlice(start, stop, strLine);
    var subline_length = turf.length(subline, { units: 'kilometers' });
    subline_length = subline_length * 1.00293;
    subline_length = subline_length.toFixed(3);
    subline_length = subline_length.toString().replace('.', ' + ');
    let popCon = `km ${subline_length}`;
    L.marker([closestPoint.lat, closestPoint.lng]).addTo(map).bindPopup(`<b>${popCon}</b>`).openPopup();
    return subline_length;
}

//dodanie obrysu lini drogi
var polygon = L.polygon([[52.201965, 22.118375], [52.199493, 22.137902], [52.201097, 22.138095], [52.200571, 22.142236], [52.198888, 22.142537], [52.195561, 22.15333], [52.182458, 22.163157], [52.172879, 22.161913], [52.165983, 22.170582], [52.162245, 22.187104], [52.152898, 22.202125], [52.146552, 22.211266], [52.146052, 22.231951], [52.143174, 22.250608], [52.141574, 22.250329], [52.141008, 22.220879], [52.144274, 22.203906], [52.147421, 22.196374], [52.159454, 22.178993], [52.163245, 22.164059], [52.171247, 22.151699], [52.188352, 22.145863], [52.199933, 22.118397]]).addTo(map);

//dodanie markerów do mapy
var office = L.marker([52.18811286436958, 22.147333469408157]).addTo(map);
office.bindPopup("<b>Biuro Budowy A2</b><br/> odc.V POLAQUA").openPopup();

var km12 = L.marker([52.1419348, 22.2503665]).addTo(map);
km12.bindPopup('<b>koniec odcinka</b><br/>km 12 + 488').openPopup();

var km0 = L.marker([52.2007456, 22.1184492]).addTo(map);
km0.bindPopup('<b>początek odcinka</b><br/>km 0 + 000').openPopup();

map.addControl(new L.Control.Fullscreen({
    title: {
        'false': 'widok pełnoekranowy',
        'true': 'wyjdź z widoku pełnoekranowego'
    }
}));

//utworzenie czerwonej lini na mapie
var pointsLine = L.polyline(latlngTab, { color: 'red' }).addTo(map);
for (el in latlngTab) {
    latlngTab[el].reverse();
}
var strLine = turf.lineString(latlngTab);

//lokalizacja 
function lokalizuj() {

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000
    };

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        document.getElementById('info').innerHTML = '<br/>Wystąpił jakiś błąd lub strona nie ma dostępu do Twojej lokalizacji &#x1F62D'
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error, options);
    } else {
        document.getElementById('info').innerHTML = '<br/>Twoja przeglądarka lub urządzenie nie obsługuje funkcji lokalizacji &#x1F62D'
    };

    //callback
    function showPosition(position) {
        //funkcja zwracająca odległość między dwoma punktami 
        let point1;
        let point2;
        let distance = function (p1, p2) {
            const radius = 6371;
            const lat1 = p1.latitude * (Math.PI / 180);
            const lat2 = p2.latitude * (Math.PI / 180);
            const lon1 = p1.longitude * (Math.PI / 180);
            const lon2 = p2.longitude * (Math.PI / 180);
            const deltaLat = lat2 - lat1;
            const deltaLon = lon2 - lon1;
            const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return radius * c;
        }

        //pomiary po zlokalizowaniu użytkownika
        let total = 0;
        let x = position.coords.latitude;
        let y = position.coords.longitude;
        let accu = position.coords.accuracy.toFixed(2);
        const result = document.getElementById('h3');

        if (x <= latlngTab[0][1] && x >= latlngTab[latlngTab.length - 1][1] && y >= latlngTab[0][0] && y <= latlngTab[latlngTab.length - 1][0]) {

            let subline_length = lineLenth(x, y);
            document.getElementById('odczyt').innerHTML = subline_length;
        } else {
            point1 = { latitude: latlngTab[0][1], longitude: latlngTab[0][0] };
            point2 = { latitude: x, longitude: y };
            total = distance(point1, point2).toFixed(3);
            result.style.color = 'red';
            result.innerHTML = `odczyt spoza zakresu budowy - odległość do punktu 0 + 000 wynosi: <b>${total}</b> km`;
            result.style.fontSize = '24px';
            var polyline = L.polyline([[x, y], [latlngTab[0][1], latlngTab[0][0]]], { color: "orange" }).addTo(map);
            L.polylineDecorator(polyline, {
                patterns: [
                    { offset: 70, repeat: 80, symbol: L.Symbol.arrowHead({ pixelSize: 20, pathOptions: { fillOpacity: .7, color: 'orange' } }) }
                ]
            }).addTo(map);
        }
        document.getElementById('dok').innerHTML = accu;
        map.flyTo([x, y], 18);
        var marker = L.marker([x, y]).addTo(map).bindPopup("<b>aktualna lokalizacja<b/>").openPopup();

        //lokalizacja punktu po kliknięciu
        map.on('click', function (e) {
            var popLocation = e.latlng;
            let x = popLocation.lat;
            let y = popLocation.lng;
            let popCon;
            let subline_length = lineLenth(x, y);
            var popup = L.popup()
                .setLatLng(popLocation)
                .setContent(`zapis na lini</br>km ${subline_length}`)
                .openOn(map);
        });

    }

};


