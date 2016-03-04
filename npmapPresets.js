iD.data.npmapPresets = {
  "presets": {
    "building/building/building footprint": {
      "name": "Building Footprint",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "area"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": 1,
      "matchScore": 1,
      "tags": {
        "building": "*"
      },
      "terms": [
        "footprint",
        "building",
        "structure"
      ],
      "searchable": true
    },
    "building/building/building": {
      "name": "Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "*"
      },
      "terms": [
        "structure",
        "building"
      ],
      "searchable": true
    },
    "building/building/building under construction": {
      "name": "Building Under Construction",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "construction"
      },
      "terms": [
        "under construction",
        "construction",
        "construction area",
        "construction zone",
        "building",
        "building under construction"
      ],
      "searchable": true
    },
    "building/building/bunker": {
      "name": "Bunker",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "bunker_type"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "bunker"
      },
      "terms": [
        "air-raid shelter",
        "fallout shelter",
        "military bunker",
        "bunker"
      ],
      "searchable": true
    },
    "building/building/public building": {
      "name": "Public Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "public"
      },
      "terms": [
        "public",
        "civic",
        "court house",
        "courthouse",
        "townhall",
        "town hall",
        "building",
        "public building"
      ],
      "searchable": true
    },
    "building/agricultural/barn": {
      "name": "Barn",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "landuse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "farm",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "barn"
      },
      "terms": [
        "farmhouse",
        "barn"
      ],
      "searchable": true
    },
    "building/agricultural/greenhouse": {
      "name": "Greenhouse",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "garden",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "greenhouse"
      },
      "terms": [
        "glasshouse",
        "hothouse",
        "greenhouse",
        "garden"
      ],
      "searchable": true
    },
    "building/agricultural/ranch": {
      "name": "Ranch",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "landuse": "farmland"
      },
      "terms": [
        "barnyard",
        "farmyard",
        "dude ranch"
      ],
      "searchable": true
    },
    "building/agricultural/stable": {
      "name": "Stable",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "landuse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "stable-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "stable"
      },
      "terms": [
        "box stall",
        "pen",
        "stall",
        "stable"
      ],
      "searchable": true
    },
    "building/cabin/cabin": {
      "name": "Cabin",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "cabin"
      },
      "terms": [
        "cottage",
        "log cabin",
        "cabin"
      ],
      "searchable": true
    },
    "building/commercial/administrative office": {
      "name": "Administrative Office",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "office": "government"
      },
      "terms": [
        "administrative",
        "office",
        "admin",
        "admin office",
        "civil service",
        "government",
        "government office",
        "building",
        "administrative office"
      ],
      "searchable": true
    },
    "building/commercial/commercial building": {
      "name": "Commercial Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "commercial"
      },
      "terms": [
        "commercial",
        "building",
        "commercial building"
      ],
      "searchable": true
    },
    "building/commercial/headquarters": {
      "name": "Headquarters",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "defaultOrder": 1,
      "matchScore": 1,
      "tags": {
        "building": "office",
        "office": "government",
        "function": "headquarters"
      },
      "terms": [
        "government headquarters",
        "hq",
        "park hq",
        "park headquarters",
        "building",
        "headquarters",
        "office",
        "government office",
        "office building"
      ],
      "searchable": true
    },
    "building/commercial/industrial building": {
      "name": "Industrial Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "industrial",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "industrial"
      },
      "terms": [
        "industrial",
        "factory",
        "building",
        "industrial building"
      ],
      "searchable": true
    },
    "building/commercial/office": {
      "name": "Office",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "defaultOrder": 4,
      "matchScore": 1,
      "tags": {
        "building": "office"
      },
      "terms": [
        "office",
        "office building",
        "building",
        "commercial building"
      ],
      "searchable": true
    },
    "building/commercial/retail building": {
      "name": "Retail Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "retail"
      },
      "terms": [
        "commercial building",
        "retail",
        "building",
        "retail building"
      ],
      "searchable": true
    },
    "building/education/education center": {
      "name": "Education Center",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "*",
        "amenity": "education_centre"
      },
      "terms": [
        "education",
        "learning",
        "learning center",
        "center",
        "education center"
      ],
      "searchable": true
    },
    "building/education/school building": {
      "name": "School Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "school",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "school"
      },
      "terms": [
        "school",
        "academy",
        "elementary school",
        "middle school",
        "high school",
        "school building"
      ],
      "searchable": true
    },
    "building/education/university building": {
      "name": "University Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "college",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "university"
      },
      "terms": [
        "university",
        "college",
        "higher ed",
        "higher education",
        "university building"
      ],
      "searchable": true
    },
    "building/entrance/entrance %2f exit": {
      "name": "Entrance / Exit",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "entrance-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "entrance"
      },
      "terms": [
        "building entrance",
        "building exit",
        "emergency exit",
        "entrance"
      ],
      "searchable": true
    },
    "building/historic/historic building": {
      "name": "Historic Building",
      "fields": [
        "name",
        "nps/unitcode",
        "site_type"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": 5,
      "matchScore": 1,
      "tags": {
        "building": "*",
        "historic": "*"
      },
      "terms": [
        "historic",
        "building",
        "historic building"
      ],
      "searchable": true
    },
    "building/historic/historic cabin": {
      "name": "Historic Cabin",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "cabin",
        "historic": "*"
      },
      "terms": [
        "historic",
        "cabin"
      ],
      "searchable": true
    },
    "building/place of worship/cathedral": {
      "name": "Cathedral",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "religion"
      ],
      "geometry": [
        "point"
      ],
      "icon": "place-of-worship",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "cathedral"
      },
      "terms": [
        "church",
        "cathedral"
      ],
      "searchable": true
    },
    "building/place of worship/chapel": {
      "name": "Chapel",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "religion"
      ],
      "geometry": [
        "point"
      ],
      "icon": "place-of-worship",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "chapel"
      },
      "terms": [
        "church",
        "chapel"
      ],
      "searchable": true
    },
    "building/place of worship/church": {
      "name": "Church",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "religion"
      ],
      "geometry": [
        "point"
      ],
      "icon": "place-of-worship",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "church"
      },
      "terms": [
        "place of worship",
        "church"
      ],
      "searchable": true
    },
    "building/residential/apartments": {
      "name": "Apartments",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "apartments"
      },
      "terms": [
        "apartment",
        "apartment building",
        "residential building",
        "apartments"
      ],
      "searchable": true
    },
    "building/residential/detached home": {
      "name": "Detached Home",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "detached"
      },
      "terms": [
        "detached",
        "detached building",
        "residential building",
        "detached home"
      ],
      "searchable": true
    },
    "building/residential/dormitory": {
      "name": "Dormitory",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "dormitory"
      },
      "terms": [
        "dorm",
        "dormatorium",
        "residence hall",
        "residential building",
        "dormitory"
      ],
      "searchable": true
    },
    "building/residential/house": {
      "name": "House",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "house"
      },
      "terms": [
        "home",
        "private home",
        "residential building",
        "house"
      ],
      "searchable": true
    },
    "building/residential/lodge": {
      "name": "Lodge",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "lodging-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 2,
      "matchScore": 1,
      "tags": {
        "tourism": "alpine_hut"
      },
      "terms": [
        "alpine hut",
        "wilderness hut",
        "wilderness lodge",
        "lodge",
        "hut"
      ],
      "searchable": true
    },
    "building/residential/lodging": {
      "name": "Lodging",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "lodging-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 3,
      "matchScore": 1,
      "tags": {
        "tourism": "hotel"
      },
      "terms": [
        "guest house",
        "guesthouse",
        "hostel",
        "hotel",
        "inn",
        "motel",
        "public cabin",
        "public use cabin",
        "puc",
        "resort",
        "lodging"
      ],
      "searchable": true
    },
    "building/residential/residential building": {
      "name": "Residential Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "residential"
      },
      "terms": [
        "park housing",
        "park residence",
        "ranger residence",
        "residence",
        "residential",
        "residential building"
      ],
      "searchable": true
    },
    "building/residential/row house": {
      "name": "Row House",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "terrace"
      },
      "terms": [
        "terrace",
        "townhouse",
        "residential building",
        "row house"
      ],
      "searchable": true
    },
    "building/residential/static mobile home": {
      "name": "Static Mobile Home",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "static_caravan"
      },
      "terms": [
        "mobile home",
        "static caravan",
        "static mobile home"
      ],
      "searchable": true
    },
    "building/shelter/gazebo": {
      "name": "Gazebo",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "drinking_water"
      ],
      "geometry": [
        "point"
      ],
      "icon": "shelter-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "shelter",
        "building": "pavilion",
        "pavilion_type": "gazebo"
      },
      "terms": [
        "alhambra",
        "belvedere",
        "folly",
        "pergola",
        "rotunda",
        "shelter",
        "sanctuary",
        "cover",
        "hide",
        "lean-to",
        "gazebo",
        "picnic"
      ],
      "searchable": true
    },
    "building/shelter/hut": {
      "name": "Hut",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "shelter-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "hut"
      },
      "terms": [
        "palloza",
        "roundhouse",
        "yurt",
        "shelter",
        "hut"
      ],
      "searchable": true
    },
    "building/shelter/pavilion": {
      "name": "Pavilion",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "drinking_water"
      ],
      "geometry": [
        "point"
      ],
      "icon": "shelter-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "shelter",
        "building": "pavilion"
      },
      "terms": [
        "sports pavilion",
        "shelter",
        "sanctuary",
        "cover",
        "hide",
        "lean-to",
        "pavilion",
        "picnic"
      ],
      "searchable": true
    },
    "building/shelter/shelter": {
      "name": "Shelter",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "drinking_water"
      ],
      "geometry": [
        "point"
      ],
      "icon": "shelter-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "shelter",
        "building": "hut"
      },
      "terms": [
        "cover",
        "hide",
        "lean-to",
        "picnic shelter",
        "sanctuary",
        "wall tent",
        "shelter",
        "picnic"
      ],
      "searchable": true
    },
    "building/shelter/weather shelter": {
      "name": "Weather Shelter",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "shelter"
      },
      "terms": [
        "emergency shelter",
        "emergency shelter cabin",
        "tornado shelter",
        "warming hut",
        "warming tent",
        "warming shelter",
        "shelter"
      ],
      "searchable": true
    },
    "building/storage/garage": {
      "name": "Garage",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "capacity"
      ],
      "geometry": [
        "point"
      ],
      "icon": "warehouse",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "garage"
      },
      "terms": [
        "auto shop",
        "boat house",
        "bus barn",
        "maintenance",
        "maintenance barn",
        "maintenance building",
        "maintenance shop",
        "mechanic shop",
        "shop",
        "utility",
        "utility building",
        "workshop",
        "garage"
      ],
      "searchable": true
    },
    "building/storage/shed": {
      "name": "Shed",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "shed"
      },
      "terms": [
        "cache",
        "outbuilding",
        "shack",
        "weatherport",
        "shed"
      ],
      "searchable": true
    },
    "building/storage/warehouse": {
      "name": "Warehouse",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "warehouse",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "warehouse"
      },
      "terms": [
        "storage",
        "storage building",
        "warehouse"
      ],
      "searchable": true
    },
    "land recreation/golf/golf course": {
      "name": "Golf Course",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "area"
      ],
      "defaultOrder": 5,
      "matchScore": 1,
      "tags": {
        "leisure": "golf_course"
      },
      "terms": [
        "fairway",
        "golf",
        "golfing",
        "golfing area",
        "golfing green",
        "green",
        "golf course"
      ],
      "searchable": true
    },
    "land recreation/sports field/athletic field": {
      "name": "Athletic Field",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "fee"
      ],
      "geometry": [
        "area"
      ],
      "icon": "pitch",
      "maki": "maki",
      "defaultOrder": 4,
      "matchScore": 1,
      "tags": {
        "leisure": "pitch"
      },
      "terms": [
        "sport",
        "field",
        "sport field"
      ],
      "searchable": true
    },
    "land recreation/all-terrain vehicle/all-terrain vehicle trail": {
      "name": "All-Terrain Vehicle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "track",
        "atv": "*"
      },
      "terms": [
        "all terrain trail",
        "all terrain vehicle",
        "all terrain vehicle trail",
        "all-terrain trail",
        "all-terrain vehicle",
        "atv",
        "atv trail",
        "off road",
        "off-road",
        "ohv",
        "ohv trail",
        "orv",
        "orv trail",
        "quad",
        "trail",
        "track",
        "4wd",
        "4 wheeler",
        "four-wheeler",
        "structure"
      ],
      "searchable": true
    },
    "land recreation/all-terrain vehicle/four-wheel drive trail": {
      "name": "Four-Wheel Drive Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "track",
        "4wd_only": "*"
      },
      "terms": [
        "4wd",
        "4 wheeler",
        "4-wheeler",
        "four wheeler",
        "four-wheel drive vehicle > 50\\ in tread width",
        "four-wheeler",
        "high clearance",
        "trail",
        "track",
        "four-wheel drive trail",
        "atv",
        "all terrain vehicle",
        "quad",
        "off-road",
        "off road",
        "four-wheel drive vehicle > 50\" in tread width"
      ],
      "searchable": true
    },
    "land recreation/bicycle/bicycle trail": {
      "name": "Bicycle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "bicycle-trail-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1.01,
      "tags": {
        "highway": "path",
        "bicycle": "*"
      },
      "terms": [
        "bicycle",
        "bike",
        "bike trail",
        "trail",
        "track",
        "bicycle trail"
      ],
      "searchable": true
    },
    "land recreation/bicycle/bike rack": {
      "name": "Bike Rack",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "bicycle_parking",
        "bicycle_parking": "rack"
      },
      "terms": [
        "bicycle parking",
        "bicycle rack",
        "bicycle stand",
        "bike parking",
        "bike stand",
        "bike rack"
      ],
      "searchable": true
    },
    "land recreation/camping/campfire ring": {
      "name": "Campfire Ring",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campfire-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "leisure": "firepit"
      },
      "terms": [
        "campfire",
        "campfire circle",
        "fire ring",
        "firepit",
        "fireplace",
        "campfire ring"
      ],
      "searchable": true
    },
    "land recreation/camping/campground": {
      "name": "Campground",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campground-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": -6,
      "matchScore": 1,
      "tags": {
        "tourism": "camp_site"
      },
      "terms": [
        "camping",
        "camping area",
        "campground"
      ],
      "searchable": true
    },
    "land recreation/camping/campsite": {
      "name": "Campsite",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campsite-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 6,
      "matchScore": 1,
      "tags": {
        "tourism": "camp_site",
        "camp_site": "pitch"
      },
      "terms": [
        "camp site",
        "pitch",
        "tent pad",
        "campsite"
      ],
      "searchable": true
    },
    "land recreation/camping/dump station": {
      "name": "Dump Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "sanitary-disposal-station-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "sanitary_dump_station"
      },
      "terms": [
        "sanitary disposal station",
        "dumpstation",
        "dump station"
      ],
      "searchable": true
    },
    "land recreation/camping/horse camp": {
      "name": "Horse Camp",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee",
        "nps/nonmotorizeduse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campground-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1.02,
      "tags": {
        "tourism": "camp_site",
        "horse": "*"
      },
      "terms": [
        "horse campground",
        "campground",
        "horse camp"
      ],
      "searchable": true
    },
    "land recreation/camping/primitive camping": {
      "name": "Primitive Camping",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campsite-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "camp_site",
        "camp_site": "pitch",
        "backcountry": "*"
      },
      "terms": [
        "backcountry",
        "backcountry campground",
        "backcountry camping",
        "backcountry campsite",
        "primitive",
        "primitive campsite",
        "campground",
        "campsite",
        "camp site"
      ],
      "searchable": true
    },
    "land recreation/camping/rv campground": {
      "name": "RV Campground",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "rv-campground-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 9,
      "matchScore": 1,
      "tags": {
        "tourism": "camp_site",
        "caravans": "*"
      },
      "terms": [
        "campground",
        "campervan park",
        "motorcoach park",
        "motorhome park",
        "rv",
        "rv pad",
        "rv park",
        "rv campground",
        "campsite",
        "camp_site"
      ],
      "searchable": true
    },
    "land recreation/climbing/canyoneering route": {
      "name": "Canyoneering Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "path",
        "sport": "canyoning"
      },
      "terms": [
        "canyoneering",
        "route",
        "canyoneering route"
      ],
      "searchable": true
    },
    "land recreation/climbing/climbing route": {
      "name": "Climbing Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "path",
        "sport": "climbing"
      },
      "terms": [
        "mountain climbing",
        "mountain climbing route",
        "climbing",
        "route",
        "climbing route"
      ],
      "searchable": true
    },
    "land recreation/food/food box %2f food cache": {
      "name": "Food Box / Food Cache",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "food-cache-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "storage": "food"
      },
      "terms": [
        "food box",
        "food cache",
        "bear box",
        "bear cache",
        "bear pole",
        "food pole"
      ],
      "searchable": true
    },
    "land recreation/horse/horseback riding": {
      "name": "Horseback Riding",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "horseback-riding-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "leisure": "horse_riding"
      },
      "terms": [
        "bridleway",
        "equestrian",
        "equestrian trail",
        "horse riding",
        "horse riding trail",
        "horseback",
        "horseback riding trail",
        "pack and saddle",
        "horse",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "land recreation/motorcycle/motorcycle trail": {
      "name": "Motorcycle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "motor-bike-trail-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "track",
        "motorcycle": "*"
      },
      "terms": [
        "dirt bike",
        "dirt bike trail",
        "motorbike",
        "motorbike trail",
        "motorcycle",
        "trail",
        "track",
        "motorcycle trail"
      ],
      "searchable": true
    },
    "land recreation/park/park": {
      "name": "Park",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "park",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "leisure": "park"
      },
      "terms": [
        "clearing",
        "recreation",
        "playground",
        "field"
      ],
      "searchable": true
    },
    "land recreation/picnic/grill": {
      "name": "Grill",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "barbecue_grill": "*"
      },
      "terms": [
        "barbecue",
        "barbecue grill",
        "bbq",
        "bbq grill",
        "grill"
      ],
      "searchable": true
    },
    "land recreation/picnic/picnic area": {
      "name": "Picnic Area",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "picnic-area-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 7,
      "matchScore": 1,
      "tags": {
        "tourism": "picnic_site"
      },
      "terms": [
        "picnic",
        "picnic site",
        "picnic area"
      ],
      "searchable": true
    },
    "land recreation/picnic/picnic table": {
      "name": "Picnic Table",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": 8,
      "matchScore": 1,
      "tags": {
        "leisure": "picnic_table"
      },
      "terms": [
        "picnic bench",
        "picnic table"
      ],
      "searchable": true
    },
    "land recreation/playground/playground": {
      "name": "Playground",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "leisure": "playground"
      },
      "terms": [
        "play area",
        "playpark",
        "playground"
      ],
      "searchable": true
    },
    "land recreation/trail/motorized trail": {
      "name": "Motorized Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "track"
      },
      "terms": [
        "track",
        "trail",
        "path"
      ],
      "searchable": true
    },
    "land recreation/trail/non-motorized trail": {
      "name": "Non-Motorized Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "path"
      },
      "terms": [
        "footpath",
        "footway",
        "hike",
        "hiking",
        "trackway",
        "walk",
        "walkway",
        "trail",
        "path",
        "track"
      ],
      "searchable": true
    },
    "land recreation/trail/self guiding trail": {
      "name": "Self Guiding Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "self-guiding-trail-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 10,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "guidepost"
      },
      "terms": [
        "guidepost",
        "guide post",
        "information"
      ],
      "searchable": true
    },
    "land recreation/trail/steps": {
      "name": "Steps",
      "fields": [
        "surface",
        "lit",
        "width",
        "incline_steps",
        "access"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "steps"
      },
      "terms": [
        "stairs",
        "staircase",
        "steps"
      ],
      "searchable": true
    },
    "land recreation/trail/trail register": {
      "name": "Trail Register",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "register"
      },
      "terms": [
        "capsule",
        "register",
        "summit capsule",
        "trail head",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "land recreation/trail/trailhead": {
      "name": "Trailhead",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": -4,
      "matchScore": 1,
      "tags": {
        "highway": "trailhead"
      },
      "terms": [
        "trailend",
        "trail end",
        "trail head",
        "trailhead",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "miscellaneous/structure/fortification": {
      "name": "Fortification",
      "fields": [
        "name",
        "nps/unitcode",
        "site_type"
      ],
      "geometry": [
        "area"
      ],
      "defaultOrder": 3,
      "matchScore": 1,
      "tags": {
        "historic": "archaeological_site",
        "site_type": "fortification"
      },
      "terms": [
        "fort",
        "earthworks",
        "hill fort",
        "trench",
        "fortification"
      ],
      "searchable": true
    },
    "miscellaneous/structure/tower": {
      "name": "Tower",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tower/type"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "tower"
      },
      "terms": [
        "castle",
        "clock tower",
        "fire tower",
        "lookout tower",
        "water tower",
        "tower",
        "overlook"
      ],
      "searchable": true
    },
    "miscellaneous/structure/windmill": {
      "name": "Windmill",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "windmill"
      },
      "terms": [
        "wind turbine",
        "windpump",
        "windmill"
      ],
      "searchable": true
    },
    "miscellaneous/art/sculpture": {
      "name": "Sculpture",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "statue-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "artwork",
        "artwork_type": "statue"
      },
      "terms": [
        "art",
        "sculpture"
      ],
      "searchable": true
    },
    "miscellaneous/art/totem pole": {
      "name": "Totem Pole",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "totem_pole"
      },
      "terms": [
        "totem"
      ],
      "searchable": true
    },
    "miscellaneous/bench/bench": {
      "name": "Bench",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "backrest",
        "direction",
        "seats",
        "material"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "bench"
      },
      "terms": [
        "seat",
        "bench"
      ],
      "searchable": true
    },
    "miscellaneous/canal/canal": {
      "name": "Canal",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "waterway": "canal"
      },
      "terms": [
        "ditch",
        "lateal",
        "canal"
      ],
      "searchable": true
    },
    "miscellaneous/cemetery/cemetery %2f graveyard": {
      "name": "Cemetery / Graveyard",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "cemetery",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "landuse": "cemetery"
      },
      "terms": [
        "cemetery",
        "graveyard"
      ],
      "searchable": true
    },
    "miscellaneous/cemetery/grave": {
      "name": "Grave",
      "fields": [
        "memo",
        "nps/unitcoderial",
        "subject/name",
        "subject/species",
        "subject/birth",
        "subject/death",
        "religion"
      ],
      "geometry": [
        "point"
      ],
      "icon": "cemetery",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "cemetery": "grave"
      },
      "terms": [
        "burial",
        "burial site",
        "headstone",
        "tomb",
        "grave"
      ],
      "searchable": true
    },
    "miscellaneous/dam/dam": {
      "name": "Dam",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "dam",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "waterway": "dam"
      },
      "terms": [
        "breakwater",
        "dike",
        "jetty",
        "dam"
      ],
      "searchable": true
    },
    "miscellaneous/fence/fence": {
      "name": "Fence",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "barrier": "fence"
      },
      "terms": [
        "barricade",
        "barrier",
        "enclosure",
        "fencing",
        "palisade",
        "railing",
        "stockade",
        "gate"
      ],
      "searchable": true
    },
    "miscellaneous/flag pole/flag pole": {
      "name": "Flag Pole",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "flagpole-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "flagpole"
      },
      "terms": [
        "flagpole"
      ],
      "searchable": true
    },
    "miscellaneous/garden/garden": {
      "name": "Garden",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "leisure": "garden"
      },
      "terms": [
        "arboretum",
        "garden"
      ],
      "searchable": true
    },
    "miscellaneous/gate/gate": {
      "name": "Gate",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "barrier": "gate"
      },
      "terms": [
        "entry way",
        "gate"
      ],
      "searchable": true
    },
    "miscellaneous/levee/dyke (levee)": {
      "name": "Dyke (Levee)",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "dyke"
      },
      "terms": [
        "dyke",
        "levee"
      ],
      "searchable": true
    },
    "miscellaneous/lock/lock": {
      "name": "Lock",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "lock": "*"
      },
      "terms": [
        "sluice",
        "lock"
      ],
      "searchable": true
    },
    "miscellaneous/military area/military area": {
      "name": "Military Area",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "landuse": "military"
      },
      "terms": [
        "military",
        "military area"
      ],
      "searchable": true
    },
    "miscellaneous/mine/historic mine": {
      "name": "Historic Mine",
      "fields": [
        "name",
        "nps/unitcode",
        "description",
        "mineral"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "mine"
      },
      "terms": [
        "historic",
        "mine",
        "historic mine"
      ],
      "searchable": true
    },
    "miscellaneous/mine/quarry (mine)": {
      "name": "Quarry (Mine)",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "resource"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "landuse": "quarry"
      },
      "terms": [
        "quarry",
        "mine",
        "pit",
        "pit mine"
      ],
      "searchable": true
    },
    "miscellaneous/mine/shaft (mine)": {
      "name": "Shaft (Mine)",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "resource"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "mineshaft"
      },
      "terms": [
        "shaft",
        "mine",
        "adit",
        "mineshaft"
      ],
      "searchable": true
    },
    "miscellaneous/museum/museum": {
      "name": "Museum",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "museum"
      },
      "terms": [
        "history",
        "geology",
        "nature",
        "museum"
      ],
      "searchable": true
    },
    "miscellaneous/oil well/oilfield": {
      "name": "Oilfield",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "resource"
      ],
      "geometry": [
        "point"
      ],
      "icon": "oil-well",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "oilfield"
      },
      "terms": [
        "oil field",
        "oil well",
        "pipeline",
        "well",
        "oilfield"
      ],
      "searchable": true
    },
    "miscellaneous/point of interest/point of interest": {
      "name": "Point of Interest",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "*"
      },
      "terms": [
        "interest",
        "poi",
        "point of interest"
      ],
      "searchable": true
    },
    "miscellaneous/reserve/reserve": {
      "name": "Reserve",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "icon": "park",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "leisure": "nature_reserve"
      },
      "terms": [
        "nature reserve",
        "protected",
        "protected area",
        "wildlife",
        "wildlife reserve",
        "reserve"
      ],
      "searchable": true
    },
    "miscellaneous/reservoir/reservoir": {
      "name": "Reservoir",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "water",
        "water": "reservoir",
        "landuse": "reservoir"
      },
      "terms": [
        "storage pond",
        "water storage",
        "water supply",
        "reservoir",
        "lake",
        "tank"
      ],
      "searchable": true
    },
    "miscellaneous/view/overlook": {
      "name": "Overlook",
      "fields": [
        "name",
        "nps/unitcode",
        "direction",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "viewpoint",
        "viewpoint_type": "overlook"
      },
      "terms": [
        "scenic",
        "scenic overlook",
        "overlook",
        "viewpoint",
        "view"
      ],
      "searchable": true
    },
    "miscellaneous/view/viewpoint": {
      "name": "Viewpoint",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "viewpoint"
      },
      "terms": [
        "lookout",
        "observation point",
        "scenery",
        "scenic",
        "scenic viewpoint",
        "view",
        "viewing area",
        "viewing point",
        "vista",
        "vista point",
        "viewpoint"
      ],
      "searchable": true
    },
    "parking/parking/parking lot": {
      "name": "Parking Lot",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "capacity",
        "maxstay",
        "fee",
        "nps/trailuse"
      ],
      "geometry": [
        "area"
      ],
      "icon": "parking-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 2,
      "matchScore": 1,
      "tags": {
        "amenity": "parking"
      },
      "terms": [
        "parking",
        "lot",
        "car park",
        "car parking",
        "carpark",
        "vehicle parking",
        "parking lot"
      ],
      "searchable": true
    },
    "service/airport/runway": {
      "name": "Runway",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width"
      ],
      "geometry": [
        "area"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "aeroway": "runway"
      },
      "terms": [
        "aeroway",
        "air strip",
        "landing strip",
        "landing spot",
        "plane landing"
      ],
      "searchable": true
    },
    "service/airport/airport": {
      "name": "Airport",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "icao",
        "iata"
      ],
      "geometry": [
        "point"
      ],
      "icon": "airport-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "aeroway": "aerodrome"
      },
      "terms": [
        "aeroway",
        "aerodrome",
        "airport"
      ],
      "searchable": true
    },
    "service/airport/airstrip": {
      "name": "Airstrip",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "icao",
        "iata"
      ],
      "geometry": [
        "point"
      ],
      "icon": "airfield",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "aeroway": "aerodrome",
        "aerodrome": "airstrip"
      },
      "terms": [
        "airfield",
        "air field",
        "landing field",
        "airport",
        "airstrip",
        "aeroway",
        "aerodrome"
      ],
      "searchable": true
    },
    "service/airport/landing strip": {
      "name": "Landing Strip",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "icao",
        "iata"
      ],
      "geometry": [
        "point"
      ],
      "icon": "airfield",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "aeroway": "aerodrome",
        "aerodrome": "airstrip",
        "surface": "ground"
      },
      "terms": [
        "landing spot",
        "plane landing",
        "airport",
        "aeroway",
        "aerodrome",
        "air field",
        "landing strip",
        "landing"
      ],
      "searchable": true
    },
    "service/airport/seaplane base": {
      "name": "Seaplane Base",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "icao",
        "iata"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "seamark:type": "seaplane_landing_area"
      },
      "terms": [
        "float landing",
        "float plane",
        "airport"
      ],
      "searchable": true
    },
    "service/bank/atm": {
      "name": "ATM",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "atm"
      },
      "terms": [
        "automated teller machine",
        "cash",
        "cash dispenser",
        "atm"
      ],
      "searchable": true
    },
    "service/bus/bus stop %2f shuttle stop": {
      "name": "Bus Stop / Shuttle Stop",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "public_transport",
        "network",
        "shelter",
        "bench"
      ],
      "geometry": [
        "point"
      ],
      "icon": "bus-stop-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "bus_stop"
      },
      "terms": [
        "bus stop",
        "shuttle stop",
        "bus station",
        "bus stop / shuttle stop"
      ],
      "searchable": true
    },
    "service/entertainment/amphitheater": {
      "name": "Amphitheater",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "amphitheater-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "theatre",
        "theatre:type": "amphi"
      },
      "terms": [
        "theatre",
        "theater",
        "opera house",
        "performance",
        "play",
        "playhouse",
        "musical",
        "amphitheater"
      ],
      "searchable": true
    },
    "service/entertainment/cinema": {
      "name": "Cinema",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "cinema",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "cinema"
      },
      "terms": [
        "movie",
        "movies",
        "movie theater",
        "film",
        "picture",
        "theater"
      ],
      "searchable": true
    },
    "service/entrance/entrance station": {
      "name": "Entrance Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "entrance-station-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": -7,
      "matchScore": 1,
      "tags": {
        "barrier": "entrance"
      },
      "terms": [
        "entrance",
        "entry",
        "exit",
        "portal",
        "entrance station",
        "gateway"
      ],
      "searchable": true
    },
    "service/entrance/fee booth": {
      "name": "Fee Booth",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "barrier": "toll_booth"
      },
      "terms": [
        "fee",
        "toll",
        "toll booth",
        "fee booth"
      ],
      "searchable": true
    },
    "service/ferry/ferry terminal": {
      "name": "Ferry Terminal",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "cargo"
      ],
      "geometry": [
        "point"
      ],
      "icon": "ferry",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "ferry_terminal"
      },
      "terms": [
        "ferry",
        "terminal",
        "boat terminal",
        "ferry terminal"
      ],
      "searchable": true
    },
    "service/food/food service": {
      "name": "Food Service",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "food-service-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 12,
      "matchScore": 1,
      "tags": {
        "amenity": "food_court"
      },
      "terms": [
        "cafe",
        "food",
        "food court",
        "restaurant",
        "snacks",
        "snack bar",
        "food service"
      ],
      "searchable": true
    },
    "service/fuel/gas station": {
      "name": "Gas Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "gas-station-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 16,
      "matchScore": 1,
      "tags": {
        "amenity": "fuel"
      },
      "terms": [
        "fuel",
        "fuel pump",
        "petrol station",
        "petrol",
        "propane",
        "diesel",
        "lng",
        "liquified natural gas",
        "cng",
        "compressed natural gas",
        "biodiesel",
        "gas station"
      ],
      "searchable": true
    },
    "service/internet/wi-fi": {
      "name": "Wi-Fi",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "wifi": "*"
      },
      "terms": [
        "wifi",
        "internet",
        "online"
      ],
      "searchable": true
    },
    "service/laundry/laundry": {
      "name": "Laundry",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "laundry-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "shop": "laundry"
      },
      "terms": [
        "coin laundry",
        "coinwash",
        "laundry service",
        "launderette",
        "laundrette",
        "laundromat",
        "self-service laundry",
        "laundry"
      ],
      "searchable": true
    },
    "service/library/library": {
      "name": "Library",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "library",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "library"
      },
      "terms": [
        "book"
      ],
      "searchable": true
    },
    "service/parking/electric vehicle parking": {
      "name": "Electric Vehicle Parking",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "parking",
        "capacity:charging": "*"
      },
      "terms": [
        "electric",
        "electric car",
        "electric vehicle",
        "car charging",
        "charging",
        "parking lot",
        "vehicle charging",
        "parking",
        "car",
        "vehicle",
        "electric vehicle parking"
      ],
      "searchable": true
    },
    "service/parking/parking lot": {
      "name": "Parking Lot",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "capacity",
        "maxstay",
        "fee",
        "nps/trailuse"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "parking-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": -3,
      "matchScore": 1,
      "tags": {
        "amenity": "parking"
      },
      "terms": [
        "parking",
        "lot",
        "car park",
        "car parking",
        "carpark",
        "vehicle parking",
        "parking lot"
      ],
      "searchable": true
    },
    "service/parking/roadside pullout": {
      "name": "Roadside Pullout",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "rest_area"
      },
      "terms": [
        "passing place",
        "pullout",
        "pull off",
        "pull-off",
        "roadside pull off",
        "roadside pull-off",
        "roadside turnout",
        "turnout",
        "roadside pullout"
      ],
      "searchable": true
    },
    "service/post/mailbox": {
      "name": "Mailbox",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "post_box"
      },
      "terms": [
        "mail box",
        "mail drop",
        "postbox",
        "post box",
        "mailbox"
      ],
      "searchable": true
    },
    "service/post/post office": {
      "name": "Post Office",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "post-office-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "post_office"
      },
      "terms": [
        "letter",
        "mail",
        "mail office",
        "package",
        "parcel",
        "post",
        "post office"
      ],
      "searchable": true
    },
    "service/rail/metro stop %2f subway entrance": {
      "name": "Metro Stop / Subway Entrance",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "rail-metro",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "railway": "subway_entrance"
      },
      "terms": [
        "metro stop",
        "subway entrance",
        "subway exit",
        "metro stop / subway entrance"
      ],
      "searchable": true
    },
    "service/rail/train station": {
      "name": "Train Station",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "rail",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "building": "train_station"
      },
      "terms": [
        "depot",
        "railroad station",
        "railway station",
        "station",
        "train station"
      ],
      "searchable": true
    },
    "service/shopping/bookstore": {
      "name": "Bookstore",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "store-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 14,
      "matchScore": 1,
      "tags": {
        "shop": "books"
      },
      "terms": [
        "book",
        "reading",
        "shop",
        "shopping",
        "store"
      ],
      "searchable": true
    },
    "service/shopping/gift shop": {
      "name": "Gift Shop",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "store-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 15,
      "matchScore": 1,
      "tags": {
        "shop": "gift"
      },
      "terms": [
        "gift",
        "shop",
        "shopping",
        "store"
      ],
      "searchable": true
    },
    "service/shopping/store": {
      "name": "Store",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "store-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 13,
      "matchScore": 1,
      "tags": {
        "shop": "general"
      },
      "terms": [
        "shop",
        "shopping",
        "general store",
        "store"
      ],
      "searchable": true
    },
    "service/showers/showers": {
      "name": "Showers",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "fee",
        "access"
      ],
      "geometry": [
        "point"
      ],
      "icon": "showers-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "shower"
      },
      "terms": [
        "bath",
        "bathhouse",
        "bath house",
        "shower",
        "showers"
      ],
      "searchable": true
    },
    "service/support/emergency telephone": {
      "name": "Emergency Telephone",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "telephone-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "emergency": "phone"
      },
      "terms": [
        "emergency phone",
        "phone",
        "emergency",
        "emergency telephone"
      ],
      "searchable": true
    },
    "service/support/fire hydrant": {
      "name": "Fire Hydrant",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "emergency": "fire_hydrant"
      },
      "terms": [
        "fire",
        "hydrant"
      ],
      "searchable": true
    },
    "service/support/fire station": {
      "name": "Fire Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "fire-station",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "fire_station"
      },
      "terms": [
        "fire department",
        "emergency",
        "fire station"
      ],
      "searchable": true
    },
    "service/support/first aid station": {
      "name": "First Aid Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "first-aid-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "first_aid"
      },
      "terms": [
        "clinic",
        "first aid",
        "medical",
        "medical clinic",
        "emergency",
        "first aid station"
      ],
      "searchable": true
    },
    "service/support/hospital": {
      "name": "Hospital",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "emergency"
      ],
      "geometry": [
        "point"
      ],
      "icon": "hospital-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "hospital"
      },
      "terms": [
        "doctor",
        "emergency room",
        "health service",
        "hospital grounds",
        "institution",
        "infirmary",
        "medical",
        "sick",
        "surgery",
        "ward",
        "emergency",
        "hospital",
        "clinic"
      ],
      "searchable": true
    },
    "service/support/patrol cabin": {
      "name": "Patrol Cabin",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "patrol_cabin"
      },
      "terms": [
        "cabin",
        "backcountry cabin",
        "backcountry office",
        "backcountry ranger cabin",
        "patrol",
        "ranger cabin",
        "ranger patrol cabin",
        "patrol cabin"
      ],
      "searchable": true
    },
    "service/support/police": {
      "name": "Police",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "police",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "police"
      },
      "terms": [
        "badge",
        "constable",
        "cops",
        "detective",
        "fed",
        "law enforcement",
        "officer",
        "police force",
        "police station",
        "emergency",
        "police",
        "patrol"
      ],
      "searchable": true
    },
    "service/support/ranger station": {
      "name": "Ranger Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "ranger-station-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": -2,
      "matchScore": 1,
      "tags": {
        "amenity": "ranger_station"
      },
      "terms": [
        "park ranger",
        "permit center",
        "permit centre",
        "ranger",
        "warden office",
        "warden center",
        "ranger station",
        "backcountry office"
      ],
      "searchable": true
    },
    "service/surveillance/webcam": {
      "name": "Webcam",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "icon": "webcam-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "surveillance"
      },
      "terms": [
        "surveillance",
        "camera"
      ],
      "searchable": true
    },
    "service/telephone/telephone": {
      "name": "Telephone",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "indoor"
      ],
      "geometry": [
        "point"
      ],
      "icon": "telephone-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 17,
      "matchScore": 1,
      "tags": {
        "amenity": "telephone"
      },
      "terms": [
        "pay phone",
        "phone",
        "telephone box",
        "phone booth",
        "telephone"
      ],
      "searchable": true
    },
    "service/waste/dumpster": {
      "name": "Dumpster",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "waste_disposal"
      },
      "terms": [
        "trash",
        "dumpster",
        "waste"
      ],
      "searchable": true
    },
    "service/waste/litter receptacle": {
      "name": "Litter Receptacle",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "waste",
        "bin"
      ],
      "geometry": [
        "point"
      ],
      "icon": "litter-receptacle-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 19,
      "matchScore": 1,
      "tags": {
        "amenity": "waste_basket"
      },
      "terms": [
        "waste basket",
        "waste paper basket",
        "trash bin",
        "waste bin",
        "trash",
        "rubbish",
        "litter",
        "garbage"
      ],
      "searchable": true
    },
    "service/waste/recycling": {
      "name": "Recycling",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "recycling/cans",
        "recycling/glass",
        "recycling/paper",
        "recycling/clothes"
      ],
      "geometry": [
        "point"
      ],
      "icon": "recycling-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "recycling"
      },
      "terms": [
        "can",
        "bottle",
        "glass",
        "recycle",
        "recycle center",
        "recycle station",
        "recycling center",
        "recycling station",
        "salvage",
        "scrap",
        "recycling",
        "garbage",
        "trash"
      ],
      "searchable": true
    },
    "service/water/fountain": {
      "name": "Fountain",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "drinking_water",
        "lit"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "fountain"
      },
      "terms": [
        "well",
        "fountain"
      ],
      "searchable": true
    },
    "service/water/potable water": {
      "name": "Potable Water",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "description",
        "indoor",
        "access"
      ],
      "geometry": [
        "point"
      ],
      "icon": "drinking-water-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 18,
      "matchScore": 1,
      "tags": {
        "amenity": "drinking_water"
      },
      "terms": [
        "drinking fountain",
        "drinking water",
        "potable",
        "fountain"
      ],
      "searchable": true
    },
    "service/water/radiator water": {
      "name": "Radiator Water",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "radiator-water-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "emergency": "water_tank"
      },
      "terms": [
        "water tank",
        "radiator water"
      ],
      "searchable": true
    },
    "service/water/water well": {
      "name": "Water Well",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "drinking_water",
        "pump"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "water_well"
      },
      "terms": [
        "well",
        "water well"
      ],
      "searchable": true
    },
    "structure/recreation/boat dock": {
      "name": "Boat Dock",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "area"
      ],
      "defaultOrder": 6,
      "matchScore": 1,
      "tags": {
        "man_made": "pier",
        "mooring": "yes"
      },
      "terms": [
        "boat",
        "dock",
        "pier"
      ],
      "searchable": true
    },
    "barrier/fence/fence": {
      "name": "Fence",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "barrier": "fence"
      },
      "terms": [
        "barricade",
        "barrier",
        "enclosure",
        "fencing",
        "palisade",
        "railing",
        "stockade",
        "fence"
      ],
      "searchable": true
    },
    "barrier/gate/gate": {
      "name": "Gate",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "barrier": "gate"
      },
      "terms": [
        "entry way",
        "gate"
      ],
      "searchable": true
    },
    "natural line/valley/canyon": {
      "name": "Canyon",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "canyon"
      },
      "terms": [
        "canyon"
      ],
      "searchable": true
    },
    "railroad/railroad/railroad": {
      "name": "Railroad",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "line"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "railway": "rail"
      },
      "terms": [
        "rail",
        "train"
      ],
      "searchable": true
    },
    "road/four-wheel drive/four-wheel drive road": {
      "name": "Four-Wheel Drive Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "four-wheel-drive-road-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "road",
        "4wd_only": "*"
      },
      "terms": [
        "4wd",
        "4 wheeler",
        "4-wheeler",
        "four wheeler",
        "four-wheeler",
        "high clearance",
        "road",
        "four-wheel drive road"
      ],
      "searchable": true
    },
    "road/highway/highway": {
      "name": "Highway",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-motorway",
      "maki": "maki",
      "defaultOrder": 2,
      "matchScore": 1,
      "tags": {
        "highway": "motorway"
      },
      "terms": [
        "freeway",
        "turnpike",
        "motorway",
        "interstate",
        "interstate highway",
        "road",
        "highway"
      ],
      "searchable": true
    },
    "road/highway/highway link": {
      "name": "Highway Link",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-motorway-link",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "motorway_link"
      },
      "terms": [
        "freeway ramp",
        "highway ramp",
        "off ramp",
        "on ramp",
        "ramp",
        "highway"
      ],
      "searchable": true
    },
    "road/minor/minor road": {
      "name": "Minor Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-unclassified",
      "maki": "maki",
      "defaultOrder": 5,
      "matchScore": 1,
      "tags": {
        "highway": "unclassified"
      },
      "terms": [
        "unclassified",
        "unclassified road",
        "road",
        "street"
      ],
      "searchable": true
    },
    "road/minor/pedestrian street": {
      "name": "Pedestrian Street",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "lit",
        "width",
        "oneway",
        "nps/structure",
        "access"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-footway",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "pedestrian"
      },
      "terms": [
        "pedestrian road",
        "road",
        "street",
        "pedestrian street"
      ],
      "searchable": true
    },
    "road/minor/private road": {
      "name": "Private Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-road",
      "maki": "maki",
      "defaultOrder": 9,
      "matchScore": 1,
      "tags": {
        "highway": "road",
        "access": "private"
      },
      "terms": [
        "private",
        "admin",
        "admin road",
        "admin service road",
        "administrative",
        "administrative road",
        "administrative service road",
        "road",
        "street",
        "private road"
      ],
      "searchable": true
    },
    "road/minor/residential road": {
      "name": "Residential Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-residential",
      "maki": "maki",
      "defaultOrder": 6,
      "matchScore": 1,
      "tags": {
        "highway": "residential"
      },
      "terms": [
        "residential",
        "local",
        "local road",
        "road",
        "street",
        "residential road"
      ],
      "searchable": true
    },
    "road/minor/road": {
      "name": "Road",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-road",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "*"
      },
      "terms": [
        "minor road",
        "street"
      ],
      "searchable": true
    },
    "road/minor/unknown road": {
      "name": "Unknown Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-unclassified",
      "maki": "maki",
      "defaultOrder": 1,
      "matchScore": 1,
      "tags": {
        "highway": "road"
      },
      "terms": [
        "road",
        "street",
        "unknown road"
      ],
      "searchable": true
    },
    "road/primary/primary link": {
      "name": "Primary Link",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-primary-link",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "primary_link"
      },
      "terms": [
        "primary ramp",
        "ramp",
        "on ramp",
        "off ramp"
      ],
      "searchable": true
    },
    "road/primary/primary road": {
      "name": "Primary Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-primary",
      "maki": "maki",
      "defaultOrder": 3,
      "matchScore": 1,
      "tags": {
        "highway": "primary"
      },
      "terms": [
        "primary",
        "highway",
        "us highway",
        "state highway",
        "state route",
        "road",
        "primary road",
        "interstate",
        "interstate highway"
      ],
      "searchable": true
    },
    "road/secondary/secondary link": {
      "name": "Secondary Link",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-secondary-link",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "secondary_link"
      },
      "terms": [
        "secondary ramp",
        "ramp",
        "on ramp",
        "off ramp"
      ],
      "searchable": true
    },
    "road/secondary/secondary road": {
      "name": "Secondary Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-secondary",
      "maki": "maki",
      "defaultOrder": 4,
      "matchScore": 1,
      "tags": {
        "highway": "secondary"
      },
      "terms": [
        "secondary",
        "county highway",
        "road",
        "secondary road",
        "us highway",
        "state highway"
      ],
      "searchable": true
    },
    "road/service/access road": {
      "name": "Access Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "service",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-service",
      "maki": "maki",
      "defaultOrder": 7,
      "matchScore": 1,
      "tags": {
        "highway": "service"
      },
      "terms": [
        "campground road",
        "service",
        "service road",
        "road",
        "street",
        "access road"
      ],
      "searchable": true
    },
    "road/service/parking aisle": {
      "name": "Parking Aisle",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-service",
      "maki": "maki",
      "defaultOrder": 8,
      "matchScore": 1,
      "tags": {
        "highway": "service",
        "service": "parking_aisle"
      },
      "terms": [
        "parking",
        "lot",
        "car park",
        "car parking",
        "carpark",
        "vehicle parking",
        "marker",
        "parking aisle"
      ],
      "searchable": true
    },
    "road/tertiary/tertiary link": {
      "name": "Tertiary Link",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-tertiary-link",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "tertiary_link"
      },
      "terms": [
        "tertiary ramp",
        "ramp",
        "on ramp",
        "off ramp"
      ],
      "searchable": true
    },
    "road/tertiary/tertiary road": {
      "name": "Tertiary Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-tertiary",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "tertiary"
      },
      "terms": [
        "tertiary",
        "road",
        "tertiary road"
      ],
      "searchable": true
    },
    "trail/motorized/all-terrain vehicle trail": {
      "name": "All-Terrain Vehicle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-track",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1.03,
      "tags": {
        "highway": "track",
        "motor_vehicle": "no",
        "motorcycle": "no",
        "foot": "no",
        "bicycle": "no",
        "atv": "*",
        "4wd_only": "no",
        "snowmobile": "no",
        "horse": "no"
      },
      "terms": [
        "all terrain trail",
        "all terrain vehicle",
        "all terrain vehicle trail",
        "all-terrain trail",
        "all-terrain vehicle",
        "atv",
        "atv trail",
        "off road",
        "off-road",
        "ohv",
        "ohv trail",
        "orv",
        "orv trail",
        "quad",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/motorized/four-wheel drive trail": {
      "name": "Four-Wheel Drive Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-track",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1.03,
      "tags": {
        "highway": "track",
        "motor_vehicle": "no",
        "motorcycle": "no",
        "foot": "no",
        "bicycle": "no",
        "atv": "no",
        "4wd_only": "*",
        "snowmobile": "no",
        "horse": "no"
      },
      "terms": [
        "4wd",
        "4 wheeler",
        "4-wheeler",
        "four wheeler",
        "four-wheel drive vehicle > 50\\ in tread width",
        "four-wheeler",
        "high clearance",
        "trail",
        "track",
        "four-wheel drive trail",
        "off-road",
        "off road",
        "four-wheel drive vehicle > 50 in tread width",
        "four-wheel drive vehicle > 50\" in tread width"
      ],
      "searchable": true
    },
    "trail/motorized/motorcycle trail": {
      "name": "Motorcycle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-track",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1.02,
      "tags": {
        "highway": "track",
        "motor_vehicle": "no",
        "motorcycle": "*",
        "atv": "no",
        "4wd_only": "no",
        "snowmobile": "no",
        "horse": "no"
      },
      "terms": [
        "dirt bike",
        "dirt bike trail",
        "motorbike",
        "motorbike trail",
        "motorcycle",
        "trail",
        "track",
        "motorcycle trail"
      ],
      "searchable": true
    },
    "trail/motorized/motorized trail": {
      "name": "Motorized Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-track",
      "maki": "maki",
      "defaultOrder": 12,
      "matchScore": 1,
      "tags": {
        "highway": "track"
      },
      "terms": [
        "track",
        "trail",
        "path",
        "motorized"
      ],
      "searchable": true
    },
    "trail/motorized/snowmobile trail": {
      "name": "Snowmobile Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-track",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1.03,
      "tags": {
        "highway": "track",
        "motor_vehicle": "no",
        "motorcycle": "no",
        "foot": "no",
        "bicycle": "no",
        "atv": "no",
        "4wd_only": "no",
        "snowmobile": "*",
        "horse": "no"
      },
      "terms": [
        "snowmachine",
        "snowmachine trail",
        "snowmobile",
        "snow machine",
        "snow machine trail",
        "trail",
        "track",
        "snowmobile trail"
      ],
      "searchable": true
    },
    "trail/non-motorized/backcountry ski trail": {
      "name": "Backcountry Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "icon": "downhill-skiing-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "skitour"
      },
      "terms": [
        "backcountry",
        "backcountry ski",
        "trail",
        "track",
        "backcountry ski trail"
      ],
      "searchable": true
    },
    "trail/non-motorized/bicycle trail": {
      "name": "Bicycle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-cycleway",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1.03,
      "tags": {
        "highway": "path",
        "motor_vehicle": "no",
        "motorcycle": "no",
        "foot": "no",
        "bicycle": "*",
        "atv": "no",
        "4wd_only": "no",
        "snowmobile": "no",
        "horse": "no"
      },
      "terms": [
        "bicycle",
        "bike",
        "bike trail",
        "trail",
        "track",
        "bicycle trail"
      ],
      "searchable": true
    },
    "trail/non-motorized/canyoneering route": {
      "name": "Canyoneering Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "other-line",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "path",
        "sport": "canyoning"
      },
      "terms": [
        "canyoneering",
        "route",
        "canyoneering route"
      ],
      "searchable": true
    },
    "trail/non-motorized/carriage road": {
      "name": "Carriage Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-bridleway",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "bridleway"
      },
      "terms": [
        "carriage",
        "bridleway",
        "horse",
        "horse drawn",
        "horse riding",
        "horse riding trail",
        "horseback",
        "horseback riding trail",
        "trail",
        "track",
        "path"
      ],
      "searchable": true
    },
    "trail/non-motorized/climbing route": {
      "name": "Climbing Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "other-line",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "path",
        "sport": "climbing"
      },
      "terms": [
        "climbing",
        "route",
        "mountain climbing",
        "mountain climbing route",
        "climbing route",
        "climing"
      ],
      "searchable": true
    },
    "trail/non-motorized/cross-country ski trail": {
      "name": "Cross-Country Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "icon": "cross-country-ski-trail-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "nordic"
      },
      "terms": [
        "cross-country",
        "cross-country ski",
        "nordic",
        "nordic ski",
        "nordic ski trail",
        "nordic trail",
        "xcs",
        "trail",
        "track",
        "cross-country ski trail"
      ],
      "searchable": true
    },
    "trail/non-motorized/dog sled trail": {
      "name": "Dog Sled Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "icon": "other-line",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "sleigh"
      },
      "terms": [
        "dog sled",
        "mushing",
        "mushing trail",
        "winter track",
        "trail",
        "track",
        "dog sled trail"
      ],
      "searchable": true
    },
    "trail/non-motorized/downhill ski trail": {
      "name": "Downhill Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "icon": "downhill-skiing-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "downhill"
      },
      "terms": [
        "alpine",
        "alpine ski",
        "alpine ski trail",
        "alpine trail",
        "downhill",
        "downhill ski",
        "trail",
        "track",
        "downhill ski trail"
      ],
      "searchable": true
    },
    "trail/non-motorized/horseback riding trail": {
      "name": "Horseback Riding Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-bridleway",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1.03,
      "tags": {
        "highway": "path",
        "motor_vehicle": "no",
        "motorcycle": "no",
        "bicycle": "no",
        "atv": "no",
        "4wd_only": "no",
        "snowmobile": "no",
        "horse": "*"
      },
      "terms": [
        "bridleway",
        "equestrian",
        "equestrian trail",
        "horse",
        "horse riding",
        "horse riding trail",
        "horseback",
        "horseback riding trail",
        "pack and saddle",
        "trail",
        "track",
        "path"
      ],
      "searchable": true
    },
    "trail/non-motorized/pedestrian path": {
      "name": "Pedestrian Path",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "lit",
        "width",
        "nps/structure",
        "access"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-footway",
      "maki": "maki",
      "defaultOrder": 13,
      "matchScore": 1,
      "tags": {
        "highway": "footway"
      },
      "terms": [
        "footway",
        "pedestrian trail",
        "pedestrian path"
      ],
      "searchable": true
    },
    "trail/non-motorized/sidewalk": {
      "name": "Sidewalk",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "lit",
        "width",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "other-line",
      "maki": "maki",
      "defaultOrder": 14,
      "matchScore": 1,
      "tags": {
        "highway": "footway",
        "footway": "sidewalk"
      },
      "terms": [
        "footway",
        "sidewalk"
      ],
      "searchable": true
    },
    "trail/non-motorized/snowshoe trail": {
      "name": "Snowshoe Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "icon": "other-line",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "hike"
      },
      "terms": [
        "snowshoe",
        "showshoeing",
        "trail",
        "track",
        "snowshoe trail"
      ],
      "searchable": true
    },
    "trail/non-motorized/steps": {
      "name": "Steps",
      "fields": [
        "surface",
        "lit",
        "width",
        "incline_steps",
        "access"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-steps",
      "maki": "maki",
      "defaultOrder": 15,
      "matchScore": 1,
      "tags": {
        "highway": "steps"
      },
      "terms": [
        "stairs",
        "staircase",
        "steps"
      ],
      "searchable": true
    },
    "trail/non-motorized/trail": {
      "name": "Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-path",
      "maki": "maki",
      "defaultOrder": 10,
      "matchScore": 1,
      "tags": {
        "highway": "path"
      },
      "terms": [
        "path",
        "track",
        "hike",
        "hiking",
        "trackway",
        "walk",
        "foot",
        "footpath",
        "hiker/pedestrian",
        "non-motorized",
        "social trail",
        "animal trail",
        "human use (social)",
        "non-human use (animal)",
        "trail"
      ],
      "searchable": true
    },
    "trail/unmaintained/unmaintained route": {
      "name": "Unmaintained Route",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "path",
        "mainenance": "no"
      },
      "terms": [
        "unmaintained",
        "path",
        "trail",
        "route"
      ],
      "searchable": true
    },
    "trail/water/ferry route": {
      "name": "Ferry Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "ferry",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "route": "ferry"
      },
      "terms": [
        "ferry"
      ],
      "searchable": true
    },
    "trail/water/motorized watercraft trail": {
      "name": "Motorized Watercraft Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "line"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "motorboat": "*",
        "waterway": "*"
      },
      "terms": [
        "motorized watercraft",
        "motorboat",
        "trail",
        "track",
        "motorized watercraft trail"
      ],
      "searchable": true
    },
    "trail/water/non-motorized watercraft trail": {
      "name": "Non-Motorized Watercraft Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "line"
      ],
      "icon": "other-line",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "canoe": "*",
        "waterway": "*",
        "motorboat": "no"
      },
      "terms": [
        "non-motorized watercraft",
        "canoe",
        "kayak",
        "raft",
        "trail",
        "track",
        "non-motorized watercraft trail"
      ],
      "searchable": true
    },
    "accessibility/wheelchair accessible/wheelchair accessible": {
      "name": "Wheelchair Accessible",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "wheelchair-accessible-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "wheelchair": "*"
      },
      "terms": [
        "wheelchair",
        "accessible",
        "wheelchair accessible"
      ],
      "searchable": true
    },
    "accommodation/floating restroom/floating restroom": {
      "name": "Floating Restroom",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "toilets/disposal",
        "gender",
        "indoor",
        "fee",
        "access"
      ],
      "geometry": [
        "point"
      ],
      "icon": "restrooms-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "toilets",
        "type": "floating"
      },
      "terms": [
        "restoom",
        "latrine",
        "floating restroom"
      ],
      "searchable": true
    },
    "accommodation/restroom/restroom": {
      "name": "Restroom",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "toilets/disposal",
        "gender",
        "indoor",
        "fee",
        "access"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "restrooms-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": -1,
      "matchScore": 1,
      "tags": {
        "amenity": "toilets"
      },
      "terms": [
        "restroom",
        "bathroom",
        "latrine",
        "lavatory",
        "outhouse",
        "privy",
        "toilet",
        "toilets",
        "water closet",
        "wc",
        "head"
      ],
      "searchable": true
    },
    "historic/battlefield/battlefield": {
      "name": "Battlefield",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "battlefield"
      },
      "terms": [
        "historic battlefield",
        "battle",
        "historic",
        "battlefield"
      ],
      "searchable": true
    },
    "historic/cannon/cannon": {
      "name": "Cannon",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "cannon"
      },
      "terms": [
        "historic cannon",
        "artillery",
        "battering ram",
        "catapult",
        "historic",
        "cannon"
      ],
      "searchable": true
    },
    "historic/marker/battlefield marker": {
      "name": "Battlefield Marker",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "marker",
        "marker_type": "battlefield"
      },
      "terms": [
        "historic",
        "battlefield",
        "marker",
        "battlefield marker"
      ],
      "searchable": true
    },
    "historic/marker/historic marker": {
      "name": "Historic Marker",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "marker"
      },
      "terms": [
        "historic",
        "marker",
        "historic marker"
      ],
      "searchable": true
    },
    "historic/monument/memorial": {
      "name": "Memorial",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "monument",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "memorial"
      },
      "terms": [
        "historic",
        "historic memorial",
        "memorial"
      ],
      "searchable": true
    },
    "historic/monument/monument": {
      "name": "Monument",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "monument",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "monument"
      },
      "terms": [
        "historic",
        "historic monument",
        "monument"
      ],
      "searchable": true
    },
    "historic/ruin/historic ruins": {
      "name": "Historic Ruins",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "ruins"
      },
      "terms": [
        "historic",
        "ruins",
        "historic ruins"
      ],
      "searchable": true
    },
    "historic/ship/historic ship": {
      "name": "Historic Ship",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "ship"
      },
      "terms": [
        "historic",
        "ship"
      ],
      "searchable": true
    },
    "historic/site/historic site": {
      "name": "Historic Site",
      "fields": [
        "name",
        "nps/unitcode",
        "site_type"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "*"
      },
      "terms": [
        "historic",
        "site",
        "historic site"
      ],
      "searchable": true
    },
    "historic/wreck/wreck": {
      "name": "Wreck",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "historic": "wreck"
      },
      "terms": [
        "shipwreck",
        "submerged wreck",
        "historic",
        "wreck"
      ],
      "searchable": true
    },
    "information/information/brochure box": {
      "name": "Brochure Box",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "brochure"
      },
      "terms": [
        "brochure holder",
        "brochure dispenser",
        "dispenser",
        "information dispenser",
        "information",
        "brochure box"
      ],
      "searchable": true
    },
    "information/information/information": {
      "name": "Information",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "information-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 11,
      "matchScore": 1,
      "tags": {
        "tourism": "information"
      },
      "terms": [
        "tourist information",
        "visitor information",
        "information"
      ],
      "searchable": true
    },
    "information/information/information board": {
      "name": "Information Board",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "information-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "board"
      },
      "terms": [
        "bulletin board",
        "information kiosk",
        "kiosk",
        "information"
      ],
      "searchable": true
    },
    "information/information/information map": {
      "name": "Information Map",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "information-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "map"
      },
      "terms": [
        "map",
        "information",
        "information map"
      ],
      "searchable": true
    },
    "information/information/interpretive exhibit": {
      "name": "Interpretive Exhibit",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "information-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "exhibit"
      },
      "terms": [
        "attraction",
        "exhibit",
        "exhibit / wayside",
        "exhibit/wayside",
        "interpretive sign",
        "tourist attraction",
        "wayside",
        "information"
      ],
      "searchable": true
    },
    "information/sign/directional sign": {
      "name": "Directional Sign",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "sign",
        "sign:type": "directional"
      },
      "terms": [
        "directional",
        "sign",
        "directional sign"
      ],
      "searchable": true
    },
    "information/sign/gateway sign": {
      "name": "Gateway Sign",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "sign"
      },
      "terms": [
        "sign",
        "gateway",
        "location",
        "place name",
        "gateway sign"
      ],
      "searchable": true
    },
    "information/sign/mile marker": {
      "name": "Mile Marker",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "milestone"
      },
      "terms": [
        "milepost",
        "marker",
        "mile marker"
      ],
      "searchable": true
    },
    "information/sign/regulatory sign": {
      "name": "Regulatory Sign",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "sign",
        "sign:type": "regulatory"
      },
      "terms": [
        "regulatory",
        "traffic law",
        "sign",
        "regulatory sign"
      ],
      "searchable": true
    },
    "information/sign/trail marker": {
      "name": "Trail Marker",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "guidepost"
      },
      "terms": [
        "path marker",
        "marker",
        "trail marker",
        "trail",
        "sign"
      ],
      "searchable": true
    },
    "information/sign/trail sign": {
      "name": "Trail Sign",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "sign",
        "sign:type": "trail_sign"
      },
      "terms": [
        "sign",
        "trail",
        "trail sign"
      ],
      "searchable": true
    },
    "information/visitor center/visitor center": {
      "name": "Visitor Center",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "visitor-center-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": -8,
      "matchScore": 1,
      "tags": {
        "tourism": "information",
        "information": "office"
      },
      "terms": [
        "information",
        "visitor centre",
        "visitor information",
        "visitor center"
      ],
      "searchable": true
    },
    "locality/region/cultural landscape": {
      "name": "Cultural Landscape",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "place": "locality",
        "historic": "landscape"
      },
      "terms": [
        "cultural",
        "landscape"
      ],
      "searchable": true
    },
    "locality/region/historic district": {
      "name": "Historic District",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "place": "locality",
        "historic": "district"
      },
      "terms": [
        "historic",
        "district"
      ],
      "searchable": true
    },
    "locality/region/junction": {
      "name": "Junction",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "place": "locality",
        "locality_type": "junction"
      },
      "terms": [
        "locality",
        "area",
        "junction"
      ],
      "searchable": true
    },
    "locality/region/locale": {
      "name": "Locale",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": -5,
      "matchScore": 1,
      "tags": {
        "place": "locality"
      },
      "terms": [
        "area",
        "locality",
        "location",
        "place",
        "placename",
        "place name",
        "locale",
        "neighborhood",
        "district"
      ],
      "searchable": true
    },
    "locality/region/populated place": {
      "name": "Populated Place",
      "fields": [
        "name",
        "nps/unitcode",
        "population"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "place": "hamlet"
      },
      "terms": [
        "city",
        "hamlet",
        "neighborhood",
        "place",
        "town"
      ],
      "searchable": true
    },
    "natural feature/arroyo/arroyo": {
      "name": "Arroyo",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "waterway": "drain",
        "intermittent": "*"
      },
      "terms": [
        "coulee",
        "draw",
        "gully",
        "wash",
        "arroyo"
      ],
      "searchable": true
    },
    "natural feature/bar/reef (bar)": {
      "name": "Reef (Bar)",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "reef"
      },
      "terms": [
        "reef",
        "bar",
        "ledge",
        "sandbar",
        "shoal",
        "spit"
      ],
      "searchable": true
    },
    "natural feature/bar/shoal (bar)": {
      "name": "Shoal (Bar)",
      "fields": [
        "name",
        "nps/unitcode",
        "tidal"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "shoal"
      },
      "terms": [
        "shoal",
        "bar",
        "ledge",
        "reef",
        "sandbar",
        "spit"
      ],
      "searchable": true
    },
    "natural feature/basin/basin": {
      "name": "Basin",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "landuse": "basin"
      },
      "terms": [
        "cirque",
        "hole",
        "sink",
        "sinkhole",
        "basin"
      ],
      "searchable": true
    },
    "natural feature/bay/bay": {
      "name": "Bay",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "bay"
      },
      "terms": [
        "arm",
        "bight",
        "cove",
        "estuary",
        "gulf",
        "inlet",
        "sound",
        "bay"
      ],
      "searchable": true
    },
    "natural feature/beach/beach": {
      "name": "Beach",
      "fields": [
        "name",
        "nps/unitcode",
        "surface"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "beach"
      },
      "terms": [
        "coast",
        "shore",
        "strand",
        "beach"
      ],
      "searchable": true
    },
    "natural feature/cape/cape": {
      "name": "Cape",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "cape"
      },
      "terms": [
        "lea",
        "neck",
        "peninsula",
        "point",
        "cape"
      ],
      "searchable": true
    },
    "natural feature/cave/cave entrance": {
      "name": "Cave Entrance",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "cave_entrance"
      },
      "terms": [
        "cave",
        "cavern",
        "grotto"
      ],
      "searchable": true
    },
    "natural feature/cliff/cliff": {
      "name": "Cliff",
      "fields": [
        "name",
        "nps/unitcode",
        "height"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "cliff"
      },
      "terms": [
        "bluff",
        "crag",
        "head",
        "headland",
        "nose",
        "palisades",
        "precipice",
        "promontory",
        "rimrock",
        "slope",
        "cliff",
        "rim"
      ],
      "searchable": true
    },
    "natural feature/desert/desert": {
      "name": "Desert",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "desert"
      },
      "terms": [
        "desert"
      ],
      "searchable": true
    },
    "natural feature/dune/dune": {
      "name": "Dune",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "dune"
      },
      "terms": [
        "sand dune",
        "dune"
      ],
      "searchable": true
    },
    "natural feature/forest/forest": {
      "name": "Forest",
      "fields": [
        "name",
        "nps/unitcode",
        "leaf_type",
        "leaf_cycle",
        "crop"
      ],
      "geometry": [
        "point"
      ],
      "icon": "park",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "landuse": "forest"
      },
      "terms": [
        "jungle",
        "forest",
        "wood",
        "park"
      ],
      "searchable": true
    },
    "natural feature/forest/woods": {
      "name": "Woods",
      "fields": [
        "name",
        "nps/unitcode",
        "leaf_type",
        "leaf_cycle",
        "crop"
      ],
      "geometry": [
        "point"
      ],
      "icon": "park2",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "wood"
      },
      "terms": [
        "forest",
        "wood",
        "park",
        "jungle"
      ],
      "searchable": true
    },
    "natural feature/glacier/glacier": {
      "name": "Glacier",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "direction"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "glacier"
      },
      "terms": [
        "icefield",
        "ice patch",
        "snow patch",
        "glacier"
      ],
      "searchable": true
    },
    "natural feature/grove/grove": {
      "name": "Grove",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "grove"
      },
      "terms": [
        "orchard",
        "trees"
      ],
      "searchable": true
    },
    "natural feature/grove/tree": {
      "name": "Tree",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "tree"
      },
      "terms": [
        "stump",
        "tree"
      ],
      "searchable": true
    },
    "natural feature/harbor/harbor": {
      "name": "Harbor",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "harbor",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "harbour": "*"
      },
      "terms": [
        "harbour",
        "harbor",
        "marina"
      ],
      "searchable": true
    },
    "natural feature/island/island": {
      "name": "Island",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "place": "island"
      },
      "terms": [
        "archipelago",
        "atoll",
        "cay",
        "hammock",
        "hummock",
        "isla",
        "isle",
        "islet",
        "key",
        "moku",
        "island",
        "rock"
      ],
      "searchable": true
    },
    "natural feature/isthmus/isthmus": {
      "name": "Isthmus",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "isthmus"
      },
      "terms": [
        "tombolo",
        "isthmus"
      ],
      "searchable": true
    },
    "natural feature/lake/lake": {
      "name": "Lake",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "water",
        "water": "lake"
      },
      "terms": [
        "backwater",
        "lac",
        "lagoon",
        "laguna",
        "lakelet",
        "loch",
        "mere",
        "pond",
        "resaca",
        "waterhole",
        "lake",
        "pool"
      ],
      "searchable": true
    },
    "natural feature/lava/lava": {
      "name": "Lava",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "lava"
      },
      "terms": [
        "jumble",
        "kepula",
        "lava bed",
        "lava flow",
        "pyroclastic flow",
        "lava"
      ],
      "searchable": true
    },
    "natural feature/natural feature/natural feature": {
      "name": "Natural Feature",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "*"
      },
      "terms": [
        "generic",
        "natural"
      ],
      "searchable": true
    },
    "natural feature/pass/mountain pass (saddle %2f gap)": {
      "name": "Mountain Pass (Saddle / Gap)",
      "fields": [
        "name",
        "nps/unitcode",
        "ele",
        "direction"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "saddle"
      },
      "terms": [
        "mountain pass",
        "saddle",
        "gap",
        "col",
        "notch",
        "pass",
        "water gap",
        "wind gap"
      ],
      "searchable": true
    },
    "natural feature/peak/peak": {
      "name": "Peak",
      "fields": [
        "name",
        "nps/unitcode",
        "ele"
      ],
      "geometry": [
        "point"
      ],
      "icon": "triangle",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "peak"
      },
      "terms": [
        "summit",
        "acme",
        "ahu",
        "aiguille",
        "alp",
        "berg",
        "bald",
        "butte",
        "cerro",
        "climax",
        "colina",
        "cone",
        "crown",
        "cumbre",
        "dome",
        "hill",
        "horn",
        "knob",
        "knoll",
        "mauna",
        "mesita",
        "mound",
        "mount",
        "mountain",
        "puu",
        "sugarloaf",
        "tip",
        "top",
        "peak",
        "head",
        "mesa",
        "rock",
        "sugarload",
        "table",
        "crest",
        "pinnacle"
      ],
      "searchable": true
    },
    "natural feature/plain/grassland": {
      "name": "Grassland",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "grassland"
      },
      "terms": [
        "shrubland",
        "grassland",
        "plain",
        "highland",
        "kula",
        "upland"
      ],
      "searchable": true
    },
    "natural feature/plain/plain": {
      "name": "Plain",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "grassland",
        "grassland_type": "plain"
      },
      "terms": [
        "highland",
        "kula",
        "meadow",
        "upland"
      ],
      "searchable": true
    },
    "natural feature/plain/prairie": {
      "name": "Prairie",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "grassland",
        "grassland": "prarie"
      },
      "terms": [
        "savanna",
        "steppe",
        "prarie",
        "grassland"
      ],
      "searchable": true
    },
    "natural feature/plateau/plateau": {
      "name": "Plateau",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "landform",
        "landform": "plateau"
      },
      "terms": [
        "mesa",
        "table",
        "tableland",
        "plateau"
      ],
      "searchable": true
    },
    "natural feature/rapids/rapids": {
      "name": "Rapids",
      "fields": [
        "name",
        "nps/unitcode",
        "whitewater",
        "width",
        "rapid_grade"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "waterway": "rapids"
      },
      "terms": [
        "riffle",
        "ripple",
        "rapids"
      ],
      "searchable": true
    },
    "natural feature/ridge/ridge": {
      "name": "Ridge",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "ridge"
      },
      "terms": [
        "crest",
        "cuesta",
        "escarpment",
        "hogback",
        "lae",
        "spur",
        "ridge",
        "rim"
      ],
      "searchable": true
    },
    "natural feature/rock formation/arch": {
      "name": "Arch",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "arch"
      },
      "terms": [
        "bridge",
        "land bridge",
        "natural bridge",
        "sea arch",
        "window",
        "arch"
      ],
      "searchable": true
    },
    "natural feature/rock formation/pillar": {
      "name": "Pillar",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "rock",
        "rock_type": "pillar"
      },
      "terms": [
        "chimney",
        "monument",
        "pinnacle",
        "pohaku",
        "rock tower"
      ],
      "searchable": true
    },
    "natural feature/rock formation/rock formation": {
      "name": "Rock Formation",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "rock"
      },
      "terms": [
        "rock",
        "formation",
        "fin",
        "fold",
        "hoodoo",
        "nipple",
        "slickrock",
        "slide",
        "spire",
        "throne",
        "wall",
        "rock formation"
      ],
      "searchable": true
    },
    "natural feature/sea/sea": {
      "name": "Sea",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "place": "sea"
      },
      "terms": [
        "gulf",
        "ocean",
        "sea"
      ],
      "searchable": true
    },
    "natural feature/spring/spring": {
      "name": "Spring",
      "fields": [
        "name",
        "nps/unitcode",
        "drinking_water"
      ],
      "geometry": [
        "point"
      ],
      "icon": "spring-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "spring"
      },
      "terms": [
        "seep",
        "spring"
      ],
      "searchable": true
    },
    "natural feature/strait/strait (channel)": {
      "name": "Strait (Channel)",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "strait"
      },
      "terms": [
        "strait",
        "channel",
        "passage",
        "reach",
        "thoroughfare",
        "throughfare"
      ],
      "searchable": true
    },
    "natural feature/stream/stream": {
      "name": "Stream",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "waterway": "stream"
      },
      "terms": [
        "beck",
        "branch",
        "brook",
        "burn",
        "course",
        "creek",
        "current",
        "drift",
        "flood",
        "flowline",
        "freshet",
        "race",
        "rill",
        "rindle",
        "rivulet",
        "run",
        "runnel",
        "rush",
        "spate",
        "spritz",
        "surge",
        "tide",
        "torrent",
        "tributary",
        "watercourse",
        "flow"
      ],
      "searchable": true
    },
    "natural feature/swamp/swamp": {
      "name": "Swamp",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "wetland",
        "wetland": "swamp"
      },
      "terms": [
        "bog",
        "cienega",
        "marais",
        "marsh",
        "mire",
        "pocosin",
        "swamp",
        "wetland"
      ],
      "searchable": true
    },
    "natural feature/thermal/fumarole": {
      "name": "Fumarole",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "fumarole"
      },
      "terms": [
        "steam",
        "vent",
        "volcanic gas",
        "thermal",
        "fumarole",
        "geological"
      ],
      "searchable": true
    },
    "natural feature/thermal/geyser": {
      "name": "Geyser",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "geyser"
      },
      "terms": [
        "gusher",
        "spout",
        "thermal geyser",
        "hot spring",
        "thermal spring",
        "geyser"
      ],
      "searchable": true
    },
    "natural feature/thermal/hot spring": {
      "name": "Hot Spring",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "hot_spring"
      },
      "terms": [
        "hot",
        "spring",
        "thermal spring",
        "water",
        "geological"
      ],
      "searchable": true
    },
    "natural feature/thermal/mud pot": {
      "name": "Mud Pot",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "mud"
      },
      "terms": [
        "mud",
        "mud flow",
        "mudflow",
        "thermal pool",
        "fumarole"
      ],
      "searchable": true
    },
    "natural feature/valley/canyon": {
      "name": "Canyon",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "canyon"
      },
      "terms": [
        "canyon"
      ],
      "searchable": true
    },
    "natural feature/valley/valley": {
      "name": "Valley",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "valley"
      },
      "terms": [
        "barranca",
        "chasm",
        "glen",
        "gorge",
        "gulch",
        "hollow",
        "ravine",
        "valley",
        "canyon",
        "cove",
        "draw",
        "gulf"
      ],
      "searchable": true
    },
    "natural feature/volcano/volcano": {
      "name": "Volcano",
      "fields": [
        "name",
        "nps/unitcode",
        "status",
        "ele",
        "type"
      ],
      "geometry": [
        "point"
      ],
      "icon": "triangle",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "volcano"
      },
      "terms": [
        "caldera",
        "cinder cone",
        "composite",
        "composite volcano",
        "crater",
        "shield",
        "shield volcano",
        "volcano"
      ],
      "searchable": true
    },
    "natural feature/waterfall/waterfall": {
      "name": "Waterfall",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "waterway": "waterfall"
      },
      "terms": [
        "falls",
        "cascade",
        "cataract",
        "waterfall"
      ],
      "searchable": true
    },
    "natural feature/wetland/wetland": {
      "name": "Wetland",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "wetland",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "wetland"
      },
      "terms": [
        "bayou",
        "bogland",
        "fen",
        "fenland",
        "morass",
        "muskeg",
        "quagmire",
        "slough",
        "wetland"
      ],
      "searchable": true
    },
    "road feature/bridge/bridge": {
      "name": "Bridge",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "bridge": "*"
      },
      "terms": [
        "aqueduct",
        "overpass",
        "viaduct",
        "bridge"
      ],
      "searchable": true
    },
    "road feature/control/traffic signals": {
      "name": "Traffic Signals",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "circle",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "traffic_signals"
      },
      "terms": [
        "stoplight",
        "stop light",
        "traffic light",
        "traffic signal",
        "traffic signals"
      ],
      "searchable": true
    },
    "road feature/no-outlet/turning circle": {
      "name": "Turning Circle",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "circle",
      "maki": "maki",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "turning_circle"
      },
      "terms": [
        "blind alley",
        "cul-de-sac",
        "dead end street",
        "turning circle"
      ],
      "searchable": true
    },
    "road feature/tunnel/tunnel": {
      "name": "Tunnel",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "tunnel": "*"
      },
      "terms": [
        "covered passageway",
        "covered way",
        "tunnel"
      ],
      "searchable": true
    },
    "water recreation/access/boat launch": {
      "name": "Boat Launch",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "boat-launch-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 20,
      "matchScore": 1,
      "tags": {
        "leisure": "slipway"
      },
      "terms": [
        "slipway",
        "boat ramp",
        "boat launch"
      ],
      "searchable": true
    },
    "water recreation/access/canoe %2f kayak access": {
      "name": "Canoe / Kayak Access",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "canoe-access-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "leisure": "slipway",
        "canoe": "*",
        "motorboat": "no"
      },
      "terms": [
        "canoe",
        "canoe access",
        "kayak",
        "raft",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "water recreation/access/water access": {
      "name": "Water Access",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "natural": "water"
      },
      "terms": [
        "water",
        "access"
      ],
      "searchable": true
    },
    "water recreation/boat/anchorage": {
      "name": "Anchorage",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "seamark:type": "anchorage"
      },
      "terms": [
        "anchor",
        "anchorage"
      ],
      "searchable": true
    },
    "water recreation/boat/boat dock": {
      "name": "Boat Dock",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "pier",
        "mooring": "yes"
      },
      "terms": [
        "dock",
        "pier",
        "boat"
      ],
      "searchable": true
    },
    "water recreation/boat/boat storage": {
      "name": "Boat Storage",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "boat_storage"
      },
      "terms": [
        "boat",
        "storage"
      ],
      "searchable": true
    },
    "water recreation/boat/buoy": {
      "name": "Buoy",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "buoy"
      },
      "terms": [
        "float",
        "navigation aid",
        "buoy"
      ],
      "searchable": true
    },
    "water recreation/boat/marina": {
      "name": "Marina",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "capacity",
        "mooring"
      ],
      "geometry": [
        "point"
      ],
      "icon": "marina-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 22,
      "matchScore": 1,
      "tags": {
        "leisure": "marina"
      },
      "terms": [
        "port",
        "marina",
        "harbour",
        "harbor"
      ],
      "searchable": true
    },
    "water recreation/boat/mooring": {
      "name": "Mooring",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "mooring": "*"
      },
      "terms": [
        "dock",
        "anchorage",
        "anchor",
        "mooring"
      ],
      "searchable": true
    },
    "water recreation/boat/sailing": {
      "name": "Sailing",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "sailing-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "sport": "sailing"
      },
      "terms": [
        "sail",
        "sailing area",
        "sail area",
        "sailing"
      ],
      "searchable": true
    },
    "water recreation/boat/zebra mussel decontamination station": {
      "name": "Zebra Mussel Decontamination Station",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "boat_wash",
        "type": "zebra_mussel"
      },
      "terms": [
        "decontamination",
        "decontamination station",
        "zebra mussel decontamination station"
      ],
      "searchable": true
    },
    "water recreation/fishing/fish cleaning": {
      "name": "Fish Cleaning",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "amenity": "fish_cleaning"
      },
      "terms": [
        "cleaning",
        "fish cleaning station",
        "fish cleaning table",
        "fish cleaning"
      ],
      "searchable": true
    },
    "water recreation/fishing/fish hatchery": {
      "name": "Fish Hatchery",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "landuse": "aquaculture"
      },
      "terms": [
        "hatchery",
        "fish",
        "fish hatchery"
      ],
      "searchable": true
    },
    "water recreation/fishing/fishing": {
      "name": "Fishing",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "fishing-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": 21,
      "matchScore": 1,
      "tags": {
        "leisure": "fishing"
      },
      "terms": [
        "fish",
        "fishing"
      ],
      "searchable": true
    },
    "water recreation/lighthouse/lighthouse": {
      "name": "Lighthouse",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "man_made": "lighthouse"
      },
      "terms": [
        "beacon",
        "lighthouse"
      ],
      "searchable": true
    },
    "water recreation/scuba/scuba diving": {
      "name": "Scuba Diving",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "scuba-diving-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "sport": "scuba_diving"
      },
      "terms": [
        "scuba",
        "scuba diving area",
        "scuba diving"
      ],
      "searchable": true
    },
    "water recreation/swimming/swimming area": {
      "name": "Swimming Area",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "swimming-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "sport": "swimming"
      },
      "terms": [
        "pool",
        "natural pool",
        "natural swimming pool",
        "swimming",
        "swimming pool",
        "swimming area"
      ],
      "searchable": true
    },
    "water recreation/windsurfing/windsurfing area": {
      "name": "Windsurfing Area",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "wind-surfing-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "sport": "windsurfing"
      },
      "terms": [
        "windsurfing",
        "wind surfing",
        "wind surfing area"
      ],
      "searchable": true
    },
    "winter recreation/cross-country skiing/cross-country ski trail": {
      "name": "Cross-Country Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "icon": "cross-country-ski-trail-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "nordic"
      },
      "terms": [
        "cross-country",
        "cross-country ski",
        "nordic",
        "nordic ski",
        "nordic ski trail",
        "nordic trail",
        "xcs",
        "trail",
        "track",
        "cross-country ski trail"
      ],
      "searchable": true
    },
    "winter recreation/dog sled/dog sled trail": {
      "name": "Dog Sled Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "sleigh"
      },
      "terms": [
        "dog sled",
        "mushing",
        "mushing trail",
        "winter track",
        "trail",
        "track",
        "dog sled trail"
      ],
      "searchable": true
    },
    "winter recreation/downhill skiing/backcountry ski trail": {
      "name": "Backcountry Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "skitour"
      },
      "terms": [
        "backcountry",
        "backcountry ski",
        "trail",
        "track",
        "backcountry ski trail",
        "structure"
      ],
      "searchable": true
    },
    "winter recreation/downhill skiing/downhill ski trail": {
      "name": "Downhill Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "icon": "downhill-skiing-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "downhill"
      },
      "terms": [
        "alpine",
        "alpine ski",
        "alpine ski trail",
        "alpine trail",
        "downhill",
        "downhill ski",
        "trail",
        "track",
        "downhill ski trail"
      ],
      "searchable": true
    },
    "winter recreation/ice skating/ice rink": {
      "name": "Ice Rink",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "seasonal",
        "sport"
      ],
      "geometry": [
        "point"
      ],
      "icon": "ice-skating-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "leisure": "ice_rink"
      },
      "terms": [
        "curling",
        "hockey",
        "hockey rink",
        "ice skating",
        "ice skating area",
        "rink",
        "skating",
        "ice rink"
      ],
      "searchable": true
    },
    "winter recreation/sled/sledding": {
      "name": "Sledding",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "icon": "sledding-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "sled"
      },
      "terms": [
        "sled",
        "sledding area",
        "sledding"
      ],
      "searchable": true
    },
    "winter recreation/snowmobile/snowmobile trail": {
      "name": "Snowmobile Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "snowmobile-trail-black",
      "maki": "npmap-symbol-library",
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "highway": "track",
        "snowmobile": "*"
      },
      "terms": [
        "snowmachine",
        "snowmachine trail",
        "snowmobile",
        "snow machine",
        "snow machine trail",
        "trail",
        "track",
        "snowmobile trail"
      ],
      "searchable": true
    },
    "winter recreation/snowshoe/snowshoe trail": {
      "name": "Snowshoe Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "defaultOrder": null,
      "matchScore": 1,
      "tags": {
        "piste:type": "hike"
      },
      "terms": [
        "snowshoe",
        "showshoeing",
        "trail",
        "track",
        "snowshoe trail"
      ],
      "searchable": true
    }
  },
  "categories": {
    "category-area-building": {
      "geometry": "area",
      "displayName": "Building",
      "members": [
        "building/building/building footprint"
      ],
      "icon": "building",
      "maki": "maki"
    },
    "category-point-building": {
      "geometry": "point",
      "displayName": "Building",
      "members": [
        "building/commercial/headquarters",
        "building/residential/lodge",
        "building/residential/lodging",
        "building/commercial/office",
        "building/historic/historic building"
      ],
      "icon": "commercial",
      "maki": "maki"
    },
    "category-area-land recreation": {
      "geometry": "area",
      "displayName": "Land Recreation",
      "members": [
        "land recreation/sports field/athletic field",
        "land recreation/golf/golf course"
      ],
      "icon": "pitch",
      "maki": "maki"
    },
    "category-point-land recreation": {
      "geometry": "point",
      "displayName": "Land Recreation",
      "members": [
        "land recreation/camping/campsite",
        "land recreation/picnic/picnic area",
        "land recreation/picnic/picnic table",
        "land recreation/camping/rv campground",
        "land recreation/trail/self guiding trail"
      ],
      "icon": "campground-black",
      "maki": "npmap-symbol-library"
    },
    "category-vertex-land recreation": {
      "geometry": "vertex",
      "displayName": "Land Recreation",
      "members": [
        "land recreation/trail/trailhead"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library"
    },
    "category-area-miscellaneous": {
      "geometry": "area",
      "displayName": "Miscellaneous",
      "members": [
        "miscellaneous/structure/fortification"
      ]
    },
    "category-area-parking": {
      "geometry": "area",
      "displayName": "Parking",
      "members": [
        "parking/parking/parking lot"
      ],
      "icon": "parking-black",
      "maki": "npmap-symbol-library"
    },
    "category-point-service": {
      "geometry": "point",
      "displayName": "Service",
      "members": [
        "service/food/food service",
        "service/shopping/store",
        "service/shopping/bookstore",
        "service/shopping/gift shop",
        "service/fuel/gas station",
        "service/telephone/telephone",
        "service/water/potable water",
        "service/waste/litter receptacle"
      ],
      "icon": "entrance-station-black",
      "maki": "npmap-symbol-library"
    },
    "category-vertex-service": {
      "geometry": "vertex",
      "displayName": "Service",
      "members": [
        "service/parking/parking lot"
      ],
      "icon": "parking-black",
      "maki": "npmap-symbol-library"
    },
    "category-area-structure": {
      "geometry": "area",
      "displayName": "Structure",
      "members": [
        "structure/recreation/boat dock"
      ]
    },
    "category-line-road": {
      "geometry": "line",
      "displayName": "Road",
      "members": [
        "road/minor/unknown road",
        "road/highway/highway",
        "road/primary/primary road",
        "road/secondary/secondary road",
        "road/minor/minor road",
        "road/minor/residential road",
        "road/service/access road",
        "road/service/parking aisle",
        "road/minor/private road"
      ],
      "icon": "highway-unclassified",
      "maki": "maki"
    },
    "category-line-trail": {
      "geometry": "line",
      "displayName": "Trail",
      "members": [
        "trail/non-motorized/trail",
        "trail/motorized/motorized trail",
        "trail/non-motorized/pedestrian path",
        "trail/non-motorized/sidewalk",
        "trail/non-motorized/steps"
      ],
      "icon": "highway-path",
      "maki": "maki"
    },
    "category-point-accommodation": {
      "geometry": "point",
      "displayName": "Accommodation",
      "members": [
        "accommodation/restroom/restroom"
      ],
      "icon": "restrooms-black",
      "maki": "npmap-symbol-library"
    },
    "category-vertex-accommodation": {
      "geometry": "vertex",
      "displayName": "Accommodation",
      "members": [
        "accommodation/restroom/restroom"
      ],
      "icon": "restrooms-black",
      "maki": "npmap-symbol-library"
    },
    "category-point-information": {
      "geometry": "point",
      "displayName": "Information",
      "members": [
        "information/information/information"
      ],
      "icon": "visitor-center-black",
      "maki": "npmap-symbol-library"
    },
    "category-point-locality": {
      "geometry": "point",
      "displayName": "Locality",
      "members": [
        "locality/region/locale"
      ]
    },
    "category-point-water recreation": {
      "geometry": "point",
      "displayName": "Water Recreation",
      "members": [
        "water recreation/access/boat launch",
        "water recreation/fishing/fishing",
        "water recreation/boat/marina"
      ],
      "icon": "boat-launch-black",
      "maki": "npmap-symbol-library"
    }
  },
  "defaults": {
    "area": [
      "building/building/building footprint",
      "category-area-land recreation",
      "parking/parking/parking lot",
      "miscellaneous/structure/fortification",
      "structure/recreation/boat dock"
    ],
    "point": [
      "information/visitor center/visitor center",
      "service/entrance/entrance station",
      "land recreation/camping/campground",
      "locality/region/locale",
      "land recreation/trail/trailhead",
      "service/parking/parking lot",
      "service/support/ranger station",
      "accommodation/restroom/restroom",
      "category-point-building",
      "category-point-land recreation",
      "category-point-information",
      "category-point-service",
      "category-point-water recreation",
      "information/information/information"
    ],
    "vertex": [
      "land recreation/trail/trailhead",
      "service/parking/parking lot",
      "accommodation/restroom/restroom"
    ],
    "line": [
      "category-line-road",
      "category-line-trail"
    ]
  }
};
