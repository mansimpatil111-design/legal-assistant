print("⚖️ AI Legal Assistant Started")
print("--------------------------------")

legal_knowledge = {
    "rent": "Under Indian law, tenants have the right to peaceful possession and written rental agreement.",
    "rental": "Rental agreements protect both landlord and tenant. Terms must be followed by both parties.",
    "consumer": "Consumers have the right to safety, information, choice, and compensation under Consumer Protection Act.",
    "job": "Employees are entitled to fair wages, safe work environment, and protection against wrongful termination.",
    "salary": "Salary must be paid on time. Non-payment is a legal offence.",
    "police": "Police must inform the reason for arrest and produce the person before a magistrate within 24 hours.",
    "property": "Property disputes are handled in civil court with proper legal documents.",
    "marriage": "Marriage laws provide rights related to maintenance, inheritance, and protection from harassment.",
    "crime": "Every citizen has the right to file an FIR for any cognizable offence."
}

question = input("Ask your legal question: ").lower()

answered = False

for key in legal_knowledge:
    if key in question:
        print("\n✅ Legal Advice:")
        print(legal_knowledge[key])
        answered = True
        break

# 🔥 GUARANTEED FALLBACK ANSWER
if not answered:
    print("\n✅ General Legal Advice:")
    print(
        "According to Indian law, every citizen has the right to legal protection, "
        "fair treatment, and access to justice. It is advised to consult a legal professional "
        "or approach the appropriate legal authority for detailed guidance."
    )

print("\n⚖️ Thank you for using AI Legal Assistant")