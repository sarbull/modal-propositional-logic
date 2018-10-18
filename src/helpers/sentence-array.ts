export class SentenceArray {
  static doResult(string: string) {
    const lines = string.split('\n');

    return lines.map(l => {
      const words = l.split(' ');
      const props = [];
      let sentence = '';

      words.forEach(w => {
        switch (w) {
          case 'IF':
            // props.push('IF');
            break;
          case 'OR':
            if (sentence !== '') {
              props.push(sentence.toLowerCase().trimLeft());
              props.push('|');
              sentence = '';
            }
            break;
          case 'THEN':
            if (sentence !== '') {
              props.push(sentence.toLowerCase().trimLeft());
              props.push('->');
              sentence = '';
            }
            break;
          case 'AND':
            if (sentence !== '') {
              props.push(sentence.toLowerCase().trimLeft());
              props.push('&');
              sentence = '';
            }
            break;
          case 'IFF':
            if (sentence !== '') {
              props.push(sentence.toLowerCase().trimLeft());
              sentence = '';
              props.push('<->');
            }
            break;
          case '.':
            props.push(sentence.toLowerCase().trimLeft());
            break;
          case 'NOT':
            sentence = `~${sentence.trimLeft()}`;
            break;
          default:
            sentence = `${sentence} ${w}`;
            break;
        }
      });

      return props;
    });
  }
}
