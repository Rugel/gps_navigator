
//tablice punktów lat i lon
const latlonP = [[52.2007456, 22.1184492], [52.1998836, 22.1249418], [52.1993589, 22.1288888], [52.1988388, 22.1327648], [52.1986125, 22.1343779], [52.1983405, 22.1361401], [52.1981399, 22.1373274], [52.1980288, 22.1379153], [52.1978862, 22.1386388], [52.1976890, 22.1395547], [52.1974749, 22.1404566], [52.1972870, 22.1411863], [52.1970476, 22.1420406], [52.1967565, 22.1429697], [52.1964268, 22.1439218], [52.1961457, 22.1446623], [52.1958780, 22.1453243], [52.1955795, 22.1460046], [52.1952665, 22.1466613], [52.1949487, 22.1472878], [52.1945679, 22.1479882], [52.1941343, 22.1487370], [52.1934315, 22.1498092], [52.1930782, 22.1502979], [52.1925984, 22.1509201], [52.1918976, 22.1517484], [52.1913275, 22.1523438], [52.1907375, 22.1529081], [52.1901385, 22.1534064], [52.1898360, 22.1536457], [52.1895253, 22.1538778], [52.1891921, 22.1541099], [52.1888072, 22.1543517], [52.1880993, 22.1547624], [52.1875397, 22.1550271], [52.1873028, 22.1551310], [52.1867524, 22.1553504], [52.1862283, 22.1555301], [52.1858968, 22.1556331], [52.1855904, 22.1557160], [52.1849430, 22.1558625], [52.1846820, 22.1559152], [52.1841732, 22.1559949], [52.1837202, 22.1560538], [52.1826075, 22.1561538], [52.1814927, 22.1562151], [52.1812445, 22.1562256], [52.1798992, 22.1562687], [52.1788548, 22.1563005], [52.1778425, 22.1563819], [52.1773734, 22.1564358], [52.1769845, 22.1564964], [52.1766476, 22.1565625], [52.1762327, 22.1566592], [52.1757863, 22.1567812], [52.1752929, 22.1569394], [52.1747522, 22.1571374], [52.1742559, 22.1573549], [52.1737469, 22.1576002], [52.1735021, 22.1577284], [52.1732558, 22.1578635], [52.1728212, 22.1581206], [52.1723946, 22.1583971], [52.1719740, 22.1586892], [52.1715411, 22.1590086], [52.1712064, 22.1592823], [52.1708786, 22.1595624], [52.1703172, 22.1600749], [52.1697383, 22.1606562], [52.1692468, 22.1612011], [52.1687737, 22.1617572], [52.1682982, 22.1623629], [52.1678934, 22.1629175], [52.1674734, 22.1635362], [52.1670927, 22.1641213], [52.1667994, 22.1646104], [52.1662803, 22.1653200], [52.1653801, 22.1671257], [52.1647413, 22.1686007], [52.1639448, 22.1708716], [52.1636423, 22.1718303], [52.1633721, 22.1728000], [52.1629563, 22.1745520], [52.1625823, 22.1762964], [52.1622444, 22.1779717], [52.1617398, 22.1802750], [52.1612795, 22.1822030], [52.1607639, 22.1839150], [52.1599844, 22.1859466], [52.1590714, 22.1878982], [52.1571705, 22.1908121], [52.1560091, 22.1921068], [52.1547596, 22.1932250], [52.1529775, 22.1946199], [52.1512343, 22.1960506], [52.1498841, 22.1974870], [52.1488108, 22.1989454], [52.1478950, 22.2005087], [52.1470560, 22.2021750], [52.1462088, 22.2040820], [52.1455451, 22.2061470], [52.1450062, 22.2080929], [52.1442596, 22.2108494], [52.1438630, 22.2124625], [52.1434199, 22.2145993], [52.1430609, 22.2171937], [52.1428884, 22.2188682], [52.1428445, 22.2194370], [52.1427946, 22.2201641], [52.1427444, 22.2211671], [52.1427175, 22.2222249], [52.1427108, 22.2227334], [52.1427138, 22.2237561], [52.1427284, 22.2247087], [52.1427548, 22.2256276], [52.1428146, 22.2274766], [52.1428389, 22.2281938], [52.1428683, 22.2290393], [52.1429308, 22.2308297], [52.1429628, 22.2317408], [52.1429992, 22.2328074], [52.1430264, 22.2337057], [52.1430631, 22.2354606], [52.1430736, 22.2363189], [52.1430799, 22.2371613], [52.1430764, 22.2381660], [52.1430594, 22.2391782], [52.1430483, 22.2398701], [52.1430303, 22.2404977], [52.1430154, 22.2408942], [52.1429880, 22.2414703], [52.1429242, 22.2425230], [52.1428400, 22.2436602], [52.1427562, 22.2446125], [52.1427352, 22.2448200], [52.1427108, 22.2450242], [52.1426388, 22.2456329], [52.1425869, 22.2460478], [52.1425204, 22.2465656], [52.1424477, 22.2470800], [52.1422216, 22.2485906], [52.1419348, 22.2503665]];

const latlonL = [[52.1421189, 22.2503961], [52.1422712, 22.2495409], [52.1427109, 22.2467972], [52.1428563, 22.2457252], [52.1429328, 22.2450976], [52.1429583, 22.2448743], [52.1429922, 22.2445743], [52.1430518, 22.2439814], [52.1431037, 22.2434008], [52.1431563, 22.2427516], [52.1431935, 22.2422247], [52.1432447, 22.2413491], [52.1432637, 22.2409228], [52.1432781, 22.2405226], [52.1432973, 22.2398873], [52.143312, 22.2391886], [52.1433142, 22.237998], [52.14331, 22.2373956], [52.143299, 22.2368115], [52.1432553, 22.235016], [52.1431752, 22.2326703], [52.1431433, 22.2317773], [52.1431134, 22.2309167], [52.1430835, 22.2300508], [52.1430659, 22.2296001], [52.1430461, 22.2289587], [52.1429991, 22.2276065], [52.142994, 22.2274659], [52.1429624, 22.2266123], [52.1429376, 22.2252342], [52.1429207, 22.2241513], [52.1429193, 22.2233936], [52.142942, 22.2219638], [52.142962, 22.2213158], [52.1429813, 22.2207949], [52.1430308, 22.2199077], [52.1430808, 22.2192414], [52.1431558, 22.2183795], [52.1432909, 22.2172138], [52.1433451, 22.2167862], [52.1436302, 22.2147883], [52.1442837, 22.2117621], [52.1450928, 22.2086118], [52.1457487, 22.206374], [52.1465613, 22.2039161], [52.1472753, 22.2023703], [52.1481176, 22.2006796], [52.1491904, 22.1989526], [52.1500635, 22.1978194], [52.151345, 22.1964237], [52.1530769, 22.1949715], [52.1549027, 22.1935883], [52.1561537, 22.1924605], [52.157342, 22.1911327], [52.1583394, 22.1897199], [52.1592507, 22.1882154], [52.1600208, 22.1863089], [52.1605456, 22.1850591], [52.1608025, 22.184416], [52.161392, 22.1827722], [52.1617053, 22.1815407], [52.1620115, 22.18021], [52.1627391, 22.1765774], [52.1635587, 22.1730529], [52.1642546, 22.1707213], [52.1647055, 22.1693325], [52.1654557, 22.1675187], [52.1663567, 22.1656186], [52.1669244, 22.1649151], [52.1674092, 22.164119], [52.167951, 22.1633126], [52.1683858, 22.1627115], [52.1688426, 22.162121], [52.1693157, 22.1615649], [52.1698118, 22.1610138], [52.1704064, 22.1604107], [52.1710294, 22.1598369], [52.1714689, 22.159473], [52.1719103, 22.1591318], [52.1723337, 22.1588262], [52.1727631, 22.1585426], [52.1730083, 22.1583923], [52.1732628, 22.1582387], [52.1737271, 22.1579878], [52.1739966, 22.1578488], [52.1742334, 22.1577364], [52.1744209, 22.157652], [52.1745542, 22.1575978], [52.1748669, 22.1574668], [52.1751986, 22.1573415], [52.1754487, 22.1572495], [52.1757092, 22.1571658], [52.1759686, 22.1570986], [52.1762639, 22.1570127], [52.1768658, 22.156882], [52.1773698, 22.1567889], [52.1778538, 22.1567171], [52.1788844, 22.156621], [52.179849, 22.1565651], [52.181237, 22.1565231], [52.1814927, 22.1565154], [52.1825519, 22.1564731], [52.1830937, 22.1564438], [52.184465, 22.156294], [52.1849678, 22.1562121], [52.1855037, 22.1560968], [52.1860299, 22.1559655], [52.1865069, 22.1558163], [52.187018, 22.1556277], [52.1872618, 22.1555364], [52.1878518, 22.1552701], [52.1884217, 22.1549812], [52.1890049, 22.1546253], [52.1895751, 22.1542477], [52.1901984, 22.1537777], [52.1908094, 22.1532598], [52.1913904, 22.1527078], [52.1919624, 22.1521152], [52.1926681, 22.151298], [52.193105, 22.150745], [52.1935295, 22.1501577], [52.1939581, 22.1495287], [52.1943292, 22.1489247], [52.194756, 22.1482051], [52.1951528, 22.1474652], [52.1954683, 22.1468394], [52.1957699, 22.1461944], [52.1960603, 22.1455376], [52.1962034, 22.1451916], [52.1963631, 22.1447937], [52.1965318, 22.1443501], [52.1967326, 22.1437992], [52.1970754, 22.1427744], [52.1973742, 22.1417624], [52.1976849, 22.1405809], [52.1979093, 22.1396151], [52.198095, 22.1387164], [52.198246, 22.1379338], [52.1983737, 22.1372082], [52.1985815, 22.1359135], [52.1988112, 22.1343343], [52.1989749, 22.1331518], [52.1990476, 22.1326067], [52.1995329, 22.1289324], [52.2000585, 22.125001], [52.2009253, 22.1185025]];

latlonL.reverse();

//dodanie mapy
var map = L.map('map').setView([52.1713402, 22.1844079], 12);

let sat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
})

let str = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
})

let osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

osm.addTo(map);

document.querySelectorAll('input[name="map"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
        var tLayer = event.target.value;
        console.log(tLayer);
        if (tLayer === 'sat') { map.removeLayer(osm) && map.removeLayer(str); sat.addTo(map) };
        if (tLayer === 'str') { map.removeLayer(sat) && map.removeLayer(osm); str.addTo(map) };
        if (tLayer === 'osm') { map.removeLayer(sat) && map.removeLayer(str); osm.addTo(map) };
    });
});


//funkcja licząca długość wycinka lini 
function lineLenth(latitude, longitude) {
    var point = L.latLng(latitude, longitude);
    var closestPointL = L.GeometryUtil.closest(map, pointsLineL, point);
    var closestPointP = L.GeometryUtil.closest(map, pointsLineP, point);
    let lngMid = (closestPointL.lng + closestPointP.lng) / 2;
    let latMid = (closestPointL.lat + closestPointP.lat) / 2;
    var start = turf.point(strLineL.geometry.coordinates[0]);
    var stop = turf.point([lngMid, latMid]);
    var subline = turf.lineSlice(start, stop, strLineL);
    var subline_length = turf.length(subline, { units: 'kilometers' });
    subline_length = subline_length * 1.00293;
    subline_length = subline_length.toFixed(3);
    subline_length = subline_length.toString().replace('.', ' + ');
    let popCon = `km ${subline_length}`;
    L.circleMarker([latMid, lngMid], { color: '#2dabab', radius: 10, fillOpacity: 1 }).addTo(map).bindPopup(`<b>${popCon}</b>`).openPopup();
    return subline_length;
}

//dodanie prostokąta
var bounds = [[52.2027456, 22.1144492], [52.1399348, 22.2543665]];
L.rectangle(bounds, { color: 'blue', weight: 2, fillOpacity: 0 }).addTo(map);

//dodanie markerów do mapy
var office = L.marker([52.18811286436958, 22.147333469408157]).addTo(map);
office.bindPopup("<b>Biuro Budowy A2</b><br/> odc.V POLAQUA").openPopup();

var km12 = L.marker([(latlonL[latlonL.length - 1][0] + latlonP[latlonP.length - 1][0]) / 2, (latlonL[latlonL.length - 1][1] + latlonP[latlonP.length - 1][1]) / 2]).addTo(map);
km12.bindPopup('<b>koniec odcinka</b><br/>km 12 + 489').openPopup();

var km0 = L.marker([(latlonL[0][0] + latlonP[0][0]) / 2, (latlonL[0][1] + latlonP[0][1]) / 2]).addTo(map);
km0.bindPopup('<b>początek odcinka</b><br/>km 0 + 000').openPopup();

map.addControl(new L.Control.Fullscreen({
    title: {
        'false': 'widok pełnoekranowy',
        'true': 'wyjdź z widoku pełnoekranowego'
    }
}));

//utworzenie czerwonych lini na mapie
var pointsLineP = L.polyline(latlonP, { color: 'red', weight: 2 }).addTo(map);
for (el in latlonP) {
    latlonP[el].reverse();
}
var strLine = turf.lineString(latlonP);

var pointsLineL = L.polyline(latlonL, { color: 'red', weight: 2 }).addTo(map);
for (el in latlonL) {
    latlonL[el].reverse();
}
var strLineL = turf.lineString(latlonL);

//funkcja zwracająca odległośś między dwoma punktami
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

const result = document.getElementById('h3');
const button = document.getElementById('button');

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    document.getElementById('info').innerHTML = `<br/>wystąpił błąd nr ${err.code} : <span style="color:red">${err.message}</span>`
};

//lokalizacja 
function start() {
    button.innerHTML = '<button class="stop" onclick="stop()">STOP</button>';
    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(showPosition, error, options);
    } else {
        document.getElementById('info').innerHTML = '<br/>Twoja przeglądarka lub urządzenie nie obsługuje funkcji lokalizacji &#x1F62D'
    };
    let polyline;
    let deco;
    let circle;

    //callback
    function showPosition(position) {
        let point1;
        let point2;
        let total = 0;
        let x = position.coords.latitude;
        let y = position.coords.longitude;
        let accu = position.coords.accuracy.toFixed(2);
        let subline_length;

        if (x <= latlonP[0][1] + 0.02 && x >= latlonP[latlonP.length - 1][1] - 0.02 && y >= latlonP[0][0] - 0.02 && y <= latlonP[latlonP.length - 1][0] + 0.02) {

            subline_length = lineLenth(x, y);
            document.getElementById('odczyt').innerHTML = subline_length;
        }
        else {
            point1 = { latitude: latlonP[0][1], longitude: latlonP[0][0] };
            point2 = { latitude: x, longitude: y };
            total = distance(point1, point2).toFixed(3);
            result.style.color = 'red';
            result.innerHTML = `odczyt spoza zakresu terenu budowy - odległość do punktu km 0 + 000 wynosi: <mark><b>${total}</b></mark> km`;
            result.style.fontSize = '26px';
            if (polyline) { map.removeLayer(polyline) };
            polyline = L.polyline([[x, y], [(latlonL[0][1] + latlonP[0][1]) / 2, (latlonL[0][0] + latlonP[0][0]) / 2]], { color: "orange", weight: 1 }).addTo(map);
            if (deco) { map.removeLayer(deco) };
            deco = L.polylineDecorator(polyline, {
                patterns: [
                    { offset: 70, repeat: 80, symbol: L.Symbol.arrowHead({ pixelSize: 20, pathOptions: { fillOpacity: .5, color: 'orange', weight: 0 } }) }
                ]
            }).addTo(map);

        }
        document.getElementById('dok').innerHTML = accu;
        map.flyTo([x, y], 18);
        if (circle) { map.removeLayer(circle) };
        circle = L.circleMarker([x, y], { color: '#2dabab', fillOpacity: .2 }).addTo(map).bindPopup(subline_length ? 'km ' + subline_length : total + ' km');
    }



};

let id;

function stop() {
    button.innerHTML = '<button class="start" onclick="start()">START</button>';
    navigator.geolocation.clearWatch(id);
}

//lokalizacja po kiknięciu
map.on('click', function (e) {
    var popLocation = e.latlng;
    let x = popLocation.lat;
    let y = popLocation.lng;
    if (x <= latlonP[0][1] + 0.02 && x >= latlonP[latlonP.length - 1][1] - 0.02 && y >= latlonP[0][0] - 0.02 && y <= latlonP[latlonP.length - 1][0] + 0.02) {
        let subline_length = lineLenth(x, y);
        var popup = L.popup()
            .setLatLng(popLocation)
            .setContent(`zapis w osi</br>km ${subline_length}`)
            .openOn(map)
    };
});