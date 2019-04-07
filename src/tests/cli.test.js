const vorpal = require('vorpal');
const cli = require('../cli');

global.console = { log: jest.fn() }; //hide vorpal messages

it('It can create a cli.', () => {
    const app = cli(vorpal);
    expect(app.commands).toEqual(expect.arrayContaining([
      expect.objectContaining({
        _name: 'help'
      }),
      expect.objectContaining({
        _name: 'exit'
      })
    ]))
  });

  it('It has a list command' , () => {
    const app = cli(vorpal);
    expect(app.commands).toEqual(expect.arrayContaining([
        expect.objectContaining({
          _name: 'list'
        }),
      ]));
  });

  it('It has a search command' , () => {
    const app = cli(vorpal);
    expect(app.commands).toEqual(expect.arrayContaining([
        expect.objectContaining({
          _name: 'search'
        }),
      ]));
  });