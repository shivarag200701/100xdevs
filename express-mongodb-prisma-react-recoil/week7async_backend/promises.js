// getUser()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function getUser() {
  return new Promise((resolve, reject) => {
    if (1 == 1) {
      setTimeout(() => resolve("shiva"), 5000);
    } else {
      reject("rejected");
    }
  });
}

async function callGetUser() {
  const res = await getUser();
  console.log(res);
}
callGetUser();
