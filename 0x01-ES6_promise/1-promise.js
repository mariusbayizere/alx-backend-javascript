export default function getFullResponseFromAPI(success) {
  const java = {
    status: 200,
    body: 'Success',
  };
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(java);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
