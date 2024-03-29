import inquirer from "inquirer";

let accountBalance = 10000;
let pin = 555555;
let userAnswer = await inquirer.prompt([
  {
    message: "Enter your pin",
    type: "number",
    name: "userPin",
  },
]);

if (pin === userAnswer.userPin) {
  let userAns = await inquirer.prompt([
    {
      message: "What do you want to do",
      name: "userChoice",
      type: "list",
      choices: ["Check Balance", "Withdraw", "Fast Cash"],
    },
  ]);
  if (userAns.userChoice === "Check Balance") {
    console.log("Your account balance is " + accountBalance);
  } else if (userAns.userChoice === "Withdraw") {
    let withdraw = await inquirer.prompt([
      {
        message: "Enter Amount you want to withdraw",
        type: "number",
        name: "userWithdraw",
      },
    ]);
    if (accountBalance >= withdraw.userWithdraw) {
      accountBalance -= withdraw.userWithdraw;
      console.log("Amount withdrawn");

      console.log(`Your account balance is ${accountBalance}`);
    } else {
      console.log("Insufficient balance");
    }
  } else if (userAns.userChoice === "Fast Cash") {
    let fastCash = await inquirer.prompt({
      message : "Select amount you want to withdraw",
      name: "userFastCash",
      type: "list",
       choices : ["1000","5000" , "10000", "15000","20000"]
    })
     if (accountBalance >= fastCash.userFastCash) {
      accountBalance -= fastCash.userFastCash;
      console.log("Amount withdrawn");
      console.log(`Your account balance is ${accountBalance}`);
    } else {
      console.log("Insufficient balance");
    }

  }
} else {
  console.log("Wrong pin");
}
