
let Guest_list :string[] = ['Moiz', 'Ali', 'Ahmed'];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear ' + Guest_list[i] + ',\nInvite you in our party. \n\nThank You!!\n')
// }

let absent_Guest :string = 'Ali'
let new_Guest :string = 'Ahtesham'

Guest_list[1] = new_Guest ;

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear ' + Guest_list[i] + ',\nInvite you in our party. \n\nThank You!!\n')
// }
console.log(`Mr. ${absent_Guest} is not coming..`);

console.log('Good news we found a big table so we inviting 3 more guests.')

Guest_list.unshift('Muhammad')
Guest_list.splice(3, 0, 'Arsalan')
Guest_list.push('Haider')

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear ' + Guest_list[i] + ',\nInvite you in our party. \n\nThank You!!\n')
}

console.log('\nsorry we cannot arrange big table so only 2 people were invited.')

while(Guest_list.length > 2){
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Mr. ${remove_Guest} you are not invited for dinner.`)
}

for(let i=0; i<Guest_list.length; i++){
    console.log('\n\nDear ' + Guest_list[i] + ',\n You are still invited. \n\nThank You!!\n')
}

Guest_list.splice(0, 2);
console.log(Guest_list);