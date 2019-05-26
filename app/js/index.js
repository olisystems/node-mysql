$(document).ready(() => {
    $('#allUsersButton').click(() => {
        console.log('hello')
        $.ajax({
            url: 'http://localhost:3000/results',
            type: 'GET',
            success: (data) => {
                // graph data
                var data = [
                    {
                        x: data.time,
                        y: data.supply,
                        type: 'scatter'
                    }
                ];
                // plot graph
                Plotly.newPlot('myDiv', data);
            }
        })
    })
})