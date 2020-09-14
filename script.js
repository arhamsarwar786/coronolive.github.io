////Toggle

// var k=1
// $('.subToggles').click(function(){
//     if(k==1){
//         // $(this).
//         $().html('<i class="fas fa-caret-down"></i>')
//         k=0
//     }
//     else{
//         k=1
//         // $('.subToggles1').hide(500)
//         $('#change').html('<i class="fas fa-caret-up"></i>')
//     }
// })
jQuery('.subToggles').click(function () {
    var index = $(this).parent().index(),
        newTarget = jQuery('.subToggles1').eq(index);
    jQuery('.subToggles1').not(newTarget).slideUp('fast')
    newTarget.delay('fast').slideToggle('fast')
    return false;
})





var z = 1
$('.mainDiv').click(function () {
    if (z == 1) {
        document.querySelector('.mainDivMain2').style.display = 'flex'
        document.querySelector('.mainDivMain2').style.border = '1px solid rgb(95, 95, 255)'
        document.querySelector('.mainDiv').style.border = '1px solid rgb(95, 95, 255)'


        z = 0
    }
    else {
        z = 1;
        document.querySelector('.mainDivMain2').style.display = 'none'
        document.querySelector('.mainDiv').style.border = '1px solid rgb(223, 223, 223)'


    }

})



$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});






///////////////////////////////
$(document).ready(function () {


    console.log("start");
    $.get('https://api.covid19api.com/summary', function (data) {
        console.log(data);

        for (i = 0; i < data['Countries'].length; i++) {
            var _data = data['Countries'][i]['Country']
            document.getElementById('myUl').innerHTML += `<li id='myLi' value=${[i]}><span>${_data}</span></li> `
            // console.log(i);
        }
       
        $('#myUl').on("click", 'li', (event) => {
            //   console.log();
            $('.mainDivMain2').hide()
            for (x = 0; x < data['Countries'].length; x++) {
                var _data2 = data['Countries'][x]['Country']
                var _TotalM = data['Countries'][x]['TotalConfirmed']
            }

            var _Total = data['Countries'][$(event.target).val()]['TotalConfirmed']
            var _TotalR = data['Countries'][$(event.target).val()]['TotalRecovered']
            var _TotalD = data['Countries'][$(event.target).val()]['TotalDeaths']



            _Total ? $('#totalCases').text(_Total) : $('#totalCases').text("Loading")
            $('#totalRecover').text(_TotalR)
            $('#totalDeaths').text(_TotalD)
            _TotalActive = _Total - _TotalR
            $('#totalActive').text(_TotalActive)

            console.log(data['Countries'][$(event.target).val()]['TotalConfirmed']);

            if (_data == _data2) {
                // alert("MATCHED")
                var _target = $(event.target).text()
                console.log(_target);
                $('#showCountry').text(_target)
            }
        }
        )

    })

    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myUl li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


});
