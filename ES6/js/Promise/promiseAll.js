let timeOut = () => {
  setTimeout(() => {
    console.log("setTimeout")
  }, 0)
}
let step1 = () => {
  console.log("step1 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step1");
      if (true) {
        resolve("step1 resolve");
      } else {
        reject("step1 reject");
      }
    }, 100);
  });
};
let step2 = () => {
  console.log("step2 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step2");
      if (false) {
        resolve("step2 resolve");
      } else {
        reject("step2 reject");
      }
    }, 200);
  });
};
let step3 = () => {
  console.log("step3 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step3");
      if (true) {
        resolve("step3 resolve");
      } else {
        reject("step3 reject");
      }
    }, 100);
  });
};
let step4 = () => {
  console.log("step4 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step4");
      if (true) {
        resolve("step4 resolve");
      } else {
        reject("step4 reject");
      }
    }, 100);
  });
};

const run = () => {
  // Promise.race([step1(), step2()])
  //   .then((res) => { console.log(res) })
  //   .catch((err) => { console.log(err) })

  // timeOut()
  // Promise.all([step1(), step2()])
  //   .then(
  //     (result) => {
  //       console.log(result);
  //       return step3();
  //     }
  //   )
  //   .then(() => {
  //     return Promise.all([step3(), step4()]);
  //   })
  //   .then(() => {
  //     return step4();
  //   }).catch((err) => {
  //     console.log("err", err)
  //   });
};
run();

// await
// (async () => {
//   try {
//     let res = await new Promise((res, rej) => {
//       setTimeout(() => {
//         rej("fail")
//       }, 0)
//     })
//     console.log(res)

//   } catch (err) {
//     console.log("fail", err)
//   }

// })()

console.log('Start');
setTimeout(() => {
  console.log('Timeout 1');
}, 0);


setTimeout(() => {
  console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

// console.log('End');

// function checkNum(num) {
//   return new Promise((res, rej) => {
//     num ? res("true") : rej("false")
//   })
// }

// let p = async function PromiseFn() {
//   return await checkNum(1)
// }
// console.dir(p())
