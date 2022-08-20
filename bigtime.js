
$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE
    $.getJSON("bigtime.json",
        function (data) {
            var student = '';

            // ITERATING THROUGH OBJECTS
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING
                // DATA FROM JSON OBJECT
                student += '<tr>';

                student += '<td>' +
                    value.id + '</td>';

                student += '<td>' +
                    value.com_name + '</td>';

                student += '<td>' +
                    value.mail + '</td>';

                student += '<td>' +
                    value.mob_no + '</td>';


                student += '<td>' +
                    value.project_name + '</td>';

                student += '<td>' +

                    value.created_at.toString().replace('T', ' ') + '</td>';

                student += '<td>' +
                    value.updated_at.toString().replace('T', ' ') + '</td>';

                student += '</tr>';
            });

            // INSERTING ROWS INTO TABLE 
            // $('#table').append(student);
            document.getElementById("table").innerHTML = student;



        });

    const date = new Date();
    var remove = date.toISOString().replace('T', ' ').replace('Z', ' ');
    console.log("dateTime removed T & Z: ", remove);
});