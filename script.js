function getAdvice() {
  const question = document.getElementById("question").value.toLowerCase();
  const answerDiv = document.getElementById("answer");

  const legal_knowledge = {
    rent: "Under Indian law, tenants have the right to peaceful possession of the rented property. A landlord cannot evict a tenant without following proper legal procedure. A written rental agreement is strongly recommended as it clearly defines rent amount, duration, notice period, and responsibilities of both parties. Tenants are also protected against unreasonable rent increases and harassment by landlords under various Rent Control Acts.",
    rental: "Rental agreements are legally binding contracts between the landlord and the tenant. They specify important terms such as rent, security deposit, maintenance duties, duration of stay, and termination conditions. Both parties must strictly follow the agreed terms. Any violation can be challenged in a civil court. Registration of rental agreements is mandatory in many states for validity.",
    consumer: "Consumers in India are protected under the Consumer Protection Act, 2019. They have the right to safety against hazardous goods, the right to complete and truthful information, the right to choose freely, and the right to seek compensation for defective goods or poor services. Consumers can file complaints in Consumer Courts at district, state, or national levels.",
    job: "Employees are entitled to fair wages, a safe and healthy working environment, and equal opportunity at work. Indian labour laws protect employees from unfair practices such as discrimination, forced overtime, and wrongful termination. Employers must follow due process before dismissing an employee and provide notice or compensation as per law.",
    salary: "Salary must be paid on time as per the terms of employment. Non-payment or delayed payment of wages is a punishable offence under the Payment of Wages Act. Employees can file a complaint with the Labour Commissioner or approach labour courts. Employers are also required to provide salary slips and maintain transparency in deductions.",
    police: "Police officers must act according to the Constitution and criminal laws. At the time of arrest, police must inform the person of the reason for arrest and their legal rights. The arrested person must be produced before a magistrate within 24 hours. Illegal detention, custodial violence, or misuse of power is a violation of fundamental rights.",
    property: "Property disputes in India are civil matters and are resolved through civil courts. Proper legal documents such as sale deeds, title deeds, and registration records are essential to prove ownership. Property disputes may involve inheritance, boundary issues, illegal possession, or breach of agreement. Courts may grant injunctions, compensation, or possession based on evidence.",
    marriage: "Marriage laws in India provide legal rights related to maintenance, inheritance, divorce, and protection from cruelty. Spouses are entitled to financial support and legal protection against domestic violence and harassment. Marriage registration is important as it serves as legal proof. Different personal laws apply based on religion, but constitutional protections apply to all.",
    crime: "Every citizen has the right to file a First Information Report (FIR) for any cognizable offence. Police cannot refuse to register an FIR if the offence is cognizable. Victims have the right to investigation, legal assistance, and fair trial. The criminal justice system ensures punishment for offenders while protecting the rights of the accused."
  };

  let answered = false;

  for (let key in legal_knowledge) {
    if (question.includes(key)) {
      answerDiv.innerHTML =
        "<h3>✅ Legal Advice:</h3><p>" + legal_knowledge[key] + "</p>";
      answered = true;
      break;
    }
  }

  // 🔥 Guaranteed fallback
  if (!answered) {
    answerDiv.innerHTML =
      "<h3>✅ General Legal Advice:</h3><p>" +
      "According to Indian law, every citizen has the right to legal protection, " +
      "fair treatment, and access to justice. It is advised to consult a legal professional " +
      "or approach the appropriate legal authority for detailed guidance." +
      "</p>";
  }
}
