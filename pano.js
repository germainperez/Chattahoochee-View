/*
* Author: Germain Perez
* Chattahoochee View is a web application that permits
* 360&deg; viewing of panorama images from points along
* the Chattahoochee River.
* Distributed under the MIT License.
 */

var panorama, map, panoPos, pPos, marker, locString;
var APIkey = "AIzaSyCsrzsLwc80vnSXgkV9SkYX5CDGf_U6XVs"

var river1 = {
    lat: 33.9439688,
    lng: -84.4051008
};
var river2 = {
    lat: 33.941637,
    lng: -84.407515
};

var loc1 = {
    lat: 33.945068,
    lng: -84.403884
};
var loc2 = {
    lat: 33.944808,
    lng: -84.404154
};
var loc3 = {
    lat: 33.944655,
    lng: -84.404326
};
var loc4 = {
    lat: 33.944501,
    lng: -84.404480
};
var loc5 = {
    lat: 33.9439688,
    lng: -84.4051008
};
var loc6 = {
    lat: 33.944342,
    lng: -84.404631
};
var loc7 = {
    lat: 33.944149,
    lng: -84.404876
};
var loc8 = {
    lat: 33.944010,
    lng: -84.405086
};
var loc9 = {
    lat: 33.943926,
    lng: -84.405229
};
var loc10 = {
    lat: 33.943816,
    lng: -84.405365
};

var riverPathCoordinates = [
          loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10
];

function initialize() {

    map = new google.maps.Map(
        document.getElementById('map'), {
            center: loc1,
            zoom: 13,
            mapTypeId: 'terrain',
            streetViewControl: false,
        }
    );

    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            pano: 'panoId-1',
            visible: true,
            panoProvider: getCustomPanorama
            // Insert other properties
        }
    );

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP
    });

    var riverPath = new google.maps.Polyline({
              path: riverPathCoordinates,
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 0.5,
              strokeWeight: 6

    });

    riverPath.setMap(map);

    var JohnsonsFerryMarker = new google.maps.Marker({
        position: {lat: 33.945463, lng: -84.404060},
        map: map,
        icon: './landing-icon.png',
        title: 'Cafe'
    });
    JohnsonsFerryMarker.addListener('click', function() {
        JohnsonsFerryInfo.open(map, JohnsonsFerryMarker);
    });
    var JohnsonsFerryInfo = new google.maps.InfoWindow({
        content: '<b>Johnson\'s Ferry Landing</b><br />CRNRA Unit (carry boats only, i.e., canoes)'
    });

    var PowersIslandMarker = new google.maps.Marker({
        position: {lat: 33.903487, lng: -84.443576},
        map: map,
        icon: './landing-icon.png',
        title: 'Bank'
    });
    PowersIslandMarker.addListener('click', function() {
        PowersIslandInfo.open(map, PowersIslandMarker);
    });
    var PowersIslandInfo = new google.maps.InfoWindow({
        content: '<b>Powers Island Landing</b><br />CRNRA Unit (carry boats only, i.e., canoes)'

    });

    var BufordDamMarker = new google.maps.Marker({
        position: {lat: 34.157810, lng: -84.077144},
        map: map,
        icon: './landing-icon.png',
        title: 'Cafe'
    });
    BufordDamMarker.addListener('click', function() {
        BufordDamInfo.open(map, BufordDamMarker);
    });
    var BufordDamInfo = new google.maps.InfoWindow({
        content: '<b>Buford Dam Landing</b><br />Lake Lanier, Army Corps of Engineers'

    });

    var AbbotsBridgeMarker = new google.maps.Marker({
        position: {lat: 34.024689, lng: -84.172299},
        map: map,
        icon: './landing-icon.png',
        title: 'Bank'
    });
    AbbotsBridgeMarker.addListener('click', function() {
        AbbotsBridgeInfo.open(map, AbbotsBridgeMarker);
    });
    var AbbotsBridgeInfo = new google.maps.InfoWindow({
        content: '<b>Abbott\'s Bridge</b><br />Hwy 120, CRNRA Unit'

    });

    var MedlockBridgeMarker = new google.maps.Marker({
        position: {lat: 33.995930, lng: -84.201943},
        map: map,
        icon: './landing-icon.png',
        title: 'Cafe'
    });
    MedlockBridgeMarker.addListener('click', function() {
        MedlockBridgeInfo.open(map, MedlockBridgeMarker);
    });
    var MedlockBridgeInfo = new google.maps.InfoWindow({
        content: '<b>Medlock Bridge</b><br />CRNRA Unit.'
    });

    var JonesBridgeMarker = new google.maps.Marker({
        position: {lat: 33.998791, lng: -84.247835},
        map: map,
        icon: './landing-icon.png',
        title: 'Bank'
    });
    JonesBridgeMarker.addListener('click', function() {
        JonesBridgeInfo.open(map, JonesBridgeMarker);
    });
    var JonesBridgeInfo = new google.maps.InfoWindow({
        content: '<b>Jones Bridge</b><br />Off Barnwell Rd., Fulton County, CRNRA Unit.'
    });

    var DonWhiteMemorialMarker = new google.maps.Marker({
        position: {lat: 34.009850, lng: -84.332562},
        map: map,
        icon: './landing-icon.png',
        title: 'Cafe'
    });
    DonWhiteMemorialMarker.addListener('click', function() {
        DonWhiteMemorialInfo.open(map, DonWhiteMemorialMarker);
    });
    var DonWhiteMemorialInfo = new google.maps.InfoWindow({
        content: '<b>Don White Memorial Park</b><br />City of Roswell (carry only). Not official.'
    });

    var HolcombBridgeMarker = new google.maps.Marker({
        position: {lat: 33.973108, lng: -84.264457},
        map: map,
        icon: './landing-icon.png',
        title: 'Bank'
    });
    HolcombBridgeMarker.addListener('click', function() {
        HolcombBridgeInfo.open(map, HolcombBridgeMarker);
    });
    var HolcombBridgeInfo = new google.maps.InfoWindow({
        content: '<b>Holcomb Bridge</b><br />City of Roswell (carry only).'
    });

    var AzaleaDriveMarker = new google.maps.Marker({
        position: {lat: 34.002828, lng: -84.357247},
        map: map,
        icon: './landing-icon.png',
        title: 'Cafe'
    });
    AzaleaDriveMarker.addListener('click', function() {
        AzaleaDriveInfo.open(map, AzaleaDriveMarker);
    });
    var AzaleaDriveInfo = new google.maps.InfoWindow({
        content: '<b>Azalea Drive</b><br />Near Hwy 9, Fulton County.'
    });

    var MorganFallsDamMarker = new google.maps.Marker({
        position: {lat: 33.971909, lng: -84.378926},
        map: map,
        icon: './landing-icon.png',
        title: 'Bank'
    });
    MorganFallsDamMarker.addListener('click', function() {
        MorganFallsDamInfo.open(map, MorganFallsDamMarker);
    });
    var MorganFallsDamInfo = new google.maps.InfoWindow({
        content: '<b>Morgan Falls Dam Landing</b><br />Georgia Power (closes at 6pm).'
    });

    var PacesMillMarker = new google.maps.Marker({
        position: {lat: 33.870333, lng: -84.452335},
        map: map,
        icon: './landing-icon.png',
        title: 'Paces Mill Landing'

    });
    PacesMillMarker.addListener('click', function() {
        PacesMillInfo.open(map, PacesMillMarker);
    });
    var PacesMillInfo = new google.maps.InfoWindow({
        content: '<b>Paces Mill Landing</b><br />CRNRA Unit.'
    });

    google.maps.event.addListener(riverPath, 'click', function(h) {
        var latlng=h.latLng;
        console.log("routePath: " + riverPath);
        var needle = {
            minDistance: 9999999999, //silly high
            index: -1,
            latlng: null
        };
        riverPath.getPath().forEach(function(riverPath, index) {
            var dist = google.maps.geometry.spherical.computeDistanceBetween(latlng, riverPath);
            if (dist < needle.minDistance) {
                needle.minDistance = dist;
                needle.index = index;
                needle.latlng = riverPath;
            }
        });
        // The closest point in the polyline
        //alert("Closest index: " + needle.index);

        locString = "loc" + needle.index;
        marker.setPosition(locString);
        panorama.setPano('panoId-' + needle.index);
    });
}

function getCustomPanorama(pano) {
    panorama.setZoom(0);
    if (pano === 'panoId-1') {
        marker.setPosition(loc1);
        map.setCenter(loc1);

        return {
            location: {
                pano: 'panoId-1',
                description: 'Chattahoochee View - 1'
            },
            links: [{
                heading: 0,
                description: 'Fwd',
                pano: 'panoId-2'
            }],
            // The text for the copyright control.
            copyright: 'Images (c) 2016 G. Perez',
            // The definition of the tiles for this panorama.
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                // The heading in degrees at the origin of the panorama
                // tile set.
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl
            }
        };
    }

    if (pano === 'panoId-2') {
        marker.setPosition(loc2);
        map.setCenter(loc2);
        return {
            location: {
                pano: 'panoId-2',
                description: 'Chattahoochee View - 2'
            },
            links: [{
                    heading: 180,
                    description: 'Bwd',
                    pano: 'panoId-1'
                },
                {
                    heading: 0,
                    description: 'Fwd',
                    pano: 'panoId-3'
            }],
            // The text for the copyright control.
            copyright: 'Images (c) 2016 G. Perez',
            // The definition of the tiles for this panorama.
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                // The heading in degrees at the origin of the panorama
                // tile set.
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl2
            }
        };
    }

    if (pano === 'panoId-3') {
        marker.setPosition(loc3);
        map.setCenter(loc3);
        return {
            location: {
                pano: 'panoId-3',
                description: 'Chattahoochee View - 3'
            },
            links: [{
                    heading: 180,
                    description: 'Bwd',
                    pano: 'panoId-2'
                },
                {
                    heading: 0,
                    description: 'Fwd',
                    pano: 'panoId-4'
            }],
            copyright: 'Images (c) 2016 G. Perez',
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl3
    }};}

    if (pano === 'panoId-4') {
        marker.setPosition(loc4);
        map.setCenter(loc4);
        return {
            location: {
                pano: 'panoId-4',
                description: 'Chattahoochee View - 4'
            },
            links: [{
                    heading: 180,
                    description: 'Bwd',
                    pano: 'panoId-3'
                },
                {
                    heading: 0,
                    description: 'Fwd',
                    pano: 'panoId-5'
            }],
            copyright: 'Images (c) 2016 G. Perez',
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl4
    }};}

    if (pano === 'panoId-5') {
        marker.setPosition(loc5);
        map.setCenter(loc5);
        return {
            location: {
                pano: 'panoId-5',
                description: 'Chattahoochee View - 5'
            },
            links: [{
                    heading: 180,
                    description: 'Bwd',
                    pano: 'panoId-4'
                },
                {
                    heading: 0,
                    description: 'Fwd',
                    pano: 'panoId-6'
            }],
            copyright: 'Images (c) 2016 G. Perez',
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl5
    }};}

    if (pano === 'panoId-6') {
        marker.setPosition(loc6);
        map.setCenter(loc6);
        return {
            location: {
                pano: 'panoId-6',
                description: 'Chattahoochee View - 6'
            },
            links: [{
                    heading: 180,
                    description: 'Bwd',
                    pano: 'panoId-5'
                },
                {
                    heading: 0,
                    description: 'Fwd',
                    pano: 'panoId-7'
            }],
            copyright: 'Images (c) 2016 G. Perez',
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl6
    }};}

    if (pano === 'panoId-7') {
        marker.setPosition(loc7);
        map.setCenter(loc7);
        return {
            location: {
                pano: 'panoId-7',
                description: 'Chattahoochee View - 7'
            },
            links: [{
                    heading: 180,
                    description: 'Bwd',
                    pano: 'panoId-6'
                },
                {
                    heading: 0,
                    description: 'Fwd',
                    pano: 'panoId-8'
            }],
            copyright: 'Images (c) 2016 G. Perez',
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl7
    }};}

    if (pano === 'panoId-8') {
        marker.setPosition(loc8);
        map.setCenter(loc8);
        return {
            location: {
                pano: 'panoId-8',
                description: 'Chattahoochee View - 8'
            },
            links: [{
                    heading: 180,
                    description: 'Bwd',
                    pano: 'panoId-7'
                },
                {
                    heading: 0,
                    description: 'Fwd',
                    pano: 'panoId-9'
            }],
            copyright: 'Images (c) 2016 G. Perez',
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl8
    }};}

    if (pano === 'panoId-9') {
        marker.setPosition(loc9);
        map.setCenter(loc9);
        return {
            location: {
                pano: 'panoId-9',
                description: 'Chattahoochee View - 9'
            },
            links: [{
                    heading: 180,
                    description: 'Bwd',
                    pano: 'panoId-8'
                },
                {
                    heading: 0,
                    description: 'Fwd',
                    pano: 'panoId-10'
            }],
            copyright: 'Images (c) 2016 G. Perez',
            tiles: {
                tileSize: new google.maps.Size(2048, 1024),
                worldSize: new google.maps.Size(2048, 1024),
                centerHeading: 335,
                getTileUrl: getCustomPanoramaTileUrl9
    }};}

    if (pano === 'panoId-10') {
    marker.setPosition(loc10);
    map.setCenter(loc10);
    return {
    location: {pano: 'panoId-10',
    description: 'Chattahoochee View - 10'
    },
    links: [{
    heading: 180,
    description: 'Bwd',
    pano: 'panoId-9'
    }],
    copyright: 'Images (c) 2016 G. Perez',
    tiles: {
    tileSize: new google.maps.Size(2048, 1024),
    worldSize: new google.maps.Size(2048, 1024),
    centerHeading: 335,
    getTileUrl: getCustomPanoramaTileUrl10
    }};}

}

function getCustomPanoramaTileUrl(pano) {
    return './panoImages/R0010841.jpg';
}
function getCustomPanoramaTileUrl2(pano) {
    return './panoImages/R0010842.jpg';
}
function getCustomPanoramaTileUrl3(pano) {
    return './panoImages/R0010843.jpg';
}
function getCustomPanoramaTileUrl4(pano) {
    return './panoImages/R0010844.jpg';
}
function getCustomPanoramaTileUrl5(pano) {
    return './panoImages/R0010845.jpg';
}
function getCustomPanoramaTileUrl6(pano) {
    return './panoImages/R0010846.jpg';
}
function getCustomPanoramaTileUrl7(pano) {
    return './panoImages/R0010847.jpg';
}
function getCustomPanoramaTileUrl8(pano) {
    return './panoImages/R0010848.jpg';
}
function getCustomPanoramaTileUrl9(pano) {
    return './panoImages/R0010849.jpg';
}
function getCustomPanoramaTileUrl10(pano) {
    return './panoImages/R0010850.jpg';
}

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

intro.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function () {
    modal.style.display = "block";
};
