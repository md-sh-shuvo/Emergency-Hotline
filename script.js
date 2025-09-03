

document.body.addEventListener('click', (e)=>{
    if(e.target.matches('.btn-call')){
        // alert(e.target.innerText, ' is clicked')
        let coin = document.getElementById('coin').innerText;


        if(coin > 0){
            const parent = e.target.parentElement.parentElement; 
            const service = parent.querySelector('.services');
            const number = parent.querySelector('.number')
            alert('📞 Calling ' + service.innerText +' ' + number.innerText +'...');

            const div = document.createElement('div');
            const serviceName = parent.querySelector('.service-name');
            let date = new Date();
            let time = date.toLocaleTimeString('en-us', {hour12:true});
            div.innerHTML =  `
                <div
                  class="flex justify-between items-center bg-gray-100 p-4 mt-2 rounded-lg"
                >
                  <div class="grid gap-1">
                    <h1 class="hind-madurai-regular text-[18px]">
                      ${serviceName.innerText}
                    </h1>
                    <p class="hind-madurai-regular text-[18px] text-gray-600">
                      ${number.innerText}
                    </p>
                  </div>
                  <div class="hind-madurai-regular">${time}</div>
                </div>
            `
            document.getElementById('call-history-container').appendChild(div);
            coin-=20;
            document.getElementById('coin').innerText = coin;
        }
        else{
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        }


    }
})