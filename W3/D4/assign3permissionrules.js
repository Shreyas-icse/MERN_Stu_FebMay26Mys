const rules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "admin", action: "WRITE", allowed: true },
  { role: "student", action: "READ", allowed: true },
  { role: "student", action: "WRITE", allowed: false },
  { role: "guest", action: "READ", allowed: false }
];

// 1. Filter allowed rules
const allowedRules = rules.filter(rule => rule.allowed === true);

// 2. Create role:action pairs
const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);

// 3. Build summary using reduce
const summary = rules.reduce((acc, rule) => {
  if (!acc[rule.role]) {
    acc[rule.role] = 0;
  }
  if (rule.allowed) {
    acc[rule.role]++;
  }
  return acc;
}, {});

// 4. Print results
console.log("allowedRules:", allowedRules);
console.log("allowedPairs:", allowedPairs);
console.log("summary:", summary);