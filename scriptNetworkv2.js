am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.ChordDiagram);
chart.hiddenState.properties.opacity = 0;

var colors = {
	SDG1:am4core.color("#E5243B"),
	SDG2:am4core.color("#DDA63A"),
	SDG3:am4core.color("#4C9F38"),
	SDG4:am4core.color("#C5192D"),
	SDG5:am4core.color("#FF3A21"),
	SDG6:am4core.color("#26BDE2"),
	SDG7:am4core.color("#FCC30B"),
	SDG8:am4core.color("#A21942"),
	SDG9:am4core.color("#FD6925"),
	SDG10:am4core.color("#DD1367"),
	SDG11:am4core.color("#FD9D24"),
	SDG12:am4core.color("#BF8B2E"),
	SDG13:am4core.color("#3F7E44"),
	SDG14:am4core.color("#0A97D9"),
	SDG15:am4core.color("#56C02B"),
	SDG16:am4core.color("#00689D"),
	SDG17:am4core.color("#19486A"),
	Faculty:am4core.color("#00684B"),


}
chart.colors.list = [
	am4core.color("#00684B"),
];


chart.data = [
	// node property fields take data from data items where they are first mentioned, that's 
	// why we add empty data items at the beginning and set colors here
	{from: "01 - No Proverty", "image":"E_SDG_PRINT-01.jpg", nodeType: "SDG", "color":colors.SDG1},
	{from: "02 - Zero Hunger", "image":"E_SDG_PRINT-02.jpg", nodeType: "SDG", "color":colors.SDG2},
	{from: "03 - Good Health and Well Being", "image":"E_SDG_PRINT-03.jpg", nodeType: "SDG", "color":colors.SDG3},
	{from: "04 - Quality Education", "image":"E_SDG_PRINT-04.jpg", nodeType: "SDG", "color":colors.SDG4},
	{from: "05 - Gender Equality", "image":"E_SDG_PRINT-05.jpg",  nodeType: "SDG","color":colors.SDG5},
	{from: "06 - Clean Water and Sanitation", "image":"E_SDG_PRINT-06.jpg", nodeType: "SDG", "color":colors.SDG6},
	{from: "07 - Affordable and Clean Energy", "image":"E_SDG_PRINT-07.jpg",  nodeType: "SDG","color":colors.SDG7},
	{from: "08 - Decent Work and Economic Growth", "image":"E_SDG_PRINT-08.jpg",  nodeType: "SDG","color":colors.SDG8},
	{from: "09 - Industry, Innovation and Infrastructure", "image":"E_SDG_PRINT-09.jpg",  nodeType: "SDG","color":colors.SDG9},
	{from: "10 - Reduced Inequalities", "image":"E_SDG_PRINT-10.jpg",  nodeType: "SDG","color":colors.SDG10},
	{from: "11 - Sustainable Cities and Communities", "image":"E_SDG_PRINT-11.jpg",  nodeType: "SDG","color":colors.SDG11},
	{from: "12 - Responsible Production and Consumption", "image":"E_SDG_PRINT-12.jpg",  nodeType: "SDG","color":colors.SDG12},
	{from: "13 - Climate Action", "image":"E_SDG_PRINT-13.jpg", nodeType: "SDG", "color":colors.SDG13},
	{from: "14 - Life below Water", "image":"E_SDG_PRINT-14.jpg", nodeType: "SDG", "color":colors.SDG14},
	{from: "15 - Life on Land", "image":"E_SDG_PRINT-15.jpg",  nodeType: "SDG","color":colors.SDG15},
	{from: "16 - Piece, Justice and Strong Institutions", "image":"E_SDG_PRINT-16.jpg", nodeType: "SDG", "color":colors.SDG16},
	{from: "17 - Partnership for the Goals", "image":"E_SDG_PRINT-17.jpg",  nodeType: "SDG","color":colors.SDG17},
	{ from: "Albert Angehrn", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Andre Calmon", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Atalay Atasu", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Dan Iancu", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Florin Ciocan", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Guillaume Roels", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Ludo Van Der Heyden", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Luk Van Wassenhove", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Manuel Sosa", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Micheal Freeman", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Prashant Yadav", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Sameer Hasija", nodeType: "Faculty","color":colors.Faculty},
	{ from: "So Yeon Chun", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Steve Chick", nodeType: "Faculty","color":colors.Faculty},
	{ from: "Ville Satopaa", nodeType: "Faculty","color":colors.Faculty},

	{ from: "Luk Van Wassenhove", to: "17 - Partnership for the Goals", level: 1, value: 1 },
	{ from: "Sameer Hasija", to: "16 - Piece, Justice and Strong Institutions", level: 1, value: 1 },
	{ from: "Ville Satopaa", to: "16 - Piece, Justice and Strong Institutions", level: 1, value: 1 },
	{ from: "Ludo Van Der Heyden", to: "16 - Piece, Justice and Strong Institutions", level: 1, value: 1 },
	{ from: "Albert Angehrn", to: "16 - Piece, Justice and Strong Institutions", level: 1, value: 1 },
	{ from: "Luk Van Wassenhove", to: "15 - Life on Land", level: 1, value: 1 },
	{ from: "Ludo Van Der Heyden", to: "15 - Life on Land", level: 1, value: 1 },
	{ from: "Andre Calmon", to: "13 - Climate Action", level: 1, value: 1 },
	{ from: "Dan Iancu", to: "13 - Climate Action", level: 1, value: 1 },
	{ from: "Andre Calmon", to: "12 - Responsible Production and Consumption", level: 1, value: 1 },
	{ from: "Atalay Atasu", to: "12 - Responsible Production and Consumption", level: 1, value: 1 },
	{ from: "Luk Van Wassenhove", to: "12 - Responsible Production and Consumption", level: 1, value: 1 },
	{ from: "Micheal Freeman", to: "12 - Responsible Production and Consumption", level: 1, value: 1 },
	{ from: "Sameer Hasija", to: "12 - Responsible Production and Consumption", level: 1, value: 1 },
	{ from: "Florin Ciocan", to: "12 - Responsible Production and Consumption", level: 1, value: 1 },
	{ from: "Steve Chick", to: "11 - Sustainable Cities and Communities", level: 1, value: 1 },
	{ from: "Ville Satopaa", to: "11 - Sustainable Cities and Communities", level: 1, value: 1 },
	{ from: "Florin Ciocan", to: "11 - Sustainable Cities and Communities", level: 1, value: 1 },
	{ from: "Atalay Atasu", to: "10 - Reduced Inequalities", level: 1, value: 1 },
	{ from: "Dan Iancu", to: "10 - Reduced Inequalities", level: 1, value: 1 },
	{ from: "Guillaume Roels", to: "10 - Reduced Inequalities", level: 1, value: 1 },
	{ from: "Micheal Freeman", to: "09 - Industry, Innovation and Infrastructure", level: 1, value: 1 },
	{ from: "Steve Chick", to: "09 - Industry, Innovation and Infrastructure", level: 1, value: 1 },
	{ from: "Guillaume Roels", to: "09 - Industry, Innovation and Infrastructure", level: 1, value: 1 },
	{ from: "Manuel Sosa", to: "09 - Industry, Innovation and Infrastructure", level: 1, value: 1 },
	{ from: "Albert Angehrn", to: "09 - Industry, Innovation and Infrastructure", level: 1, value: 1 },
	{ from: "Sameer Hasija", to: "08 - Decent Work and Economic Growth", level: 1, value: 1 },
	{ from: "Ville Satopaa", to: "08 - Decent Work and Economic Growth", level: 1, value: 1 },
	{ from: "So Yeon Chun", to: "08 - Decent Work and Economic Growth", level: 1, value: 1 },
	{ from: "Atalay Atasu", to: "07 - Affordable and Clean Energy", level: 1, value: 1 },
	{ from: "Ludo Van Der Heyden", to: "07 - Affordable and Clean Energy", level: 1, value: 1 },
	{ from: "Prashant Yadav", to: "06 - Clean Water and Sanitation", level: 1, value: 1 },
	{ from: "So Yeon Chun", to: "05 - Gender Equality", level: 1, value: 1 },
	{ from: "Albert Angehrn", to: "04 - Quality Education", level: 1, value: 1 },
	{ from: "Andre Calmon", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Dan Iancu", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Luk Van Wassenhove", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Micheal Freeman", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Steve Chick", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Sameer Hasija", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Ville Satopaa", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Florin Ciocan", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Prashant Yadav", to: "03 - Good Health and Well Being", level: 1, value: 1 },
	{ from: "Luk Van Wassenhove", to: "02 - Zero Hunger", level: 1, value: 1 },
	{ from: "Andre Calmon", to: "01 - No Proverty", level: 1, value: 1 },
	{ from: "Luk Van Wassenhove", to: "01 - No Proverty", level: 1, value: 1 },
	{ from: "12 - Responsible Production and Consumption", to: "17 - Partnership for the Goals", level: 2, value: 2 },
	{ from: "13 - Climate Action", to: "15 - Life on Land", level: 2, value: 2 },
	{ from: "10 - Reduced Inequalities", to: "15 - Life on Land", level: 2, value: 2 },
	{ from: "07 - Affordable and Clean Energy", to: "13 - Climate Action", level: 2, value: 1 },
	{ from: "10 - Reduced Inequalities", to: "12 - Responsible Production and Consumption", level: 2, value: 2 },
	{ from: "13 - Climate Action", to: "12 - Responsible Production and Consumption", level: 2, value: 1 },
	{ from: "03 - Good Health and Well Being", to: "12 - Responsible Production and Consumption", level: 2, value: 2 },
	{ from: "12 - Responsible Production and Consumption", to: "11 - Sustainable Cities and Communities", level: 2, value: 1 },
	{ from: "01 - No Proverty", to: "11 - Sustainable Cities and Communities", level: 2, value: 1 },
	{ from: "02 - Zero Hunger", to: "10 - Reduced Inequalities", level: 2, value: 1 },
	{ from: "17 - Partnership for the Goals", to: "10 - Reduced Inequalities", level: 2, value: 1 },
	{ from: "16 - Piece, Justice and Strong Institutions", to: "10 - Reduced Inequalities", level: 2, value: 1 },
	{ from: "12 - Responsible Production and Consumption", to: "09 - Industry, Innovation and Infrastructure", level: 2, value: 3 },
	{ from: "17 - Partnership for the Goals", to: "09 - Industry, Innovation and Infrastructure", level: 2, value: 1 },
	{ from: "16 - Piece, Justice and Strong Institutions", to: "09 - Industry, Innovation and Infrastructure", level: 2, value: 1 },
	{ from: "03 - Good Health and Well Being", to: "08 - Decent Work and Economic Growth", level: 2, value: 1 },
	{ from: "12 - Responsible Production and Consumption", to: "08 - Decent Work and Economic Growth", level: 2, value: 4 },
	{ from: "15 - Life on Land", to: "08 - Decent Work and Economic Growth", level: 2, value: 2 },
	{ from: "11 - Sustainable Cities and Communities", to: "08 - Decent Work and Economic Growth", level: 2, value: 1 },
	{ from: "16 - Piece, Justice and Strong Institutions", to: "08 - Decent Work and Economic Growth", level: 2, value: 2 },
	{ from: "01 - No Proverty", to: "07 - Affordable and Clean Energy", level: 2, value: 1 },
	{ from: "12 - Responsible Production and Consumption", to: "07 - Affordable and Clean Energy", level: 2, value: 1 },
	{ from: "17 - Partnership for the Goals", to: "07 - Affordable and Clean Energy", level: 2, value: 1 },
	{ from: "01 - No Proverty", to: "06 - Clean Water and Sanitation", level: 2, value: 1 },
	{ from: "15 - Life on Land", to: "06 - Clean Water and Sanitation", level: 2, value: 1 },
	{ from: "03 - Good Health and Well Being", to: "06 - Clean Water and Sanitation", level: 2, value: 1 },
	{ from: "01 - No Proverty", to: "05 - Gender Equality", level: 2, value: 1 },
	{ from: "02 - Zero Hunger", to: "05 - Gender Equality", level: 2, value: 1 },
	{ from: "03 - Good Health and Well Being", to: "05 - Gender Equality", level: 2, value: 2 },
	{ from: "17 - Partnership for the Goals", to: "05 - Gender Equality", level: 2, value: 1 },
	{ from: "01 - No Proverty", to: "04 - Quality Education", level: 2, value: 1 },
	{ from: "02 - Zero Hunger", to: "04 - Quality Education", level: 2, value: 1 },
	{ from: "03 - Good Health and Well Being", to: "04 - Quality Education", level: 2, value: 1 },
	{ from: "17 - Partnership for the Goals", to: "04 - Quality Education", level: 2, value: 1 },
	{ from: "10 - Reduced Inequalities", to: "03 - Good Health and Well Being", level: 2, value: 2 },
	{ from: "01 - No Proverty", to: "03 - Good Health and Well Being", level: 2, value: 3 },
	{ from: "02 - Zero Hunger", to: "03 - Good Health and Well Being", level: 2, value: 2 },
	{ from: "17 - Partnership for the Goals", to: "03 - Good Health and Well Being", level: 2, value: 2 },
	{ from: "09 - Industry, Innovation and Infrastructure", to: "03 - Good Health and Well Being", level: 2, value: 1 },
	{ from: "11 - Sustainable Cities and Communities", to: "03 - Good Health and Well Being", level: 2, value: 1 },
	{ from: "01 - No Proverty", to: "02 - Zero Hunger", level: 2, value: 2 },
	{ from: "15 - Life on Land", to: "02 - Zero Hunger", level: 2, value: 1 },
	{ from: "17 - Partnership for the Goals", to: "02 - Zero Hunger", level: 2, value: 1 },
	{ from: "10 - Reduced Inequalities", to: "01 - No Proverty", level: 2, value: 3 },
	{ from: "13 - Climate Action", to: "01 - No Proverty", level: 2, value: 1 },
	{ from: "15 - Life on Land", to: "01 - No Proverty", level: 2, value: 1 },
	{ from: "17 - Partnership for the Goals", to: "01 - No Proverty", level: 2, value: 1 },
];


//chart elements
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.dataFields.level = "level";
chart.dataFields.nodeType = "nodeType"


chart.nodePadding = 0.5;
chart.minNodeSize = 0.01;
chart.startAngle = 270;
chart.endAngle = chart.startAngle + 360;
chart.navigationBar = new am4charts.NavigationBar();

chart.sortBy = "level";
chart.fontSize = 10;
//chart.legend = new am4charts.Legend();
//chart.legend.markers.template.disabled = true;
//chart.legend.position = "right";




// make nodes draggable
var nodeTemplate = chart.nodes.template;
//nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.slice.disabled = false;
nodeTemplate.setStateOnChildren = true;
nodeTemplate.label.disabled = false;
nodeTemplate.events.off("hit");
nodeTemplate.draggable = false;
//nodeTemplate.hoverable = false;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;


var label = nodeTemplate.label;
label.relativeRotation = 90;
label.wrap= true;
label.maxWidth = 90;



// link template
var linkTemplate = chart.links.template;
linkTemplate.colorMode = "solid";
linkTemplate.fill = am4core.color("#00684B");
linkTemplate.fillOpacity = 0.2;
//linkTemplate.hoverable = false;
linkTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
//linkTemplate.strokeOpacity = linkTemplate.fillOpacity;
linkTemplate.tooltipText = "";


linkTemplate.adapter.add("fill", function(fill, target) {
  if (target.dataItem.level == 2) {
    //linkTemplate.colorMode = "solid";
    return am4core.color("#009F6E");
  }
  return fill;
});

linkTemplate.adapter.add("stroke", function(fill, target) {
  if (target.dataItem.level == 2) {
  	//linkTemplate.colorMode = "solid";
    return am4core.color("#009F6E");
  }
  return fill;
});

nodeTemplate.events.on("hit", function(event) {    
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
            dataItem.link.hoverable = false;
            dataItem.toNode.label.hoverable = false;
        }

    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
            dataItem.link.hoverable = false;
            dataItem.toNode.label.hoverable = false;
        }
    }) 

    node.label.isHover = true;   
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("doublehit", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
            dataItem.link.hoverable = true;
            dataItem.toNode.label.hoverable = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           	dataItem.fromNode.label.isHover = false;
           	dataItem.link.hoverable = true;
            dataItem.toNode.label.hoverable = true;
        }
    })

    node.label.isHover = false;
})

/*
var button = chart.chartContainer.createChild(am4core.Button);
button.label.text = "sdfsqfqsdfsfsq";
button.padding(5, 5, 5, 5);
button.width = 20;
button.align = "left";
button.marginRight = 15;
button.events.on("hit", function(){
	chart.links.template.adapter.add("opacity", function(target){
		if(target.dataItem.level == 2){
			console.log("help");
			return 0;
		} else if(target.dataItem.level == 1){
			console.log("3");
			return 1; 
		}
		console.log(target.dataItem.level);
	})
		
	



})

*/


// when rolled over the node, make all the links rolled-over



var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 1;
hoverState.properties.strokeOpacity = 1;
//hoverState.touchOutBehavior = "leave";

var hiddenState = linkTemplate.states.create("hid");
hiddenState.properties.fillOpacity = 0;
hiddenState.properties.strokeOpacity = 0; 




}); // end am4core.ready()