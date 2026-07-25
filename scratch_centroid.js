const India = require('@svg-maps/india').default;

const stateIds = ['jk', 'pb', 'rj', 'up', 'br', 'as', 'wb', 'jh', 'mp', 'gj', 'mh', 'tg', 'ka', 'tn', 'kl'];
const coords = {};

stateIds.forEach(id => {
  const loc = India.locations.find(l => l.id === id);
  if (loc) {
    const path = loc.path;
    // Extract all numbers from the path
    const numbers = path.match(/-?\d+(\.\d+)?/g);
    if (!numbers) return;
    
    // Quick estimation for bounding box. The svg-maps path is a sequence of relative or absolute coordinates. 
    // This isn't perfect for paths with lots of relative commands without a starting M, 
    // but the @svg-maps/india usually starts with an absolute 'M' and then relative 'm' or absolute 'L' etc.
    // Let's just use a simpler method since we can just test it out.
  }
});
