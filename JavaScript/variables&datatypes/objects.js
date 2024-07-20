// JavaScript code demonstrating a simple object
// let school = {
//     name: 'Vivekananda School',
//     location: 'Delhi',
//     established: '1971',
    
// }
//         console.log(schoolname)
            

// JavaScript code demonstrating a simple object
let school = 
{
    name: 'Brihan Maharashtra College Of Commerce and Fintech',
    location: 'Pondycherry',
    established: '1978',
    displayInfo: function () 
    {
        console.log(`${school.location.split(' ')[0]}`);
        console.log(`${school.name.split('  ')[0]}`);
        console.log(`${school.established.split(' ')[0]}`);
              //in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();   
