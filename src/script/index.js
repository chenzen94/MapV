/**
 * 项目名称 - v 1.0.0
 * 类名称
 * @author : gissky
 * 基础类
 * @description : 请添加描述信息
 * @date : 2017/3/27
 */
import '../css/style.css';
let d3 = require('d3');
let {Map} = require('./Map.js');


let map = new Map("map");

function generateData(data, linkName, countries) {
    let _w={};
    let maxCount = 0;
    for(let w of data){
        if(!_w[w[linkName]]){
            _w[w[linkName]] = [];
        }
        _w[w[linkName]].push(w);
        if(maxCount<_w[w[linkName]].length){
            maxCount = _w[w[linkName]].length;
        }
    }

    for (let c of countries.features){
        c.properties.soccers=_w[ c.properties.name];
    }

    let color = d3.scaleLinear()
        .domain([0, maxCount])
        .range(['#FDD3C0','#67000C']);
    map.setBaseMap(countries,{colors:color});
    //return {data:_w,maxCount};
}
d3.json('data/countries.geo.json',function (error, countries) {
    if(error)
        throw new Error('an error occurred while retrieving data');

    d3.select("#women").on("click",function () {
        d3.json('data/fifa-17-women.json',function (error,women) {
            if(error)
                throw new Error('an error occurred while retrieving data');

            generateData(women,'Country', countries);
        });
    });
    d3.select("#men").on("click",function () {
        d3.json('data/guardian-16-men.json',function (error,men) {
            if(error)
                throw new Error('an error occurred while retrieving data');

            generateData(men,'Nationality', countries);
        });
    });
    d3.select("#teammate").on("click",function () {
        d3.json('data/soccer-teammates-men.json',function (error,teammates) {
            if(error)
                throw new Error('an error occurred while retrieving data');
            //create data
            let graph={};
            graph['nodes'] = [];
            graph['links'] = [];
            let set = new Set();
            for (let innerArr of teammates){
                set.add(innerArr[0]).add(innerArr[1]);
                graph['links'].push({"source": innerArr[0], "target": innerArr[1]});
            }

            for(let soccer of set){
                graph['nodes'].push({id:soccer});
            }

            let rainbow = d3.interpolateRainbow,
                convert = d3.scaleLinear()
                    .domain([0, graph['nodes'].length])
                    .range([0,1]);
            //draw
            map.forceDirectedGraph(graph,{colors:(i)=>rainbow(convert(i))})
        });
    });

    //show women
    d3.select("#women").dispatch('click');
});

