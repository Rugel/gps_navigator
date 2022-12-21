const tab_of_nodes=[{lon:52.2007456, lat:22.1184492},{lon:52.1998836, lat:22.1249418},{ lon:52.1993589, lat:22.1288888},{lon:52.1988388, lat:22.1327648},{ lon:52.1986125, lat:22.1343779},{lon:52.1983405, lat:22.1361401}, {lon:52.1981399, lat:22.1373274}, {lon:52.1980288, lat:22.1379153}, {lon:52.1978862, lat:22.1386388}, {lon:52.1976890, lat:22.1395547}, {lon:52.1974749, lat:22.1404566}, {lon:52.1972870, lat:22.1411863}, {lon:52.1970476, lat:22.1420406}, {lon:52.1967565, lat:22.1429697}, {lon:52.1964268, lat:22.1439218}, {lon: 52.1961457, lat:22.1446623}, {lon:52.1958780, lat:22.1453243}, {lon:52.1955795, lat:22.1460046}, {lon: 52.1952665, lat:22.1466613}, {lon:52.1949487, lat:22.1472878}, {lon:52.1945679, lat:22.1479882}, {lon:52.1941343, lat:22.1487370}, {lon:52.1934315, lat:22.1498092}, {lon:52.1930782, lat:22.1502979}, {lon:52.1925984, lat:22.1509201}, {lon:52.1918976, lat:22.1517484}, {lon:52.1913275, lat:22.1523438}, {lon:52.1907375, lat:22.1529081}, {lon:52.1901385, lat:22.1534064}, {lon:52.1898360, lat:22.1536457}, {lon:52.1895253, lat:22.1538778}, {lon:52.1891921, lat:22.1541099}, {lon:52.1888072, lat:22.1543517}, {lon:52.1880993, lat:22.1547624}, {lon:52.1875397, lat:22.1550271}, {lon:52.1873028, lat:22.1551310}, {lon:52.1867524, lat:22.1553504}, {lon:52.1862283, lat:22.1555301}, {lon:52.1858968, lat:22.1556331}, {lon:52.1855904, lat:22.1557160}, {lon:52.1849430, lat:22.1558625}, {lon: 52.1846820, lat:22.1559152}, {lon:52.1841732, lat:22.1559949}, {lon:52.1837202, lat:22.1560538}, {lon:52.1826075, lat:22.1561538}, {lon:52.1814927, lat:22.1562151}, {lon:52.1812445, lat:22.1562256}, {lon:52.1798992, lat:22.1562687}];
//ostatni węzeł zapisany 9349819872


//funkcja zwracająca odległość między dwoma punktami
let i;
let point1;
let point2;



let distance = function(){
    const radius = 6371;
    const lat1 = point1.latitude*(Math.PI/180);
    const lat2 = point2.latitude*(Math.PI/180);
    const lon1 = point1.longitude*(Math.PI/180);
    const lon2 = point2.longitude*(Math.PI/180);

    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return radius * c;
}



//pętla tworząca linie z poszczególnych punktów
let total=0;
let x;
let y;
for (i=0; i<tab_of_nodes.length-1; i++)
    {   x=tab_of_nodes[i].lon;
        y=tab_of_nodes[i].lat;

        x<=tab_of_nodes[i].lon && x>tab_of_nodes[i+1].lon && y>=tab_of_nodes[i].lat && y<tab_of_nodes[i+1].lat?y=(tab_of_nodes[i+1].lat-tab_of_nodes[i].lat)/(tab_of_nodes[i+1].lon-tab_of_nodes[i].lon)*(x-tab_of_nodes[i].lon)+tab_of_nodes[i].lat:null;

        point1 = {latitude:tab_of_nodes[i].lat, longitude:tab_of_nodes[i].lon};
        point2 = {latitude:tab_of_nodes[i+1].lat, longitude:tab_of_nodes[i+1].lon};

        total = total+distance();
        console.log(distance());
        
    }


total = Math.round(total*1000)/1000;
console.log('Całkowita długość drogi wynosi: '+total+' km');