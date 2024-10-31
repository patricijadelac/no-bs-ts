// --- Optional parameters ---
// Denoted by ? after parameter name
// Must come after required parameters
function printIngredient(
  quantity: string,
  ingredient: string,
  extra?: string
): void {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`);
}
printIngredient('1C', 'Flour'); // 1C Flour
printIngredient('1C', 'Sugar', 'something more'); // 1C Sugar something more

// --- Optional fields ---
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }

  return '';
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? '';
}

// --- Optional callbacks ---
function addWithCallback(x: number, y: number, callback: () => void): void {
  console.log([x, y]);

  // if (callback) {
  //   callback();
  // }

  callback?.();
}
addWithCallback(1, 2, () => console.log('Hi'));
// [ 1, 2 ]
// Hi
