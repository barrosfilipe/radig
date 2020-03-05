const test = require('tape');
const radig = require('../src');

test('exports', t => {
	t.is(typeof radig, 'function', 'exports function');
	t.end();
});

test('check 1 digit', t => {
	let output = radig();
	t.is(typeof output, 'string', 'returns a string');
	t.is(output.length, 1, '~> has 1 characters');
	t.end();
});

test('check 3 digits', t => {
	let output = radig(3);
	t.is(typeof output, 'string', 'returns a string');
	t.is(output.length, 3, '~> has 3 characters');
	t.end();
});

test('check 16 digits', t => {
	let output = radig(16);
	t.is(typeof output, 'string', 'returns a string');
	t.is(output.length, 16, '~> has 16 characters');
	t.end();
});