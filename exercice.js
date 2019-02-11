function useSortingHat(char) {
    let choice = ''
    
    switch (choice) {
      case 'Harry Potter':
        choice = 'Gryffindor';
      case 'Draco Malfoy':
        choice = 'Ravenclaw';
      case 'Luna Lovegood':
        choice = 'Ravenclaw';
      default:
        choice ='Gryffindor'
    }
  }
  
  const checkMyGringottsAccount = () => {
    myMoney = Math.random() * 100;
  
    if (myMoney > 0 || myMoney < 30) {
      return 'Hello Weasley';
    } else if ( myMoney > 30 ||  myMoney < 75 ) {
      return 'Hey, thats cool';
    } else {
      return 'Youre reach!';
    }
  }

myCharacter = 'Luna Lovegood';

myCharacterHouse = useSortingHat();

isMyCharacterRich = checkMyGringottsAccount();
