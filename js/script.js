var url = 'https://sandip0.000webhostapp.com/app/'

fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
                buildTable(data)
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });






function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].category}</td>
                    <td><img src=${data[i].link} height="50" width="50" ></img></td>
              </tr>`
        table.innerHTML += row


    }
}