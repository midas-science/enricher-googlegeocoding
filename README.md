### enricher-googlegeocoding
A Google Geocoding enricher for midas. 


#### Example

Enrich any CSV, XLSX or JSON file with data from the Google Geocoding API

###### Source file

```json
[
   {
      "company": "Google Inc.",
      "hq_address" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
   },
   {
      "company": "Apple Inc.",
      "hq_address" : "1 Infinite Loop, Cupertino, CA 95014, USA"
   },
   {
      "company": "Facebook Inc.",
      "hq_address" : "1 Hacker Way, Menlo Park, CA 94025, USA"
   }
]
```	

###### Enriched target result

```json
[
	{
		"company": "Google Inc.",
		"hq_address": "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
		"coordinates": {
			"lng": -122.0856086,
			"lat": 37.4224082
		}
	},
	{
		"company": "Apple Inc.",
		"hq_address": "1 Infinite Loop, Cupertino, CA 95014, USA",
		"coordinates": {
			"lng": -122.0307812,
			"lat": 37.3320003
		}
	},
	{
		"company": "Facebook Inc.",
		"hq_address": "1 Hacker Way, Menlo Park, CA 94025, USA",
		"coordinates": {
			"lng": -122.1458147,
			"lat": 37.4843038
		}
	}
]
```	
