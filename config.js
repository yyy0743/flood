var config = {
    style: 'mapbox://styles/mktaro/cm7yji9m400ve01sd8c933tts',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibWt0YXJvIiwiYSI6ImNtNnJieTd0bzF2MWsybXM0NHZmamM5c3MifQ.aYPJtrndw71Fp7Q6Pn9U2g',
    showMarkers: false,
    markerColor: '#F24738',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        showMarkers: false,
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: ' Flooding in Singapore',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'homepage',
            alignment: 'left',
            hidden: false,
            title: 'Flooding in Singapore',
            image: '',
            description: 'Singapore\'s coastal areas are increasingly vulnerable to flooding due to rising sea levels, storm surges, high tides, and land subsidence. Explore our interactive storymap to see Singapore’s flood risks at a glance. Nearly 30% of the island lies below 5 meters above sea level, highlighting its vulnerability. In a dramatic scenario—if all Greenland’s ice melted and sea levels rose by 7 meters, about 35% of Singapore could be submerged. At the bottom of the page, you can find a slider to adjust water levels from 1 to 7 meters to see different flooding level in Singapore.',
            location: {
                center: [103.81337, 1.36317],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                   layer: 'mrt',
                    opacity: 0,
                    duration: 500
                 }
                ],
            onChapterExit: [
            {
                layer: 'mrt',
                opacity: 0
            }
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Flooding Impact on Metro Entrances',
            image: '', 
            description: 'As rising water levels threaten key infrastructure, the map highlights vulnerable metro access points, offering a clear view of where flooding risks are highest. With an easy-to-use control, you can adjust water levels to simulate flooding scenarios and see how different areas are affected. Understand the potential consequences for commuters and urban mobility in the face of extreme weather events.',
            location: {
                center: [103.81337, 1.36317],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'mrt',
                     opacity: 1,
                     duration: 500
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'mrt',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: ' Explore Flooding Risks in CBD',
            image: '',
            description: 'Dive into the Central Business District (CBD) of Singapore, an area historically prone to frequent flooding, especially during monsoon seasons. Situated on low-lying land, the CBD faces heightened vulnerability to rising water levels. Explore how different flooding scenarios might impact this bustling economic hub, with a simple control that lets you adjust water levels to simulate various flood risks. See firsthand the challenges posed to infrastructure, mobility, and daily life in one of the city\'s most critical areas.',
            location: {
                center: [103.85357, 1.30650],
                zoom: 13.0,
                pitch: 40,
                bearing: 10,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Flooding Threats to Tuas Industrial Zone',
            image: '',
            description: 'Zoom into Tuas, Singapore\'s key industrial hub, where sprawling factories, warehouses, and port facilities converge. This area’s flat landscape and extensive built environment increase its susceptibility to rising water levels. Our storymap lets you adjust flood scenarios to see how extreme weather could disrupt operations, logistics, and the broader supply chain.',
            location: {
                center: [103.63471, 1.30527],
                zoom: 16.0,
                pitch: 40,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Flooding Risks in Tampines HDB Estates',
            //image: './assets/buenos-aires.jpg',
            description: 'Tampines, a prominent residential town in eastern Singapore, is characterized by its dense concentration of HDB flats and proximity to natural waterways like Sungei Tampines. Characterized by low-lying terrain and intricate drainage systems, Tampines has a history of managing flood events with proactive measures. Our storymap lets you simulate various water level scenarios, providing an intuitive view of how rising tides impact local infrastructure and community life. Experience the dynamic interplay between urban living and natural forces in Tampines, and gain insights into the potential impacts on infrastructure and daily life.',
            location: {
                center: [103.94365, 1.35458],
                zoom: 16.0,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Flood-Resilient in Punggol',
            //image: './assets/buenos-aires.jpg',
            description: 'Punggol, envisioned as a forward-thinking waterfront district, features an integrated canal network, advanced stormwater retention facilities, and intelligent flood control systems, exemplifying modern resilience. Its design incorporates lessons from past extreme weather events to ensure critical infrastructure is prepared for rising water levels. By adjusting water levels, you can simulate various flood risks in the area and gain an intuitive understanding of how these innovative measures protect this vibrant new district.',
            location: {
                center: [103.90455, 1.40640],
                zoom: 16.0,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


    ]
};
