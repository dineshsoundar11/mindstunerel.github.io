$(document).ready(AppLoaded)


function AppLoaded() {
    console.log('App is Loaded and Ready');
    apply_event_handlers();
}

let shipping_time = 5;
let shipping_cost = 0;
let arrival_date = '';
let weightOz = 0;
let weightkg = 0;
let shipping_cost1 = 0;
let shipping_cost2 = 0;
let shipping_cost3 = 0;

/********************
 * will add event handlers to all of the appropriate elements
 *@params: none
 *@return: none
 ********************/
function apply_event_handlers() {
    calculateButton(); //trigger calculations
}

/********************
 * function that triggers when calculate button is pressed
 *@params: none
 *@return: none
 ********************/
function calculateButton() {
    $("#calcBtn").click(function () {
        let inputValidation = $("#weightInput").val()
        if (inputValidation == '') {
            $('.btnValidation').addClass('red');
            return false;
        } else {
            console.log('calcBtn called.');
            $('btn-validation').val('');
            calculate_shipping(inputValidation, shipping_time)
            $("#weightInput").val('');
            $('.btnValidation').removeClass('red');
            calculateData()
            $('.icon-img').addClass('bounce');
            setTimeout(function () {
                $('.icon-img').removeClass('bounce');
            }, 1000);
        }
    });
}

/********************
 * checks the incoming values. If anything other than a number or period is pressed, it returns false.
 *@params: event {object} the object that holds the details of the event
 *@return: true if the key pressed is a number or the period key, false if it is not
 ********************/

function validate_keydown(evt, obj) {
    let charCode = (evt.which) ? evt.which : event.keyCode
    let value = obj.value;
    let dotcontains = value.indexOf(".") != -1;
    if (dotcontains)
        if (charCode == 46) return false;
    if (charCode == 46) return true;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

/********************
* update the stored value for the shipping based on the clicked radio button.
*@global: shipping_time
@params: none
*@return: none
********************/
function change_shipping_type(time) {

    shipping_time = time;

    let currentDate = new Date();
    let numberOfDaysToAdd = time;
    currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);

    let dd = currentDate.getDate()+2;
    let mm = currentDate.getMonth();
    let y = currentDate.getFullYear();

    arrival_date = dd + '/' + mm + '/' + y;
}

/********************
 * process the shipping time and weight, and return an object with the shipping time and weight
 *@params: weight, shipping_time
 *@return: an object with the following properties and values: weight and cost.
 ********************/
function calculate_shipping(weight, shipping_time) {
    weightOz = weight * 1000;
    weightKg = weight * 1;

    if (weightOz <= 500) {
        shipping_cost1 = (1499.00).toFixed(2);
    } else if (weightOz >= 501 && weightOz <= 1000) {
        shipping_cost1 = (2100.00).toFixed(2);
      } else if (weightOz >= 1001 && weightOz <= 1500) {
        shipping_cost1 = (2350.00).toFixed(2);
      } else if (weightOz >= 1501 && weightOz <= 2000) {
        shipping_cost1 = (2675.00).toFixed(2);
      } else if (weightOz >= 2001 && weightOz <= 2500) {
        shipping_cost1 = (2900.00).toFixed(2);
          } else if (weightOz >= 2501 && weightOz <= 3000) {
        shipping_cost1 = (3200.00).toFixed(2);
            } else if (weightOz >= 3001 && weightOz <= 3500) {
        shipping_cost1 = (3500.00).toFixed(2);
              } else if (weightOz >= 3501 && weightOz <= 4000) {
        shipping_cost1 = (3750.00).toFixed(2);
                } else if (weightOz >= 4001 && weightOz <= 4999) {
        shipping_cost1 = (4000.00).toFixed(2);
    } else if (weightOz >= 5000 && weightOz <= 7999) {
      shipping_cost1 = (weightOz * 0.72).toFixed(2);
      } else if (weightOz >= 8000 && weightOz <= 9999) {
      shipping_cost1 = (weightOz * 0.67).toFixed(2);
    } else if (weightOz >= 10000 && weightOz <= 14999) {
      shipping_cost1 = (weightOz * 0.64).toFixed(2);
                } else if (weightOz >= 15000 && weightOz <= 19999) {
      shipping_cost1 = (weightOz * 0.60).toFixed(2);
                  } else if (weightOz >= 20000 && weightOz <= 24999) {
      shipping_cost1 = (weightOz * 0.58).toFixed(2);
    } else if (weightOz >= 25000) {
        shipping_cost1 = (weightOz * 0.53).toFixed(2);
    }



  if (weightOz <= 500) {
        shipping_cost2 = (1600.00).toFixed(2);
    } else if (weightOz >= 501 && weightOz <= 1000) {
        shipping_cost2 = (1900.00).toFixed(2);
      } else if (weightOz >= 1001 && weightOz <= 1500) {
        shipping_cost2 = (2200.00).toFixed(2);
        } else if (weightOz >= 1501 && weightOz <= 2000) {
        shipping_cost2 = (2500.00).toFixed(2);
        } else if (weightOz >= 2001 && weightOz <= 2500) {
        shipping_cost2 = (2800.00).toFixed(2);
          } else if (weightOz >= 2501 && weightOz <= 3000) {
        shipping_cost2 = (3100.00).toFixed(2);
            } else if (weightOz >= 3001 && weightOz <= 3500) {
        shipping_cost2 = (3400.00).toFixed(2);
              } else if (weightOz >= 3501 && weightOz <= 4000) {
        shipping_cost2 = (3700.00).toFixed(2);
                } else if (weightOz >= 4001 && weightOz <= 4999) {
        shipping_cost2 = (4000.00).toFixed(2);
    } else if (weightOz >= 5000 && weightOz <= 7999) {
      shipping_cost2 = (weightOz * 0.68).toFixed(2);
      } else if (weightOz >= 8000 && weightOz <= 9999) {
      shipping_cost2 = (weightOz * 0.62).toFixed(2);
        } else if (weightOz >= 10000 && weightOz <= 14999) {
      shipping_cost2 = (weightOz * 0.59).toFixed(2);
                } else if (weightOz >= 15000 && weightOz <= 19999) {
      shipping_cost2 = (weightOz * 0.56).toFixed(2);
                  } else if (weightOz >= 20000 && weightOz <= 24999) {
      shipping_cost2 = (weightOz * 0.53).toFixed(2);
    } else if (weightOz >= 25000) {
        shipping_cost2 = (weightOz * 0.50).toFixed(2);
    }


  if (weightOz <= 500) {
        shipping_cost3 = (1520.00).toFixed(2);
    } else if (weightOz >= 501 && weightOz <= 1000) {
        shipping_cost3 = (2225.00).toFixed(2);
      } else if (weightOz >= 1001 && weightOz <= 1500) {
        shipping_cost3 = (2525.00).toFixed(2);
        } else if (weightOz >= 1501 && weightOz <= 2000) {
        shipping_cost3 = (2875.00).toFixed(2);
        } else if (weightOz >= 2001 && weightOz <= 2500) {
        shipping_cost3 = (3175.00).toFixed(2);
          } else if (weightOz >= 2501 && weightOz <= 3000) {
        shipping_cost3 = (3525.00).toFixed(2);
            } else if (weightOz >= 3001 && weightOz <= 3500) {
        shipping_cost3 = (3875.00).toFixed(2);
              } else if (weightOz >= 3501 && weightOz <= 4000) {
        shipping_cost3 = (4150.00).toFixed(2);
                } else if (weightOz >= 4001 && weightOz <= 4999) {
        shipping_cost3 = (4450.00).toFixed(2);
    } else if (weightOz >= 5000 && weightOz <= 7999) {
      shipping_cost3 = (weightOz * 0.797).toFixed(2);
      } else if (weightOz >= 8000 && weightOz <= 9999) {
      shipping_cost3 = (weightOz * 0.690).toFixed(2);
        } else if (weightOz >= 10000 && weightOz <= 14999) {
      shipping_cost3 = (weightOz * 0.590).toFixed(2);
                } else if (weightOz >= 15000 && weightOz <= 19999) {
      shipping_cost3 = (weightOz * 0.531).toFixed(2);
                  } else if (weightOz >= 20000 && weightOz <= 24999) {
      shipping_cost3 = (weightOz * 0.507).toFixed(2);
    } else if (weightOz >= 25000) {
        shipping_cost3 = (weightOz * 0.466).toFixed(2);
    }



  if (weightOz <= 500) {
        shipping_cost4 = (1625.00).toFixed(2);
    } else if (weightOz >= 501 && weightOz <= 1000) {
        shipping_cost4 = (2375.00).toFixed(2);
      } else if (weightOz >= 1001 && weightOz <= 1500) {
        shipping_cost4 = (2690.00).toFixed(2);
        } else if (weightOz >= 1501 && weightOz <= 2000) {
        shipping_cost4 = (3075.00).toFixed(2);
        } else if (weightOz >= 2001 && weightOz <= 2500) {
        shipping_cost4 = (3375.00).toFixed(2);
          } else if (weightOz >= 2501 && weightOz <= 3000) {
        shipping_cost4 = (3750.00).toFixed(2);
            } else if (weightOz >= 3001 && weightOz <= 3500) {
        shipping_cost4 = (4125.00).toFixed(2);
              } else if (weightOz >= 3501 && weightOz <= 4000) {
        shipping_cost4 = (4450.00).toFixed(2);
                } else if (weightOz >= 4001 && weightOz <= 4999) {
        shipping_cost4 = (4750.00).toFixed(2);
    } else if (weightOz >= 5000 && weightOz <= 7999) {
      shipping_cost4 = (weightOz * 0.850).toFixed(2);
      } else if (weightOz >= 8000 && weightOz <= 9999) {
      shipping_cost4 = (weightOz * 0.779).toFixed(2);
        } else if (weightOz >= 10000 && weightOz <= 14999) {
      shipping_cost4 = (weightOz * 0.679).toFixed(2);
                } else if (weightOz >= 15000 && weightOz <= 19999) {
      shipping_cost4 = (weightOz * 0.614).toFixed(2);
                  } else if (weightOz >= 20000 && weightOz <= 24999) {
      shipping_cost4 = (weightOz * 0.561).toFixed(2);
    } else if (weightOz >= 25000) {
        shipping_cost4 = (weightOz * 0.490).toFixed(2);
    }


    if (shipping_time === 5) {
        shipping_cost = shipping_cost1 * 1;
    } else if (shipping_time === 4) {
        shipping_cost = shipping_cost2 * 1;
    } else if (shipping_time === 3) {
        shipping_cost = shipping_cost3 * 1;
      } else if (shipping_time === 2) {
        shipping_cost = shipping_cost4 * 1;
    }
    change_shipping_type(shipping_time);
}

/********************
 * Populate Data on the DOM
 *@params: none
 *@return: an object with the following properties and values: arrival_date, weight and cost.
 ********************/
function calculateData() {
    $('#totalOz').text(weightOz);
     $('#totalKg').text(weightKg);
    $('#totalLbs').text((weightOz * 2.20462).toFixed(2));

    $('#TotalCost').text("Rs." + shipping_cost.toFixed(2));
}
