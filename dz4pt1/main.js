


async function fetchData() {
  const peoplesBlock = document.querySelector('.peoples');

  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      
    }

    const data = await response.json();

    data.forEach(person => {
      const personCard = document.createElement('div');
      personCard.classList.add('card');
      personCard.innerHTML = `
        <img src="${person.image}" alt="">
        <h3>${person.name}</h3>
        <span>Age: ${person.age}</span>
        <span>record: ${person.record}</span>
      `;
      peoplesBlock.append(personCard);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();