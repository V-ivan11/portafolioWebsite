function drawIvans() {
    var nodes = null;
    var edges = null;
    var network = null;
    var DIR = "images/";

    nodes = [
        { id: 1, shape: "circularImage", image: DIR + "photo_ins.svg", size: 80, mass:2 },
        { id: 2, shape: "image", image: DIR + "photo_git.svg", mass: 10, size: 130 },
        { id: 3, shape: "circularImage", image: DIR + "photo_lin.svg", size: 80, mass:2 },
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
        height: '100%',
        weight: '100%',
        physics: true,
        edges: {
          color: "lightgray",
          length: 220,
          width: 2
        },
        interaction:{
            dragView: false,
            zoomView: false
        }
      };
    network = new vis.Network(container, data, options);
}