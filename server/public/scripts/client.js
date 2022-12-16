console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      age: 'testName',
      name: 'testName',
      gender: 'testName',
      rtt: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then((res)=>{
    renderKoala(res)
  })
  .catch((resErr)=>{
    console.log('something broke in .ajax get', resErr);
  })
}
  
// end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
}

function renderKoala(array) {
  $('#viewKoalas').empty();
  for (let item of array) {
    $('#viewKoalas').append(`
      <tr data-id=${item.id}>
        <td>${item.age}</td>
        <td>${item.name}</td>
        <td>${item.gender}</td>
        <td>${item.rtt}</td>
        <td>${item.notes}</td>
      </tr>
    `)
  }
}//we need to conditional add a button basse off on rtt status.