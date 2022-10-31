import { Bracelet, BraceletProps } from './bracelet.entity';

describe('Bracelet test', () => {
  test('constructor', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
    };

    let bracelet = new Bracelet(braceletProps);
    expect(bracelet.props).toStrictEqual({
      ...braceletProps,
      email: '',
    });

    braceletProps = {
      name: 'Wilcson',
      code: '12312412',
      email: 'wilcson.denner@gmail.com',
    };
    bracelet = new Bracelet(braceletProps);
    expect(bracelet.id).toBeDefined();
    expect(bracelet.props).toStrictEqual({
      ...braceletProps,
      email: 'wilcson.denner@gmail.com',
    });
  });

  test('updateName method', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
    };

    let bracelet = new Bracelet(braceletProps);
    bracelet.updateName('Denner');
    expect(bracelet.name).toBe('Denner');
  });

  test('updateCode method', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
    };

    let bracelet = new Bracelet(braceletProps);
    bracelet.updateCode('12312412');
    expect(bracelet.code).toBe('12312412');
  });

  test('toJSON method', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
      email: 'wilcson.denner@gmail.com',
    };

    let bracelet = new Bracelet(braceletProps);
    bracelet.toJSON();
    expect(bracelet.props).toStrictEqual(braceletProps);
  });

  test('updateEmail method', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
    };

    let bracelet = new Bracelet(braceletProps);
    expect(bracelet.email).toBe('');
  });

  test('updateEmail with email method', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
      email: 'wilcson.denner@gmail.com',
    };

    let bracelet = new Bracelet(braceletProps);
    expect(bracelet.email).toBe('wilcson.denner@gmail.com');
  });

  test('get name method', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
    };

    let bracelet = new Bracelet(braceletProps);
    expect(bracelet.name).toBe('Wilcson');
  });

  test('get code method', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
    };

    let bracelet = new Bracelet(braceletProps);
    expect(bracelet.code).toBe('12312412');
  });

  test('get email method', () => {
    let braceletProps: BraceletProps = {
      name: 'Wilcson',
      code: '12312412',
    };

    let bracelet = new Bracelet(braceletProps);
    expect(bracelet.email).toBe('');
  });
});
