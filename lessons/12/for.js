for ( /* блок объявления переменных */ let i = 1 ;
  /* блок условие */ i < 4 ;
  /* блок действия после каждой итеррации */ i++ )
  {
    console.log('я подошел к корзине ' + i + ' с яблоками');
    console.log('я посчитал каждое яблоко в корзине ' + i);
    console.log('я записал сколько было в корзине ' + i + ' яблок');
  }

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

let b = 0;

while (b < 5) {
  console.log(b);
  b++;
}

let a = 0;

for (;a < 10; a++) {}

console.log(a);