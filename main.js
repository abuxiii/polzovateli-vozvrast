const users = {};

for (let i = 1; i <= 10; i++) {
  const name = prompt(`Введите имя пользователя №${i}:`);
  const age = prompt(`Введите возраст пользователя №${i}:`);

  users[i] = { name: name, age: parseInt(age) };
  
  console.log(`Пользователь - ${i}`);
  console.log(`Имя - ${name}`);
  console.log(`Возраст - ${age}`);
}

console.log('Весь объект пользователей:', users);
