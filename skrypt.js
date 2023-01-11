const tab_of_nodes = [{ lat: 52.2007456, lon: 22.1184492 }, { lat: 52.1998836, lon: 22.1249418 }, { lat: 52.1993589, lon: 22.1288888 }, { lat: 52.1988388, lon: 22.1327648 }, { lat: 52.1986125, lon: 22.1343779 }, { lat: 52.1983405, lon: 22.1361401 }, { lat: 52.1981399, lon: 22.1373274 }, { lat: 52.1980288, lon: 22.1379153 }, { lat: 52.1978862, lon: 22.1386388 }, { lat: 52.1976890, lon: 22.1395547 }, { lat: 52.1974749, lon: 22.1404566 }, { lat: 52.1972870, lon: 22.1411863 }, { lat: 52.1970476, lon: 22.1420406 }, { lat: 52.1967565, lon: 22.1429697 }, { lat: 52.1964268, lon: 22.1439218 }, { lat: 52.1961457, lon: 22.1446623 }, { lat: 52.1958780, lon: 22.1453243 }, { lat: 52.1955795, lon: 22.1460046 }, { lat: 52.1952665, lon: 22.1466613 }, { lat: 52.1949487, lon: 22.1472878 }, { lat: 52.1945679, lon: 22.1479882 }, { lat: 52.1941343, lon: 22.1487370 }, { lat: 52.1934315, lon: 22.1498092 }, { lat: 52.1930782, lon: 22.1502979 }, { lat: 52.1925984, lon: 22.1509201 }, { lat: 52.1918976, lon: 22.1517484 }, { lat: 52.1913275, lon: 22.1523438 }, { lat: 52.1907375, lon: 22.1529081 }, { lat: 52.1901385, lon: 22.1534064 }, { lat: 52.1898360, lon: 22.1536457 }, { lat: 52.1895253, lon: 22.1538778 }, { lat: 52.1891921, lon: 22.1541099 }, { lat: 52.1888072, lon: 22.1543517 }, { lat: 52.1880993, lon: 22.1547624 }, { lat: 52.1875397, lon: 22.1550271 }, { lat: 52.1873028, lon: 22.1551310 }, { lat: 52.1867524, lon: 22.1553504 }, { lat: 52.1862283, lon: 22.1555301 }, { lat: 52.1858968, lon: 22.1556331 }, { lat: 52.1855904, lon: 22.1557160 }, { lat: 52.1849430, lon: 22.1558625 }, { lat: 52.1846820, lon: 22.1559152 }, { lat: 52.1841732, lon: 22.1559949 }, { lat: 52.1837202, lon: 22.1560538 }, { lat: 52.1826075, lon: 22.1561538 }, { lat: 52.1814927, lon: 22.1562151 }, { lat: 52.1812445, lon: 22.1562256 }, { lat: 52.1798992, lon: 22.1562687 }, { lat: 52.1788548, lon: 22.1563005 }, { lat: 52.1778425, lon: 22.1563819 }, { lat: 52.1773734, lon: 22.1564358 }, { lat: 52.1769845, lon: 22.1564964 }, { lat: 52.1766476, lon: 22.1565625 }, { lat: 52.1762327, lon: 22.1566592 }, { lat: 52.1757863, lon: 22.1567812 }, { lat: 52.1752929, lon: 22.1569394 }, { lat: 52.1747522, lon: 22.1571374 }, { lat: 52.1742559, lon: 22.1573549 }, { lat: 52.1737469, lon: 22.1576002 }, { lat: 52.1735021, lon: 22.1577284 }, { lat: 52.1732558, lon: 22.1578635 }, { lat: 52.1728212, lon: 22.1581206 }, { lat: 52.1723946, lon: 22.1583971 }, { lat: 52.1719740, lon: 22.1586892 }, { lat: 52.1715411, lon: 22.1590086 }, { lat: 52.1712064, lon: 22.1592823 }, { lat: 52.1708786, lon: 22.1595624 }, { lat: 52.1703172, lon: 22.1600749 }, { lat: 52.1697383, lon: 22.1606562 }, { lat: 52.1692468, lon: 22.1612011 }, { lat: 52.1687737, lon: 22.1617572 }, { lat: 52.1682982, lon: 22.1623629 }, { lat: 52.1678934, lon: 22.1629175 }, { lat: 52.1674734, lon: 22.1635362 }, { lat: 52.1670927, lon: 22.1641213 }, { lat: 52.1667994, lon: 22.1646104 }, { lat: 52.1662803, lon: 22.1653200 }, { lat: 52.1653801, lon: 22.1671257 }, { lat: 52.1647413, lon: 22.1686007 }, { lat: 52.1639448, lon: 22.1708716 }, { lat: 52.1636423, lon: 22.1718303 }, { lat: 52.1633721, lon: 22.1728000 }, { lat: 52.1629563, lon: 22.1745520 }, { lat: 52.1625823, lon: 22.1762964 }, { lat: 52.1622444, lon: 22.1779717 }, { lat: 52.1617398, lon: 22.1802750 }, { lat: 52.1612795, lon: 22.1822030 }, { lat: 52.1607639, lon: 22.1839150 }, { lat: 52.1599844, lon: 22.1859466 }, { lat: 52.1590714, lon: 22.1878982 }, { lat: 52.1571705, lon: 22.1908121 }, { lat: 52.1560091, lon: 22.1921068 }, { lat: 52.1547596, lon: 22.1932250 }, { lat: 52.1529775, lon: 22.1946199 }, { lat: 52.1512343, lon: 22.1960506 }, { lat: 52.1498841, lon: 22.1974870 }, { lat: 52.1488108, lon: 22.1989454 }, { lat: 52.1478950, lon: 22.2005087 }, { lat: 52.1470560, lon: 22.2021750 }, { lat: 52.1462088, lon: 22.2040820 }, { lat: 52.1455451, lon: 22.2061470 }, { lat: 52.1450062, lon: 22.2080929 }, { lat: 52.1442596, lon: 22.2108494 }, { lat: 52.1438630, lon: 22.2124625 }, { lat: 52.1434199, lon: 22.2145993 }, { lat: 52.1430609, lon: 22.2171937 }, { lat: 52.1428884, lon: 22.2188682 }, { lat: 52.1428445, lon: 22.2194370 }, { lat: 52.1427946, lon: 22.2201641 }, { lat: 52.1427444, lon: 22.2211671 }, { lat: 52.1427175, lon: 22.2222249 }, { lat: 52.1427108, lon: 22.2227334 }, { lat: 52.1427138, lon: 22.2237561 }, { lat: 52.1427284, lon: 22.2247087 }, { lat: 52.1427548, lon: 22.2256276 }, { lat: 52.1428146, lon: 22.2274766 }, { lat: 52.1428389, lon: 22.2281938 }, { lat: 52.1428683, lon: 22.2290393 }, { lat: 52.1429308, lon: 22.2308297 }, { lat: 52.1429628, lon: 22.2317408 }, { lat: 52.1429992, lon: 22.2328074 }, { lat: 52.1430264, lon: 22.2337057 }, { lat: 52.1430631, lon: 22.2354606 }, { lat: 52.1430736, lon: 22.2363189 }, { lat: 52.1430799, lon: 22.2371613 }, { lat: 52.1430764, lon: 22.2381660 }, { lat: 52.1430594, lon: 22.2391782 }, { lat: 52.1430483, lon: 22.2398701 }, { lat: 52.1430303, lon: 22.2404977 }, { lat: 52.1430154, lon: 22.2408942 }, { lat: 52.1429880, lon: 22.2414703 }, { lat: 52.1429242, lon: 22.2425230 }, { lat: 52.1428400, lon: 22.2436602 }, { lat: 52.1427562, lon: 22.2446125 }, { lat: 52.1427352, lon: 22.2448200 }, { lat: 52.1427108, lon: 22.2450242 }, { lat: 52.1426388, lon: 22.2456329 }, { lat: 52.1425869, lon: 22.2460478 }, { lat: 52.1425204, lon: 22.2465656 }, { lat: 52.1424477, lon: 22.2470800 }, { lat: 52.1422216, lon: 22.2485906 }, { lat: 52.1419348, lon: 22.2503665 }];

var map = L.map('map').setView([52.1713402, 22.1844079], 12);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.polyline([[52.2027456, 22.1164492],
[52.2027456, 22.2523665],
[52.1399348, 22.2523665],
[52.1399348, 22.1164492],
[52.2027456, 22.1164492]]).addTo(map);

var polygon = L.polygon([[52.201965, 22.118375], [52.199493, 22.137902], [52.201097, 22.138095], [52.200571, 22.142236], [52.198888, 22.142537], [52.195561, 22.15333], [52.182458, 22.163157], [52.172879, 22.161913], [52.165983, 22.170582], [52.162245, 22.187104], [52.152898, 22.202125], [52.146552, 22.211266], [52.146052, 22.231951], [52.143174, 22.250608], [52.141574, 22.250329], [52.141008, 22.220879], [52.144274, 22.203906], [52.147421, 22.196374], [52.159454, 22.178993], [52.163245, 22.164059], [52.171247, 22.151699], [52.188352, 22.145863], [52.199933, 22.118397]]).addTo(map);

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

for (i = 0; i < tab_of_nodes.length - 1; i++) {
    var polyline = L.polyline([[tab_of_nodes[i].lat, tab_of_nodes[i].lon], [tab_of_nodes[i + 1].lat, tab_of_nodes[i + 1].lon]], { color: "red" }).addTo(map);
}
console.log(polyline);
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



    function showPosition(position) {
        // console.log(position);
        //funkcja zwracająca odległość między dwoma punktami 
        let i;
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



        //pętla tworząca linie z poszczególnych punktów
        let total = 0;
        let x = position.coords.latitude;
        let y = position.coords.longitude;

        let accu = position.coords.accuracy.toFixed(2);
        let k;
        const result = document.getElementById('h3');

        if (x <= tab_of_nodes[0].lat && x >= tab_of_nodes[tab_of_nodes.length - 1].lat && y >= tab_of_nodes[0].lon && y <= tab_of_nodes[tab_of_nodes.length - 1].lon) {

            for (i = 0; i < tab_of_nodes.length - 1; i++) {
                point1 = { latitude: tab_of_nodes[i].lat, longitude: tab_of_nodes[i].lon };
                point2 = { latitude: tab_of_nodes[i + 1].lat, longitude: tab_of_nodes[i + 1].lon };
                if (y >= tab_of_nodes[i + 1].lon) {
                    total = total + distance(point1, point2);
                    total = total + 0.0002588;
                    k = i;
                }
            }

            point1 = { latitude: tab_of_nodes[k + 1].lat, longitude: tab_of_nodes[k + 1].lon };
            point2 = { latitude: x, longitude: y };
            total = total + distance(point1, point2);
            total = total.toFixed(3);
            let km = total.toString().replace('.', ' + ');
            document.getElementById('odczyt').innerHTML = km;
        } else {
            point1 = { latitude: tab_of_nodes[0].lat, longitude: tab_of_nodes[0].lon };
            point2 = { latitude: x, longitude: y };
            total = distance(point1, point2).toFixed(3);
            console.log(total);
            result.style.color = 'red';
            result.innerHTML = `odczyt spoza zakresu budowy - odległość do punktu 0 + 000 wynosi: <b>${total}</b> km`;
            result.style.fontSize = '24px';
            var polyline = L.polyline([[x, y], [tab_of_nodes[0].lat, tab_of_nodes[0].lon]], { color: "orange" }).addTo(map);
            L.polylineDecorator(polyline, {
                patterns: [
                    { offset: 70, repeat: 80, symbol: L.Symbol.arrowHead({ pixelSize: 20, pathOptions: { fillOpacity: .7, color: 'orange' } }) }
                ]
            }).addTo(map);
        }
        document.getElementById('dok').innerHTML = accu;
        map.flyTo([x, y], 18);
        var marker = L.marker([x, y]).addTo(map);
        marker.bindPopup("<b>aktualna lokalizacja<b/>").openPopup();
        //lokalizacja punktu po kliknięciu
        map.on('click', function (e) {
            var popLocation = e.latlng;
            console.log(popLocation);
            let dist = 0;
            let x = popLocation.lat;
            let y = popLocation.lng;
            let k;
            let popCon;

            if (x <= tab_of_nodes[1].lat && x >= tab_of_nodes[tab_of_nodes.length - 1].lat && y >= tab_of_nodes[1].lon && y <= tab_of_nodes[tab_of_nodes.length - 1].lon) {

                for (i = 0; i < tab_of_nodes.length - 1; i++) {
                    point1 = { latitude: tab_of_nodes[i].lat, longitude: tab_of_nodes[i].lon };
                    point2 = { latitude: tab_of_nodes[i + 1].lat, longitude: tab_of_nodes[i + 1].lon };
                    console.log(dist);
                    if (y >= tab_of_nodes[i + 1].lon) {
                        dist = dist + distance(point1, point2);
                        dist = dist + 0.0002588;
                        k = i;
                    }

                }

                point1 = { latitude: tab_of_nodes[k + 1].lat, longitude: tab_of_nodes[k + 1].lon };
                point2 = { latitude: x, longitude: y };
                dist = dist + distance(point1, point2);
                dist = dist.toFixed(3);
                dist = dist.toString().replace('.', ' + ');
                popCon = `km ${dist}`;
            } else if (y >= tab_of_nodes[0].lon && y < tab_of_nodes[1].lon) {
                point1 = { latitude: tab_of_nodes[0].lat, longitude: tab_of_nodes[0].lon };
                point2 = { latitude: x, longitude: y };
                dist = distance(point1, point2);
                dist = dist.toFixed(3);
                dist = dist.toString().replace('.', ' + ');
                popCon = `km ${dist}`;

            } else {
                point1 = { latitude: tab_of_nodes[0].lat, longitude: tab_of_nodes[0].lon };
                point2 = { latitude: x, longitude: y };
                dist = distance(point1, point2).toFixed(3);
                popCon = `odległość do punktu 0+000 wynosi ${dist} km`;
                console.log(total);
            }

            //let dist = distance({latitude:52.2007456, longitude:22.1184492}, {latitude:popLocation.lat, longitude:popLocation.lng});
            var popup = L.popup()
                .setLatLng(popLocation)
                .setContent(popCon)
                .openOn(map);
            console.log(e.latlng);
            console.log(dist);
        });

    }

};


