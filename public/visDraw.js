function drawIvans() {
    var nodes = null;
    var edges = null;
    var network = null;
    var DIR = "images/";

    nodes = [
        { id: 1, shape: "circularImage", image: DIR + "logo.svg" },
        { id: 2, shape: "circularImage", image: DIR + "astronaut.svg", fixed: true },
        { id: 3, shape: "circularImage", image: DIR + "logo.svg" },
    ]

    edges = [
        { from: 1, to: 2 },
        { from: 3, to: 2 }
    ]

    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var options = {
        nodes: {
          borderWidth: 5,
          size: 80,
          color: {
            border: "#222222",
            background: "#666666",
          },
          font: { color: "#eeeeee" },
        },
        edges: {
          color: "lightgray",
        },
      };
    network = new vis.Network(container, data, options);
}

function drawGraph() {
    var nodes = new vis.DataSet([
        { id: 1, label: "Node 1" },
        { id: 2, label: "Node 2" },
        { id: 3, label: "Node 3" },
        { id: 4, label: "Node 4" },
        { id: 5, label: "Node 5" }
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 3 }
    ]);

    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);
}