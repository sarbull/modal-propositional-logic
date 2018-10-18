import { SentenceArray } from './sentence-array';

describe('SentenceArray', () => {
  let string: string;

  it('should transofrm sentences to array - problem 1', () => {
    string = `IF weather is sunny THEN park is beautiful .
              IF park is beautiful THEN people walk dogs .
              IF people walk dogs THEN park full of dogs .
              Weather is sunny AND NOT park full of dogs .`;

    expect(SentenceArray.doResult(string)).toEqual([
      [ 'weather is sunny', '->', 'park is beautiful' ],
      [ 'park is beautiful', '->', 'people walk dogs' ],
      [ 'people walk dogs', '->', 'park full of dogs' ],
      [ 'weather is sunny', '&', '~ park full of dogs' ]
    ]);
  });

  it('should transofrm sentences to array - problem 2', () => {
    string = `IF Paul likes apples THEN Paul buys apples .
              IF Wendy likes apples THEN Wendy buys apples .
              IF Susan likes apples THEN Susan buys apples .
              IF Wendy buys apples THEN basket has apples .
              Paul likes apples OR Wendy likes apples OR Susan likes apples .
              Basket has apples .`;

    expect(SentenceArray.doResult(string)).toEqual([
      [ 'paul likes apples', '->', 'paul buys apples' ],
      [ 'wendy likes apples', '->', 'wendy buys apples' ],
      [ 'susan likes apples', '->', 'susan buys apples' ],
      [ 'wendy buys apples', '->', 'basket has apples' ],
      [ 'paul likes apples', '|', 'wendy likes apples', '|', 'susan likes apples' ],
      [ 'basket has apples' ]
    ]);
  });

  it('should transofrm sentences to array - problem 3', () => {
    string = `IF Yueh is blackmailed THEN Yueh pacts with Harkonen .
              IF Yueh pacts with Harkonen THEN NOT Yueh is loyal .
              Duke Atreides rewards Yueh IFF Yueh is loyal .
              Yueh is blackmailed AND Duke Atreides rewards Yueh .`;

    expect(SentenceArray.doResult(string)).toEqual([
      [ 'yueh is blackmailed', '->', 'yueh pacts with harkonen' ],
      [ 'yueh pacts with harkonen', '->', '~ yueh is loyal' ],
      [ 'duke atreides rewards yueh', '<->', 'yueh is loyal' ],
      [ 'yueh is blackmailed', '&', 'duke atreides rewards yueh']
    ]);
  });

  it('should transofrm sentences to array - problem 4', () => {
    string = `Alfred takes car OR Alfred takes bus .
              Car goes work IFF car has gas .
              Alfred goes work IFF Alfred takes car AND car goes work .
              Alfred goes work IFF Alfred takes bus AND bus goes work .
              Alfred takes bus IFF NOT car goes work .
              Alfred takes car IFF car has gas .
              Bus goes work IFF NOT city has traffic .
              NOT car has gas .
              City has traffic .
              Alfred goes work .`;

    expect(SentenceArray.doResult(string)).toEqual([
      [ 'alfred takes car', '|', 'alfred takes bus' ],
      [ 'car goes work', '<->', 'car has gas' ],
      [ 'alfred goes work', '<->', 'alfred takes car', '&', 'car goes work' ],
      [ 'alfred goes work', '<->', 'alfred takes bus', '&', 'bus goes work' ],
      [ 'alfred takes bus', '<->', '~ car goes work' ],
      [ 'alfred takes car', '<->', 'car has gas' ],
      [ 'bus goes work', '<->', '~ city has traffic' ],
      [ '~ car has gas' ],
      [ 'city has traffic' ],
      [ 'alfred goes work' ]
    ]);
  });



});
