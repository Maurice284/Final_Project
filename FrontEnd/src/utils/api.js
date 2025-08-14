export function login(email, password) {
  return new Promise((resolve, reject) => {
    resolve({ email: "foo@example.com" });
  });
}

export function saveGame(details) {
  return new Promise((resolve, reject) => {
    resolve();
  });
}
