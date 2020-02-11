
    //arrow function
    function squre(x)
        {
            return x*x;

        }
    number=squre(5);
    console.log(number);
    document.getElementById('example').innerHTML=number; 

    const squre2=(x)=>{return x*x};
    console.log(squre2(8));
    
     //distructuring
    const PersionalDetail={
    
        name:'viram sarvariya',
        role:'developer',
        college:'BVM',
        number:'9904168517'

    }
    const {name:fn,college:cl}= PersionalDetail;
    console.log(cl);
    //Object literal
    

