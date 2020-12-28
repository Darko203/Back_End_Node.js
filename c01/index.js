// - собирање на два броја / success е ако собирокот е парен број, fail ако е непарен

const getSum = (n,m) => {
  return new Promise((success, fail) =>{
    let sum = n+m;
    if(sum % 2 == 0){
      return success(sum)
    }
    return fail(sum)
  })
}
getSum(5,7)
.then(data=>{
  console.log('success:', data)
})
.catch(err=>{
  console.log('fail:', err)
})

const asawFn = async () => {
try {
  let number = await getSum(6,8)
  console.log('Asaw Success:', number)
} catch(err){
console.log('Asaw Error:', err)
}
}
asawFn()

// - конверзија на температура од целзиусови во фаренхајтови степени / success е ако степените се помалку од 100, fail ако се еднакви или повеќе од 100

const getTemperature = (n) =>{
  return new Promise((success,fail) =>{
    let faren = 9/5 * n + 32
    if(faren < 100){
      return success(n);
    }
    return fail(n);

  });
};
getTemperature(20)
.then(data =>{
  console.log('SUCCESS:',data);
})
.catch(err =>{
console.log('FAIL:',err);
})

const asaFn = async() => {
  try{
    let a = await getTemperature(40);
    console.log('ASAW SUCCESS:',a);
  }catch(err){
    console.log('ASAW FAIL:',err)
  }
}
asaFn()

// - да се изброи во текст колку пати се појавува буквата "a", ако бројот е поволем од 0 во тој случај враќаме success, ако е === 0 во тој случај 

const getCount = (str, letter) => {
  return new Promise((succes,fail) =>{
    var letterCount = 0;
    for(var position = 0; position < str.length; position++)
    {
      if(str.charAt(position) == letter)
      {
         letterCount += 1;
      }
      
    }
    if(letterCount > 0) {
      return succes(str)
    }else if(letterCount === 0){
      return fail(str)
    }
    
  });
};

getCount('perat', 'i')
.then(data=>{
  console.log('SUCCES:',data);
})
.catch(err=>{
  console.log('FAIL:',err);
});

const asawCount = async () =>{
  try{
    let a = await getCount('Leonardo', 'o');
    console.log('ASAW SUCCES:', a)
  }catch(err){
    console.log('ASAW FAIL:', err)
  }
}
asawCount();


