const tab_of_nodes=[{lat:52.2007456, lon:22.1184492},{lat:52.1998836, lon:22.1249418},{ lat:52.1993589, lon:22.1288888},{lat:52.1988388, lon:22.1327648},{ lat:52.1986125, lon:22.1343779},{lat:52.1983405, lon:22.1361401}, {lat:52.1981399, lon:22.1373274}, {lat:52.1980288, lon:22.1379153}, {lat:52.1978862, lon:22.1386388}, {lat:52.1976890, lon:22.1395547}, {lat:52.1974749, lon:22.1404566}, {lat:52.1972870, lon:22.1411863}, {lat:52.1970476, lon:22.1420406}, {lat:52.1967565, lon:22.1429697}, {lat:52.1964268, lon:22.1439218}, {lat: 52.1961457, lon:22.1446623}, {lat:52.1958780, lon:22.1453243}, {lat:52.1955795, lon:22.1460046}, {lat: 52.1952665, lon:22.1466613}, {lat:52.1949487, lon:22.1472878}, {lat:52.1945679, lon:22.1479882}, {lat:52.1941343, lon:22.1487370}, {lat:52.1934315, lon:22.1498092}, {lat:52.1930782, lon:22.1502979}, {lat:52.1925984, lon:22.1509201}, {lat:52.1918976, lon:22.1517484}, {lat:52.1913275, lon:22.1523438}, {lat:52.1907375, lon:22.1529081}, {lat:52.1901385, lon:22.1534064}, {lat:52.1898360, lon:22.1536457}, {lat:52.1895253, lon:22.1538778}, {lat:52.1891921, lon:22.1541099}, {lat:52.1888072, lon:22.1543517}, {lat:52.1880993, lon:22.1547624}, {lat:52.1875397, lon:22.1550271}, {lat:52.1873028, lon:22.1551310}, {lat:52.1867524, lon:22.1553504}, {lat:52.1862283, lon:22.1555301}, {lat:52.1858968, lon:22.1556331}, {lat:52.1855904, lon:22.1557160}, {lat:52.1849430, lon:22.1558625}, {lat: 52.1846820, lon:22.1559152}, {lat:52.1841732, lon:22.1559949}, {lat:52.1837202, lon:22.1560538}, {lat:52.1826075, lon:22.1561538}, {lat:52.1814927, lon:22.1562151}, {lat:52.1812445, lon:22.1562256}, {lat:52.1798992, lon:22.1562687}];
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