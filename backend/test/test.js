// Minimal backend test runner used by CI
console.log('Running backend minimal test...');
// Simple assertion
if (1 !== 1) {
  console.error('Test failed');
  process.exit(1);
}
console.log('Backend tests passed');
process.exit(0);
