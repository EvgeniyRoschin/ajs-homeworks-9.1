import Daemon from '../daemon';
import Magician from '../magician';

test('Magician without stoned', () => {
  const magician = new Magician('Mgcn');
  magician.distance = 1;
  expect(magician.attack).toBe(100);
});

test('Daemon without stoned', () => {
  const daemon = new Daemon('Dmn');
  daemon.distance = 5;
  expect(daemon.attack).toBe(48);
});

test('Magician with stoned', () => {
  const magician = new Magician('Mgcn');
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});
