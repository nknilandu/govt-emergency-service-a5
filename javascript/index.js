
let historyArr = [];
document.getElementById('card-container').addEventListener('click', function(event) {
    // console.log(event.target.classList.contains('call-btn'));
    if(event.target.classList.contains('call-btn')){
        // console.log(true);
        // save data to variable
        const cardTitle = event.target.parentNode.parentNode.querySelector('.card-title').innerText;
        const callNumber = event.target.parentNode.parentNode.querySelector('.call-number').innerText;
        console.log(cardTitle, callNumber)

        //add card to history
        const historyCardParent = document.getElementById('historyCardParent');
        const historyCard = document.createElement('div');
        // get current time
        const now = new Date();
        const currentTime = now.toLocaleTimeString(); 


        historyArr.push({
            title : cardTitle,
            number: callNumber,
            time : currentTime
        });
        console.log(historyArr)

        historyCard.innerHTML = `
            <div class="flex justify-between items-center gap-2 rounded-xl bg-[#FAFAFA] p-3 mt-3 overflow-hidden">
                <div>
                    <h4 class="font-medium">${historyArr[historyArr.length-1].title}</h4>
                    <p class="text-[#5C5C5C]">${historyArr[historyArr.length-1].number}</p>
                </div>
                <p class="text-[#5C5C5C]">${historyArr[historyArr.length-1].time}</p>
            </div>
        `;
        historyCardParent.append(historyCard);

        // remove placeholder text
        if(document.querySelector('.no-data-text')) {
            document.querySelector('.no-data-text').remove();
        }
        
    }

})

// clear history and array
document.getElementById('clear-btn').addEventListener('click', function(event) {
    historyArr = [];
    const historyCardParent = document.getElementById('historyCardParent');
    historyCardParent.innerHTML = `
        <p class="no-data-text h-36 w-full flex items-center justify-center"> No Data found</p>
    `;
})



// document.getElementById('card-container').addEventListener('click', function(event) {
//     // console.log(event.target.classList)
//     if(event.target.classList.contains('call-btn')) {
//         // save data in variable
//         const cardTitle = event.target.parentNode.parentNode.querySelector('.card-title').innerText;
//         const callNumber = event.target.parentNode.parentNode.querySelector('.call-number').innerText;
//         console.log(cardTitle)
//         console.log(callNumber)

//         // add card in history
//         const historyCardParent = document.getElementById('historyCardParent')
//         const historyCard = document.createElement('div');
//         historyCard.innerHTML = `
//             <div class="flex justify-between items-center rounded-xl bg-[#FAFAFA] p-3 mt-3">
//                 <div>
//                     <h4 class="font-medium">${cardTitle}</h4>
//                     <p class="text-[#5C5C5C]">${callNumber}</p>
//                 </div>
//                 <p class="text-[#5C5C5C]">11:36:58 AM</p>
//             </div>      
//         `;
//         historyCardParent.append(historyCard);
//         // console.log(historyCard)


//         // remove placeholder
//         if(historyCardParent.querySelector('.no-data-text')) {
//             historyCardParent.querySelector('.no-data-text').remove();
//         }


//     }
// })

// note: 
// classList is array like object but not array. On the otherhand className returns String. such as:
// event.target.classList.contains("call-btn"); // true
// event.target.classList.add("active");        // adds a class
// event.target.classList.remove("primary");    // removes a class
// event.target.classList.toggle("hidden");     // toggles a class

// Remove the entire <p> element:
// document.getElementById('id-name').remove() // work perfectly
// document.querySelector('any-class-or-id-name').remove() // work perfectly
// document.getElementsByClassName('class-name').remove()  // but it does not work because of it's html collection list
// document.querySelectorAll('any-class-or-id-name').remove()  // but it does not work because of it's html collection list

