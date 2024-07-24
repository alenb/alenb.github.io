const trainNetwork = {
    // City Loop
    "Flinders Street": ["Parliament", "Melbourne Central", "Flagstaff", "Southern Cross", "Richmond", "Jolimont"],
    "Parliament": ["Melbourne Central", "Flinders Street"],
    "Melbourne Central": ["Flagstaff", "Parliament"],
    "Flagstaff": ["Southern Cross", "Melbourne Central"],
    "Southern Cross": ["Flinders Street", "Flagstaff", "North Melbourne"],
    "Richmond": ["South Yarra", "East Richmond", "Burnley", "Flinders Street"],
    "Jolimont": ["Flinders Street"],

    // Sandringham Line
    "South Yarra": ["Richmond", "Prahran"],
    "Prahran": ["South Yarra", "Windsor"],
    "Windsor": ["Prahran", "Balaclava"],
    "Balaclava": ["Windsor", "Ripponlea"],
    "Ripponlea": ["Balaclava", "Elsternwick"],
    "Elsternwick": ["Ripponlea", "Gardenvale"],
    "Gardenvale": ["Elsternwick", "North Brighton"],
    "North Brighton": ["Gardenvale", "Middle Brighton"],
    "Middle Brighton": ["North Brighton", "Brighton Beach"],
    "Brighton Beach": ["Middle Brighton", "Hampton"],
    "Hampton": ["Brighton Beach", "Sandringham"],
    "Sandringham": ["Hampton"],

    // Frankston Line
    "South Yarra": ["Richmond"],
    "Richmond": ["South Yarra", "East Richmond", "Burnley", "Flinders Street"],
    "East Richmond": ["Richmond", "Burnley"],
    "Burnley": ["East Richmond", "Hawthorn", "Glenferrie"],
    "Hawthorn": ["Burnley", "Glenferrie"],
    "Glenferrie": ["Hawthorn", "Auburn"],
    "Auburn": ["Glenferrie", "Camberwell"],
    "Camberwell": ["Auburn", "East Camberwell"],
    "East Camberwell": ["Camberwell", "Canterbury"],
    "Canterbury": ["East Camberwell", "Chatham"],
    "Chatham": ["Canterbury", "Surrey Hills"],
    "Surrey Hills": ["Chatham", "Mont Albert"],
    "Mont Albert": ["Surrey Hills", "Box Hill"],
    "Box Hill": ["Mont Albert", "Laburnum"],
    "Laburnum": ["Box Hill", "Blackburn"],
    "Blackburn": ["Laburnum", "Nunawading"],
    "Nunawading": ["Blackburn", "Mitcham"],
    "Mitcham": ["Nunawading", "Heatherdale"],
    "Heatherdale": ["Mitcham", "Ringwood"],
    "Ringwood": ["Heatherdale", "Ringwood East"],
    "Ringwood East": ["Ringwood", "Croydon"],
    "Croydon": ["Ringwood East", "Mooroolbark"],
    "Mooroolbark": ["Croydon", "Lilydale"],
    "Lilydale": ["Mooroolbark"],

    // Belgrave Line
    "Ringwood": ["Heatherdale", "Heathmont"],
    "Heathmont": ["Ringwood", "Bayswater"],
    "Bayswater": ["Heathmont", "Boronia"],
    "Boronia": ["Bayswater", "Ferntree Gully"],
    "Ferntree Gully": ["Boronia", "Upper Ferntree Gully"],
    "Upper Ferntree Gully": ["Ferntree Gully", "Upwey"],
    "Upwey": ["Upper Ferntree Gully", "Tecoma"],
    "Tecoma": ["Upwey", "Belgrave"],
    "Belgrave": ["Tecoma"],

    // Glen Waverley Line
    "Burnley": ["East Richmond", "Heyington"],
    "Heyington": ["Burnley", "Kooyong"],
    "Kooyong": ["Heyington", "Tooronga"],
    "Tooronga": ["Kooyong", "Gardiner"],
    "Gardiner": ["Tooronga", "Glen Iris"],
    "Glen Iris": ["Gardiner", "Darling"],
    "Darling": ["Glen Iris", "East Malvern"],
    "East Malvern": ["Darling", "Holmesglen"],
    "Holmesglen": ["East Malvern", "Jordanville"],
    "Jordanville": ["Holmesglen", "Mount Waverley"],
    "Mount Waverley": ["Jordanville", "Syndal"],
    "Syndal": ["Mount Waverley", "Glen Waverley"],
    "Glen Waverley": ["Syndal"],

    // Cranbourne/Pakenham Line
    "Caulfield": ["Malvern", "Glenhuntly", "Carnegie"],
    "Malvern": ["Caulfield", "Armadale"],
    "Armadale": ["Malvern", "Toorak"],
    "Toorak": ["Armadale", "Hawksburn"],
    "Hawksburn": ["Toorak", "South Yarra"],
    "Glenhuntly": ["Caulfield", "Ormond"],
    "Ormond": ["Glenhuntly", "McKinnon"],
    "McKinnon": ["Ormond", "Bentleigh"],
    "Bentleigh": ["McKinnon", "Patterson"],
    "Patterson": ["Bentleigh", "Moorabbin"],
    "Moorabbin": ["Patterson", "Highett"],
    "Highett": ["Moorabbin", "Southland"],
    "Southland": ["Highett", "Cheltenham"],
    "Cheltenham": ["Southland", "Mentone"],
    "Mentone": ["Cheltenham", "Parkdale"],
    "Parkdale": ["Mentone", "Mordialloc"],
    "Mordialloc": ["Parkdale", "Aspendale"],
    "Aspendale": ["Mordialloc", "Edithvale"],
    "Edithvale": ["Aspendale", "Chelsea"],
    "Chelsea": ["Edithvale", "Bonbeach"],
    "Bonbeach": ["Chelsea", "Carrum"],
    "Carrum": ["Bonbeach", "Seaford"],
    "Seaford": ["Carrum", "Kananook"],
    "Kananook": ["Seaford", "Frankston"],
    "Frankston": ["Kananook"],

    // Cranbourne Line
    "South Yarra": ["Richmond"],
    "Hawksburn": ["South Yarra", "Toorak"],
    "Toorak": ["Hawksburn", "Armadale"],
    "Armadale": ["Toorak", "Malvern"],
    "Malvern": ["Armadale", "Caulfield"],
    "Caulfield": ["Malvern", "Carnegie"],
    "Carnegie": ["Caulfield", "Murrumbeena"],
    "Murrumbeena": ["Carnegie", "Hughesdale"],
    "Hughesdale": ["Murrumbeena", "Oakleigh"],
    "Oakleigh": ["Hughesdale", "Huntingdale"],
    "Huntingdale": ["Oakleigh", "Clayton"],
    "Clayton": ["Huntingdale", "Westall"],
    "Westall": ["Clayton", "Springvale"],
    "Springvale": ["Westall", "Sandown Park"],
    "Sandown Park": ["Springvale", "Noble Park"],
    "Noble Park": ["Sandown Park", "Yarraman"],
    "Yarraman": ["Noble Park", "Dandenong"],
    "Dandenong": ["Yarraman", "Lynbrook"],
    "Lynbrook": ["Dandenong", "Merinda Park"],
    "Merinda Park": ["Lynbrook", "Cranbourne"],
    "Cranbourne": ["Merinda Park"],

    // Pakenham Line
    "Dandenong": ["Narre Warren", "Hallam"],
    "Narre Warren": ["Dandenong", "Berwick"],
    "Berwick": ["Narre Warren", "Beaconsfield"],
    "Beaconsfield": ["Berwick", "Officer"],
    "Officer": ["Beaconsfield", "Cardinia Road"],
    "Cardinia Road": ["Officer", "Pakenham"],
    "Pakenham": ["Cardinia Road"],

    // Williamstown Line
    "Williamstown": ["Williamstown Beach"],
    "Williamstown Beach": ["North Williamstown"],
    "North Williamstown": ["Newport"],
    "Newport": ["North Williamstown", "Spotswood"],
    "Spotswood": ["Newport", "Yarraville"],
    "Yarraville": ["Spotswood", "Seddon"],
    "Seddon": ["Yarraville", "Footscray"],
    "Footscray": ["Seddon", "Middle Footscray", "West Footscray"],
    "Middle Footscray": ["Footscray", "West Footscray"],
    "West Footscray": ["Middle Footscray", "Tottenham"],
    "Tottenham": ["West Footscray", "Sunshine"],
    "Sunshine": ["Tottenham", "Albion"],
    "Albion": ["Sunshine", "Ginifer"],
    "Ginifer": ["Albion", "St Albans"],
    "St Albans": ["Ginifer", "Keilor Plains"],
    "Keilor Plains": ["St Albans", "Watergardens"],
    "Watergardens": ["Keilor Plains", "Sydenham"],
    "Sydenham": ["Watergardens"],

    // Werribee Line
    "Laverton": ["Aircraft", "Williams Landing"],
    "Aircraft": ["Laverton", "Williams Landing"],
    "Williams Landing": ["Aircraft", "Hoppers Crossing"],
    "Hoppers Crossing": ["Williams Landing", "Werribee"],
    "Werribee": ["Hoppers Crossing", "Tarneit"],
    "Tarneit": ["Werribee", "Wyndham Vale"],
    "Wyndham Vale": ["Tarneit", "Deer Park"],
    "Deer Park": ["Wyndham Vale", "Ardeer"],
    "Ardeer": ["Deer Park", "Sunshine"],

    // Upfield Line
    "North Melbourne": ["Macaulay", "South Kensington"],
    "Macaulay": ["North Melbourne", "Flemington Bridge"],
    "Flemington Bridge": ["Macaulay", "Royal Park"],
    "Royal Park": ["Flemington Bridge", "Jewell"],
    "Jewell": ["Royal Park", "Brunswick"],
    "Brunswick": ["Jewell", "Anstey"],
    "Anstey": ["Brunswick", "Moreland"],
    "Moreland": ["Anstey", "Coburg"],
    "Coburg": ["Moreland", "Batman"],
    "Batman": ["Coburg", "Merlynston"],
    "Merlynston": ["Batman", "Fawkner"],
    "Fawkner": ["Merlynston", "Gowrie"],
    "Gowrie": ["Fawkner", "Upfield"],
    "Upfield": ["Gowrie"],
    



    // Adding missing neighbors
    "Jolimont": ["Flinders Street"],
    "South Kensington": ["Flemington Bridge", "Royal Park"],
    "Flemington Bridge": ["Macaulay", "South Kensington"],
    "Royal Park": ["Flemington Bridge", "Jewell"],
    "Jewell": ["Royal Park", "Brunswick"],
    "Brunswick": ["Jewell", "Anstey"],
    "Anstey": ["Brunswick", "Moreland"],
    "Moreland": ["Anstey", "Coburg"],
    "Coburg": ["Moreland", "Batman"],
    "Batman": ["Coburg", "Merlynston"],
    "Merlynston": ["Batman", "Fawkner"],
    "Fawkner": ["Merlynston", "Gowrie"],
    "Gowrie": ["Fawkner", "Upfield"],
    "Upfield": ["Gowrie"],

    // Add missing entries for the Sandringham Line
    "South Yarra": ["Richmond", "Prahran"],
    "Prahran": ["South Yarra", "Windsor"],
    "Windsor": ["Prahran", "Balaclava"],
    "Balaclava": ["Windsor", "Ripponlea"],
    "Ripponlea": ["Balaclava", "Elsternwick"],
    "Elsternwick": ["Ripponlea", "Gardenvale"],
    "Gardenvale": ["Elsternwick", "North Brighton"],
    "North Brighton": ["Gardenvale", "Middle Brighton"],
    "Middle Brighton": ["North Brighton", "Brighton Beach"],
    "Brighton Beach": ["Middle Brighton", "Hampton"],
    "Hampton": ["Brighton Beach", "Sandringham"],
    "Sandringham": ["Hampton"],

    // Correct the Frankston Line entries
    "Richmond": ["South Yarra", "East Richmond", "Burnley", "Flinders Street"],
    "East Richmond": ["Richmond", "Burnley"],
    "Burnley": ["East Richmond", "Hawthorn", "Glenferrie"],
    "Hawthorn": ["Burnley", "Glenferrie"],
    "Glenferrie": ["Hawthorn", "Auburn"],
    "Auburn": ["Glenferrie", "Camberwell"],
    "Camberwell": ["Auburn", "East Camberwell"],
    "East Camberwell": ["Camberwell", "Canterbury"],
    "Canterbury": ["East Camberwell", "Chatham"],
    "Chatham": ["Canterbury", "Surrey Hills"],
    "Surrey Hills": ["Chatham", "Mont Albert"],
    "Mont Albert": ["Surrey Hills", "Box Hill"],
    "Box Hill": ["Mont Albert", "Laburnum"],
    "Laburnum": ["Box Hill", "Blackburn"],
    "Blackburn": ["Laburnum", "Nunawading"],
    "Nunawading": ["Blackburn", "Mitcham"],
    "Mitcham": ["Nunawading", "Heatherdale"],
    "Heatherdale": ["Mitcham", "Ringwood"],
    "Ringwood": ["Heatherdale", "Ringwood East"],
    "Ringwood East": ["Ringwood", "Croydon"],
    "Croydon": ["Ringwood East", "Mooroolbark"],
    "Mooroolbark": ["Croydon", "Lilydale"],
    "Lilydale": ["Mooroolbark"],

    // Correct the Belgrave Line entries
    "Ringwood": ["Heatherdale", "Heathmont"],
    "Heathmont": ["Ringwood", "Bayswater"],
    "Bayswater": ["Heathmont", "Boronia"],
    "Boronia": ["Bayswater", "Ferntree Gully"],
    "Ferntree Gully": ["Boronia", "Upper Ferntree Gully"],
    "Upper Ferntree Gully": ["Ferntree Gully", "Upwey"],
    "Upwey": ["Upper Ferntree Gully", "Tecoma"],
    "Tecoma": ["Upwey", "Belgrave"],
    "Belgrave": ["Tecoma"],

    // Correct the Glen Waverley Line entries
    "Burnley": ["East Richmond", "Heyington"],
    "Heyington": ["Burnley", "Kooyong"],
    "Kooyong": ["Heyington", "Tooronga"],
    "Tooronga": ["Kooyong", "Gardiner"],
    "Gardiner": ["Tooronga", "Glen Iris"],
    "Glen Iris": ["Gardiner", "Darling"],
    "Darling": ["Glen Iris", "East Malvern"],
    "East Malvern": ["Darling", "Holmesglen"],
    "Holmesglen": ["East Malvern", "Jordanville"],
    "Jordanville": ["Holmesglen", "Mount Waverley"],
    "Mount Waverley": ["Jordanville", "Syndal"],
    "Syndal": ["Mount Waverley", "Glen Waverley"],
    "Glen Waverley": ["Syndal"],

    // Correct the Cranbourne/Pakenham Line entries
    "Caulfield": ["Malvern", "Glenhuntly", "Carnegie"],
    "Malvern": ["Caulfield", "Armadale"],
    "Armadale": ["Malvern", "Toorak"],
    "Toorak": ["Armadale", "Hawksburn"],
    "Hawksburn": ["Toorak", "South Yarra"],
    "Glenhuntly": ["Caulfield", "Ormond"],
    "Ormond": ["Glenhuntly", "McKinnon"],
    "McKinnon": ["Ormond", "Bentleigh"],
    "Bentleigh": ["McKinnon", "Patterson"],
    "Patterson": ["Bentleigh", "Moorabbin"],
    "Moorabbin": ["Patterson", "Highett"],
    "Highett": ["Moorabbin", "Southland"],
    "Southland": ["Highett", "Cheltenham"],
    "Cheltenham": ["Southland", "Mentone"],
    "Mentone": ["Cheltenham", "Parkdale"],
    "Parkdale": ["Mentone", "Mordialloc"],
    "Mordialloc": ["Parkdale", "Aspendale"],
    "Aspendale": ["Mordialloc", "Edithvale"],
    "Edithvale": ["Aspendale", "Chelsea"],
    "Chelsea": ["Edithvale", "Bonbeach"],
    "Bonbeach": ["Chelsea", "Carrum"],
    "Carrum": ["Bonbeach", "Seaford"],
    "Seaford": ["Carrum", "Kananook"],
    "Kananook": ["Seaford", "Frankston"],
    "Frankston": ["Kananook"],

    // Correct the Pakenham Line entries
    "Dandenong": ["Narre Warren", "Hallam"],
    "Narre Warren": ["Dandenong", "Berwick"],
    "Berwick": ["Narre Warren", "Beaconsfield"],
    "Beaconsfield": ["Berwick", "Officer"],
    "Officer": ["Beaconsfield", "Cardinia Road"],
    "Cardinia Road": ["Officer", "Pakenham"],
    "Pakenham": ["Cardinia Road"],

    // Correct the Williamstown Line entries
    "Williamstown": ["Williamstown Beach"],
    "Williamstown Beach": ["North Williamstown"],
    "North Williamstown": ["Newport"],
    "Newport": ["North Williamstown", "Spotswood"],
    "Spotswood": ["Newport", "Yarraville"],
    "Yarraville": ["Spotswood", "Seddon"],
    "Seddon": ["Yarraville", "Footscray"],
    "Footscray": ["Seddon", "Middle Footscray", "West Footscray"],
    "Middle Footscray": ["Footscray", "West Footscray"],
    "West Footscray": ["Middle Footscray", "Tottenham"],
    "Tottenham": ["West Footscray", "Sunshine"],
    "Sunshine": ["Tottenham", "Albion"],
    "Albion": ["Sunshine", "Ginifer"],
    "Ginifer": ["Albion", "St Albans"],
    "St Albans": ["Ginifer", "Keilor Plains"],
    "Keilor Plains": ["St Albans", "Watergardens"],
    "Watergardens": ["Keilor Plains", "Sydenham"],
    "Sydenham": ["Watergardens"],

    // Correct the Werribee Line entries
    "Laverton": ["Aircraft", "Williams Landing"],
    "Aircraft": ["Laverton", "Williams Landing"],
    "Williams Landing": ["Aircraft", "Hoppers Crossing"],
    "Hoppers Crossing": ["Williams Landing", "Werribee"],
    "Werribee": ["Hoppers Crossing", "Tarneit"],
    "Tarneit": ["Werribee", "Wyndham Vale"],
    "Wyndham Vale": ["Tarneit", "Deer Park"],
    "Deer Park": ["Wyndham Vale", "Ardeer"],
    "Ardeer": ["Deer Park", "Sunshine"]
};

function bfs(graph, start, end) {
    if (!graph[start] || !graph[end]) {
        console.error(`Start or end station does not exist in the graph: ${start}, ${end}`);
        return null;
    }

    let queue = [[start]];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        console.log(`Current node: ${node}`);
        console.log(`Neighbors: ${graph[node]}`);

        if (node === end) {
            return path;
        }

        // Check if graph[node] is iterable
        if (!Array.isArray(graph[node])) {
            console.error(`The node ${node} does not have an iterable array as neighbors.`);
            return null;
        }

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                let newPath = [...path, neighbor];
                queue.push(newPath);
            }
        }
    }

    console.error(`No path found from ${start} to ${end}`);
    return null;
}


function getNumberOfSteps(graph, start, end) {
    let path = bfs(graph, start, end);
    if (path) {
        return path.length - 1;
    } else {
        return -1;  // or some other error indicator if the path does not exist
    }
}

// Example usage
let startStation = "Flinders Street";
let endStation = "Box Hill";
let steps = getNumberOfSteps(trainNetwork, startStation, endStation);

if (steps != -1) {
    console.log(`The number of steps from ${startStation} to ${endStation} is: ${steps}`);
} else {
    console.log(`No path found from ${startStation} to ${endStation}`);
}
