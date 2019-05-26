$(document).ready(() => {
    $('#allUsersButton').click(() => {
        console.log('hello')
        $.ajax({
            url: 'http://localhost:3000/results',
            type: 'GET',
            success: (data) => {
                console.log(data.time, data.supply);
            }
        })
    })
})