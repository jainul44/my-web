var select0 = document.getElementById('si')
var select1 = document.getElementById('select1')
var select2 = document.getElementById('select2')



var mass_array = {
    1: 'tonne', 2: 'Kilogram', 3: 'Gram', 4: 'Milligram', 5: 'Microgram',
    6: 'Imperial ton', 7: 'US ton', 8: 'Stone', 9: 'Pound', 10: 'Ounce'
}
var si_array = {
    1: 'Area', 2: 'Data Transfer Rate', 3: ' Digital Storage', 4: 'Energy',
    5: 'Frequency', 6: 'Fuel Economy', 7: 'Lenght', 8: 'Mass', 9: 'Plane Angle',
    10: 'Pressure', 11: 'Speed', 12: 'Temperature', 13: 'Time', 14: 'Volume'
}


for (index in si_array) {
    select0.options[select0.options.length] = new Option(si_array[index], index);
}   


for (index in mass_array) {
    select1.options[select1.options.length] = new Option(mass_array[index], index);
    select2.options[select2.options.length] = new Option(mass_array[index], index);
}

